import React from 'react';

import Contact from './content/contact'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container has-text-white">
                    <div className="columns">
                        <div className="column">
                            <Contact />
                        </div>
                        <div className="column has-text-left">                
                            <p>
                                Microns by <a href="http://in2systems.nl">IN2SYSTEMS</a>
                            </p>
                        </div>
                    </div>
                    <div className="content has-text-centered">
                        <p className="is-size-7">
                            © 2018 IN2SYSTEMS, All Rights Reserved
                        </p>  
                    </div>
                </div>
   
            </footer>
        )
    }
}

export default Footer;