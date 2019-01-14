import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { NavBar } from 'components'
import { Home } from 'pages'

render(
	<div>
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>
	</div>,
	document.getElementById('app'),
)
