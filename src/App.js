import React, { Component } from 'react';
import Header from './components/Header.js'
import About from './components/About.js'
import Skills from './components/Skill.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Skills />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default App;
