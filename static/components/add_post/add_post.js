const { Component, useState } = owl;

export class AddPost extends Component {
    setup() {
        this.values = useState({ name: '', details: '', state: 'draft'});
    }
    _onSavePost(ev) {
        debugger;
    }
}
AddPost.template = "AddPost";
