import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>Cities</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Toronto')}>Toronto</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'NorthYork')}>North York</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Mississagua')}>Mississagua</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Burlington')}>Burlington</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Oakville')}>Oakville</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Markham')}>Markham</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Vaughan')}>Vaughan</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Scarborough')}>Scarborough</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Brampton')}>Brampton</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Newmarket')}>Newmarket</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Milton')}>Milton</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Ajax')}>Ajax</span>
                    </li>
                </ul>
            </div>
        );
    }

    clickHandle(cityName) {
        const changeFn = this.props.changeFn;
        changeFn(cityName);
    }
}

export default CityList;