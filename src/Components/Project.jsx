import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import './css/Project.css'
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(0),
      margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
        marginLeft: theme.spacing(0),
  },
  }));

const Project = ({ projectItem }) => {
    const classes = useStyles();
    return (
        <Card className="project" variant='outlined'>

            <CardMedia
                component="img"
                src={projectItem.img}
                title={projectItem.title}
                className='project__media'
            />
            <CardContent className='project__content'>
                <ul className={classes.root} >
                {projectItem.tags.map((tag, index) => <li key={`chip-${index}`}><Chip className={classes.chip} variant="outlined" size="small" label={tag} color="primary"/></li>)}
                </ul>
                
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
