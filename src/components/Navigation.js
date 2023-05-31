import React from 'react';
import './Navigation.css';

export default function Navigation({ currentPage, handlePageChange}) {
    return (
        <nav className="col-1 main-header-menu">
            <section
                style={{
                display: 'flex',
                fontFamily: 'helvetica',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                }}
            >
                <div className='col-1'>
                    <a href="#about" onClick={() => handlePageChange('About')}>About Me</a>
                </div>
                <div className='col-1'>
                    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                </div>
                <div className='col-1'>
                    <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
                </div>
                <div className='col-1'>
                    <a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
                </div>
            </section>
        </nav>
    );
}