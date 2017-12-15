import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from '../Actions/userinfo';

import localStore from '../util/localStore';
import { CITYNAME } from '../config/localSotreKey';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>Loading...</div>
                }
            </div>
        );
    }

    componentDidMount() {
        let cityName = localStore.getItem(CITYNAME);

        if (cityName == null) {
            cityName = 'Toronto';
        }

        this.props.userInfoActions.update({
                cityName: cityName
            }
        );

        this.setState({
            initDone: true
        });
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);