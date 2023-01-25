import React, { useEffect, useState } from "react";
import NotificationPage from "../ui";
import {
  Container,
  FormContent,
  Item,
  ListItem,
  Title,
  Button,
} from "./index.style";

type Props = {};

async function sendContactData(contactDetails: any) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

const ContactForm = (props: Props) => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredMessage, setEnteredMessage] = useState<string>("");

    const [requestStatus, setRequestStatus] = useState<any>(); // 'pending', 'success', 'error'
    const [requestError, setRequestError] = useState<any>();

    useEffect(() => {
      if (requestStatus === "success" || requestStatus === "error") {
        const timer = setTimeout(() => {
          setRequestStatus(null);
          setRequestError(null);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }, [requestStatus]);


  const sendMessageHandler = async (e: any) => {
    e.preventDefault();
    setRequestStatus("pending");
    // optional: add client-side validation

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error: any) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  };
  return (
    <Container>
      <Title>How can I help you?</Title>
      <FormContent onSubmit={sendMessageHandler}>
        <ListItem>
          <Item>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(e: any) => setEnteredEmail(e.target.value)}
            />
          </Item>
          <Item>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(e: any) => setEnteredName(e.target.value)}
            />
          </Item>
        </ListItem>
        <Item>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows={5}
            id="message"
            value={enteredMessage}
            onChange={(e: any) => setEnteredMessage(e.target.value)}
          />
        </Item>
        <Button>
          <button>Send Message</button>
        </Button>
      </FormContent>
      {notification && (
        <NotificationPage
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </Container>
  );
};

export default ContactForm;
