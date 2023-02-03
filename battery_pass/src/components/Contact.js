import React, { Component } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

export class Contact extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <div>
                    Contact Us!
                    <br/>
                    Our Email: batterypass-llp2023@lists.stanford.edu
                </div>
                <Footer />
            </>
        )
    }
}

export default Contact;