import React, { Component } from 'react';
import Button from './button';
import Title from './Title';
import Footer from './Footer';
import Viewer from './viewer';
// import PDFJS from 'pdfjs-dist';
import { PDFJS } from './pdfjs/pdfjs-viewer';

import './css/style.css';

// const DEFAULT_URL = '../../web/compressed.tracemonkey-pldi-09.pdf';
const DEFAULT_SCALE_DELTA = 1.1;
const MIN_SCALE = 0.25;
const MAX_SCALE = 10.0;
const DEFAULT_SCALE_VALUE = 'auto';

class App extends Component {
  
  constructor(props){
  	super(props);

  	console.log(props.url)
  	window.PDFJS = PDFJS;
  	console.log(PDFJS)

  	this.pdfPageCount = 0;
  	this.state = {
  		pageNumber: 1,
  		title: 'sample-title.pdf',
  		pdf: null,
  		loadingProgress: 0
  	}

  	this.initializePDFJS();

  	this._pdfLoadingTask = null;
  	this._pdfDocument = null;
  	this._pdfViewer = null;
  	this._pdfHistory = null;
  	this._pdfLinkService = null;
  }

  initializePDFJS(){
  	PDFJS.useOnlyCssZoom = true;
	PDFJS.disableTextLayer = true;
	PDFJS.maxImageSize = 1024 * 1024;
	// @todo implement
	// PDFJS.workerSrc = '../../build/dist/build/pdf.worker.js';
	// PDFJS.cMapUrl = '../../build/dist/cmaps/';
	// PDFJS.cMapPacked = true;
  }

  loadingProgressHandler = (progressData) => {
  	   this.setState({ loadingProgress: (progressData.loaded / progressData.total) })
      console.log(progressData.loaded / progressData.total);
  }

  onPageNumberChange = (e) => {
  	console.log(e);

  }

  onPageUp = () => {
  	console.log('onPageUp');
  	let pageNumber = this.state.pageNumber + 1;
  	this.setState({ pageNumber });
  	this._pdfViewer.currentPageNumber = pageNumber;
  }

  onPageDown = () => {
  	console.log('onPageDown');
  	let pageNumber = this.state.pageNumber - 1;
  	this.setState({ pageNumber });
  	this._pdfViewer.currentPageNumber = pageNumber;
  }

  onZoomIn = (ticks) => {
  	console.log('onZoomIn');
    var newScale = this._pdfViewer.currentScale;
    do {
      newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.ceil(newScale * 10) / 10;
      newScale = Math.min(MAX_SCALE, newScale);
    } while (--ticks && newScale < MAX_SCALE);
    this._pdfViewer.currentScaleValue = newScale;

  }

  onZoomOut = (ticks) => {
  	console.log('zoomOut');
    var newScale = this._pdfViewer.currentScale;
    do {
      newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.floor(newScale * 10) / 10;
      newScale = Math.max(MIN_SCALE, newScale);
    } while (--ticks && newScale > MIN_SCALE);
    this._pdfViewer.currentScaleValue = newScale;

  }

  setTitle = (title) => {
  	this.setState( { title } );
  }

  get pagesCount(){
  	return this.pdfPageCount;

  }

  set pagesCount(count){
  	this.pdfPageCount = count;
  }

  componentDidMount(){
  	console.log('pdfview application loaded');

	let linkService = new PDFJS.PDFLinkService();
    this._pdfLinkService = linkService;
    
    console.log(this._viewer);

	let container = this._viewer.viewerContainer;
	console.log(container);

    let pdfViewer = new PDFJS.PDFViewer({
       container: container,
       linkService: linkService
    });
    
    this._pdfViewer = pdfViewer;

    window.pdfViewer = pdfViewer;

    linkService.setViewer(pdfViewer);

    this._pdfHistory = new PDFJS.PDFHistory({
      linkService: linkService
    });

    linkService.setHistory(this._pdfHistory);



    container.addEventListener('pagesinit',  () => {
      // We can use pdfViewer now, e.g. let's change default scale.
      pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
    });

    this.animationStarted().then( () => {
    	console.log('ready to open the pdf');

    	if(this.props.url) this.openPDF();
    });
  }

  setTitleUsingMetadata = (pdfDocument) => {

    pdfDocument.getMetadata().then((data) => {
      var info = data.info, metadata = data.metadata;
      this.documentInfo = info;
      this.metadata = metadata;

      // Provides some basic debug information
      console.log('PDF ' + pdfDocument.fingerprint + ' [' +
                  info.PDFFormatVersion + ' ' + (info.Producer || '-').trim() +
                  ' / ' + (info.Creator || '-').trim() + ']' +
                  ' (PDF.js: ' + (PDFJS.version || '-') +
                  (!PDFJS.disableWebGL ? ' [WebGL]' : '') + ')');

      var pdfTitle;
      if (metadata && metadata.has('dc:title')) {
        var title = metadata.get('dc:title');
        // Ghostscript sometimes returns 'Untitled', so prevent setting the
        // title to 'Untitled.
        if (title !== 'Untitled') {
          pdfTitle = title;
        }
      }

      if (!pdfTitle && info && info['Title']) {
        pdfTitle = info['Title'];
      }

      if (pdfTitle) {
        this.setTitle(pdfTitle + ' - ' + document.title);
      }
    });
  
  }

  openPDF(){
		let loadingTask = PDFJS.getDocument(this.props.url);
	  	this._pdfLoadingTask = loadingTask;
	    loadingTask.onProgress = this.loadingProgressHandler;

	    return loadingTask.promise.then( (pdfDocument) => {
      		// Document loaded, specifying document for the viewer.
      		this._pdfDocument = pdfDocument;
      		this.setState({ pdf: pdfDocument});
      		this._pdfViewer.setDocument(pdfDocument);
      		this._pdfLinkService.setDocument(pdfDocument);
      		this._pdfHistory.initialize(pdfDocument.fingerprint);


      		this.setTitleUsingMetadata(pdfDocument);
  		});
  }

  animationStarted(){
  	return new Promise( (resolve) => {
  		window.requestAnimationFrame(resolve);
  	})
  }

  render() {
    return (
    	<div>
    	<Title title={ this.state.title }/>
    	<Viewer  ref={(c) => this._viewer = c}  />
      	<Footer>
      		
			<Button className="pageDown" onClick={this.onPageDown} title="Previous Page" id="previous"></Button>
			<Button className="pageUp" onClick={this.onPageUp} title="Next Page" id="next"></Button>
      		
			<input 
				type="number" 
				id="pageNumber" 
				className="toolbarField pageNumber" 
				value={this.state.pageNumber}
				onChange={this.onPageNumberChange}
				size="4" 
				min="1"
			></input>

			<Button className="zoomOut" onClick={this.onZoomOut} title="Zoom Out" id="zoomOut"></Button>
			<Button className="zoomIn"  onClick={this.onZoomIn} title="Zoom In" id="zoomIn"></Button>

      	</Footer>
      </div>
    );
  }
}

App.propTypes = {
	url: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array
    ]).isRequired
}

export default App;

