import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: theme.spacing(0.5)
    },
    chip: {
        margin: theme.spacing(0.5)
    }
}));

export default function ExampleSearches() {
    const classes = useStyles();
    const searches = [
        'NUI_FRAMEWORK',
        'CLASS_SEARCH',
        'IScript_StartPage',
        'HRS_HRAM',
        'ISCRIPT1',
        'MAINTAIN_SECURITY'
    ];

    return (
        <Paper className={classes.root}>
            {searches.map(search => {
                return (
                    <div className={classes.root}>
                        <Link href={`/search/${search}`}>
                            <Chip
                                label={search}
                                clickable
                            />
                        </Link>
                    </div>
                );
            })}
        </Paper>
    );
}
