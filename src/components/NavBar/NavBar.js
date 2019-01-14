import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (
	<>
		<NavLink exact activeClassName="navActive" to="/">Home</NavLink>
		<NavLink activeClassName="navActive" to="/code">Code</NavLink>
		<NavLink activeClassName="navActive" to="/audio">Audio</NavLink>
	</>
)

export default NavBar
