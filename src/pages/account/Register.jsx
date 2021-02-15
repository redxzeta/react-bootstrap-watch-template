import { useState } from "react";
import { Button, Form, Jumbotron } from "react-bootstrap";
import "./register.css";
const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [result, setResult] = useState(false);
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
    <div className="register__page">
      <Jumbotron>
        <h1>REGISTER</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={form.email}
              onChange={updateForm}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
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
      </Jumbotron>
      {result && <ShowUserInfo>{result}</ShowUserInfo>}
    </div>
  );
};
export default Register;

const ShowUserInfo = ({ children }) => (
  <ul>
    <li>Email: {children.email}</li>
    <li>Password: {children.password}</li>
  </ul>
);
