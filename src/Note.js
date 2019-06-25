import React from "react";
import Typography from "@material-ui/core/Typography";

const Note = (props) => {
    const note = props.notes.filter(
        note => note.id === parseInt(props.match.params.id)
    )[0];
    return (
        <React.Fragment>
            <Typography align="center" variant="h4" gutterBottom>
                {note.title}
            </Typography>
            <Typography variant="subtitle1">
                {note.description}
            </Typography>
        </React.Fragment>
    );
}

export default Note;