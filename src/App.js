import React, { Component } from 'react';
import Button from './button';
import Title from './Title';
import Footer from './Footer';
import Viewer from './viewer';
import { PDFJS } from './pdfjs/pdfjs-viewer';
import ProgressBar from './progress-bar';

import './css/style.css';

// const DEFAULT_URL = '../../web/compressed.tracemonkey-pldi-09.pdf';
const DEFAULT_SCALE_DELTA = 1.1;
const MIN_SCALE = 0.25;
const MAX_SCALE = 10.0;
const DEFAULT_SCALE_VALUE = 'auto';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      pageNumber: 1,
      pdfPageCount: 0,
      title: 'sample-title.pdf',
      pdf: null,
      loadingProgress: 0,
      percent: 0
    }

    this.initializePDFJS();

    this._pdfLoadingTask = null;
    this._pdfDocument = null;
    this._pdfViewer = null;
    this._pdfHistory = null;
    this._pdfLinkService = null;
  }

  initializePDFJS() {
    PDFJS.useOnlyCssZoom = true;
    PDFJS.disableTextLayer = true;
    PDFJS.maxImageSize = -1;//4096 * 4096;
    // @todo implement
    // PDFJS.workerSrc = '../../build/dist/build/pdf.worker.js';
    // PDFJS.cMapUrl = '../../build/dist/cmaps/';
    // PDFJS.cMapPacked = true;
  }

  /**
   * handle pdf loading progress
   * @param {object} progressData
   */
  loadingProgressHandler = (progressData) => {
    let percent = progressData.loaded / progressData.total;
    this.progress(percent);
    this.setState({ loadingProgress: percent });
    console.log(progressData.loaded / progressData.total);
  }

  onPageNumberChange = (e) => {
    console.log(e);
  }

  onPageUp = () => {
    let pageNumber = this.state.pageNumber + 1;
    this.setState({ pageNumber });
    this._pdfViewer.currentPageNumber = pageNumber;
  }

  onPageDown = () => {
    let pageNumber = this.state.pageNumber - 1;
    this.setState({ pageNumber });
    this._pdfViewer.currentPageNumber = pageNumber;
  }

  onZoomIn = (ticks) => {
    var newScale = this._pdfViewer.currentScale;
    do {
      newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.ceil(newScale * 10) / 10;
      newScale = Math.min(MAX_SCALE, newScale);
    } while (--ticks && newScale < MAX_SCALE);
    this._pdfViewer.currentScaleValue = newScale;

  }

  onZoomOut = (ticks) => {
    var newScale = this._pdfViewer.currentScale;
    do {
      newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.floor(newScale * 10) / 10;
      newScale = Math.max(MIN_SCALE, newScale);
    } while (--ticks && newScale > MIN_SCALE);
    this._pdfViewer.currentScaleValue = newScale;

  }

  setTitle = (title) => {
    this.setState({ title });
  }

  pageCount = () => {
    return this.state.pdfPageCount;
  }

  get page() {
    if (this._pdfViewer) {
      return this._pdfViewer.currentPageNumber;
    }
  }

  set page(page) {

  }

  componentDidMount() {
    console.log('pdfview application loaded');

    let linkService = new PDFJS.PDFLinkService();
    this._pdfLinkService = linkService;

    let container = this._viewer.viewerContainer;
    console.log(container);

    let pdfViewer = new PDFJS.PDFViewer({
      container: container,
      linkService: linkService
    });

    this._pdfViewer = pdfViewer;

    linkService.setViewer(pdfViewer);

    this._pdfHistory = new PDFJS.PDFHistory({
      linkService: linkService
    });

    linkService.setHistory(this._pdfHistory);

    container.addEventListener('pagesinit', () => {
      // We can use pdfViewer now, e.g. let's change default scale.
      pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
    });

    container.addEventListener('pagechange', (evt) => {
      let pageNumber = evt.pageNumber;
      this.setState({ pageNumber });;
    }, true);

    this.animationStarted().then(() => {
      console.log('ready to open the pdf');
      if (this.props.url) this.openPDF();
    });
  }
  setTitleUsingUrl = (url) => {
    this._url = url;
    var title = PDFJS.getFilenameFromUrl(url) || url;
    try {
      title = decodeURIComponent(title);
    } catch (e) {
      // decodeURIComponent may throw URIError,
      // fall back to using the unprocessed url in that case
    }
    this.setTitle(title);
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

  /**
   * opens the pdf in the url prop
   */
  openPDF() {

    if (this._pdfLoadingTask) {
      // We need to destroy already opened document
      return this.close().then(() => {
        // ... and repeat the open() call.
        return this.openPDF();
      });
    }

    if(typeof this.props.url === 'string'){
    	this.setTitleUsingUrl(this.props.url);
	}

    let loadingTask = PDFJS.getDocument(this.props.url);
    this._pdfLoadingTask = loadingTask;

    loadingTask.onProgress = this.loadingProgressHandler;

    return loadingTask.promise.then((pdfDocument) => {
      // Document loaded, specifying document for the viewer.
      this._pdfDocument = pdfDocument;
      
      this.setState({ 
        pdf: pdfDocument,
        pdfPageCount: pdfDocument.numPages 
      });
      
      // this.pdfPageCount = pdfDocument
      this._pdfViewer.setDocument(pdfDocument);
      this._pdfLinkService.setDocument(pdfDocument);
      this._pdfHistory.initialize(pdfDocument.fingerprint);

      this.setTitleUsingMetadata(pdfDocument);
  		});
  }

  progress = (level) => {
    var percent = Math.round(level * 100);
    // Updating the bar if value increases.
    if (percent >this.state.percent || isNaN(percent)) {
      this.setState({ percent });
    }
  }

  set loadingBar(x){}

  close = () => {

    // var errorWrapper = document.getElementById('errorWrapper');
    // errorWrapper.setAttribute('hidden', 'true');

    if (!this._pdfLoadingTask) {
      return Promise.resolve();
    }

    var promise = this._pdfLoadingTask.destroy();
    this._pdfLoadingTask = null;

    if (this._pdfDocument) {
      this._pdfDocument = null;

      this._pdfViewer.setDocument(null);
      this._pdfLinkService.setDocument(null, null);
    }

    return promise;

  }

  animationStarted() {
    return new Promise((resolve) => {
      window.requestAnimationFrame(resolve);
    })
  }

  render() {
    return (
      <div className="pdf-viewer">
        <Title title={ this.state.title }/>
        <ProgressBar percent={this.state.percent} ref={ (c) => this._progressBar = c } />
        <Viewer  ref={(c) => this._viewer = c}  />
        <Footer>

          <Button 
            className="pageDown" 
            onClick={this.onPageDown} 
            title="Previous Page" 
            id="previous"
            disabled={this.state.pageNumber === 1} 
          ></Button>

          <Button 
            className="pageUp" 
            onClick={this.onPageUp} 
            title="Next Page" 
            id="next"
            disabled={this.state.pageNumber === this.state.pdfPageCount} 
          ></Button>

          <input
            type="number"
            id="pageNumber"
            className="toolbarField pageNumber"
            value={this.state.pageNumber}
            onChange={this.onPageNumberChange}
            size="4"
            min="1"
            ></input>

          <Button 
            className="close" 
            onClick={this.props.onClose} 
            title="Close" 
            id="close"
          ></Button>

          <Button className="zoomOut" onClick={this.onZoomOut} title="Zoom Out" id="zoomOut"></Button>
          <Button className="zoomIn"  onClick={this.onZoomIn} title="Zoom In" id="zoomIn"></Button>

        </Footer>
      </div>
    );
  }
}

App.propTypes = {
  url: React.PropTypes.any.isRequired,
  onClose: React.PropTypes.func
}

export default App;
