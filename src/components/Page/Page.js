import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { PixelContent } from './components'
import './styles.scss'

export default class Page extends PureComponent {
	render() {
		return (
			<>
				<PixelContent {...this.props} />
				{this.props.children}
			</>
		)
	}
}

Page.propTypes = {
	children: PropTypes.node,
}
