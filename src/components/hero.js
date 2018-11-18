import React from 'react';
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './navbar';

import { FaArrowCircleRight } from 'react-icons/fa';

import './hero.scss';

const Hero = () => (
    <StaticQuery
        query={graphql`
            query {
            file(relativePath: { eq: "lycs-lycs-744215-unsplash.jpg" }) {
                childImageSharp {
                    fluid (maxWidth: 700, grayscale: true) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            }
        `}
        render={data => (
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
                        
                        <a className="button is-warning is-medium call-for-action is-radiusless">
                            <span>Learn more about Microns</span>
                            <span className="icon"><FaArrowCircleRight /></span>
                        </a>
                    </div>
                </div>
                <div className="hero-foot"></div>           
                <Img fluid ={data.file.childImageSharp.fluid} style={{
                    zIndex: 1,
                    overflow: "hidden",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                }} />     
            </section>            
        )
    }
    />
)

export default Hero;