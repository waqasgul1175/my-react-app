import React, { useState } from 'react'

export default function About() {

  const [dark, setDark] = useState(false);

  const toggleStyle = () => {
    setDark(!dark);
  }

  const myStyle = {
    color: dark ? 'white' : 'black',
    backgroundColor: dark ? 'black' : 'white'
  };

  return (
    <div style={myStyle} className="container">
      <h1>About Us</h1>

      <button onClick={toggleStyle} className="btn btn-dark my-3">
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  )
}
