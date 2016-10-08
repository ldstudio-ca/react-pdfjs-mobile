import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Title';
    }
    render() {
        return <header><h1>{this.props.title}</h1></header>;
    }
}

export default Title;
