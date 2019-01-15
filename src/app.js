import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { NavBar, RouteWrapper } from 'components'

render(
	<BrowserRouter>
		<>
			<NavBar />
			<RouteWrapper />
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
