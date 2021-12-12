import React, { useRef, useState } from "react"
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import CardContent from "@material-ui/core/CardContent";
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { auth } from "../../firebase"

export default function Signup() {

  const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: "rgb(155, 146, 134)",
      },
    media: { height: 300 },
  }));

  const classes = useStyles();
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <h2 className="text-center mb-4">Sign Up with MoviesApp</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              SIGNUP
            </Button>
          </Form>
          </CardContent>

          <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />

          <CardContent>
      <div className="w-100 text-center mt-2">
        Already MoviesApp member? <Link to="/login">LOGIN</Link>
      </div>
      </CardContent>
      </Card>
  )
}  