import React from 'react';

const style = {
    loadingBar: {
        position: 'relative',
        height: '.4rem',
        borderBottom: '.11rem solid rgb(180,188,240)',
        zIndex: 100,
        backgroundColor: '#2D4452',
        boxShadow: '0 0 6px 2px rgba(210,208,210, 0.8)',
        display: 'block'//this.props.percent === 100 ? 'none': 'block'
    },
    progress: {
        position: 'absolute',
        left: 0,
        width: 0,
        height: '100%',
        backgroundColor: 'rgb(185,199,212)',
        overflow: 'hidden',
        transition: 'width 200ms'
    }
}
/**
 * ProgressBar Component 
 * 
 * takes a percent prop for displaying progress
 * 
 */
class ProgressBar extends React.Component {

    static defaultProps = {
        percent: '0'
    }

    /**
     * constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.displayName = 'ProgressBar';
    }

    /**
     * render
     * @return {ReactElement} markup
     */
    render() {
        return (
            <div id="loadingBar"
                ref={(c) => this._loadingBar = c}
                style={{ 
                    ...style.loadingBar,
                    display: this.props.percent === 100 ? 'none': 'block' 
                }}
                >
                <div style={{
                    ...style.progress,
                    width: `${this.props.percent}%`
                }}></div>
            </div>
        );
    }
}
/**
 * ProgressBar Component Proptypes
 */
ProgressBar.propTypes = {
    percent: React.PropTypes.number.isRequired
}
export default ProgressBar;

