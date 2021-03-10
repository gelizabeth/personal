import React from 'react'

import './css/Project.css'
import Card from '@material-ui/core/Card';

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';



const Project = ({ projectItem }) => {
    return (
        <Card className="project" variant='outlined'>

            <CardMedia
                component="img"
                src={projectItem.img}
                title={projectItem.title}
                className='project__media'
            />
            <CardContent className='project__content'>
                <Typography gutterBottom variant="h5" component="h2">
                    {projectItem.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {projectItem.description}
                </Typography>
            </CardContent>

            <CardActions>
            {projectItem.github&&<IconButton href={projectItem.github} target='_blank' aria-label="Github link" color='secondary'>
                    <GitHubIcon />
                </IconButton>}
                
                <IconButton href={projectItem.link} target='_blank' aria-label="Live demo link" color='primary'>
                    <LinkIcon />
                </IconButton>


            </CardActions>
        </Card>
    )
}

export default Project
