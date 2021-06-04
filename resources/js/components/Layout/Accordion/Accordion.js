import React, {useState} from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {useStyles} from "./styles";
import {useSelector} from "react-redux";

const Accordion = React.memo(() => {
    const classes = useStyles(),
        [folder, setFolder] = useState(),
        data = useSelector(({Note}) => Note);

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon/>}
            multiSelect
        >
            {/*{data.map((el, i) => (*/}
            {/*    if()*/}
            {/*))}*/}
            <TreeItem nodeId="1" label="Applications">
                <TreeItem nodeId="2" label="Calendar"/>
                <TreeItem nodeId="3" label="Chrome"/>
                <TreeItem nodeId="4" label="Webstorm"/>
            </TreeItem>
            <TreeItem nodeId="5" label="Documents">
                <TreeItem nodeId="6" label="Material-UI">
                    <TreeItem nodeId="7" label="src">
                        <TreeItem nodeId="8" label="index.js"/>
                        <TreeItem nodeId="9" label="tree-view.js"/>
                    </TreeItem>
                </TreeItem>
            </TreeItem>
        </TreeView>
    );
})

export default Accordion
