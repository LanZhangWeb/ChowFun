import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getCommentData } from '../../../fetch/detail/detail';
import './style.less';
import ListComponent from '../../../components/CommentList';
import LoadMore from '../../../components/LoadMore';

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        }
    }
    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>User comments</h2>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
                        : <div>Loading</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        )
    }
    componentDidMount() {
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        const id = this.props.id;
        const result = getCommentData(0, id);
        this.resultHandle(result);
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });

        const id = this.props.id;
        const page = this.state.page;
        const result = getCommentData(page, id);
        this.resultHandle(result);

        this.setState({
            page: page + 1,
            isLoadingMore: false
        });
    }

    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            });
        }).catch(ex => {
            if (__DEV__) {
                console.error('User comments error, ', ex.message)
            }
        })
    }
}

export default Comment;