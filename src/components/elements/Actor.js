import React from 'react';
import PropTypes from 'prop-types';
// importing core react library, property types and urls for for images//
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from './../images/no_image.jpg';
import {StyledActor} from '../styles/StyledActor';

const Actor = ({actor}) =>{
    return (
        /*content been wrappend in the styledActor for styling the actors image
        ,faalback image, roles etc
        */
       <StyledActor>
           <img  src = {
               actor.profile_path
               ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
               : noImage
           } 
           alt = "actor" loading="lazy"/>
           <span className = "actor-name">{actor.name}</span>
        <span className = "actor-character">{actor.character}</span>
       </StyledActor>
    )
}
/* this makes sure that the actor property ia an object
it help to catch bugs*/
Actor.propTypes = {
    actor: PropTypes.object
}
export default Actor;