import React, { Component } from "react";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Section } from "./Components/Section/Section";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";
export class App extends Component {
  render() {
    return (
      <div> 
        <Header />
        <Navbar />
        <Section />
        <Main />
        <Footer />
      </div>
    );
  }
}
