import React from 'react';
import TokenSearch from './components/TokenSearch';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import SearchResults from './components/SearchResults';
import Container from '@material-ui/core/Container';

const App = () => {
    return (
        <Router>
            <Header />
            <Container fixed>
                <Switch>
                    <Route exact path='/' component={TokenSearch} />
                    <Route path='/search/:query' component={SearchResults} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        </Router>
    )
}

export default App;
