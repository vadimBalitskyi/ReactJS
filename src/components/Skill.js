import React, { Component } from 'react';

import InfoSkill from './InfoSkill.js'

const listSkill = [
    {
        title: 'HTML5',
        data: ''
    },
    {
        title: 'CSS3',
        data: ''
    },
    {
        title: 'JavaScript',
        data: ''
    },
    {
        title: 'ReactJS',
        data: ''
    },
    {
        title: 'VueJS',
        data: ''
    }
];

class Skill extends Component {
    render() {
        return  (
            <div className="skills">
                <div className="container">
                    <h3 className="thirdTitle">skills</h3>
                    <div className="blockSkill">
                        <InfoSkill skills={listSkill}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;
