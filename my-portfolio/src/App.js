import React from 'react';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <header>
            <h1>Your Name</h1>
            <p>Web Developer</p>
          </header>
          <main>
            <section id="about">
              <h2>About Me</h2>
              <p>A brief introduction about yourself.</p>
            </section>
            <section id="projects">
              <h2>Projects</h2>
              {/* You can add your projects here */}
            </section>
            <section id="contact">
              <h2>Contact</h2>
              {/* Add your contact information or a form here */}
            </section>
          </main>
          <footer>
            <p>© 2023 Your Name. All rights reserved.</p>
          </footer>
        </div>
      );
    }

    export default App;