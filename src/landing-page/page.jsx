import React from "react";
import { Navbar } from "./components/header";
import { Hero } from "./components/hero-section";
import { Services } from "./components/services";
import { Projects } from "./components/projects";
import { About } from "./components/us";
import { Contact } from "./components/contact";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <About />
            <Contact />
        </>
    );
}