import React from 'react';

export default function Contact() {
  return (
    <div className='col-2' style={{ marginTop : 30 }}>
      <h1>Contact</h1>
      <form>
        <label>
            Name:
            <br />
            <input type="text" name="name" placeholder="Enter your name" style={{ width : 600, height : 30 }}/>
        </label>
        <br />
        <label>
            Email:
            <br />
            <input type="text" name="email" placeholder="Enter your email" style={{ width : 600, height : 30 }} />
        </label>
        <br />
        <label>
            Message:
            <br />
            <input type="text" name="message" style={{ width : 600, height : 150 }} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}