import React from 'react';
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'

import { FaBusinessTime, FaWrench, FaPuzzlePiece } from 'react-icons/fa';

import Card from '../cards/card';

const Microns = () => (
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
        render = {data => (
            <section id="microns" className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="level">
                                <div className="level-item has-text-centered">
                                    <FaBusinessTime size={120} color={'grey'}/>
                                </div>
                            </div>
                            
                            <br />
                            <h1 className="is-size-3">Quick</h1>
                            <p>
                                Microns can be developed quickly (days rather than weeks)
                                and so are ready to be put to work before you know it. Being 
                                able to see a Micron in action quickly also means it can be 
                                improved quickly.
                            </p>
                        </div>
                        <div className="column">
                        <div className="level">
                                <div className="level-item has-text-centered">
                                    <FaWrench size={120} color={'grey'} />
                                </div>
                            </div>
                            
                            <br />
                            <h1 className="is-size-3">Easy to maintain</h1>
                            <p>
                                Because they are so small, changes in the code can be tested
                                and deployed within minutes. Its functionality can be further refined 
                                and fine tuned when you are already using it in your organisation.
                            </p>                          
                        </div>
                        <div className="column">
                            <div className="level">
                                <div className="level-item has-text-centered">
                                    <FaPuzzlePiece size={120} color={'grey'}/>
                                </div>
                            </div>
                            
                            <br />
                            <h1 className="is-size-3">Composable</h1>
                            <p>
                                One Micron might be just what you need but if you need more functionality
                                you can combine several microns into one bigger application. This gives you
                                all the flexibility to start small and grow together with your business.  
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )}
    />
)

export default Microns;