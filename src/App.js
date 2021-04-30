import React from "react";
import ScrollToTop from "./components/withRouter";
import "./App.css";
//Import Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AppartmentsOnSale from "./pages/Appartments";
import ContactUs from "./pages/ContactUs";
import AppartmentDetail from "./pages/AppartmentDetail";
// Router
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact to={Home}>
          <Home />
        </Route>
        <Route path="/appartments" exact to={AppartmentsOnSale}>
          <AppartmentsOnSale />
        </Route>
        <Route path="/about" exact to={AboutUs}>
          <AboutUs />
        </Route>
        <Route path="/contact" exact to={ContactUs}>
          <ContactUs />
        </Route>
        <Route path="/appartments/:id">
          <AppartmentDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
