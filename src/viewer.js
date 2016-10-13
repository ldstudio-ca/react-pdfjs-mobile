import React from 'react';

const style = {
    viewerContainer: {
        position: 'absolute',
        overflow: 'auto',
        width: '100%',
        top: '5rem',
        bottom: '4rem',
        left: 0,
        right: 0
    }
}

class Viewer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Viewer';
        this._viewerContainer = null;
    }

    get viewerContainer(){
    	return this._viewerContainer;
    }

    set viewerContainer(x){
    	console.log('noop');
    }

    render() {
        return (
        	<div id="viewerContainer" style={style.viewerContainer} ref={(c) => this._viewerContainer = c}>
      			<div id="viewer" className="pdfViewer"></div>
    		</div>
    	);
    }
}

export default Viewer;
