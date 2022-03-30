import './App.css';

import React, { Component } from 'react';
import { CardList } from './components/cardslist/cardList.component';
import { SearchBox } from './components/searchbox/searchBox.component';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters:[],
      searchField:''
    }

  }
 

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response=>Response.json())
    .then(users=>this.setState({monsters:users}));

  }
   
  handleSubmit =(e)=>{
    return this.setState({searchField: e.target.value},()=>console.log(this.state));
  }

  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    
    return (
      <div className='App'>
         <h1>Monster Rolodex</h1>
        <SearchBox handleSubmit={this.handleSubmit}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }  
}

 

export default App;
