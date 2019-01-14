import React from 'react'
import { Route } from 'react-router-dom'
import { Page } from 'components'

const RouteWrapper = () => (
	<>
		<Route path="/" exact component={Page} />
		<Route path="/code" component={Page} />
		<Route path="/audio" component={Page} />
	</>
)

export default RouteWrapper
