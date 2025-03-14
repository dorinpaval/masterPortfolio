import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const correctData = {};
    correctData.GuestName = name;
    correctData.Email = email;
    correctData.Phone = phone;
    correctData.MessageTitle = subject;
    correctData.Message = message;
    try {
      const response = await axios.post(
        "https://mzyg2rbrj3.execute-api.us-east-1.amazonaws.com/v1/contact",
        correctData
      );
      if (response.data === "Success")
        setMessageValid("Message sent successfully! ");
    } catch (error) {
      console.log(error);
      setMessageValid("Something went wrong. Try again");
    }
    setTimeout(() => {
      setMessageValid("");
    }, 4000);
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  }

  return (
    <>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and I will get back to you within 24 hours.
            </Typography>
            <form onSubmit={(event) => onSubmit(event)}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    value={name}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    inputProps={{ maxLength: 12 }}
                    value={phone}
                    placeholder="123-456-7890"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={(e) => setSubject(e.target.value)}
                    label="Subject"
                    id="subject"
                    value={subject}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setMessage(e.target.value)}
                    inputProps={{ minLength: 10 }}
                    value={message}
                    label="Message"
                    id="message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Send message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 400,
            marginTop: "5px",
            color: "#30c970",
          }}
        >
          {messageValid}
        </p>
      </Grid>
    </>
  );
}
