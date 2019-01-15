import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

const NavBar = () => (
	<>
		<div className="nameWrapper">
			Troy Chryssos
		</div>
		<div className="navWrapper">
			<NavLink exact activeClassName="navActive" to="/">Home</NavLink>
			<NavLink activeClassName="navActive" to="/code">Code</NavLink>
			<NavLink activeClassName="navActive" to="/audio">Audio</NavLink>
		</div>
	</>
)

export default NavBar
