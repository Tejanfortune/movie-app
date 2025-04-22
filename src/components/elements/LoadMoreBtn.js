import React from 'react';
import PropTypes from 'prop-types';
import {StyledLoadMoreBtn} from '../styles/StyledLoadMoreBtn';

/* this function defines the loadmore button which accepts two properties, a text that 
should be displayed on the button and what the button should do when clicked*/
const LoadMoreBtn = ({text, callback}) =>{
   return(
   <StyledLoadMoreBtn type = "button" onClick = {callback}>{text}</StyledLoadMoreBtn>
   )
}
LoadMoreBtn.propTypes = {
   text: PropTypes.string,
   callback: PropTypes.func
}
export default LoadMoreBtn;