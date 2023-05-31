import React from 'react';
import me from '../images/me.jpg';

export default function About() {
  return (
    <div style={{ marginTop: 30 }}>
      <img src={me} alt="me" />
      <h1>About Page</h1>
      <p>
        I'm a full stack web developer with a background in customer service and customer service management. I learned coding through the University of Denver Bootcamp program and am working on getting my Associates in Computer Science at Community College of Denver. I'm currently living in the Denver Metro area, and I am looking for an Entry level Programming Job either in this area or in Rhode Island. I work hard and like to challenge myself everyday, I love learning and discovering new systems, technologies and langauges to use.
      </p>
    </div>
  );
}