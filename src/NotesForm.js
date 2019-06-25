import React from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab"
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

const NotesForm = ({title, description, updateField, saveNote}) => {
    return(
<React.Fragment>
    <Grid item xs={12}>
        <TextField
            name="title"
            type="text"
            placeholder="Title for this notes..."
            margin="normal"
            fullWidth
            onChange={updateField("title")}
            value={title}
        />
    </Grid>
    <Grid item xs={12}>
        <TextField
            name="description"
            type="text"
            placeholder="Title for this notes..."
            margin="normal"
            multiline
            rows="4"
            fullWidth
            onChange={updateField("description")}
            value={description}
        />
    </Grid>
    <Fab color="secondary" onClick={saveNote}>
        <Icon>edit_icon</Icon>
    </Fab>
    </React.Fragment>
    )
};

export default NotesForm;