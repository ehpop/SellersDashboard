import React, {useContext} from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import './styles/Login.css';
import useDocumentTitle from "../hooks/useDocumentTitle";
import Container from "react-bootstrap/Container";
import {FormattedMessage, useIntl} from "react-intl";
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {users} from "../data/mockAccounts";

function Login() {
    useDocumentTitle("Login");
    const navigate = useNavigate();
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const intl = useIntl();
    const {setAuth} = useContext(AuthContext);
    const {setUser} = useContext(AuthContext);
    const {setAccount} = useContext(AuthContext);


    const handleSubmit = (event: any) => {
        event.preventDefault();

        for (let user of users) {
            if (user.username === email && user.password === password) {
                setUser(user.username);
                setAccount(user.username);
                setAuth(true);

                alert("Logged in");
                navigate("/");

                return;
            }
        }

        alert("Wrong credentials")
    }

    return (
        <Container className="main-login-container">
            <h1>
                <FormattedMessage id={"login.title"} defaultMessage={intl.formatMessage(
                    {
                        id: "login.title",
                        defaultMessage: "Login"
                    }
                )}/>
            </h1>
            <Container className="form-container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            <FormattedMessage id={"login.emailLabel"} defaultMessage={intl.formatMessage(
                                {
                                    id: "login.emailLabel",
                                    defaultMessage: "Email address"
                                }
                            )}/>
                        </Form.Label>
                        <Form.Control type="email" placeholder={intl.formatMessage(
                            {
                                id: "login.emailPlaceholder",
                                defaultMessage: "Enter email"
                            }
                        )} onChange={(event) => {
                            setEmail(event.target.value)
                        }}/>
                        <Form.Text className="text-muted">
                            <FormattedMessage id={"login.emailHelp"}
                                              defaultMessage={"We'll never share your email with anyone else."}/>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            <FormattedMessage id={"login.passwordLabel"} defaultMessage={"Password"}/>
                        </Form.Label>
                        <Form.Control type="password" placeholder={intl.formatMessage({
                            id: "login.passwordPlaceholder",
                            defaultMessage: "Password"
                        })} onChange={(event) => {
                            setPassword(event.target.value)
                        }}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        <FormattedMessage id={"login.submitButtonLabel"} defaultMessage={"Submit"}/>
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
