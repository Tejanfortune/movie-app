import React from 'react';
// importing the link for navigation without refreshing the page//
import {Link} from '@reach/router';

//importing both the app logo and the tmdb logh//
import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.png';

//importing the style components that apply css styles to our header and logos//
import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from '../styles/StyledHeader';


const Header = () =>{
   return(
    //the app logo is been wrapped in a clicable link that routes you back to the homepage//
        <StyledHeader>
            <div className = "header-content">
                <Link to = "/">
                    <StyledRMDBLogo src = {RMDBLogo} alt = "Logo" />
                </Link>
                <StyledTMDBLogo src = {TMDBLogo} alt = "logo" />
            </div>
        </StyledHeader>
   )
}
export default Header;