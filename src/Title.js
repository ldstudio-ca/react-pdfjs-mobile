import React from 'react';

const style = {
    header:{
        zIndex: 180,
        backgroundColor: '#f4f4f4'
    },
    h1: {
        borderBottom: '1px solid #d8d8d8',
        color: '#858585',
        fontSize: '23px',
        fontStyle: 'italic',
        fontWeight: 'normal',
        overflow: 'hidden',
        padding: 10,
        textAlign: 'center',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Title';
    }
    render() {
        return (<header style={style.header}>
                <h1 style={style.h1}>{this.props.title}</h1>
            </header>);
    }
}

export default Title;
