const { Component, markup, useRef } = owl;

export class ForumItem extends Component {
    setup() {
        this.forumRef = useRef('forum');
    }

    // ---------------------------------------
    // Getters
    // ---------------------------------------

    get getMarkupValue() {
        return markup(this.props.forumItem.description);
    }

    // ---------------------------------------
    // Handlers
    // ---------------------------------------

    /**
     * This method redirects to forum details page.
     *
     * @param {DOMEvent} ev 
     */
    _onClickForum(ev) {
        const forumID = ev.currentTarget.getAttribute('data-id');
        const changeScreenEvent = new CustomEvent('change-screen', { bubbles: true, detail: { screenName: 'postList', params: { forumID: parseInt(forumID) } }}, );
        this.forumRef.el.dispatchEvent(changeScreenEvent);
    }
}

ForumItem.template = "ForumItem";
