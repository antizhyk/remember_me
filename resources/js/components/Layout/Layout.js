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
                <Typography paragraph>
                    <div dangerouslySetInnerHTML={{__html: content,}}></div>
                    <img src='https://boostnote.io/api/teams/nhFMY3a5g/files/104d90509582b4dfd282f68a476f644a60b33311a60f9b260b25a636a4fa7b25-2021-06-03_17-38.png'/>
                </Typography>
            </main>
        </LayoutWrapper>
    );
})

export default Layout
