import React, {useState, useEffect}from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [post, setPost] = useState([]);

  useEffect(() => 
  {
    axios.get('https://dummyjson.com/products').then((response) => 
    {
    
      setPost(response.data.products)

    })
  },[]);
  
  return (
    <div className="App">
      {/* <h1>Dummy Data</h1>
        {post.map((item)=>{
          return(
            <div>
              <p>{item.title}</p>
              <img src={item.images[0]} style={{width:'200px',height:'150px'}}/>
              <p>{item.description}</p>
              </div>
          )
        })} */}
      
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </Router>


    </div>
  );
}

export default App;
