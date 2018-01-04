import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getListData } from '../../../fetch/home/home';
import ListComponent from '../../../components/List';
import './style.less';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false
        }
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">Recommendations</h2>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
                        : <div>Loading...</div>
                }
            </div>
        );
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        this.resultHandle(result);
    }

    resultHandle(result) {
        result.then(res => {
            return res.json();
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                data: data,
                hasMore: hasMore
            })
        });
    }
}

export default List;