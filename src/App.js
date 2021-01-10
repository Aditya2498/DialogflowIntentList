import './App.css';
import {Cardlist} from './Cardlist.jsx';
import {Container} from 'react-bootstrap';
import React ,{Component} from "react";

export default class App extends Component{

state={
  intents:[]
} ;
componentDidMount(){
  fetch("https://dialogflowbackend1.herokuapp.com/")
  .then(res=>res.json())
  .then(res=>this.setState({intents:res}))
}
 render(){
  
    return (
      <Container style={{marginTop:'2rem',fontSize:'1rem',marginBottom:'2rem'}}>
         <div style= {{display:'flex'}}>
       
       <span>
       <h1>List of intents</h1> 
        <Cardlist intents={this.state.intents}/>
       </span>
       
      </div>
      </Container>

     
    
    )}
  
}


