from odoo import _, api, fields, models

class Forum(models.Model):
    _name = "forum.forum"
    _inherit = ['image.mixin']

    name = fields.Char()
    description = fields.Html()
    post_ids = fields.One2many('forum.post', 'forum_id')
    state = fields.Selection([('publish', 'Publish'), ('unpublish', 'Unpublish')])
    active = fields.Boolean(default=True)
    price = fields.Integer()

    def action_publish(self):
        pass

    def action_unpublish(self):
        pass


class ForumPost(models.Model):
    _name = "forum.post"

    name = fields.Char()
    forum_id = fields.Many2one('forum.forum')
    author_id = fields.Many2one('res.users')
    avatar_512 = fields.Image(related="author_id.avatar_512", string="Avatar 512")
    answer_ids = fields.One2many('post.answer', 'post_id')
    active = fields.Boolean(default=True)


class PostAnswer(models.Model):
    _name = "post.answer"

    name = fields.Char()
    post_id = fields.Many2one('forum.post')
    answer = fields.Text()
    author_id = fields.Many2one('res.users')
    active = fields.Boolean(default=True)
