import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./pages/LandingPage";
import Test from "./pages/Test";

function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Container>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
