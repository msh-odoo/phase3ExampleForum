import { rpc } from "../../core/rpc.js";
import { ForumItem } from "../../components/forum_item/forumItem.js";

const { Component, onWillStart, useChildSubEnv, useSubEnv } = owl;

export class ForumList extends Component {
    setup() {
        // useChildSubEnv({ forums: true });
        // useSubEnv({ forums: true });
        onWillStart(async () => {
            this.forums = await rpc("/get_forums", {});
        });
    }
}

ForumList.template = "ForumList";
ForumList.components = { ForumItem };
ForumList._name = "Forum List";
