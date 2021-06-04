import React from "react";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {LayoutGetData, LayoutToolbar} from "../styles";

const Header = React.memo(({open, classes, handleDrawerOpen}) => (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <LayoutToolbar>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        My notes
                    </Typography>
                </Toolbar>
                <LayoutGetData variant="outlined"  href='/get_data'>update</LayoutGetData>
            </LayoutToolbar>
        </AppBar>
    )
)

export default Header
