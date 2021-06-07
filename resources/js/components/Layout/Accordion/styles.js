import styled from 'styled-components'
import {makeStyles} from "@material-ui/core/styles";
import {ListItem, ListItemText} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },

}));

export const AccordionText = styled(ListItemText)`
    & > *{
        line-height: normal;
    }
`
