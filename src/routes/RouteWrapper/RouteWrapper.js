import React from 'react'
import { Route } from 'react-router-dom'
import { Page } from 'components'
import './styles.scss'

const RouteWrapper = () => (
	<div className="routeWrapper">
		<Route path="/" exact component={Page} />
		<Route path="/code" component={Page} />
		<Route path="/audio" component={Page} />
	</div>
)

export default RouteWrapper
