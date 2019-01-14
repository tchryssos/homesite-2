import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

const NavBar = () => (
	<>
		<NavLink exact activeClassName="navActive" to="/">Home</NavLink>
		<NavLink activeClassName="navActive" to="/code">Code</NavLink>
		<NavLink activeClassName="navActive" to="/audio">Audio</NavLink>
	</>
)

export default NavBar
