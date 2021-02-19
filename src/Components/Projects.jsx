import React from 'react';
import './css/Projects.css';

import LinkIcon from '@material-ui/icons/Link';
import todo from '../img/todo.png';
import amazon from '../img/amazon.png';
import pomodoro from '../img/pomodoro.jpg';
import blog from '../img/blog.png';
import keeper from '../img/keeper.png';
import counsel from '../img/counsel.png';
import todoReact from '../img/todo-react.png';
import crowdfunding from '../img/crowdfunding.png';
import ip from '../img/ip.png';

function Projects() {
    
    return (
        <div className="projects">

            <div className="projects__container">
            <div className="project" style={{ backgroundImage: `url(${todoReact})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://compassionate-mclean-d1274f.netlify.app/
">Live Demo</a></p>
                        <div className="tags">
                            
                            <div className="tag">reactJS</div>
                            <div className="tag">Sass</div>
                           
                            <div className="tag">javascript</div>
                            <div className="tag">localStorage</div>
                            
                            
                        </div>
                        <p>A responsive todo app, with light/dark mode toggle.
Theme preference and todos are stored in Local Storage.
This app is built with ReactJS using BEM, Mobile first methodology and Sass for styles. </p>

                    </div>
                    <h3>TODO APP ReactJS</h3>
                </div>
                <div className="project" style={{ backgroundImage: `url(${crowdfunding})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://gelizabeth.github.io/crowdfunding-product/dist/
">Live Demo</a></p>
                        <div className="tags">
                        <div className="tag">HTML</div>
                            <div className="tag">Sass</div>
                            
                            <div className="tag">javascript</div>
                            <div className="tag">responsive</div>
                        </div>
                        <p>A pure HTML, Sass responsive landing page made from provided design, with some css animations and hover effects. It has javascript for modal windows functionalities and some interactive buttons (such as 'back this project', 'bookmark, menu toggle button).</p>

                    </div>
                    <h3>Crowdfunding landing page</h3>
                </div>
                <div className="project" style={{ backgroundImage: `url(${ip})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://gelizabeth.github.io/ip-address-tracker/
">Live Demo</a></p>
                        <div className="tags">
                            <div className="tag">HTML</div>
                            <div className="tag">CSS</div>
                            <div className="tag">IPify API</div>
                            <div className="tag">Api</div>
                            <div className="tag">LeafletJS</div>
                            <div className="tag">javascript</div>
                            
                        </div>
                        <p>A responsive SPA. Input validation is made with regExpr.
 IP Geolocation API by IPify for fetching info about ip/domain address, LeafletJS library for generating map. </p>

                    </div>
                    <h3>IP tracking app</h3>
                </div>
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
                <div className="project" style={{ backgroundImage: `url(${pomodoro})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://relaxed-haibt-a4c94f.netlify.app/">Live Demo</a></p>
                        <div className="tags">

                            <div className="tag">HTML</div>
                            <div className="tag">CSS</div>
                            <div className="tag">React</div>
                            <div className="tag">javascript</div>
                            <div className="tag">Context API</div>

                        </div>
                        <p>A pomodoro timer app, designed and build from scratch using React(Hooks & Context Api) and CSS styling.</p>

                    </div>
                    <h3>Pomodoro timer </h3>
                </div>
                <div className="project" style={{ backgroundImage: `url(${counsel})`, backgroundSize: 'cover' }}>

                    <div className="project__description">

                        <p><LinkIcon /><a rel='noopener noreferrer' target='_blank' href="https://gelizabeth.github.io/counsel/">Live Demo</a></p>
                        <div className="tags">

                            <div className="tag">HTML</div>
                            <div className="tag">CSS</div>
                            <div className="tag">SCSS</div>
                            <div className="tag">Javascript</div>
                            <div className="tag">Bootstrap</div>
                            <div className="tag">JQuery</div>

                        </div>
                        <p>A responsive landing page built from PSD template with HTML, SCSS, Bootstrap and JQuery with Google Maps integration.</p>

                    </div>
                    <h3>Lawyer consult landing page</h3>
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
                            
                            <div className="tag">reactJS</div>
                            
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
                {/* <div className="project" style={{ backgroundImage: `url(${shortly})`, backgroundSize: 'cover' }}>

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
                </div> */}
            </div>
        </div>
    )
}

export default Projects;
