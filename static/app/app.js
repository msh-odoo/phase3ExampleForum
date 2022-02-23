import { rpc } from "../core/rpc.js";
import { Header } from "../components/header/header.js";
import { ForumList } from "../components/forum_list/forumList.js";
import { PostList } from "../components/post_list/postList.js";

const { Component, mount, useState, whenReady } = owl;

class Forum extends Component {
    setup() {
        this.state = useState({currentScreen: 'forumList', params: {}});
    }

    // ---------------------------------------
    // Handlers
    // ---------------------------------------

    /**
     * Changes current screen to given screen name.
     *
     * @param {DOMEvent} ev 
     */
    _onChangeScreen(ev) {
        const screenName = ev.detail.screenName;
        const params = ev.detail.params;
        this.state.currentScreen = screenName;
        this.state.params = params;
    }
}

Forum.template = "Forum";
Forum.components = { Header, ForumList, PostList };

async function setup() {
    const templates = await rpc("/load-qweb", {});
    // const templateFetch = await fetch("static/app/app.xml");
    // const templates = await templateFetch.text();
    const env = {};
    mount(Forum, document.body, { templates, env });
}

whenReady(setup);
