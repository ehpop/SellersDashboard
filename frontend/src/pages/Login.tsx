import React from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import './styles/Login.css';
import useDocumentTitle from "../hooks/useDocumentTitle";
import Container from "react-bootstrap/Container";

function Login() {
    useDocumentTitle("Login");

    const handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log(event);
    }

    return(
        <Container className="main-login-container">
            <h1>Login</h1>
            <Container className="form-container">
                <Form>
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
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </Container>

    );

}

export function loginLoader() {
    return <></>;
}

export default Login;