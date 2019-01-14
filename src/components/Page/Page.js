import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Page extends PureComponent {
	render() {
		return (
			<div>
				{this.props.location.pathname}
			</div>
		)
	}
}

Page.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}),
}
