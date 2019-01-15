import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { SPRITE_ROUTE_MAP, TROY } from 'constants/sprites'
import { Sprite } from 'components'

export default class Page extends PureComponent {
	render() {
		return (
			<div>
				{this.props.location.pathname}
				<Sprite type={TROY} />
				<Sprite type={SPRITE_ROUTE_MAP[this.props.location.pathname]} />
			</div>
		)
	}
}

Page.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}),
}
