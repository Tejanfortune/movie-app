import React from 'react';
//router librabry used to manage routing in the application.
import {Router} from '@reach/router';
import Header from './elements/Header';
import Home from './Home';
import NotFound from './NotFound';
// riutes handled by the movie component to fetch and displaydetailed info about movie base on id passed in url
import Movie from './Movie';

import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
    }
`;

const App = () => (
    <>
        <Header />
        <Router>
            <Home path = "/" />
            <Movie path = "/:movieId" />
            <NotFound default />
        </Router>
        <GlobalStyle />
    </>
);

export default App;
