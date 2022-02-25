import { rpc } from "../core/rpc.js";
import { Header } from "../components/header/header.js";
import { ForumList } from "../components/forum_list/forumList.js";
import { PostList } from "../components/post_list/postList.js";
import { AddPost } from "../components/add_post/add_post.js";

const { Component, EventBus, mount, useState, useSubEnv, useChildSubEnv, useExternalListener, useRef, whenReady } = owl;

// Done: t-component
// Done: t-slot
// Done: useSubEnv, useChildSubEnv, useExternalListener
// Done: EventBus
// Done: Environment
// Done: t-model


// Wishlist
// =========
// TODO: Other hooks like: useComponent, useEnv, useEffect
// TODO: Context
// TODO: Portal

export class Content extends Component {

}

Content.template = "Content";
Content.components = { ForumList, PostList, AddPost };


class Forum extends Component {
    setup() {
        this.allComponents = { 'forumList': ForumList, 'postList': PostList, 'addPost': AddPost };
        const currentComp = this.allComponents['forumList'];
        this.state = useState({ currentScreen: currentComp, params: {}});
        this.searchInput = useRef('searchInput');
        // useExternalListener(window, 'click', this._onClickWindow);
        // useSubEnv({ state: this.state, allComponents: this.allComponents });
        useSubEnv({ refreshForum: true });
        useChildSubEnv({ myFlag: true });
        this.env.bus.addEventListener('change-screen', this._onChangeScreen.bind(this));
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
    _onNewPost() {
        this.env.bus.trigger('change-screen', { screenName: 'addPost'});
    }
}

Forum.template = "Forum";
Forum.components = { Header, Content };


async function setup() {
    const templates = await rpc("/load-qweb", {});
    // const templateFetch = await fetch("static/app/app.xml");
    // const templates = await templateFetch.text();
    const bus = new EventBus();
    const env = { bus };
    mount(Forum, document.body, { templates, env });
}

whenReady(setup);
