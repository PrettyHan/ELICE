import './App.css';
import {Link, Routes, Route, useParams} from 'react-router-dom';
import {useState} from 'react';
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>  
}
function Header(props){
  return <header>
    <h1><Link to="/">{props.title}</Link></h1>
  </header>
}
function Nav(props){
  let lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><Link to={'/read/'+t.id}>{t.title}</Link></li>);
  }
  
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Read(props){
  const params = useParams();
  const id = Number(params.id);
  let title, body = '';
  for(let i=0; i<props.topics.length; i++){
    if(props.topics[i].id === id){
      title = props.topics[i].title;
      body = props.topics[i].body;
    }
  }
  return <Article title={title} body={body}></Article>
}
function App() {
  console.log('App render');
  let topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ];
  const [id, setId] = useState(null);
  return <>
      <Header title="React"></Header>
      <Nav topics={topics}></Nav>
      <Routes>
        <Route path="/" element={<Article title="Welcome" body="Hello, WEB"></Article>}></Route>
        <Route path="/read/:id" element={<Read topics={topics}></Read>}></Route>
      </Routes>
      <ul>
        <li><a href="/create">Create</a></li>
        <li><a href="/update">Update</a></li>
        <li><input type="button" value="Delete" /></li>
      </ul>
    </>
}

export default App;