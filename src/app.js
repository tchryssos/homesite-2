import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { NavBar, RouteWrapper } from 'components'

render(
	<div>
		<BrowserRouter>
			<>
				<NavBar />
				<RouteWrapper />
			</>
		</BrowserRouter>
	</div>,
	document.getElementById('app'),
)
