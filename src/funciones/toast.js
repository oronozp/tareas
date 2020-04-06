import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export const toast = (title, message, type) => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};
