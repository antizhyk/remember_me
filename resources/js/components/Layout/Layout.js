import React from 'react';
import clsx from 'clsx';
import {useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {LayoutScheduler, LayoutWrapper, useStyles} from "./styles";
import Header from "./Header/Header";
import {List} from "@material-ui/core";
import HeadAccordion from "./Accordion/Accordion";
import {useSelector} from "react-redux";

const Layout = React.memo(() => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const content = useSelector(({Note}) => Note.content)
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <LayoutWrapper className={classes.root}>
            <CssBaseline />
            <Header open={open} classes={classes} handleDrawerOpen={handleDrawerOpen}/>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <LayoutScheduler>Планировщик</LayoutScheduler>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <HeadAccordion/>
                </List>
                <Divider />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                    <div dangerouslySetInnerHTML={{__html: content,}}></div>
            </main>
        </LayoutWrapper>
    );
})

export default Layout
