import { useState } from 'react';
import profilePic from "/OIP.jpg"; // Corrected path
import "./App.css"; // Relative path to App.css


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={profilePic} className="profile-pic" alt="Profile Picture" />
      </div>
      <h2>Hi There!👋</h2>
      <div > 
        
        <h1>I'M <span className="highlight">Madhanyoharaj</span></h1>
       </div>
      <h3>I'm a Student</h3>
      
      <a href="#" class="neon-button">
  Click Me
</a>



      <div className="card">

        <div className="projects">
          <h3>Projects</h3>
          <ul>
            <div className="subcardprj">
            <li>
              
              <a href="https://github.com/Madanyoharaj/Mern" class="neon-button1" target="_blank">Project 1</a>
              
              <p>A simple Mern Project with login page and home page</p>
            </li>
            </div>
            <div className="subcardprj">
            <li>
              
              <a href="https://github.com/Madanyoharaj/Unity-Horror-project" class="neon-button1" target="_blank">Project 2</a>
              
              <p>A unity based game with horror themed simple underdevelopment.</p>
            </li>
            </div>
          </ul>
        </div>
        <div className="about">
          <h3>About Me</h3>
          <p>Hi! I'm Madhanyoharaj, a driven second-year student of Electronics and Communication Engineering (ECE) at SKCET College, with a passion for staying updated on the latest technological advancements and a keen interest in transforming theoretical knowledge into practical innovations..</p>
        </div>
      </div>
    </>
  )
}

export default App;
