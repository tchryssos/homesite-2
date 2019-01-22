import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Page, FourOhFour } from 'components'
import './styles.scss'

const RouteWrapper = () => (
	<div className="routeWrapper">
		<Switch>
			<Route path="/" exact component={Page} />
			<Route path="/code" component={Page} />
			<Route path="/audio" component={Page} />
			<Route component={FourOhFour} />
		</Switch>
	</div>
)

export default RouteWrapper
