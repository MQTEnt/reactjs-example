import React from 'react';

class Hello extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <h1>{this.props.myProp}</h1>;
	}
}
export default Hello