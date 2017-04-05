import React from 'react'

class Form extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			result: ''
		}
	}
	handleSubmit(e){
		e.preventDefault();
		this.setState({result: this.myInput.value});
	}
	onChanged(e)
	{
		this.myInput = e.target;
		this.setState({result: this.myInput.value});
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type='text' onChange={this.onChanged.bind(this)}/>
				<button>Click me</button>
				<p>{this.state.result}</p>
			</form>
		)
	}
}

export default Form