import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.displayName = 'Button';

	}
	render() {
		return (
			<button 
			{ ...this.props}
				className={classNames(this.props.className, 'toolbarButton')} 
			>
				{this.props.children}
				
			</button>
		);
	}
}

export default Button ;
