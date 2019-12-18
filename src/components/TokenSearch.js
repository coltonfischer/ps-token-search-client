import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { getExampleSearch } from '../helpers'
import { withRouter } from 'react-router-dom';
import ExampleSearches from './ExampleSearches'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    form: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    }
}));

const TokenSearch = (props) => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        query: ''
    });

    const { query } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        props.history.push(`/search/${query}`);
    };

    return (
        <div className={classes.root}>
            <div className={classes.section1}>
                <form onSubmit={e => onSubmit(e)} className={classes.form} noValidate autoComplete="off">
                    <Typography gutterBottom variant="h4">Search for PeopleSoft Sites</Typography>
                    <Typography color="textSecondary" variant="body2">
                        Input a query into the search field below to search for publicly available PeopleSoft
                        sites to visit.
                    </Typography>
                    <TextField
                        name="query"
                        defaultValue={query}
                        onChange={e => onChange(e)}
                        required
                        id="outlined-search"
                        label="Search field"
                        type="search"
                        variant="outlined"
                        fullWidth
                    />
                    <Button type="submit" variant="contained">Search</Button>
                </form>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
                <Typography gutterBottom variant="body1">Example Searches</Typography>
                <ExampleSearches />
            </div>
        </div>
    )
}

//export the component to be used when importing it in other files
// wrap with withRouter higher order component to perform redirect
export default withRouter(TokenSearch);