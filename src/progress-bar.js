import React from 'react';

/**
 * ProgressBar Component 
 * 
 * takes a percent prop for displaying progress
 * 
 */
class ProgressBar extends React.Component {

    static defaultProps = {
        percent : '0'
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
                ref={ (c) => this._loadingBar = c }
                style={{
                    display: this.props.percent === 100 ? 'none': 'block'
                }}
                >
                <div className="progress" style={{
                    width: `${this.props.percent}%`
                }}></div>
                <div className="glimmer"></div>
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

