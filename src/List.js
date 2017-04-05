import React from 'react'

const UserItem = ({name, email}) => 
	{
		return (
			<li><span>{name}</span> - <em>{email}</em></li>
		)
	}

const UserList = ({users}) => 
	{
		return (
			<ul>
			{
				users.map(user => <UserItem key={user.id} name={user.name} email={user.email} />)
			}
			</ul>
		)
	}

export default UserList
