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
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;