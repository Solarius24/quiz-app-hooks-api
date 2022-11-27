import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/dashboard/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
        <Link to="/">
            <Button>HomePage</Button>
          </Link>
          <h2 className="w-100 text-center mt-2">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Player Name:</strong>
          {currentUser.displayName}
          <br></br>
          <strong>Email:</strong>
          {currentUser.email}
          <Link to="/dashboard/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout} style={{color:'yellow', backgroundColor:"black"}}>
          Log out
        </Button>
      </div>
    </>
  );
}
