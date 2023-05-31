import React from "react";

function Footer() {
    return (
        <footer className="footer col-3">
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'bottom',
                justifyContent: 'center',
                position: 'fixed',
                bottom: '0',
            }}>
                <a href="https://github.com/MattrMoore">
                    <img src="https://thumbs.gfycat.com/WeirdTimelyArcticwolf-size_restricted.gif" width="40"  height="40" alt="GitHub" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;