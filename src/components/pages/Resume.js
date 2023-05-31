import React from 'react';
import ResumeDL from './pdf/Resume.pdf';

export default function Resume() {
  return (
    <div className="col-1" style={{ marginTop : 30, height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center' }}>
      <h1>Resume</h1>
      <div className="col-1" style={{ marginTop : 90 }} >        
        <a href={ResumeDL} download>
          Download Resume
        </a>
      </div>
    </div>
  );
}