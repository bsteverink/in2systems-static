import React from 'react';

import Navbar from './navbar';

import './hero.scss';

class Hero extends React.Component {

    render() {
        return (
            <section className="hero is-large has-bg-img">
                <div className="hero-head">
                    <Navbar />
                </div>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-size-1 is-family-secondary is-spaced">
                            We help <strong>make information technology work</strong> for modern businesses.
                        </h1>
                        <h2 className="subtitle is-uppercase is-family-secondary">
                            Cost effective, expandable, composable micro software applications
                        </h2>
                    </div>
                </div>
                <div className="hero-foot">
                </div>                
            </section>            
        )
    }
}

export default Hero;