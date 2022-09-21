import {React} from 'react'
import {  useNavigate } from 'react-router-dom'
import './Pages.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Navbar.css'


const BASE_URL = 'https://co-healthy-homemade.herokuapp.com/'

const Login = () =>{
    const navigate = useNavigate()
    const URL = BASE_URL+'login'
    
    return(
        <Form id="login-form" className="g-4 shadow-lg">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default Login