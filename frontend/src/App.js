/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import IndustryHome from "./components/industry/IndustryHome";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import IndustryDetail from "./components/industry/IndustryDetail";
import SignUp from "./components/signup/SignupForm"; // Importing SignupForm
import { useEffect, useRef } from "react";

function App() {
  const scrollRefTop = useRef(null);
  const scrollRefBottom = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        scrollRefTop.current.classList.add("show");
      } else {
        scrollRefTop.current.classList.remove("show");
      }

      if (window.pageYOffset + document.documentElement.clientHeight < document.documentElement.scrollHeight) {
        scrollRefBottom.current.classList.add("show");
      } else {
        scrollRefBottom.current.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Router>
        <Header />
        <div className="scroll-buttons">
          <button ref={scrollRefTop} className="top-btn" onClick={() => window.scrollTo(0, 0)}><strong>↑</strong></button>
          <button ref={scrollRefBottom} className="bottom-btn" onClick={() => window.scrollTo(0, document.body.scrollHeight)}><strong>↓ </strong></button>
        </div>
        <Switch>
          <Route exact path='/' key='home' component={Home} />
          <Route exact path='/about' key='about' component={About} />
          <Route exact path='/industry' key='industry' component={IndustryHome} />
          <Route exact path="/industry/:id" key='industry-detail' component={IndustryDetail} />
          <Route exact path='/contact' key='contact' component={Contact} />
          <Route exact path='/signup' key='signup' component={SignUp} /> {/* Adding Signup Route */}
          <Route path='*' key='404' component={() => <h1>404 Not Found</h1>} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
