import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './layout/Spinner';
import axios from 'axios';
import Token from './Token';
import List from "@material-ui/core/List";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
    section1: {
        margin: theme.spacing(3, 2),
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(2),
        },
    }
}));

const SearchResults = (props) => {

    const classes = useStyles();

    const [results, setResults] = useState({
        loading: true,
        error: false,
        tokens: [],
        exclude: []
    });

    const { error, loading } = results;

    // Get Search Results
    const getSearchResults = async (query, exclude) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ query, exclude });

        try {
            console.log(`Searcing for ${query}`);
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/search`,
                body,
                config);

            results.tokens = results.tokens.concat(res.data.tokens);
            results.exclude = res.data.exclude;

        } catch (err) {
            setResults({ ...results, error: true });
            // results.payload = {msg: err.response.statusText,status: err.response.status}
        }
        setResults({ ...results, loading: false });
    };

    useEffect(() => {
        // code to run on component mount
        getSearchResults(props.match.params.query, []);
    }, [])

    return (
        <Fragment>
            <div className={classes.section1}>
                <Typography gutterBottom variant="h5">{`"${props.match.params.query}"`} Search Results</Typography>
            </div>
            <List>
                {results.tokens.map(token => (
                    <Token key={token.displayLink} token={token} />
                ))}
            </List>
            {results.loading ? <LinearProgress /> : null}
            <Divider variant="middle" />
            <div className={classes.buttons}>
                <Button disabled={results.loading} onClick={() => {
                    setResults({ ...results, loading: true });
                    getSearchResults(props.match.params.query, results.exclude);
                }}
                    variant="contained" color="primary">Load More</Button>
                <Button component={Link} to={''} variant="contained">Return To Search</Button>
            </div>
        </Fragment>
    );
}

export default SearchResults;
