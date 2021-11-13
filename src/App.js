import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Register from "./pages/account/Register";
import Cards from "./pages/cards/Cards";
import LandingPage from "./pages/landingpage/LandingPage";
import ModalExample from "./pages/modals/Modal";
import Test from "./pages/Test";
import Todo from "./pages/todo/Todo";

function App() {
  return (
    <Fragment>
      <Routes>
        {/* Setting Navigationbar here because it is a layout which can be used from the routes below */}
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<LandingPage />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/test" element={<Test />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/modal" element={<ModalExample />} />

          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
