import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import AnimatedFormInput from "../Components/AnimatedFormInput";

import Logo from "../Images/icon-512x512.png";

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Login | Insight";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Authentication codes here

    console.log(user);
    // history.push("/");
  };

  return (
    <Container
      className="d-flex text-center align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-around"
        style={{ maxWidth: "400px", minHeight: "90vh" }}
      >
        <Image fluid src={Logo} className="mt-3" />
        {error ? <Alert variant="danger">{error}</Alert> : null}
        <div>
          <Form.Group className="text-left">
              <AnimatedFormInput
                label="EMAIL"
                type="email"
                required
                name="email"
                setUser={setUser}
                setError={setError}
                setMessage={setMessage}
                user={user}
              />
          </Form.Group>
          <Form.Group className="text-left">
              <AnimatedFormInput
                label="PASSWORD"
                required
                name="password"
                setUser={setUser}
                setError={setError}
                user={user}
                setMessage={setMessage}
              />
          </Form.Group>
          <Form.Group className="d-flex justify-content-between">
            <Form.Check inline type="checkbox" label="Keep me logged in" />
            <span>
              <Link to="/forgot-password" className="text-theme-accent-mid">
                Forgot Password?
              </Link>
            </span>
          </Form.Group>
        </div>
        <div>
          <Button
            style={{ maxWidth: "250px" }}
            type="submit"
            variant="theme-accent-light"
            size="lg"
            className="text-theme-foreground w-100 mb-3"
          >
            LOGIN
          </Button>
          <p>
            Don't have an account?&nbsp;
            <Link to="/register" className="text-theme-accent-mid">
              Signup
            </Link>
          </p>
        </div>
      </Form>
    </Container>
  );
}
