import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';
import Info from './subpage/info.jsx';
import Comment from './subpage/comment.jsx';

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const id = this.props.params.id;

        return (
            <div>
                <Header title="Details"/>
                <Info id={id}/>
                <Comment id={id}/>
            </div>
        );
    }
}

export default Detail;