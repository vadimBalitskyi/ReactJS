import React, { Component } from 'react';

import myFace from '../images/avatar.jpeg'

const goals = 'I want to become a strong developer of the interface in interesting projects.',
      dreams = 'My favorite dream is travel, I want see other countries, their cultures, and discover something new for myself.'


class About extends Component {
    render() {
        return  (
            <div className="about">
                <div className="container">
                    <h3 className="thirdTitle">about</h3>
                    <div className="blockAbout">
                        <div className="goals paragraphAbout">
                            <h4 className="titleFourthAboute titleGoals">Goals</h4>
                            <p className="goalsParagraph">{ goals }</p>
                        </div>
                        <div className="wrapMyFace">
                            <div className="myFace"></div>
                            
                        </div>
                        <div className="dreams paragraphAbout">
                            <h4 className="titleFourthAboute titleDreams">Dreams</h4>
                            <p className="dreamsParagraph">{ dreams }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
