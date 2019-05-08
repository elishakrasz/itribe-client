import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const pashtunChildren = "../../Pashtun/children.jpg"
const land = "../../land.jpg"
const shinto = "../../Shinto/shinto.jpg"
const outback = "../../Pashtun/testpash_update.jpg"
const igbo = "../../Igbo/Igbo Community of HaShem.jpg"

 
export default class CarouselTest extends Component {
    render() {
        return (
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                dynamicHeight={true}
            >
                <div
                     style={{
                        height: '100%'
                    }}>
                >
                    <img style={{
                        maxHeight: '450px'
                    }} src={pashtunChildren} alt="pashtun Children"/>
                    <p className="legend">Children of Pashtun</p>
                </div>
                <div
                     style={{
                        height: '100%'
                    }}>
                >
                    <img style={{
                        height: '450px'
                    }} src={igbo} alt="Igbo Temple"/>
                    <p className="legend">Igbo Community of Hashem</p>
                </div>
                <div
                     style={{
                        height: '100%'
                    }}>
                >
                    <img style={{
                        maxHeight: '450px'
                    }} src={shinto} alt="shinto"/>
                    <p className="legend">Shinto</p>
                </div>
                <div
                     style={{
                        height: '100%'
                    }}>
                >
                    <img style={{
                        maxHeight: '450px'
                    }} src={land} alt="The Land of Israel"/>
                    <p className="legend">The Land of Israel</p>
                </div>
                <div
                     style={{
                        height: '100%'
                    }}>
                >
                    <img style={{
                        maxHeight: '450px'
                    }} src={outback} alt="shinto"/>
                    <p className="legend">Outback</p>
                </div>
            </Carousel>
        );
    }
};
 