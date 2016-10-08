import React from 'react';

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
        	<div id="viewerContainer" ref={(c) => this._viewerContainer = c}>
      			<div id="viewer" className="pdfViewer"></div>
    		</div>
    	);
    }
}

export default Viewer;
