import React, { Component } from 'react';
import InfoFooter from './InfoFooter.js'

class Footer extends Component {
    render() {
        return  (
            <div className="footer">
                <div className="container">
                    <div className="itemFooter">
                        <InfoFooter/>
                        <div className="logo logoFooter"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
