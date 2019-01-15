import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { TROY, JUKEBOX, CANE, TROY_RIGHT, LAPTOP } from 'constants/sprites'
import './styles.scss'

export default class Sprite extends PureComponent {
	render() {
		return (
			<div className={`${this.props.size} ${this.props.className} spriteContainer`}>
				<img
					// eslint-disable-next-line global-require, import/no-dynamic-require
					src={require(`../../../static/${this.props.type}.gif`)}
					alt={`A sprite of ${this.props.type}`}
					className="sprite"
				/>
			</div>
		)
	}
}

Sprite.propTypes = {
	className: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	type: PropTypes.oneOf([
		TROY, JUKEBOX, CANE, TROY_RIGHT, LAPTOP, JUKEBOX,
	]),
}

Sprite.defaultProps = {
	size: 'small',
}
