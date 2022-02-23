# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name' : 'Forum Example for Phase 3',
    'version' : '1.1',
    'summary': 'Forum and Questions',
    'sequence': 10,
    'description': "",
    'category': 'Tools',
    'depends' : ['base_setup'],
    'data': [
        'security/ir.model.access.csv',
        'views/forum_views.xml',
        'views/post_views.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
