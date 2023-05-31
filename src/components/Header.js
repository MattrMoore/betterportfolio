import React from "react";

const styles = {
    
    h1: {
        fontSize: "100px",
        color: "#3cd6f9",
        textAlign: "center",
        margin: "0",
        paddingLeft: "20px",
        paddingTop: "30px",
        textShadow: "1px 1px 2px pink, 0 0 0.2em blue, 0 0 0.2em purple",
    }
};

function Header() {
    return(
    <div class="header" className="col-1" style={styles.header}>
        <h1 style={styles.h1}>Matt's Portfolio</h1> 
        </div> 
    );
}

export default Header;