const { Component } = owl;

export class Header extends Component {
    _onNewPost(ev) {
        debugger;
        this.env.bus.trigger('change-screen');
    }
}

Header.template = "Header";
