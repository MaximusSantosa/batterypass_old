import React, { Component } from "react";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

export class About extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <div>
                    About Page
                </div>
                <Footer />
            </>
        )
    }
}

export default About;