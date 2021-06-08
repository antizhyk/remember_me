import styled from 'styled-components'
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Toolbar from "@material-ui/core/Toolbar";

const drawerWidth = 320;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
        textAlign: 'left',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));


export const LayoutWrapper = styled.div`
    hr {
        display: none;
    }
`
export const LayoutToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`

export const LayoutGetData = styled(Button)`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.75);
    border: 2px solid rgba(255, 255, 255, 0.75);
    transition: all .3s;
    margin-right: 15px;

    &:hover{
        color: #ffffff;
        border: 2px solid #ffffff;
    }

    &:last-child{
        margin-right: 0;
    }
`

export const LayoutScheduler = styled.div`
    font-size: 20px;
    cursor: pointer;
`
