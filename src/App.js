import React from 'react';
import './App.css';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import NotesList from './NotesList';
import NotesForm from "./NotesForm";
import { Link, Route } from "react-router-dom";
import { Fab } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add"
import Home from "./Home";
import Note from "./Note";



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            notes: []
    };
}
    updateState(e){//para esta funcion se agrega name para poder modificar el titulo y la descripcion de dos funciones diferentes
        this.setState({
            [e.target.name]:e.target.value
        });    
    }
/*    updateTitle(e){
        this.setState({
            title:e.target.value
        });    
    }
    updateDescription(e){
        this.setState({
            description:e.target.value
        });
     }
*/    
updateField = field => e => {//tambien se puede utilizar fiel para poderla poner en diferentes lugares 
    this.setState({// cuando tienen dos flechas es porque tiene doble funcion 
        [field]: e.target.value
    });
};
    saveNote = () => {
    if (this.state.title && this.state.description){
    this.setState({
        title: "",
        description: "",
        notes:[...this.state.notes, {
            id: Date.now(),
            title: this.state.title,
            description: this.state.description
        }
    ]
    });
}
};
    render() {
        console.log(this.state);      
        return (
            <React.Fragment>
                <Typography align="center" variant="h2" gutterBottom>
                    My Notes
                </Typography>
                 <Grid container justify="center" spacing={2}>
                        <Grid item xs={4}>
                            <NotesList notes={this.state.notes}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Route exact path="/new" render={NotesForm} />
                            <Route path="/new" render={() => (
                                <NotesForm
                                title={this.state.tittle}
                                description={this.state.description}
                                updateField={this.updateField}
                                saveNote={this.saveNote}
                                />
                             )} 
                            />
                            <Route path="/view/:id" render={props => <Note {...props} notes={this.state.notes} />}/>
                    </Grid>
                </Grid>
                <Fab color="primary" Component={Link} to="/new">
                    <AddIcon />
                </Fab>
            </React.Fragment>
        );
    }
}


export default App;
