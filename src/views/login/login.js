import React from "react";
import {Button, Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";  //добавление button из библиотеки 
class Login extends React.Component{
	constructor(props){
			super(props);
			this.state={
				login:"",
				password:"",
				loading:false,
				ModalState:false
			}
	}
	click(e){
		console.log(e.target);
		this.setState({loading:true});
		setTimeout(()=>{
			this.setState({loading:false})
		},2000)
	}
	handleChange(e){
		this.setState({login:e.target.value})
		console.log(this.state.login)
	}

	toggle(){
		var currState = this.state.ModalState;
		this.setState({ModalState:!currState})
	}
	//вызов функции рендер 
	render(){
		console.log(this.props.users)//по сути моожно было удалить, просто для проверки
			return <div>
			{this.state.loading? "Ваш запрос обрабатывается":
				<div>
					<input type="password" onChange={this.handleChange.bind(this)} />
					<Button color="primary"  onClick={this.click.bind(this)} >Sign in</Button>
					<Button color="link" onClick={this.toggle.bind(this)}> Регистрация</Button>
				</div>
				}
				    {/* добавление модалки, isOpen нужен для проверки открыта ли модалка или нет, toggle вызывается когда модалка должна закрыться или открыться */}
				<Modal isOpen={this.state.ModalState} toggle={this.toggle.bind(this)}>
					<ModalHeader><span style={{color:"red"}}>Регистрация</span></ModalHeader>
					<ModalBody>Сделайте тут форму для регистрации, пожалуйста</ModalBody>
					<ModalFooter>
						<Button color="warning" onClick={this.toggle.bind(this)}> Отмена</Button>
						<Button color="success">Зарегистрироваться</Button>
					</ModalFooter>
				</Modal>
			</div>
	}
}
export default Login;
