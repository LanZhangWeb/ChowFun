import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.isStore
                            ? <button onClick={this.storeClickHandle.bind(this)}>Collected</button>
                            : <button onClick={this.storeClickHandle.bind(this)}>Collect</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}>Buy</button>
                </div>
            </div>
        );
    }

    storeClickHandle() {
        this.props.storeHandle();
    }

    buyClickHandle() {
        this.props.buyHandle();
    }
}

export default BuyAndStore;