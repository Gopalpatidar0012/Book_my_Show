import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [Passwordd, setPasswordd] = useState("");

  //console.log(EmailAddress,Passwordd);

  function ClearInput() {
    setEmailAddress("");
    setUsername("");
    setPasswordd("");
  }

  async function UserPost() {
    // console.log("helln jn");
    const FormData = {
      username: username,
      email: EmailAddress,
      password: Passwordd,
    };

    const response = await axios
      .post("http://localhost:5000/User-register", FormData)
      .then((data) => {
        Swal.fire({
          title: `<strong>${data.data.message}</strong>`,
          icon: "success",
          showCloseButton: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: `<strong>${err.message}</strong>`,
          icon: "error",
          showCloseButton: true,
        });
      });
    //console.log(response.data);
    ClearInput();
  }

  return (
    <div>
      <Container style={{ padding: "5%" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={EmailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={Passwordd}
              onChange={(e) => setPasswordd(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" onClick={UserPost}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
