import './App.css';

function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}


function App() {
  return (
    <div>
      <header>
        <h1><a href="/">WEB</a></h1>
      </header>
      <Nav></Nav>
      <article>
        <h2>WELCOME</h2>
        Hello, React!!!
      </article>
    </div>
  );
}

export default App;
