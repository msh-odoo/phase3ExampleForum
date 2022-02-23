import xmlrpc.client

class OdooXmlrpc(object):
    def __init__(self, host, db):
        self.host = host
        self.db = db

    def login(self, username, password):
        common = xmlrpc.client.ServerProxy('%s/xmlrpc/2/common'%(self.host))
        uid = common.authenticate(self.db, username, password, {})
        self.uid = uid
        self.password = password
        self.models = xmlrpc.client.ServerProxy('%s/xmlrpc/2/object'%(self.host))

    def search(self, model, domain):
        return self.models.execute_kw(self.db, self.uid, self.password, model, 'search', [domain])

    def search_read(self, model, domain, fields):
        return self.models.execute_kw(self.db, self.uid, self.password, model, 'search_read', [domain, fields])