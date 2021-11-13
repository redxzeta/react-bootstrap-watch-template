import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./register.css";
const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [result, setResult] = useState(null);
  const updateForm = (e) => {
    e.persist();
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setResult(form);
  };
  return (
    <Container>
      <div className="register__page">
        <h1>REGISTER</h1>

        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={form.email}
              onChange={updateForm}
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={updateForm}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {result && <ShowUserInfo>{result}</ShowUserInfo>}
      </div>
    </Container>
  );
};
export default Register;

const ShowUserInfo = ({ children }) => (
  <ul>
    <li>Email: {children.email}</li>
    <li>Password: {children.password}</li>
  </ul>
);
