import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';
import '../../static/css/common.less';

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="clear-fix">
                <div className="float-left">
                    <span>{this.props.cityName}</span>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="float-right">
                    <i className="icon-user"></i>
                </div>
                <div>
                    <i className="icon-search"></i>
                    <input /></div>
            </div>
        );
    }
}

export default HomeHeader;