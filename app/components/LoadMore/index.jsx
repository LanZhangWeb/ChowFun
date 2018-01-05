import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="load-more">
                {
                    this.props.isLoadingMore
                        ? <span>Loading</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>Load More</span>
                }
            </div>
        );
    }

    loadMoreHandle() {
        this.props.loadMoreFn();
    }
}

export default LoadMore;