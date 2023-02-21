
import './App.css';
import Navbar from './components/Navbar.js';
import TextForms from './components/TextForms.js';
//import axios from 'axios'
//import {Components} from 'react';
/*
className PostList extends Components{
  constructor(props){
    super(props);
    this.state={
      posts:[]
    }
  }
}
componentDidMount(){
axios.get("")

}
*/
function App() {
  return (
    <>
      <Navbar title= "textUtils" /> 
      <div className="container" my-3="true">
      <TextForms heading = "Enter the text "/>
      </div>
    
   </>
  );
}

export default App;
