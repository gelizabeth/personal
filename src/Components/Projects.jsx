import React from 'react';
import './css/Projects.css';
import Project from './Project';

import LinkIcon from '@material-ui/icons/Link';

import countries from '../img/countries.png';
import todo from '../img/todo.png';
import amazon from '../img/amazon.png';
import room from '../img/room.png'
import pomodoro from '../img/pomodoro.jpg';
import blog from '../img/blog.png';
import keeper from '../img/keeper.png';
import counsel from '../img/counsel.png';
import todoReact from '../img/todo-react.png';
import crowdfunding from '../img/crowdfunding.png';
import ip from '../img/ip.png';

function Projects() {
    const projectList = [
        {
            title: 'Countries REST API',
            description: 'Responsive front-end application with color theme switcher, data fetching from API, routing through countries, dynamic search and filtering. Built with React and Sass.',
            tags: ['ReactJS', 'sass', 'javascript', 'API', 'bootstrap'],
            img: countries,
            link: 'https://countries-react-sass.netlify.app/',
            github: 'https://github.com/gelizabeth/countries-react-sass-api'
        },
        {
            title: 'ToDo list',
            description: 'Responsive front-end application with color theme switcher, data filterind and Local Storage usage. This app is built with ReactJS using BEM, Mobile first methodology and Sass for styles.',
            tags: ['ReactJS', 'sass', 'javascript', 'localStorage'],
            img: todoReact,
            link: 'https://todo-react-sass.netlify.app/',
            github: 'https://github.com/gelizabeth/todo-react-sass'
        },
        {
            title: 'Pomodoro timer',
            description: 'Responsive front-end app, designed and build from scratch with ReactJS (Hooks & Context Api), CSS styling and media integration (timer sound).',
            tags: ['ReactJS', 'css', 'Context API', 'media'],
            img: pomodoro,
            link: 'https://relaxed-haibt-a4c94f.netlify.app/',
            github: 'https://github.com/gelizabeth/pomodoro'
        },
        {
            title: 'IP tracker',
            description: 'Responsive SPA. Input validation is made with regExpr. IP Geolocation API by IPify for fetching info about ip/domain address, LeafletJS library for generating map.',
            tags: ['javascript', 'html', 'css', 'API', 'leaflet'],
            img: ip,
            link: 'https://gelizabeth.github.io/ip-address-tracker/',
            github: 'https://github.com/gelizabeth/ip-address-tracker'
        },
        {
            title: 'Room homepage',
            description: 'Responsive landing page built with HTML, Sass and javascript for custom created corousel and menu toggle button.',
            tags: ['html', 'scss', 'javascript'],
            img: room,
            link: 'https://gelizabeth.github.io/room-homepage/',
            github: 'https://github.com/gelizabeth/room-homepage'
        },
        {
            title: 'Blog app',
            description: 'Fullstack CRUD project with built using EJS, Node.js, ExpressJS and MongoDB. You can play around following instructions of the web.',
            tags: ['Node.js', 'EJS', 'Express.js', 'MongoDB'],
            img: blog,
            link: 'https://blog-projec.herokuapp.com/'}
        // },
        // {
        //     title: 'Amazon copy',
        //     description: 'This is a fake Amazon page with full e-commerce functionality. Front-end built using reactJS library, backend built with firebase cloud functions, express server and cloud firestore as a DB.',
        //     tags: ['reactJS', 'firebase', 'axios', 'stripe'],
        //     img: amazon,
        //     link: 'https://blog-projec.herokuapp.com/'
        // },
        // {
        //     title: 'Todo',
        //     description: 'A to-do list app built using EJS templates, javascript, express server deployed on heroku, mongoDB for data storage. You can make new to-do lists by using url routing',
        //     tags: ['nodeJS', 'EJS', 'mongoDB', 'express', 'heroku'],
        //     img: todo,
        //     link: 'https://todo-app-elisaveta.herokuapp.com/Example'
        // },
        // {
        //     title: 'Note keeper App',
        //     description: 'A react app to implement note keeping app.',
        //     tags: ['nodeJS', 'EJS', 'mongoDB', 'express', 'heroku'],
        //     img: keeper,
        //     link: 'https://note-keeper-app-react.netlify.app/'
        // },
        // {
        //     title: 'Lawyer consult page',
        //     description: 'A responsive landing page built from PSD template with HTML, SCSS, Bootstrap and JQuery with Google Maps integration.',
        //     tags: ['nodeJS', 'EJS', 'mongoDB', 'express', 'heroku'],
        //     img: counsel,
        //     link: 'https://gelizabeth.github.io/counsel/'
        // },
        // {
        //     title: 'Crowdfunding landing page',
        //     description: 'A pure HTML, Sass responsive landing page made from provided design, with some css animations and hover effects. It has javascript for modal windows functionalities and some interactive buttons (such as back this project, bookmark, menu toggle button).',
        //     tags: ['nodeJS', 'EJS', 'mongoDB', 'express', 'heroku'],
        //     img: crowdfunding,
        //     link: 'https://gelizabeth.github.io/crowdfunding-product/dist/'
        // }


    ]

    return (
        <div className="projects">

            <div className="projects__container">
                {projectList.map((project, index) => <Project key={index} projectItem={project}></Project>)}
            </div>
        </div>
    )
}

export default Projects;
