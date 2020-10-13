import React from 'react';
import './css/Projects.css';

import LinkIcon from '@material-ui/icons/Link';
import todo from '../img/todo.png';
import amazon from '../img/amazon.png';
import slack from '../img/slack.png';
import blog from '../img/blog.png';
import keeper from '../img/keeper.png';
import shortly from '../img/shortly.png';


function Projects() {
    
    return (
        <div className="projects">

            <div className="projects__container">
                <div className="project" style={{ backgroundImage: `url(${amazon})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://fir-7ff2b.firebaseapp.com/
">Live Demo</a></p>
                        <div className="tags">
                            <div className="tag">ecommerce</div>
                            <div className="tag">reactJS</div>
                            <div className="tag">firebase</div>
                            <div className="tag">express</div>
                            <div className="tag">stripe</div>
                            <div className="tag">javascript</div>
                            <div className="tag">axios</div>
                        </div>
                        <p>This is a fake Amazon page with full e-commerce functionality. Front-end built using reactJS library, backend built with firebase cloud functions, express server and cloud firestore as a DB. </p>

                    </div>
                    <h3>Amazon ecommerce app</h3>
                </div>
                <div className="project" style={{ backgroundImage: `url(${slack})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://slack-cbbd3.firebaseapp.com/">Live Demo</a></p>
                        <div className="tags">

                            <div className="tag">reactJS</div>
                            <div className="tag">firebase</div>
                            <div className="tag">material-ui</div>
                            <div className="tag">javascript</div>
                            <div className="tag">axios</div>

                        </div>
                        <p>This is a slack clone, a live-chat application built with reactJS, axios for making requests, firebase realtime database, and firebase authorization. </p>

                    </div>
                    <h3>Slack live-chat app</h3>
                </div>

                <div className="project" style={{ backgroundImage: `url(${todo})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://todo-app-elisaveta.herokuapp.com/Example">Live Demo</a></p>
                        <div className="tags">

                            <div className="tag">nodeJS</div>
                            <div className="tag">mongoDB</div>
                            <div className="tag">express</div>
                            <div className="tag">heroku</div>

                        </div>
                        <p>A to-do list app built using EJS templates, javascript, express server deployed on heroku, mongoDB for data storage. You can make new to-do lists by using url routing </p>

                    </div>
                    <h3>ToDo app</h3>
                </div>
                <div className="project" style={{ backgroundImage: `url(${keeper})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://note-keeper-app-react.netlify.app/">Live Demo</a></p>
                        <div className="tags">
                            <div className="tag">ecommerce</div>
                            <div className="tag">reactJS</div>
                            <div className="tag">firestore</div>
                            <div className="tag">express</div>
                            <div className="tag">stripe</div>
                        </div>
                        <p>A react app to implement note keeping app.</p>

                    </div>
                    <h3>A note keeper app</h3>
                </div>
                <div className="project" style={{ backgroundImage: `url(${blog})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a  rel='noopener noreferrer' target='_blank' href="https://blog-projec.herokuapp.com/">Live Demo</a></p>
                        <div className="tags">

                            <div className="tag">EJS</div>
                            <div className="tag">express</div>
                            <div className="tag">mongoDB</div>
                            <div className="tag">javascript</div>
                            <div className="tag">nodeJS</div>

                        </div>
                        <p>A simple blog project build using EJS, Node.js, ExpressJS and MongoDB. Yiu can play around following instructions of the web.</p>

                    </div>
                    <h3>Personal blog</h3>
                </div>
                <div className="project" style={{ backgroundImage: `url(${shortly})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://link-shortening-app.herokuapp.com/">Live Demo</a></p>
                        <div className="tags">

                            <div className="tag">EJS</div>
                            <div className="tag">express</div>
                            <div className="tag">mongoDB</div>
                            <div className="tag">javascript</div>
                            <div className="tag">nodeJS</div>

                        </div>
                        <p>This app is built from scratch with HTML,CSS,Bootstrap as front-end part, and express server, rel.ink api as backend part, deployed on Heroku</p>

                    </div>
                    <h3>Shortly. Link shortening app</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects;
