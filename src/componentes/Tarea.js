import React, { createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import firebase from "../server/firebase";
import { TextField } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    margin: "auto 0",
    marginTop: "20px",
    minWidth: "100px",
    maxWidth: "300px",
    paddingTop: "20px",
    backgroundColor: "white",
    marginBottom: "20px",
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
  const [tareaNueva, setTareaNUeva] = React.useState({});

  const handleTarea = (event) => {
    setTareaNUeva(event.target.value);
  };
  const onUpdate = () => {
    console.log(tareaNueva);
    const db = firebase.firestore();
    db.collection("todos").doc(tarea.id).set({ name: tareaNueva });
  };
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("todos").doc(tarea.id).delete();
  };
  return (
    <Card className={classes.root}>
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
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={onDelete}
        >
          Eliminar
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={onUpdate}
        >
          Editar
        </Button>
      </CardActions>
    </Card>
  );
}

export default Tarea;
