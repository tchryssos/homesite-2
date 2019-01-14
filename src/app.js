import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { NavBar } from 'components'
import { Home } from 'pages'

render(
	<div>
		<BrowserRouter>
			<>
				<NavBar />
				<Route path="/" exact component={Home} />
				{/* <Route path="/code" component={Code} />
				<Route path="/audio" component={Audio} /> */}
			</>
		</BrowserRouter>
	</div>,
	document.getElementById('app'),
)
