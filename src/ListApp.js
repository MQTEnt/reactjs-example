import React from 'react'

class UserItem extends React.Component{
	onButtonDelete(e){
		this.props.handleDeleteUser(this.props.name);
	}
	render(){
		return (
			<li>
				<strong>{this.props.name}</strong>
				<em> - {this.props.email} </em>
				<button onClick={this.onButtonDelete.bind(this)}>Delete</button>
			</li>
		)
	}
}

class UserList extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			'users': [
				{id: 1, name: 'Nguyen Van A', email: 'nva@gmail.com'},
				{id: 2, name: 'Nguyen Van B', email: 'nvb@gmail.com'},
				{id: 3, name: 'Nguyen Van C', email: 'nvc@gmail.com'}
			]
		};
	}
	deleteUser(name){
		let newUsers = this.state.users.filter((user)=> user.name !== name);
		this.setState({users: newUsers});
	}
	render(){
		let renderUserItems = this.state.users.map((user) => (
				<UserItem 
					key={user.id} 
					name={user.name} 
					email={user.email} 
					handleDeleteUser={this.deleteUser.bind(this)} 
				/>
			));
		return(
			<ul>{renderUserItems}</ul>
		)
	}
}
export default UserList