import React from "react";

class Login extends React.Component{
	constructor(props){
			super(props);
			this.state={
				login:"",
				password:""
			}
	}
	click(e){
		console.log(e.target);
	}
	handleChange(e){
		this.setState({login:e.target.value})
		console.log(this.state.login)
	}

	render(){
		console.log(this.props.users)
			return <div>
			<form >
			<input type="password" onChange={this.handleChange.bind(this)} />
			</form>
			<button onClick={this.click.bind(this)} >signin</button>
</div>
	}
}
export default Login;
