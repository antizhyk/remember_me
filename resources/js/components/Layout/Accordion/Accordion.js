import React, {useEffect} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AccordionItem, AccordionText, useStyles} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {getData, viewContent} from "../../../redux/Note/actions";
import {Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const HeadAccordion = React.memo(() => {
    const classes = useStyles();
    const data = useSelector(({Note}) => Note);
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index, data) => {
        setSelectedIndex(index);
        dispatch(viewContent(data))
    };
    useEffect(() => {
        dispatch(getData())
    }, [])
    return (
        <div className={classes.root}>
            {data.folders && (data.folders.map(el => (
                el.title && (
                    <Accordion key={el.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id={el.title}
                        >
                            <Typography className={classes.heading}>{el.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" aria-label="secondary mailbox folder">
                            {data.notes && data.notes.map(note => (
                                note.folder = el.title && (
                                        <ListItem
                                            key={note.id}
                                            button
                                            selected={selectedIndex === note.id}
                                            onClick={(event) => handleListItemClick(event, note.id, note.content)}
                                        >
                                            <AccordionText primary={note.title}/>
                                        </ListItem>
                                   )))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                ))))}
        </div>
    )
})

export default HeadAccordion
