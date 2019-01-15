import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { SPRITE_ROUTE_MAP, TROY } from 'constants/sprites'
import { Sprite } from 'components'

export default class Page extends PureComponent {
	render() {
		return (
			<>
				<Sprite type={TROY} />
				<Sprite type={SPRITE_ROUTE_MAP[this.props.location.pathname]} />
			</>
		)
	}
}

Page.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}),
}
