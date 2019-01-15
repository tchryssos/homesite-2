import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { NavBar } from 'components'
import { RouteWrapper } from 'routes'

render(
	<BrowserRouter>
		<>
			<NavBar />
			<RouteWrapper />
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
