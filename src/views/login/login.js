import React from "react";
import {Button, Modal,Col, ModalFooter,Form,FormGroup,Input,Label, ModalBody, ModalHeader } from "reactstrap";  //добавление button из библиотеки 
class Login extends React.Component{
	constructor(props){
			super(props);
			this.state={
				login:"",
				password:"",
				loading:false,
				ModalState:false,
				RegistrationForm:{
					email:"",
					password:""
				}
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
	handlePasswordChangeForRegistration(e){
		var RegistrationForm = this.state.RegistrationForm;
		RegistrationForm.password = e.target.value;
		this.setState({RegistrationForm});
	}
	handleEmailChangeForRegistration(e){
		var RegistrationForm = this.state.RegistrationForm;
		RegistrationForm.email = e.target.value;
		this.setState({RegistrationForm});
	}
	RegistrationClick(){
		this.toggle();
		this.props.Funct(this.state.RegistrationForm);
	}
	toggle(){
		var currState = this.state.ModalState;
		this.setState({ModalState:!currState})
	}
	//вызов функции рендер 
	render(){
			return <div>
			{this.state.loading? "Ваш запрос обрабатывается":
				<container>
				<Col sm={{size:4,offset:4}}>
					<Form>
						<center class="h3">Форма логина </center>
						<FormGroup>
							<Label>email</Label>
							<Input name="login" type="text"  onChange={this.handleChange.bind(this)} />
						</FormGroup>
						<FormGroup>
							<Label>password</Label>
							<Input name="password" type="text"  onChange={this.handleChange.bind(this)} />
						</FormGroup>
						<Button color="primary"  onClick={this.click.bind(this)} >Вход</Button>
						<Button color="link" onClick={this.toggle.bind(this)}> Регистрация</Button>

					</Form>	
					</Col>
				</container>
				}
				    {/* добавление модалки, isOpen нужен для проверки открыта ли модалка или нет, toggle вызывается когда модалка должна закрыться или открыться */}
				<Modal isOpen={this.state.ModalState} toggle={this.toggle.bind(this)}>
					<ModalHeader><span style={{color:"red"}}>Регистрация</span></ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label>Email</Label>
								<Input type="email"  value = {this.state.RegistrationForm.email} placeholder="yersultan.nagashtay@nu.edu.kz" onChange={this.handleEmailChangeForRegistration.bind(this)}/>
							</FormGroup>
							<FormGroup>
								<Label>Password</Label>
								<Input type="password" value = {this.state.RegistrationForm.password} placeholder="trustnoone" onChange={this.handlePasswordChangeForRegistration.bind(this)}/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="warning" onClick={	this.toggle.bind(this)}> Отмена</Button>
						<Button color="success" onClick={this.RegistrationClick.bind(this)}>Зарегистрироваться</Button>
					</ModalFooter>
				</Modal>
			</div>
	}
}
export default Login;
