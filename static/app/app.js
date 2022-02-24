import { rpc } from "../core/rpc.js";
import { Header } from "../components/header/header.js";
import { ForumList } from "../components/forum_list/forumList.js";
import { PostList } from "../components/post_list/postList.js";

const { Component, mount, useState, useSubEnv, useExternalListener, useRef, whenReady } = owl;

// Done: t-component
// Done: t-slot
// DOne: useSubEnv, useExternalListener

// TODO: useChildSubEnv
// TODO: t-model
// TODO: Environment
// TODO: useSubEnv, useChildSubEnv, useExternalListener

// Wishlist
// =========
// TODO: Other hooks like: useComponent, useEnv, useEffect
// TODO: Context
// TODO: Portal

export class Content extends Component {

}

Content.template = "Content";
Content.components = { ForumList, PostList };


class Forum extends Component {
    setup() {
        this.allComponents = { 'forumList': ForumList, 'postList': PostList };
        const currentComp = this.allComponents['forumList'];
        this.state = useState({ currentScreen: currentComp, params: {}});
        this.searchInput = useRef('searchInput');
        useExternalListener(window, 'click', this._onClickWindow);
        // useSubEnv({ state: this.state, allComponents: this.allComponents });
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
        const currentComp = this.allComponents[screenName];
        this.state.currentScreen = currentComp;
        this.state.params = params;
    }
    _onClickWindow(ev) {
        this.searchInput.el.focus();
    }
}

Forum.template = "Forum";
Forum.components = { Header, Content };


async function setup() {
    const templates = await rpc("/load-qweb", {});
    // const templateFetch = await fetch("static/app/app.xml");
    // const templates = await templateFetch.text();
    const env = {};
    mount(Forum, document.body, { templates, env });
}

whenReady(setup);
