import React from 'react';
import './css/About.css';


import {Link} from 'react-router-dom';

function About() {
    return (
        <div className="about">
        
        <div className="about__section">
        <div className="about__sectionImage">
            <img src={require('../profile.jpeg')} alt="my photo"/>
        </div>
        <div className="about__sectionDescription">
        <h2>Yelyzaveta Huivan</h2>
            <p>
            I'm a web developer from Ukraine, graduated in 2018 as a software engineer. I enjoy building web apps, exploring and learning new things and I love that feeling when it works. </p><p> Want to know how can I help your project? Check out my project <Link to="/projects">portfolio</Link>  and <Link to="/yelyzaveta_huivan_curriculum.pdf" target="_blank" download>download curriculum</Link>.
            </p>
            <p>You can talk to me in English, Spanish, Russian, Ukrainian or javascript (but I prefer human languages). <Link to="/contact"> Message me  </Link> </p>
        </div>
            
        </div>
        <div className="about__section">
        
            <div className="about__skills">
            <h2>My skills</h2>
            <div className="about__skillsContainer">
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/160px-Unofficial_JavaScript_logo_2.svg.png" alt=""/>
                    <div className="skill__info">
                        <h3>JavaScript</h3>
                        
                    </div>
                </div>
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/227px-React-icon.svg.png" alt=""/>
                    <div className="skill__info">
                        <h3>ReactJS</h3>
                        
                    </div>
                </div>
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/262px-Node.js_logo.svg.png" alt=""/>
                    <div className="skill__info">
                        <h3>Node.js</h3>
                        
                    </div>
                </div>
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/412px-Npm-logo.svg.png" alt=""/>
                    <div className="skill__info">
                        <h3>npm</h3>
                        
                    </div>
                </div>
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/400px-Firebase_Logo.svg.png" alt=""/>
                    <div className="skill__info">
                        <h3>Firebase</h3>
                        
                    </div>
                </div>
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/440px-MongoDB_Logo.svg.png" alt=""/>
                    <div className="skill__info">
                        <h3>MongoDB</h3>
                        <p></p>
                    </div>
                </div>
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/113px-CSS3_logo_and_wordmark.svg.png" alt=""/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/160px-HTML5_logo_and_wordmark.svg.png" alt=""/>
                    <div className="skill__info">
                        <h3>HTML & CSS</h3>
                        <p></p>
                    </div>
                </div>
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/160px-Bootstrap_logo.svg.png" alt=""/>
                    <div className="skill__info">
                        <h3>Bootstrap</h3>
                        <p></p>
                    </div>
                </div>
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/383px-Git-logo.svg.png" alt=""/>
                    <div className="skill__info">
                        <h3>Git</h3>
                        <p></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
            
        </div>
    )
}

export default About;
