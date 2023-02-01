import React, { Component } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

export class Contact extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <div>
                    Contact Page
                </div>
                <Footer />
            </>
        )
    }
}

export default Contact;