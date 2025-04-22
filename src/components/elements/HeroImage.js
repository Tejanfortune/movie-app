/*this component is basically used to display a big image on the homepage
that probably singnify the most popular movie*/

import React from 'react';
import PropTypes from 'prop-types';
import {StyledHeroImage} from '../styles/StyledHeroImage';

/* a constant that defines the url for the imgae, the title of the movie and the overview of the
movie*/
const HeroImage = ({image, title, text}) =>{
   return(
       <StyledHeroImage image = {image}>
           <div className = "heroimage-content">
               <div className = "heroimage-text">
                   <h1>{title}</h1>
                   <p>{text}</p>
               </div>
           </div>
       </StyledHeroImage>
   )
}
/*this ensures that only strings are passed for images, 
 title or texts otherwise you will get a console warning*/
HeroImage.propTypes ={
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}
export default HeroImage;