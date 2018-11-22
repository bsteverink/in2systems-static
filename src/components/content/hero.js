import React from 'react';
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../navbar';

import { FaArrowCircleRight } from 'react-icons/fa';

import './hero.scss';

const Hero = () => {
    return (
        <section className="hero is-medium has-bg-img">
            <div className="hero-head">
                <Navbar />
            </div>
            <div className="hero-body">
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <h1 className="title is-size-1 is-family-secondary is-spaced has-text-white">
                        We help <strong>make information technology work for all</strong> modern businesses.
                    </h1>
                    <h2 className="subtitle is-uppercase is-family-secondary has-text-white">
                        Cost effective, expandable, composable micro software applications
                    </h2>
                    <br />
                    
                    <a className="button is-warning is-medium call-for-action is-radiusless" href="#microns">
                        <span>Learn more about Microns</span>
                        <span className="icon"><FaArrowCircleRight /></span>
                    </a>
                </div>
            </div>
            <div className="hero-foot"></div>           
        </section>            
    )
};

export default Hero;