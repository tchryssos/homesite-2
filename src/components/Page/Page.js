import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { SPRITE_ROUTE_MAP, TROY } from 'constants/sprites'
import { Sprite } from 'components'
import './styles.scss'

export default class Page extends PureComponent {
	render() {
		return (
			<div className="pixelArtContainer">
				<div className="spriteContainer">
					<Sprite type={TROY} />
					<Sprite type={SPRITE_ROUTE_MAP[this.props.location.pathname]} />
				</div>
				<div className="sidewalk" />
			</div>
		)
	}
}

Page.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}),
}
