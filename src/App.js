import React, { Component } from 'react';
import logo from './logo.svg';
//импортирование библиотеки
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from  "./views/login/login";
import About from "./views/about/about";
import Profile from "./views/profile/profile";
import 'bootstrap/dist/css/bootstrap.min.css';// импорт bootstrap css в наш поект
//import './App.css';
class App extends Component {
	//конструктор
	constructor(props){
		super(props);
		this.state={
			users:[{login:"login", password:"pass"}]//возможные комбинации логина и пароля
		}
	}
  render() {
    return (
      <div className="App">
        <Router>
					<Switch>
						<Route exact path="/" component= {About} />
						<Route path="/profile" render = {(props)=><Profile name="somename"/>} />
						<Route path="/login"   render  = {(props)=><Login  users={this.state.users}/>}/>
					</Switch>
				</Router>
      </div>
    );
  }
}

export default App;
