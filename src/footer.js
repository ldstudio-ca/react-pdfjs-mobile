import React from 'react';
import Button from './button';

const style = {
	footer: {
		backgroundImage: 'url(' + require('./css/images/toolbar_background.png') +')',
		height: '4rem',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 1,
		boxShadow: '0 -0.2rem 0.5rem rgba(50, 50, 50, 0.75)'
	}
}

function Footer(props) {
	return (<footer style={style.footer}>{props.children}</footer>);
}

export default Footer;
