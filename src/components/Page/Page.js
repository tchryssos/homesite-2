import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { PixelContent } from './components'

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
