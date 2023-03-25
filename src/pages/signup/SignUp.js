import { useSignup } from "hooks/useSignup";
import React, { useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardBg from "../../components/UI/CardBg";
import classes from "../signup/SignUp.module.css"
import Button from "../../components/UI/Button"

export default function SignUp() {
  const [displayName, setDisplayName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useSignup();

  const handleSignUp = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <CardBg>
       <Link to="/">
        <Button className={classes.scoreBoard_homeBtm}>Homepage</Button>
      </Link>
      <Card className={classes.signup_container}>
        <Card.Body>
          <h2 className="w-100 text-center mt-2">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSignUp}>
            <Form.Group id="playerName">
              <Form.Label>Player Name</Form.Label>
              <Form.Control
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
          <div
        className="w-100 text-center mt-2 p-3"
        style={{ color: "yellow", backgroundColor: "black" }}
      >
        Already have an account <Link to="/login">Log in</Link>
      </div>
        </Card.Body>

      </Card>

    </CardBg>
  );
}
