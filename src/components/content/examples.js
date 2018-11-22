import React from 'react';
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'

import {FaArrowCircleRight} from 'react-icons/fa'

const Examples = () => (
    <StaticQuery
        query={graphql`
            query {
                robot: file(relativePath: { eq: "robot.png" }) {
                    childImageSharp {
                        fluid (maxHeight: 600, grayscale: true) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                },
                report: file(relativePath: { eq: "report.png" }) {
                    childImageSharp {
                        fluid (maxHeight: 600, grayscale: true) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                },
                conversion: file(relativePath: { eq: "conversion.png" }) {
                    childImageSharp {
                        fluid (maxHeight: 300, grayscale: true) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                },
                dash: file(relativePath: { eq: "dash.png" }) {
                    childImageSharp {
                        fluid (maxHeight: 800, grayscale: true) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                },
                integration: file(relativePath: { eq: "integrations.png" }) {
                    childImageSharp {
                        fluid (maxHeight: 400, grayscale: true) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }                                      
                                           
            }
        `}
        render = {data => (
            <section id="examples" className="section">
                <div className="container">
                    <h1 className="is-size-3">Examples</h1>
                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-4 is-vertical">
                            <div className="tile card is-child">
                                <div className="card-image">
                                    <Img fluid={data.robot.childImageSharp.fluid} style={{ 'height': '12rem'}} />
                                </div>                            
                                <div className="card-content">
                                    <h1 className="title is-size-5">Web scraping</h1>
                                    <p>Periodically check a web source for changes and get notified.</p>
                                    <p className="extra-margin-top is-on-bottom">
                                        <a className="button is-info is-radiusless" href="#">
                                            <span>See in action</span>
                                            <span className="icon"><FaArrowCircleRight /></span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="tile card is-child">
                                <div className="card-image">
                                    <Img fluid={data.report.childImageSharp.fluid} style={{ 'height': '12rem'}} />
                                </div>                            
                                <div className="card-content">
                                    <h1 className="title is-size-5">Reporting</h1>
                                    <p>Create a report based on a set of data in a database at regular intervals.</p>
                                    <p className="extra-margin-top is-on-bottom">
                                        <a className="button is-info is-radiusless" href="#">
                                            <span>See in action</span>
                                            <span className="icon"><FaArrowCircleRight /></span>
                                        </a>
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                        <div className="tile">
                            <div className="tile is-parent">
                                <div className="tile is-child card">
                                    <div className="card-image">
                                        <Img fluid={data.conversion.childImageSharp.fluid} style={{ 'height': '12rem'}} />
                                    </div>                            
                                    <div className="card-content">
                                        <h1 className="title is-size-5">Data conversion & imports</h1>
                                        <p>Convert and import an excel sheet in a third party software.</p>
                                        <p className="extra-margin-top is-on-bottom">
                                            <a className="button is-info is-radiusless" href="#">
                                                <span>See in action</span>
                                                <span className="icon"><FaArrowCircleRight /></span>
                                            </a>
                                        </p>                                        
                                    </div>
                                </div>
                            </div>
                            <div className="tile is-parent is-vertical">
                                <div className="tile is-child card">
                                    <div className="card-image">
                                        <Img fluid={data.dash.childImageSharp.fluid} style={{ 'height': '12rem'}} />
                                    </div>                            
                                    <div className="card-content">
                                        <h1 className="title is-size-5">Dashboards</h1>
                                        <p>View key performance indicators in real-time in any location.</p>
                                        <p className="extra-margin-top is-on-bottom">
                                            <a className="button is-info is-radiusless" href="#">
                                                <span>See in action</span>
                                                <span className="icon"><FaArrowCircleRight /></span>
                                            </a>
                                        </p>                                        
                                    </div>
                                </div>
                                <div className="tile is-child card">
                                    <div className="card-image">
                                        <Img fluid={data.integration.childImageSharp.fluid} style={{ 'height': '12rem'}} />
                                    </div>                            
                                    <div className="card-content">
                                        <h1 className="title is-size-5">Integrate applications</h1>
                                        <p>Connect existing applications in order to exchange data.</p>
                                        <p className="extra-margin-top is-on-bottom">
                                            <a className="button is-info is-radiusless" href="#">
                                                <span>See in action</span>
                                                <span className="icon"><FaArrowCircleRight /></span>
                                            </a>
                                        </p>                                        
                                    </div>
                                </div>                                
                            </div>                               
                        </div>                 
                    </div>                    
                </div>
            </section>
        )}
    />
)

export default Examples;