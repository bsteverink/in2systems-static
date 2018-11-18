import React from 'react';
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'

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
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <Img fluid ={data.file.childImageSharp.fluid} />
                            <br />
                            <h2 className="title">Microns</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                Aenean commodo ligula eget dolor. Aenean massa. 
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                                Nulla consequat massa quis enim.
                            </p>
                        </div>
                        <div className="column">
                            <Img fluid ={data.file.childImageSharp.fluid} />
                            <br />
                            <h2 className="title">Microns</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                Aenean commodo ligula eget dolor. Aenean massa. 
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                                Nulla consequat massa quis enim.
                            </p>                            
                        </div>
                        <div className="column">
                            <Img fluid ={data.file.childImageSharp.fluid} />
                            <br />
                            <h2 className="title">Microns</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                Aenean commodo ligula eget dolor. Aenean massa. 
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                                Nulla consequat massa quis enim.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )}
    />
)

export default Microns;