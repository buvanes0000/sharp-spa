import React from "react";
import "./app.scss";
import {
  Navbar,
  About,
  Hero,
  Services,
  Reservation,
  Testimonial,
  Faq,
  Footer,
  LoginForm,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />

      <Services />
      <Reservation />
      <Testimonial />
      <LoginForm />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
