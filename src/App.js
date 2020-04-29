import React, { createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Button, Grid, Paper } from "@material-ui/core";
import "typeface-roboto";
import { red } from "@material-ui/core/colors";
import Header from "./componentes/Header";
import Tarea from "./componentes/Tarea";
import Footer from "./componentes/Footer";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "./server/firebase";
import ReactNotification, { store } from "react-notifications-component";
import { toast } from "./funciones/toast";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  inputCreate: {
    marginTop: "10px",
  },
  contenedor: {
    margin: "auto",
    // backgroundColor: "red",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [tareas, setTareas] = React.useState([]);
  const [tareaNueva, setTareaNUeva] = React.useState({});
  const [cargando, setStateCargando] = React.useState(true);

  const handleTarea = (event) => {
    setTareaNUeva(event.target.value);
  };
  const style = {
    boton: {
      "background-color": "#ffebee",
    },
  };

  React.useEffect(() => {
    toast("Tareas", "Cargando tareas...", "info");
    const db = firebase.firestore();
    return db.collection("todos").onSnapshot((snapshot) => {
      const dataAux = [];
      snapshot.forEach((doc) => {
        dataAux.push({ ...doc.data(), id: doc.id });
      });
      setStateCargando(false);
      setTareas(dataAux);
      // toast("Tareas", "Tareas cargadas", "info");
    });
  }, []);

  const onCreate = () => {
    console.log(tareaNueva);
    const db = firebase.firestore();
    db.collection("todos").add({ name: tareaNueva });
    toast("Creacion de tarea", "Tarea creada satisfactoriamente...", "success");
  };

  return (
    <div className="App">
      <ReactNotification />
      <Header></Header>
      <div className={classes.inputCreate}>
        <form className={classes.root} noValidate autoComplete="off">
          {/* <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" /> */}
          <TextField
            onChange={handleTarea}
            id="outlined-basic"
            label="Nueva tarea"
            variant="outlined"
          />
        </form>
        <Button variant="contained" onClick={onCreate}>
          Guardar
        </Button>
      </div>
      <Container className={classes.contenedor}>
        {!cargando ? (
          tareas.length > 0 ? (
            tareas.map((tarea) => {
              return (
                <Grid container spacing={3}>
                  <Tarea
                    key={tarea.id + " " + tarea.name}
                    tarea={tarea}
                  ></Tarea>
                </Grid>
              );
            })
          ) : (
            <div>No hay tareas disponibles...</div>
          )
        ) : (
          <div>Cargando tareas...</div>
        )}
      </Container>
     

      <Footer></Footer>
    </div>
  );
}

export default App;
