import React, { Fragment } from 'react';
import background from '../img/image1.jpg';
import Technolgies from './Technologies';

const HomePage = () => {

        return (
            <Fragment>
                <section className="hero">
                    <img className="background-image" src={background} alt="coding" />
                    <div className="hero-content-area">
                        <h1>Matt Cook</h1>
                        <h3>Full Stack JavaScript Developer</h3>
                    </div>
                </section>
                <Technolgies />
            </Fragment>
        )
    }

export default HomePage;