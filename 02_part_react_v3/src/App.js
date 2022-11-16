import React from "react";
import "./App.scss";
//import "./assets/css/index.css";
import "./assets/scss/_init.scss";
import "./assets/scss/_fonts.scss";
import "./assets/scss/_bl_hello_content.scss";
import "./assets/scss/home_b_hello.scss";
import "./assets/scss/menu.scss";
import "./assets/scss/style.scss";
import Header from "./components/Header/Header";
import Home from "./components/AlphaHome/Home"
import Footer from "./components/Footer/Footer"
import Xtest6 from "./components/Xtest/Xtest6_form";
import XtestMail from "./components/Xtest/Xtest8_mail";
import SpecificationContainer from "./components/Specification/SpecificationContainer"
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import GenModelsHelloContainer from "./components/GenModelsHello/GenModelsHelloContainer";

function App(props) {
  //debugger
  return (
    <BrowserRouter basename="/" >
      <div className="app-wrapper">
        <Header />

        <main className="maincontent">
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/home" element={<Home />}  />
              <Route
              path="/gen_models_hello"
              element={<GenModelsHelloContainer />}
            />
            <Route path="/xtest-mail" element={<XtestMail />} />
            <Route path="/xtest" element={<Xtest6 />} />
            <Route path="/specification/:generatorId" element={<SpecificationContainer />} />
            <Route
              path="/*"
              element={<Home />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

//new page

const News = () => {
  return <h2>Here's News</h2>;
};
const Hello = () => {
  return <h2>Here's Helloooo!!!! I'm in processing...</h2>;
};
const NotFound = () => {
  return <h2>Error 404! Not Found Page</h2>;
};
const ComingSoon = () => {
  return <h2>This Page has not ready yet...</h2>;
};
export default App;
