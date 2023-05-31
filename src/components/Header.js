import React from "react";

const styles = {
    header: {
        background: "#7DD0FF",
        height: "100px",
        top: "0",
        left: "0",
        width: "100%",
    },
    h1: {
        fontSize: "100px",
        color: "#3cd6f9",
        textAlign: "left",
        margin: "0",
        paddingLeft: "20px",
        paddingTop: "30px",
        textShadow: "1px 1px 2px red, 0 0 0.2em blue, 0 0 0.2em blue",
    }
};

function Header() {
    return(
    <header className="col-1" style={styles.header}>
        <h1 style={styles.h1}>Matt</h1>
    </header>
    );
}

export default Header;