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
				className={classNames(this.props.className, 'toolbarButton')} 
				onClick={this.props.onClick}
				title={this.props.title}>
					{this.props.children}
			</button>
		);
	}
}

export default Button ;
