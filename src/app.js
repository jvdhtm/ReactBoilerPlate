import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './components/pages/home';
import theme from './themes/default';


const App = () => (
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </ThemeProvider>
);

export default App;
