import React from "react";

class Profile extends React.Component {
	constructor (props){
		super(props)
	}
	render(){
		return <div> Profile page {this.props.name}</div>
	}
}
export default Profile;
