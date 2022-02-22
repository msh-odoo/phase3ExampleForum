import { rpc } from "../../core/rpc.js";
import { ForumItem } from "../../components/forum_item/forumItem.js";

const { Component, onWillStart } = owl;

export class ForumList extends Component {
    setup() {
        onWillStart(async () => {
            const datas = await rpc("/get_forums", {});
            this.forums = JSON.parse(datas).forums;
        });
    }
}

ForumList.template = "ForumList";
ForumList.components = { ForumItem };
