import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class LoginComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            phone: ''
        }
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="Enter mobile number"
                        onChange={this.changeHandle.bind(this)}
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>Send code</button>
                    <input type="text" placeholder="Enter code"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>Login</button>
            </div>
        );
    }

    changeHandle(e) {
        this.setState({
            phone: e.target.value
        });
    }

    clickHandle() {
        const username = this.state.phone;
        const loginHandle = this.props.loginHandle;
        loginHandle(username);
    }

}

export default LoginComponent;