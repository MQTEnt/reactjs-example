import React from 'react'
import './index.css'

const Header = ({text}) => <h1 style={{color: 'red'}}> {text} </h1>
const Footer = ({text}) => <p className='myStyle'> {text} </p>
const Website = () =>{ return (
		<div>
			<Header text='Welcome'/>
			<Footer text='Copyright @ 2017'/>
		</div>
	)}

export default Website
