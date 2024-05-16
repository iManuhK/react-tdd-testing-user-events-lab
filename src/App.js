function App() {
  return (
    <main>
      <h1>Hi, I'm Emmanuel</h1>
      <img alt="My profile pic" src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?size=626&ext=jpg&ga=GA1.1.330517422.1715855935&semt=sph" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email address" />
        <input type="checkbox" 
        id="newsletters" />
        <label htmlFor="newsletters">Newsletter</label>
        <input type="checkbox" />
        <input type="checkbox" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
