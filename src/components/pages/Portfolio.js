import React from 'react';
import Project from '../Project';

export default function Resume() {
  return (
    <div style={{ marginTop : 30 }}>
      <h1>Portfolio</h1>
      {Project()}
    </div>
  );
}