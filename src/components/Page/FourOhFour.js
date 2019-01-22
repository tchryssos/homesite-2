import React from 'react'

import { PixelContent } from './components'
import './styles.scss'

const FourOhFour = () => (
	<>
		<PixelContent location={{ pathname: '/fourohfour' }} />
		<div className="fourOhFourContainer">
			<span className="fourOhFour">404</span>
		</div>
	</>
)

export default FourOhFour
