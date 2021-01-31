import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./cards.css";

const variantStyle = [
  "primary",
  "secondary",
  "success",
  "danger",
  "info",
  "light",
  "dark",
];
const Cards = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [userData, setUserData] = useState([]);
  const [variant, setVariant] = useState("primary");
  return (
    <div className="card__container">
      <h1>Cards</h1>
      <p>Backgrounds can be changed using primary, secondary, etc</p>
      <Row>
        {variantStyle.map((v) => (
          <Button
            className="button-row"
            variant={v}
            key={v}
            onClick={() => setVariant(v)}
          >
            {v}
          </Button>
        ))}
      </Row>

      <Row>
        {userData.map((user) => (
          <Col md={4} xs={12} key={user.id}>
            <Card
              border="primary"
              bg={variant}
              text={variant === "light" ? "dark" : "white"}
              className="card-style"
            >
              <Card.Header>{user.name}</Card.Header>
              <Card.Body>
                <Card.Title>Details </Card.Title>
                <Card.Text>UserName: {user.username}</Card.Text>
                <Card.Text>Email: {user.email} </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Cards;
