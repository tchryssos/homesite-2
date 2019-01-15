import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { TROY, JUKEBOX, CANE, TROY_RIGHT, LAPTOP } from 'constants/sprites'

export default class Sprite extends PureComponent {
	render() {
		return (
			<img
				// eslint-disable-next-line global-require, import/no-dynamic-require
				src={require(`../../../static/${this.props.type}.gif`)}
				alt={`A sprite of ${this.props.type}`}
			/>
		)
	}
}

Sprite.propTypes = {
	type: PropTypes.oneOf([
		TROY, JUKEBOX, CANE, TROY_RIGHT, LAPTOP, JUKEBOX,
	]),
}
