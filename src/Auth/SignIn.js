/* import React, { Component } from 'react';

class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
	}
	handleChange = (e) => {
		this.setState = ({

		})
	}
	handleSubmit = (e) => {
		console.log(e)
	}

	render() {
		return (
			//use tutoriel from "the Net Ninja"
			<div className="wrapper">
				<form onSubmit={this.handleSubmit} className="signIn">
					<h3>Sign In</h3>
					<div className="inputEmail">
						<label htmlFor="email" aria-label="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="inputPassword">
						<label htmlFor="password" aria-label="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="btn">
						<button className="login">Login</button>
					</div>
				</form>
			</div>
		)
	}
}
export default SignIn; */