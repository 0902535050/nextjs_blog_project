import React from "react";
import ReactDOM from "react-dom";
import { Container, Text, Title } from "./index.style";

type Props = {
  title: string;
  message: string;
  status: string;
};

const NotificationPage = (props: Props) => {
  const { title, message, status } = props;
  const portalDiv = document.getElementById("notifications");
  
  let statusClasses = "";

  if (status === "success") {
    statusClasses = "success";
  }

  if (status === "error") {
    statusClasses = "error";
  }
  return portalDiv
    ? ReactDOM.createPortal(
        <Container className={statusClasses}>
          <Title>{title}</Title>
          <Text>{message}</Text>
        </Container>,
        portalDiv
      )
    : null;
};

export default NotificationPage;
