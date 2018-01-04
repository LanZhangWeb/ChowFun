import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import './style.less';

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    render() {
        const opt = {
            speed: 400,
            auto: 3000,
            callback: index => {
                this.setState({index: index});
            }
        };

        return (
            <div id="home-category">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left travel">Travel</li>
                            <li className="float-left ktv">KTV</li>
                            <li className="float-left shopping">Shopping</li>
                            <li className="float-left lifeservices">Life</li>
                            <li className="float-left fitness">Fitness</li>
                            <li className="float-left hairdressing">Hair</li>
                            <li className="float-left nursery">Nursery</li>
                            <li className="float-left fastfood">Fast food</li>
                            <li className="float-left buffet">Buffet</li>
                            <li className="float-left pub">Pub</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left finefood">Fine food</li>
                            <li className="float-left cinema">Cinema</li>
                            <li className="float-left hotel">Hotel</li>
                            <li className="float-left entertainment">Entertain</li>
                            <li className="float-left takeout">Take out</li>
                            <li className="float-left hotpot">Hot pot</li>
                            <li className="float-left beauty">Beauty</li>
                            <li className="float-left resort">Resort</li>
                            <li className="float-left massage">Massage</li>
                            <li className="float-left hiking">Hiking</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left sushi">Sushi</li>
                            <li className="float-left spa">SPA</li>
                            <li className="float-left wedding">Wedding</li>
                            <li className="float-left training">Training</li>
                            <li className="float-left bake">Bake</li>
                            <li className="float-left ticket">Ticket</li>
                            <li className="float-left BBQ">BBQ</li>
                            <li className="float-left decoration">Decoration</li>
                            <li className="float-left pet">Pet</li>
                            <li className="float-left all">All</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Category;