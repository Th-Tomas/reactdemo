import React, {useState, useEffect}from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav';

function App() {

  const [post, setPost] = useState([]);

  useEffect(() => 
  {
    axios.get('https://dummyjson.com/products').then((response) => 
    {
    
      setPost(response.data.products)

    })
  },[]);
  console.log(post)
  
  return (
    <div className="App">
     
        {post.map((item)=>{
          return(
            <div>
              <h1>Dummy Data</h1>
              <p>{item.title}</p>
              <img src={item.images[0]} style={{width:'200px',height:'150px'}}/>
              <p>{item.description}</p>
              </div>
          )
        })}

    </div>
  );
}

export default App;
