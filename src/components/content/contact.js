import React from 'react';

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="title is-family-secondary has-text-white is-size-4">Contact us</h1>
        
            <form action="https://formspree.io/bart@in2systems.nl" method="POST">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="" name="name" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="" name="email" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Subject</label>
                    <div className="control">
                        <div className="select">
                        <select name="subject">
                            <option>Select subject</option>
                            <option>Tell me more about Microns</option>
                            <option>I have a question</option>
                            <option>Send me a quote</option>
                            <option>Contact me</option>
                            <option>Something else</option>
                        </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="" name="message"></textarea>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;