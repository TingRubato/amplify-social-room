import React from "react";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Book from "../Components/Book/Book";
import Preview from "../Components/Preview/Preview";
import Author from "../Components/Author/Author";
import Testimonial from "../Components/Testimonial/Testimonial";
import Client from "../Components/Clients/Client";
import Banner from "../Components/Banner/Banner";
import FreeResources from "../Components/FreeResources/FreeResources";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Home: React.FC = () => (
  <>
    <Header />
    <About />
    <Banner />
    <Book />
    <Preview />
    <Author />
    <Testimonial />
    <Client />
    <FreeResources />
    <Contact />
    <Footer />
  </>
);

export default Home;
