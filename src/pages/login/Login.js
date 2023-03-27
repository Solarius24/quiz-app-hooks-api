import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Form, Card, Alert } from "react-bootstrap";
import { useLogin } from "hooks/useLogin";
import CardBg from "../../components/UI/CardBg";
import classes from "../login/Login.module.css";
import Button from "../../components/UI/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  }

  return (
    <CardBg>
      <Link to="/">
        <Button className={classes.scoreBoard_homeBtm}>Homepage</Button>
      </Link>
      <Card className={classes.login_container}>
        <Card.Body>
          <h2 className=" text-center mt-2">Log in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label className="h5">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" className="w-100">
              Log in
            </Button>
          </Form>
          <div
            className=" text-center mt-2 p-3"
            style={{ color: "yellow", backgroundColor: "black" }}
          >
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
    </CardBg>
  );
}
