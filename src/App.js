import { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Register from "./pages/account/Register";
import Cards from "./pages/cards/Cards";
import LandingPage from "./pages/landingpage/LandingPage";
import Test from "./pages/Test";
import { supabase } from "./utils/SupaBaseUtils";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    console.log(session);
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, [user]);

  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Container>
          <Switch>
            <Route path="/cards">
              <Cards />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
