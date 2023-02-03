import React, { Component } from "react";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

export class About extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <div>
                    Our Team
                    <br/>
                    <img
                        alt=""
                        src="/team.png"
                    />{' '}
                </div>
                <Footer />
            </>
        )
    }
}

export default About;