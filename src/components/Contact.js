import React, { Component } from 'react';
import InfoContact          from './InfoContact.js'

export const listInfo = [
    {
        title: 'Phone number:',
        data: '+380 99 146-58-42'
    },
    {
        title: 'Email:',
        data: 'vadym.balitskyi@gmail.com'
    }
];

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submitted. Email value is', this.state.email);
    }

    handleEmailChange(event) {
        console.log('email was changed', event.target.value);
        this.setState({email: event.target.value});
    }

    render() {
        return  (
            <div className="contact">
                <div className="container">
                    <h3 className="thirdTitle">contact</h3>
                    <div className="wrapContainer">
                        <div className="blockContact">
                            <InfoContact items={listInfo}/>
                        </div>
                        <form onSubmit={this.handleSubmit} method="post" className="inputContact">
                            <input
                                type="text"
                                className="input"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                            <textarea
                                className="input textarea"
                                rows="4"
                                cols="50"
                                placeholder="Send a message"
                            />
                            <button className="btn">send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
