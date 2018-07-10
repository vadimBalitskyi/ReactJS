import React, { Component } from 'react';

import Menu from './Menu.js'

const listMenu = [
    {link: 'Home'},
    {link: 'About'},
    {link: 'Skills'},
    {link: 'Contact'}
];

class Header extends Component {
    render() {
        return  (
            <div className="wrapHeader">
                <div className="itemHeader container">
                    <div className="logo"></div>
                    <Menu items={listMenu}/>
                </div>
                <h1 className="firstTitle">VADYM BALITSKYI</h1>
                <h3 className="thirdTitleHeader">front-end developer</h3>
            </div>
        );


    }
}

export default Header;
