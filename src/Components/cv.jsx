import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './css/cv.css';
import { Link } from 'react-router-dom';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import profile from '../img/profile.jpeg'
import CloseIcon from '@material-ui/icons/Close';

function Cv({className}) {
    const [open, setOpen] = useState(false);



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Link onClick={handleOpen} className={className}>open curriculum</Link>
            <Modal
                open={open}
                onClose={handleClose}
                // aria-labelledby="simple-modal-title"
                // aria-describedby="simple-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="cv">
                       <p onClick={handleClose}><CloseIcon/></p>
                        <div className="cv__section">
                            <div className="cv__sectionLeft">
                                <h1>Yelyzaveta Huivan</h1>
                                <h2>Full stack web developer</h2>
                                <Link to="/yelyzaveta_huivan_curriculum.pdf" target="_blank" download className="download__button">download curriculum</Link>
                            </div>
                            <div className="cv__sectionRight">
                                
                                <p><MailOutlineIcon />  liza.guyvan1@gmail.com</p>
                                <p><LanguageIcon /> yelyzaveta.netlify.app</p>
                                <p><LocationOnIcon />  Bilbao</p>
                            </div>

                        </div>
                        <div className="cv__section" style={{justifyContent: 'space-around', paddingTop:'15px'}}>
                            <div className="cv__sectionRight">
                                <img src={profile} alt="yelyzaveta huivan"/>
                            </div>
                            <div className="cv__sectionLeft" style={{justifyContent: 'center'}}>
                            <div className="section__item">
                            
                                <p> Hello, I’m Yelyzaveta, but you can call me Liza. I'm a graduated software engineer with strong motivation of amplifying my experience and knowledge as well as career growth. I always try to do my best for the tasks and I get really inspired by seeing results of my work.</p>
                            </div>
                            
                            </div>

                        </div>
                        <div className="cv__section">
                            <div className="cv__sectionLeft">
                                <h3>Work experience</h3>
                                <div className="section__item">
                                    
                                    <h4>Web developer<span>august 2020 - now</span></h4>
                                    <p>I’ve built more than 50 projects, some of them:
                                    <ul>
                                    <li>this amazing portfolio web site - designed and built from scratch with React (Hooks),</li>
                                    <li><a href='https://fir-7ff2b.firebaseapp.com/' tartget="_blank" rel='noopener noreferrer'>Amazon clone</a> - complete ecommerce website using React (Hooks & Context API),
Node.js, express, firebase and stripe.js api</li>
                                    <li><a href='https://relaxed-haibt-a4c94f.netlify.app/' target='_blank' rel='noopener noreferrer'>Pomodoro timer app</a> designed and built from scratch with React(Hooks & Context Api) and CSS styling.</li>
                                    <li>A lot of frontend landing pages and sections with HTML&CSS and Javascript like <a href="https://gelizabeth.github.io/counsel/" target="_blank" rel='noopener noreferrer'>Lawyer consult page</a>, <a href="https://gelizabeth.github.io/registration-form-project/" tartget="_blank" rel='noopener noreferrer'>Regisration form</a> or <a href="https://gelizabeth.github.io/movie-seat-booking/" target="_blank" rel='noopener noreferrer'>Movie seat booking component</a>.</li>
                                    
                                    </ul>
                                    And a lot more projects using API built with node.js, express and mongoDB such as url
shortening app, bitcoin ticker, weather app, newsletter signup app. Some of them you can see on <a href='https://yelyzaveta.netlify.app/projects' tartget="_blank" rel='noopener noreferrer'>/selected_projects</a> section.</p>
                                </div>
                                <div className="section__item">
                                    
                                    <h4>Salesforce developer <span>Intern | autumn 2018</span></h4>
                                    <p>My tasks consisted of taking a trailhead course and resolving some typical tasks of junior developer at the company:
backend development - apex,
frontend development - lightning framework. I also gained time management skills there as I had to combine it with physical class attendance.</p>
                                </div>
                                <div className="section__item">
                                    
                                    <h4>Freelance interpreter, client support<span>Freelance | 2015 - 2017</span></h4>
                                    <p>This work has helped me to improve and practice spoken and written English and Spanish, some soft skills such as listening and verbal communication.</p>
                                </div>
                                <h3>Education</h3>
                               <div className="section__item">
                                    
                                    <h4>Courses <span>Udemy | spring 2020</span></h4>
                                    <p>
                                    <ul>
                                        <li>The complete web development bootcamp</li>
                                        <li>React - The complete guide (incl Hooks, React Router, Redux)</li>
                                    </ul>
                                    </p>
                                    
                                    <h4>FreeCodeCamp <span>cetrifications | 2019 - 2020</span></h4>
                                    <p>
                                    <ul>
                                        <li>Responsive Web Design</li>
                                        <li>JavaScript Algorithms and Data Structures</li>
                                        <li>Frontend Libraries</li>
                                    </ul>
                                    </p>
                                    
                                    
                                </div>
                               <div className="section__item">
                                    
                                    <h4>Erasmus student <span>University of Basque Country | spring 2019</span></h4>
                                    <p>I was studying courses of innovation and competitiveness, organization of labour and Spanish at the Engineering School of Bilbao. Here I gained a lot of knowledge and some experience of the importance of product design, enterprise and personnel management, improved soft skills because of a lot group tasks at the university, and a lot of travelling and erasmus activities out. Here I fell in love with Bilbao as well.</p>
                                    <h4>Erasmus student <span>Polytechnic University of Valencia | autumn 2017</span></h4>
                                    <p>I had a good luck to study in informatics school exactly my major. Here I've gained a lot of experience of working in an international IT team as in all courses we had group projects, I've obtained some UI/UX knowledge and busted my English and Spanish.</p>
                                </div>
                                
                                <div className="section__item">
                                    
                                    <h4>BSc in Software Engineering <span>Odessa national polytechnic university | 2014 - 2018</span></h4>
                                    <p> During that 4,5 years of studying there I've gained a lot of knowledge about IT world and software engineering major, ranging from soft skills and psychology to different programming languages and business organization. I've also participated in different cultural events, summer schools (Spanish, Augmented reality, Front-end semester) and conferences.</p>
                                </div>
                                <br/><hr/><br/>
                                <Link to="/yelyzaveta_huivan_curriculum.pdf" target="_blank" download className="download__button">download curriculum</Link>
                            </div>
                            <div className="cv__sectionRight">
                            <h3>Skills</h3>
                               <div className="section__item">
                                    
                                    <h4>Hard Skills</h4>
                                    <p>HTML&CSS</p>
                                    <p>Javascript ES6/JQuery/Bootstrap </p>
                                    <p>React(Hooks & Context Api)</p>
                                    <p>Redux</p>
                                    <p>Ajax</p>
                                    <p>Less/Sass</p>
                                    <p>Git, GitHub, Version Control</p>
                                    <p>npm</p>
                                    <p>Node.js</p>
                                    <p>ExpressJS</p>
                                    <p>APIs</p>
                                    <p>SQL</p>
                                    <p>MongoBD</p>
                                    <p>Firebase tools</p>
                                    <p>High level googleing</p>

                                    <h4>Soft skills</h4>
                                    <p>Open-minded and adaptable </p>
                                    <p>Team player </p>
                                    <p>Good listener</p>
                                    
                                </div>
                               
                                <h3>Languages</h3>
                               <div className="section__item">
                                    
                                    
                                    <p>English <span>(fluent)</span></p>
                                    <p>Spanish <span>(fluent)</span></p>
                                    <p>Russian <span>(native)</span></p>
                                    <p>Ukrainian <span>(native)</span></p>
                                    
                                </div>
                                <h3>Interests</h3>
                               <div className="section__item">
                                    
                                    
                                    <p>Dogs </p>
                                    <p>Languages </p>
                                    <p>Good music </p>
                                    <p>Tasty food </p>
                                    <p>Surfing </p>
                                    
                                </div>
                            </div>

                        </div>
                        
                    </div>


                </Fade>
            </Modal>
        </>
    )
}

export default Cv;
