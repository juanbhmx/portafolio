import React, { Component } from "react";
import "antd/dist/antd.css";
import "../index.css";

class Navbar extends Component {
    state = {
        current: "mail",
        visible: false
    };
    showDrawer = () => {
        this.setState({
            visible: true
        });
    };
    onClose = () => {
        this.setState({
            visible: false
        });
    };
    render() {
        return (
            <nav className="menuBar">

            </nav>
        );
    }
}
export default Navbar;
