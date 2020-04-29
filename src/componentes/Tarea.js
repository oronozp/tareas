import React, { createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import firebase from "../server/firebase";
import { TextField, Grid, IconButton } from "@material-ui/core";
import { toast } from "../funciones/toast";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles({
  root: {
    margin: "auto",
    marginTop: "20px",
    // minWidth: "100px",
    // maxWidth: "300px",
    // paddingTop: "20px",
    marginBottom:"20px",
    backgroundColor: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Tarea(props) {
  const [tarea, setTarea] = React.useState(props.tarea);
  const classes = useStyles();
  const [tareaNueva, setTareaNUeva] = React.useState(props.tarea.name);

  const handleTarea = (event) => {
    setTareaNUeva(event.target.value);
  };
  const onUpdate = () => {
    console.log(tareaNueva);
    const db = firebase.firestore();
    db.collection("todos").doc(tarea.id).set({ name: tareaNueva });
    toast("Tareas", "Tarea actualizada satisfactoriamente...", "success");
  };
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("todos").doc(tarea.id).delete();
    toast("Tareas", "Tarea eliminada satisfactoriamente...", "danger");
  };
  return (
    <Grid xs={12} md={10} lg={10}  xl={10} className={classes.root} spacing="1">
      <Card>
        <CardContent>
          <TextField
            onChange={handleTarea}
            id="outlined-basic"
            label=""
            variant="outlined"
            defaultValue={tarea.name}
          />
        </CardContent>
        <CardActions>
          <IconButton  color="primary"onClick={onUpdate} aria-label="delete" className={classes.margin}>
            <EditIcon fontSize="large" />
          </IconButton>

          <IconButton  color="secondary" onClick={onDelete} aria-label="delete" className={classes.margin}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Tarea;
