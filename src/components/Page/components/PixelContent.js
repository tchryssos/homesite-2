import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { SPRITE_ROUTE_MAP, TROY } from 'constants/sprites'
import { Sprite } from 'components'
import './styles.scss'

export default class PixelContent extends PureComponent {
	render() {
		return (
			<div className="pixelArtContainer">
				<div className="spriteContainer">
					<Sprite
						type={TROY}
						className="troySprite"
					/>
					<Sprite
						type={SPRITE_ROUTE_MAP[this.props.location.pathname]}
						className="objSprite"
					/>
				</div>
				<div className="sidewalk" />
			</div>
		)
	}
}

PixelContent.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}),
}

