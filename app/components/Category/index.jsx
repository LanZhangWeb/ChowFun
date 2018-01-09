import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router';
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
                            <Link to="/search/travel"><li className="float-left travel">Travel</li></Link>
                            <Link to="/search/ktv"><li className="float-left ktv">KTV</li></Link>
                            <Link to="/search/shooping"><li className="float-left shopping">Shopping</li></Link>
                            <Link to="/search/life"><li className="float-left lifeservices">Life</li></Link>
                            <Link to="/search/fitness"><li className="float-left fitness">Fitness</li></Link>
                            <Link to="/search/hair"><li className="float-left hairdressing">Hair</li></Link>
                            <Link to="/search/nursery"><li className="float-left nursery">Nursery</li></Link>
                            <Link to="/search/fastfood"><li className="float-left fastfood">Fast food</li></Link>
                            <Link to="/search/buffet"><li className="float-left buffet">Buffet</li></Link>
                            <Link to="/search/pub"><li className="float-left pub">Pub</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/finefood"><li className="float-left finefood">Fine food</li></Link>
                            <Link to="/search/cinema"><li className="float-left cinema">Cinema</li></Link>
                            <Link to="/search/hotel"><li className="float-left hotel">Hotel</li></Link>
                            <Link to="/search/entertain"><li className="float-left entertainment">Entertain</li></Link>
                            <Link to="/search/takeout"><li className="float-left takeout">Take out</li></Link>
                            <Link to="/search/hotpot"><li className="float-left hotpot">Hot pot</li></Link>
                            <Link to="/search/beauty"><li className="float-left beauty">Beauty</li></Link>
                            <Link to="/search/resort"><li className="float-left resort">Resort</li></Link>
                            <Link to="/search/massage"><li className="float-left massage">Massage</li></Link>
                            <Link to="/search/hiking"><li className="float-left hiking">Hiking</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/sushi"><li className="float-left sushi">Sushi</li></Link>
                            <Link to="/search/spa"><li className="float-left spa">SPA</li></Link>
                            <Link to="/search/wedding"><li className="float-left wedding">Wedding</li></Link>
                            <Link to="/search/training"><li className="float-left training">Training</li></Link>
                            <Link to="/search/bake"><li className="float-left bake">Bake</li></Link>
                            <Link to="/search/ticket"><li className="float-left ticket">Ticket</li></Link>
                            <Link to="/search/bbq"><li className="float-left BBQ">BBQ</li></Link>
                            <Link to="/search/decoration"><li className="float-left decoration">Decoration</li></Link>
                            <Link to="/search/pet"><li className="float-left pet">Pet</li></Link>
                            <Link to="/search/all"><li className="float-left all">All</li></Link>
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