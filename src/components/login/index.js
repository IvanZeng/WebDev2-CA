import React ,{useRef ,useState}from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import CardContent from "@material-ui/core/CardContent";
import {Form,Button,Card, FormLabel, FormControl, Alert} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth"
import { auth } from "../../firebase"

export default function LogInForm() {

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
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault() //stop refresh

        try{
            setError("")
            setLoading(true)
            signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
            history.push("/")
        } catch{
            setError('Sign in Failed')

        }
        setLoading(false)
    }


    return (
        
        <Card className={classes.root} variant="outlined">
        <CardContent>
                <h2 className="text-center mb-4">Login with MoviesApp</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id ="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl type ="email" ref= {emailRef} required/>
                    </Form.Group>
                    <Form.Group id ="password">
                        <FormLabel>Password</FormLabel>
                        <FormControl type ="password" ref= {passwordRef} required/>
                    </Form.Group>
                    <br/>
                    <Button disabled= {loading} className="w-100" type ="submit">LOGIN</Button>
                </Form>
            </CardContent>
            <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />
        <CardContent>
        <div className="w-100 text-center mt-2">
           Are you New User? <Link to="/signUp">SIGNUP</Link>
        </div>
       </CardContent>
       </Card>
        
    )
} 