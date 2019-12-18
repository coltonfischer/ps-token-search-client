import React, { Fragment } from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Public from "@material-ui/icons/Public";
import Info from "@material-ui/icons/Info";
import LinkIcon from "@material-ui/icons/Link";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));

const Token = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Fragment>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <Public />
                </ListItemIcon>
                <ListItemText primary={props.token.displayLink} />
                {!open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <LinkIcon />
                        </ListItemIcon>
                        <Typography noWrap>
                            <Link href={props.token.link}>{props.token.formattedUrl}</Link>
                        </Typography>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Info />
                        </ListItemIcon>
                        <Typography noWrap>{props.token.value}</Typography>
                    </ListItem>
                </List>
            </Collapse>
        </Fragment >
    );
}

export default Token