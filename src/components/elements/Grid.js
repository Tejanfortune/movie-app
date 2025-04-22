import React from 'react';
import PropTypes from 'prop-types';
/*importing style component that defines how the grid and its contents should look like
in terms of layout, spacing etc*/
import {StyledGrid, StyledGridContent} from '../styles/StyledGrid';

const Grid = ({header, children}) =>{
   return(
   <StyledGrid>
       <h1>{header}</h1>
       <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
   )
   //this ensures thhat the header property must be a string//
}
Grid.propTypes = {
    header: PropTypes.string
}
export default Grid;
