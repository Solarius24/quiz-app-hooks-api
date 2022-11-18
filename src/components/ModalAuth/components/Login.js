import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Link to="/">
            {" "}
            <Button>HomePage</Button>
          </Link>

          <h2 className="w-100 text-center mt-2">Log in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100">
              Log in
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" style={{color:'yellow', backgroundColor:"black"}}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
