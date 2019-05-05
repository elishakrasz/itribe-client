import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const pashtunChildren = "../../Pashtun/children.jpg"
const theologicalInst = "../../ext.jpg"
const land = "../../land.jpg"
const shinto = "../../Shinto/IMG_1833.JPG"
const outback = "../../Pashtun/Pashtun copy.jpg"
 
export default class PageBreak extends Component {
    render() {
        return (
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                dynamicHeight={true}
                style={{
                    height: '300px'
                }}
            >
                <div>
                    <img src={pashtunChildren} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={shinto} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={land} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={outback} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 