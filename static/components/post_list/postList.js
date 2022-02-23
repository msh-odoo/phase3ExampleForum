import { rpc } from "../../core/rpc.js";

const { Component, onWillStart } = owl;

export class PostList extends Component {
    setup() {
        this.params = this.props.params;
        onWillStart(async () => {
            this.datas = await rpc('/get_posts', { forum_id: this.params.forumID });
        });
    }
}

PostList.template = "PostList";
// PostList.props = {
//     params: {type: Object},
// };
