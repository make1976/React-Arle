import { Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function Signup() {
    return (
        <Card>
            <Card.Body>
                <Form onSubmit={e => { e.preventDefault(); alert("¡Enviando! sus datos de logueo") }}>
                    <label>
                        <h1>Form Login</h1>
                    </label>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Addres</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>


                    <Button variant="Primary" type="submit">
                        Submit
                    </Button>
                </Form >
            </Card.Body>
        </Card>

    );
}