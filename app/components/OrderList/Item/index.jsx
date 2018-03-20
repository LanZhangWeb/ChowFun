import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { postComment } from '../../../fetch/user/orderlist.js';

import './style.less';

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 2
        }
    }
    render() {
        const data = this.props.data;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img}/>
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0
                            ? <button className="btn" onClick={this.showComment.bind(this)}>Review</button>
                            :
                            this.state.commentState === 1
                                ? ''
                                : <button className="btn unseleted-btn">Reviewed</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>Title：{data.title}</span>
                    <span>Amount：{data.count}</span>
                    <span>Price：${data.price}</span>
                </div>

                {
                    this.state.commentState === 1
                        ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                        <button className="btn" onClick={this.submitComment.bind(this)}>Submit</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>Cancel</button>
                    </div>
                        : ''
                }
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        });
    }
    showComment() {
        this.setState({
            commentState: 1
        });
    }

    submitComment() {
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const commentText = this.refs.commentText;
        const value = commentText.value.trim();
        if (!value) {
            return;
        }

        submitComment(id, value, this.commentOk.bind(this));
    }
    commentOk() {
        this.setState({
            commentState: 2
        });
    }

    hideComment() {
        this.setState({
            commentState: 0
        });
    }
}

export default Item;