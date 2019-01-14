import React from 'react'
import { Route } from 'react-router-dom'

const pageRender = path => (
	<div>
		{path}
	</div>
)

const RouteWrapper = () => (
	<>
		<Route
			path="/"
			exact
			render={() => pageRender('home')}
		/>
		<Route
			path="/code"
			render={() => pageRender('code')}
		/>
		<Route
			path="/audio"
			render={() => pageRender('audio')}
		/>
	</>
)

export default RouteWrapper
