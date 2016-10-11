(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactPDFJS"] = factory(require("react"));
	else
		root["ReactPDFJS"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpReactPDFJS"];
/******/ 	window["webpackJsonpReactPDFJS"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0,
/******/ 		2:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _App2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _button = __webpack_require__(3);

	var _button2 = _interopRequireDefault(_button);

	var _Title = __webpack_require__(5);

	var _Title2 = _interopRequireDefault(_Title);

	var _Footer = __webpack_require__(6);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _viewer = __webpack_require__(7);

	var _viewer2 = _interopRequireDefault(_viewer);

	var _pdfjsViewer = __webpack_require__(8);

	var _progressBar = __webpack_require__(12);

	var _progressBar2 = _interopRequireDefault(_progressBar);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// const DEFAULT_URL = '../../web/compressed.tracemonkey-pldi-09.pdf';
	var DEFAULT_SCALE_DELTA = 1.1;
	var MIN_SCALE = 0.25;
	var MAX_SCALE = 10.0;
	var DEFAULT_SCALE_VALUE = 'auto';

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.loadingProgressHandler = function (progressData) {
	      var percent = progressData.loaded / progressData.total;
	      _this.progress(percent);
	      _this.setState({ loadingProgress: percent });
	      console.log(progressData.loaded / progressData.total);
	    };

	    _this.onPageNumberChange = function (e) {
	      console.log(e);
	    };

	    _this.onPageUp = function () {
	      var pageNumber = _this.state.pageNumber + 1;
	      _this.setState({ pageNumber: pageNumber });
	      _this._pdfViewer.currentPageNumber = pageNumber;
	    };

	    _this.onPageDown = function () {
	      var pageNumber = _this.state.pageNumber - 1;
	      _this.setState({ pageNumber: pageNumber });
	      _this._pdfViewer.currentPageNumber = pageNumber;
	    };

	    _this.onZoomIn = function (ticks) {
	      var newScale = _this._pdfViewer.currentScale;
	      do {
	        newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
	        newScale = Math.ceil(newScale * 10) / 10;
	        newScale = Math.min(MAX_SCALE, newScale);
	      } while (--ticks && newScale < MAX_SCALE);
	      _this._pdfViewer.currentScaleValue = newScale;
	    };

	    _this.onZoomOut = function (ticks) {
	      var newScale = _this._pdfViewer.currentScale;
	      do {
	        newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
	        newScale = Math.floor(newScale * 10) / 10;
	        newScale = Math.max(MIN_SCALE, newScale);
	      } while (--ticks && newScale > MIN_SCALE);
	      _this._pdfViewer.currentScaleValue = newScale;
	    };

	    _this.setTitle = function (title) {
	      _this.setState({ title: title });
	    };

	    _this.pageCount = function () {
	      return _this.state.pdfPageCount;
	    };

	    _this.setTitleUsingUrl = function (url) {
	      _this._url = url;
	      var title = _pdfjsViewer.PDFJS.getFilenameFromUrl(url) || url;
	      try {
	        title = decodeURIComponent(title);
	      } catch (e) {
	        // decodeURIComponent may throw URIError,
	        // fall back to using the unprocessed url in that case
	      }
	      _this.setTitle(title);
	    };

	    _this.setTitleUsingMetadata = function (pdfDocument) {

	      pdfDocument.getMetadata().then(function (data) {
	        var info = data.info,
	            metadata = data.metadata;
	        _this.documentInfo = info;
	        _this.metadata = metadata;

	        // Provides some basic debug information
	        console.log('PDF ' + pdfDocument.fingerprint + ' [' + info.PDFFormatVersion + ' ' + (info.Producer || '-').trim() + ' / ' + (info.Creator || '-').trim() + ']' + ' (PDF.js: ' + (_pdfjsViewer.PDFJS.version || '-') + (!_pdfjsViewer.PDFJS.disableWebGL ? ' [WebGL]' : '') + ')');

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
	          _this.setTitle(pdfTitle + ' - ' + document.title);
	        }
	      });
	    };

	    _this.progress = function (level) {
	      var percent = Math.round(level * 100);
	      // Updating the bar if value increases.
	      if (percent > _this.state.percent || isNaN(percent)) {
	        _this.setState({ percent: percent });
	      }
	    };

	    _this.close = function () {

	      // var errorWrapper = document.getElementById('errorWrapper');
	      // errorWrapper.setAttribute('hidden', 'true');

	      if (!_this._pdfLoadingTask) {
	        return Promise.resolve();
	      }

	      var promise = _this._pdfLoadingTask.destroy();
	      _this._pdfLoadingTask = null;

	      if (_this._pdfDocument) {
	        _this._pdfDocument = null;

	        _this._pdfViewer.setDocument(null);
	        _this._pdfLinkService.setDocument(null, null);
	      }

	      return promise;
	    };

	    _this.state = {
	      pageNumber: 1,
	      pdfPageCount: 0,
	      title: 'sample-title.pdf',
	      pdf: null,
	      loadingProgress: 0,
	      percent: 0
	    };

	    _this.initializePDFJS();

	    _this._pdfLoadingTask = null;
	    _this._pdfDocument = null;
	    _this._pdfViewer = null;
	    _this._pdfHistory = null;
	    _this._pdfLinkService = null;
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'initializePDFJS',
	    value: function initializePDFJS() {
	      _pdfjsViewer.PDFJS.useOnlyCssZoom = true;
	      _pdfjsViewer.PDFJS.disableTextLayer = true;
	      _pdfjsViewer.PDFJS.maxImageSize = -1; //4096 * 4096;
	      // @todo implement
	      // PDFJS.workerSrc = '../../build/dist/build/pdf.worker.js';
	      // PDFJS.cMapUrl = '../../build/dist/cmaps/';
	      // PDFJS.cMapPacked = true;
	    }

	    /**
	     * handle pdf loading progress
	     * @param {object} progressData
	     */

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      console.log('pdfview application loaded');

	      var linkService = new _pdfjsViewer.PDFJS.PDFLinkService();
	      this._pdfLinkService = linkService;

	      var container = this._viewer.viewerContainer;
	      console.log(container);

	      var pdfViewer = new _pdfjsViewer.PDFJS.PDFViewer({
	        container: container,
	        linkService: linkService
	      });

	      this._pdfViewer = pdfViewer;

	      linkService.setViewer(pdfViewer);

	      this._pdfHistory = new _pdfjsViewer.PDFJS.PDFHistory({
	        linkService: linkService
	      });

	      linkService.setHistory(this._pdfHistory);

	      container.addEventListener('pagesinit', function () {
	        // We can use pdfViewer now, e.g. let's change default scale.
	        pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
	      });

	      container.addEventListener('pagechange', function (evt) {
	        var pageNumber = evt.pageNumber;
	        _this2.setState({ pageNumber: pageNumber });;
	      }, true);

	      this.animationStarted().then(function () {
	        console.log('ready to open the pdf');
	        if (_this2.props.url) _this2.openPDF();
	      });
	    }
	  }, {
	    key: 'openPDF',


	    /**
	     * opens the pdf in the url prop
	     */
	    value: function openPDF() {
	      var _this3 = this;

	      if (this._pdfLoadingTask) {
	        // We need to destroy already opened document
	        return this.close().then(function () {
	          // ... and repeat the open() call.
	          return _this3.openPDF();
	        });
	      }

	      if (typeof this.props.url === 'string') {
	        this.setTitleUsingUrl(this.props.url);
	      }

	      var loadingTask = _pdfjsViewer.PDFJS.getDocument(this.props.url);
	      this._pdfLoadingTask = loadingTask;

	      loadingTask.onProgress = this.loadingProgressHandler;

	      return loadingTask.promise.then(function (pdfDocument) {
	        // Document loaded, specifying document for the viewer.
	        _this3._pdfDocument = pdfDocument;

	        _this3.setState({
	          pdf: pdfDocument,
	          pdfPageCount: pdfDocument.numPages
	        });

	        // this.pdfPageCount = pdfDocument
	        _this3._pdfViewer.setDocument(pdfDocument);
	        _this3._pdfLinkService.setDocument(pdfDocument);
	        _this3._pdfHistory.initialize(pdfDocument.fingerprint);

	        _this3.setTitleUsingMetadata(pdfDocument);
	      });
	    }
	  }, {
	    key: 'animationStarted',
	    value: function animationStarted() {
	      return new Promise(function (resolve) {
	        window.requestAnimationFrame(resolve);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'pdf-viewer' },
	        _react2.default.createElement(_Title2.default, { title: this.state.title }),
	        _react2.default.createElement(_progressBar2.default, { percent: this.state.percent, ref: function ref(c) {
	            return _this4._progressBar = c;
	          } }),
	        _react2.default.createElement(_viewer2.default, { ref: function ref(c) {
	            return _this4._viewer = c;
	          } }),
	        _react2.default.createElement(
	          _Footer2.default,
	          null,
	          _react2.default.createElement(_button2.default, {
	            className: 'pageDown',
	            onClick: this.onPageDown,
	            title: 'Previous Page',
	            id: 'previous',
	            disabled: this.state.pageNumber === 1
	          }),
	          _react2.default.createElement(_button2.default, {
	            className: 'pageUp',
	            onClick: this.onPageUp,
	            title: 'Next Page',
	            id: 'next',
	            disabled: this.state.pageNumber === this.state.pdfPageCount
	          }),
	          _react2.default.createElement('input', {
	            type: 'number',
	            id: 'pageNumber',
	            className: 'toolbarField pageNumber',
	            value: this.state.pageNumber,
	            onChange: this.onPageNumberChange,
	            size: '4',
	            min: '1'
	          }),
	          _react2.default.createElement(_button2.default, {
	            className: 'close',
	            onClick: this.props.onClose,
	            title: 'Close',
	            id: 'close'
	          }),
	          _react2.default.createElement(_button2.default, { className: 'zoomOut', onClick: this.onZoomOut, title: 'Zoom Out', id: 'zoomOut' }),
	          _react2.default.createElement(_button2.default, { className: 'zoomIn', onClick: this.onZoomIn, title: 'Zoom In', id: 'zoomIn' })
	        )
	      );
	    }
	  }, {
	    key: 'page',
	    get: function get() {
	      if (this._pdfViewer) {
	        return this._pdfViewer.currentPageNumber;
	      }
	    },
	    set: function set(page) {}
	  }, {
	    key: 'loadingBar',
	    set: function set(x) {}
	  }]);

	  return App;
	}(_react.Component);

	App.propTypes = {
	  url: _react2.default.PropTypes.any.isRequired,
	  onClose: _react2.default.PropTypes.func
	};

	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_React$Component) {
		_inherits(Button, _React$Component);

		function Button(props) {
			_classCallCheck(this, Button);

			var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

			console.log(props);
			_this.displayName = 'Button';

			return _this;
		}

		_createClass(Button, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'button',
					_extends({}, this.props, {
						className: (0, _classnames2.default)(this.props.className, 'toolbarButton')
					}),
					this.props.children
				);
			}
		}]);

		return Button;
	}(_react2.default.Component);

	exports.default = Button;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Title = function (_React$Component) {
	    _inherits(Title, _React$Component);

	    function Title(props) {
	        _classCallCheck(this, Title);

	        var _this = _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props));

	        _this.displayName = 'Title';
	        return _this;
	    }

	    _createClass(Title, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'header',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    this.props.title
	                )
	            );
	        }
	    }]);

	    return Title;
	}(_react2.default.Component);

	exports.default = Title;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _button = __webpack_require__(3);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Footer(props) {
		return _react2.default.createElement(
			'footer',
			null,
			props.children
		);
	}

	exports.default = Footer;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Viewer = function (_React$Component) {
	    _inherits(Viewer, _React$Component);

	    function Viewer(props) {
	        _classCallCheck(this, Viewer);

	        var _this = _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).call(this, props));

	        _this.displayName = 'Viewer';
	        _this._viewerContainer = null;
	        return _this;
	    }

	    _createClass(Viewer, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { id: 'viewerContainer', ref: function ref(c) {
	                        return _this2._viewerContainer = c;
	                    } },
	                _react2.default.createElement('div', { id: 'viewer', className: 'pdfViewer' })
	            );
	        }
	    }, {
	        key: 'viewerContainer',
	        get: function get() {
	            return this._viewerContainer;
	        },
	        set: function set(x) {
	            console.log('noop');
	        }
	    }]);

	    return Viewer;
	}(_react2.default.Component);

	exports.default = Viewer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};console.log('PDFJS-viewer');/* Copyright 2014 Mozilla Foundation
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *//* jshint globalstrict: false *//* umdutils ignore */(function(root,factory){factory(exports,__webpack_require__(9));})(undefined,function(exports,pdfjsLib){var pdfViewerLibs={pdfjsWebPDFJS:pdfjsLib};(function(){(function(root,factory){{factory(root.pdfjsWebPDFRenderingQueue={});}})(this,function(exports){var CLEANUP_TIMEOUT=30000;var RenderingStates={INITIAL:0,RUNNING:1,PAUSED:2,FINISHED:3};/**
	             * Controls rendering of the views for pages and thumbnails.
	             * @class
	             */var PDFRenderingQueue=function PDFRenderingQueueClosure(){/**
	                 * @constructs
	                 */function PDFRenderingQueue(){this.pdfViewer=null;this.pdfThumbnailViewer=null;this.onIdle=null;this.highestPriorityPage=null;this.idleTimeout=null;this.printing=false;this.isThumbnailViewEnabled=false;}PDFRenderingQueue.prototype=/** @lends PDFRenderingQueue.prototype */{/**
	                     * @param {PDFViewer} pdfViewer
	                     */setViewer:function PDFRenderingQueue_setViewer(pdfViewer){this.pdfViewer=pdfViewer;},/**
	                     * @param {PDFThumbnailViewer} pdfThumbnailViewer
	                     */setThumbnailViewer:function PDFRenderingQueue_setThumbnailViewer(pdfThumbnailViewer){this.pdfThumbnailViewer=pdfThumbnailViewer;},/**
	                     * @param {IRenderableView} view
	                     * @returns {boolean}
	                     */isHighestPriority:function PDFRenderingQueue_isHighestPriority(view){return this.highestPriorityPage===view.renderingId;},renderHighestPriority:function PDFRenderingQueue_renderHighestPriority(currentlyVisiblePages){if(this.idleTimeout){clearTimeout(this.idleTimeout);this.idleTimeout=null;}// Pages have a higher priority than thumbnails, so check them first.
	if(this.pdfViewer.forceRendering(currentlyVisiblePages)){return;}// No pages needed rendering so check thumbnails.
	if(this.pdfThumbnailViewer&&this.isThumbnailViewEnabled){if(this.pdfThumbnailViewer.forceRendering()){return;}}if(this.printing){// If printing is currently ongoing do not reschedule cleanup.
	return;}if(this.onIdle){this.idleTimeout=setTimeout(this.onIdle.bind(this),CLEANUP_TIMEOUT);}},getHighestPriority:function PDFRenderingQueue_getHighestPriority(visible,views,scrolledDown){// The state has changed figure out which page has the highest priority to
	// render next (if any).
	// Priority:
	// 1 visible pages
	// 2 if last scrolled down page after the visible pages
	// 2 if last scrolled up page before the visible pages
	var visibleViews=visible.views;var numVisible=visibleViews.length;if(numVisible===0){return false;}for(var i=0;i<numVisible;++i){var view=visibleViews[i].view;if(!this.isViewFinished(view)){return view;}}// All the visible views have rendered, try to render next/previous pages.
	if(scrolledDown){var nextPageIndex=visible.last.id;// ID's start at 1 so no need to add 1.
	if(views[nextPageIndex]&&!this.isViewFinished(views[nextPageIndex])){return views[nextPageIndex];}}else{var previousPageIndex=visible.first.id-2;if(views[previousPageIndex]&&!this.isViewFinished(views[previousPageIndex])){return views[previousPageIndex];}}// Everything that needs to be rendered has been.
	return null;},/**
	                     * @param {IRenderableView} view
	                     * @returns {boolean}
	                     */isViewFinished:function PDFRenderingQueue_isViewFinished(view){return view.renderingState===RenderingStates.FINISHED;},/**
	                     * Render a page or thumbnail view. This calls the appropriate function
	                     * based on the views state. If the view is already rendered it will return
	                     * false.
	                     * @param {IRenderableView} view
	                     */renderView:function PDFRenderingQueue_renderView(view){var state=view.renderingState;switch(state){case RenderingStates.FINISHED:return false;case RenderingStates.PAUSED:this.highestPriorityPage=view.renderingId;view.resume();break;case RenderingStates.RUNNING:this.highestPriorityPage=view.renderingId;break;case RenderingStates.INITIAL:this.highestPriorityPage=view.renderingId;var continueRendering=function(){this.renderHighestPriority();}.bind(this);view.draw().then(continueRendering,continueRendering);break;}return true;}};return PDFRenderingQueue;}();exports.RenderingStates=RenderingStates;exports.PDFRenderingQueue=PDFRenderingQueue;});(function(root,factory){{factory(root.pdfjsWebDownloadManager={},root.pdfjsWebPDFJS);}})(this,function(exports,pdfjsLib){function download(blobUrl,filename){var a=document.createElement('a');if(a.click){// Use a.click() if available. Otherwise, Chrome might show
	// "Unsafe JavaScript attempt to initiate a navigation change
	//  for frame with URL" and not open the PDF at all.
	// Supported by (not mentioned = untested):
	// - Firefox 6 - 19 (4- does not support a.click, 5 ignores a.click)
	// - Chrome 19 - 26 (18- does not support a.click)
	// - Opera 9 - 12.15
	// - Internet Explorer 6 - 10
	// - Safari 6 (5.1- does not support a.click)
	a.href=blobUrl;a.target='_parent';// Use a.download if available. This increases the likelihood that
	// the file is downloaded instead of opened by another PDF plugin.
	if('download'in a){a.download=filename;}// <a> must be in the document for IE and recent Firefox versions.
	// (otherwise .click() is ignored)
	(document.body||document.documentElement).appendChild(a);a.click();a.parentNode.removeChild(a);}else{if(window.top===window&&blobUrl.split('#')[0]===window.location.href.split('#')[0]){// If _parent == self, then opening an identical URL with different
	// location hash will only cause a navigation, not a download.
	var padCharacter=blobUrl.indexOf('?')===-1?'?':'&';blobUrl=blobUrl.replace(/#|$/,padCharacter+'$&');}window.open(blobUrl,'_parent');}}function DownloadManager(){}DownloadManager.prototype={downloadUrl:function DownloadManager_downloadUrl(url,filename){if(!pdfjsLib.isValidUrl(url,true)){return;// restricted/invalid URL
	}download(url+'#pdfjs.action=download',filename);},downloadData:function DownloadManager_downloadData(data,filename,contentType){if(navigator.msSaveBlob){// IE10 and above
	return navigator.msSaveBlob(new Blob([data],{type:contentType}),filename);}var blobUrl=pdfjsLib.createObjectURL(data,contentType,pdfjsLib.PDFJS.disableCreateObjectURL);download(blobUrl,filename);},download:function DownloadManager_download(blob,url,filename){if(!URL){// URL.createObjectURL is not supported
	this.downloadUrl(url,filename);return;}if(navigator.msSaveBlob){// IE10 / IE11
	if(!navigator.msSaveBlob(blob,filename)){this.downloadUrl(url,filename);}return;}var blobUrl=URL.createObjectURL(blob);download(blobUrl,filename);}};exports.DownloadManager=DownloadManager;});(function(root,factory){{factory(root.pdfjsWebUIUtils={},root.pdfjsWebPDFJS);}})(this,function(exports,pdfjsLib){var CSS_UNITS=96.0/72.0;var DEFAULT_SCALE_VALUE='auto';var DEFAULT_SCALE=1.0;var UNKNOWN_SCALE=0;var MAX_AUTO_SCALE=1.25;var SCROLLBAR_PADDING=40;var VERTICAL_PADDING=5;var mozL10n=document.mozL10n||document.webL10n;var PDFJS=pdfjsLib.PDFJS;/**
	             * Disables fullscreen support, and by extension Presentation Mode,
	             * in browsers which support the fullscreen API.
	             * @var {boolean}
	             */PDFJS.disableFullscreen=PDFJS.disableFullscreen===undefined?false:PDFJS.disableFullscreen;/**
	             * Enables CSS only zooming.
	             * @var {boolean}
	             */PDFJS.useOnlyCssZoom=PDFJS.useOnlyCssZoom===undefined?false:PDFJS.useOnlyCssZoom;/**
	             * The maximum supported canvas size in total pixels e.g. width * height.
	             * The default value is 4096 * 4096. Use -1 for no limit.
	             * @var {number}
	             */PDFJS.maxCanvasPixels=PDFJS.maxCanvasPixels===undefined?16777216:PDFJS.maxCanvasPixels;/**
	             * Disables saving of the last position of the viewed PDF.
	             * @var {boolean}
	             */PDFJS.disableHistory=PDFJS.disableHistory===undefined?false:PDFJS.disableHistory;/**
	             * Disables creation of the text layer that used for text selection and search.
	             * @var {boolean}
	             */PDFJS.disableTextLayer=PDFJS.disableTextLayer===undefined?false:PDFJS.disableTextLayer;/**
	             * Disables maintaining the current position in the document when zooming.
	             */PDFJS.ignoreCurrentPositionOnZoom=PDFJS.ignoreCurrentPositionOnZoom===undefined?false:PDFJS.ignoreCurrentPositionOnZoom;/**
	             * Interface locale settings.
	             * @var {string}
	             */PDFJS.locale=PDFJS.locale===undefined?navigator.language:PDFJS.locale;/**
	             * Returns scale factor for the canvas. It makes sense for the HiDPI displays.
	             * @return {Object} The object with horizontal (sx) and vertical (sy)
	                                scales. The scaled property is set to false if scaling is
	                                not required, true otherwise.
	             */function getOutputScale(ctx){var devicePixelRatio=window.devicePixelRatio||1;var backingStoreRatio=ctx.webkitBackingStorePixelRatio||ctx.mozBackingStorePixelRatio||ctx.msBackingStorePixelRatio||ctx.oBackingStorePixelRatio||ctx.backingStorePixelRatio||1;var pixelRatio=devicePixelRatio/backingStoreRatio;return{sx:pixelRatio,sy:pixelRatio,scaled:pixelRatio!==1};}/**
	             * Scrolls specified element into view of its parent.
	             * @param {Object} element - The element to be visible.
	             * @param {Object} spot - An object with optional top and left properties,
	             *   specifying the offset from the top left edge.
	             * @param {boolean} skipOverflowHiddenElements - Ignore elements that have
	             *   the CSS rule `overflow: hidden;` set. The default is false.
	             */function scrollIntoView(element,spot,skipOverflowHiddenElements){// Assuming offsetParent is available (it's not available when viewer is in
	// hidden iframe or object). We have to scroll: if the offsetParent is not set
	// producing the error. See also animationStartedClosure.
	var parent=element.offsetParent;if(!parent){console.error('offsetParent is not set -- cannot scroll');return;}var checkOverflow=skipOverflowHiddenElements||false;var offsetY=element.offsetTop+element.clientTop;var offsetX=element.offsetLeft+element.clientLeft;while(parent.clientHeight===parent.scrollHeight||checkOverflow&&getComputedStyle(parent).overflow==='hidden'){if(parent.dataset._scaleY){offsetY/=parent.dataset._scaleY;offsetX/=parent.dataset._scaleX;}offsetY+=parent.offsetTop;offsetX+=parent.offsetLeft;parent=parent.offsetParent;if(!parent){return;// no need to scroll
	}}if(spot){if(spot.top!==undefined){offsetY+=spot.top;}if(spot.left!==undefined){offsetX+=spot.left;parent.scrollLeft=offsetX;}}parent.scrollTop=offsetY;}/**
	             * Helper function to start monitoring the scroll event and converting them into
	             * PDF.js friendly one: with scroll debounce and scroll direction.
	             */function watchScroll(viewAreaElement,callback){var debounceScroll=function debounceScroll(evt){if(rAF){return;}// schedule an invocation of scroll for next animation frame.
	rAF=window.requestAnimationFrame(function viewAreaElementScrolled(){rAF=null;var currentY=viewAreaElement.scrollTop;var lastY=state.lastY;if(currentY!==lastY){state.down=currentY>lastY;}state.lastY=currentY;callback(state);});};var state={down:true,lastY:viewAreaElement.scrollTop,_eventHandler:debounceScroll};var rAF=null;viewAreaElement.addEventListener('scroll',debounceScroll,true);return state;}/**
	             * Helper function to parse query string (e.g. ?param1=value&parm2=...).
	             */function parseQueryString(query){var parts=query.split('&');var params={};for(var i=0,ii=parts.length;i<ii;++i){var param=parts[i].split('=');var key=param[0].toLowerCase();var value=param.length>1?param[1]:null;params[decodeURIComponent(key)]=decodeURIComponent(value);}return params;}/**
	             * Use binary search to find the index of the first item in a given array which
	             * passes a given condition. The items are expected to be sorted in the sense
	             * that if the condition is true for one item in the array, then it is also true
	             * for all following items.
	             *
	             * @returns {Number} Index of the first array element to pass the test,
	             *                   or |items.length| if no such element exists.
	             */function binarySearchFirstItem(items,condition){var minIndex=0;var maxIndex=items.length-1;if(items.length===0||!condition(items[maxIndex])){return items.length;}if(condition(items[minIndex])){return minIndex;}while(minIndex<maxIndex){var currentIndex=minIndex+maxIndex>>1;var currentItem=items[currentIndex];if(condition(currentItem)){maxIndex=currentIndex;}else{minIndex=currentIndex+1;}}return minIndex;/* === maxIndex */}/**
	             *  Approximates float number as a fraction using Farey sequence (max order
	             *  of 8).
	             *  @param {number} x - Positive float number.
	             *  @returns {Array} Estimated fraction: the first array item is a numerator,
	             *                   the second one is a denominator.
	             */function approximateFraction(x){// Fast paths for int numbers or their inversions.
	if(Math.floor(x)===x){return[x,1];}var xinv=1/x;var limit=8;if(xinv>limit){return[1,limit];}else if(Math.floor(xinv)===xinv){return[1,xinv];}var x_=x>1?xinv:x;// a/b and c/d are neighbours in Farey sequence.
	var a=0,b=1,c=1,d=1;// Limiting search to order 8.
	while(true){// Generating next term in sequence (order of q).
	var p=a+c,q=b+d;if(q>limit){break;}if(x_<=p/q){c=p;d=q;}else{a=p;b=q;}}// Select closest of the neighbours to x.
	if(x_-a/b<c/d-x_){return x_===x?[a,b]:[b,a];}else{return x_===x?[c,d]:[d,c];}}function roundToDivide(x,div){var r=x%div;return r===0?x:Math.round(x-r+div);}/**
	             * Generic helper to find out what elements are visible within a scroll pane.
	             */function getVisibleElements(scrollEl,views,sortByVisibility){var top=scrollEl.scrollTop,bottom=top+scrollEl.clientHeight;var left=scrollEl.scrollLeft,right=left+scrollEl.clientWidth;function isElementBottomBelowViewTop(view){var element=view.div;var elementBottom=element.offsetTop+element.clientTop+element.clientHeight;return elementBottom>top;}var visible=[],view,element;var currentHeight,viewHeight,hiddenHeight,percentHeight;var currentWidth,viewWidth;var firstVisibleElementInd=views.length===0?0:binarySearchFirstItem(views,isElementBottomBelowViewTop);for(var i=firstVisibleElementInd,ii=views.length;i<ii;i++){view=views[i];element=view.div;currentHeight=element.offsetTop+element.clientTop;viewHeight=element.clientHeight;if(currentHeight>bottom){break;}currentWidth=element.offsetLeft+element.clientLeft;viewWidth=element.clientWidth;if(currentWidth+viewWidth<left||currentWidth>right){continue;}hiddenHeight=Math.max(0,top-currentHeight)+Math.max(0,currentHeight+viewHeight-bottom);percentHeight=(viewHeight-hiddenHeight)*100/viewHeight|0;visible.push({id:view.id,x:currentWidth,y:currentHeight,view:view,percent:percentHeight});}var first=visible[0];var last=visible[visible.length-1];if(sortByVisibility){visible.sort(function(a,b){var pc=a.percent-b.percent;if(Math.abs(pc)>0.001){return-pc;}return a.id-b.id;// ensure stability
	});}return{first:first,last:last,views:visible};}/**
	             * Event handler to suppress context menu.
	             */function noContextMenuHandler(e){e.preventDefault();}/**
	             * Returns the filename or guessed filename from the url (see issue 3455).
	             * url {String} The original PDF location.
	             * @return {String} Guessed PDF file name.
	             */function getPDFFileNameFromURL(url){var reURI=/^(?:([^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;//            SCHEME      HOST         1.PATH  2.QUERY   3.REF
	// Pattern to get last matching NAME.pdf
	var reFilename=/[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;var splitURI=reURI.exec(url);var suggestedFilename=reFilename.exec(splitURI[1])||reFilename.exec(splitURI[2])||reFilename.exec(splitURI[3]);if(suggestedFilename){suggestedFilename=suggestedFilename[0];if(suggestedFilename.indexOf('%')!==-1){// URL-encoded %2Fpath%2Fto%2Ffile.pdf should be file.pdf
	try{suggestedFilename=reFilename.exec(decodeURIComponent(suggestedFilename))[0];}catch(e){// Possible (extremely rare) errors:
	// URIError "Malformed URI", e.g. for "%AA.pdf"
	// TypeError "null has no properties", e.g. for "%2F.pdf"
	}}}return suggestedFilename||'document.pdf';}function normalizeWheelEventDelta(evt){var delta=Math.sqrt(evt.deltaX*evt.deltaX+evt.deltaY*evt.deltaY);var angle=Math.atan2(evt.deltaY,evt.deltaX);if(-0.25*Math.PI<angle&&angle<0.75*Math.PI){// All that is left-up oriented has to change the sign.
	delta=-delta;}var MOUSE_DOM_DELTA_PIXEL_MODE=0;var MOUSE_DOM_DELTA_LINE_MODE=1;var MOUSE_PIXELS_PER_LINE=30;var MOUSE_LINES_PER_PAGE=30;// Converts delta to per-page units
	if(evt.deltaMode===MOUSE_DOM_DELTA_PIXEL_MODE){delta/=MOUSE_PIXELS_PER_LINE*MOUSE_LINES_PER_PAGE;}else if(evt.deltaMode===MOUSE_DOM_DELTA_LINE_MODE){delta/=MOUSE_LINES_PER_PAGE;}return delta;}/**
	             * Simple event bus for an application. Listeners are attached using the
	             * `on` and `off` methods. To raise an event, the `dispatch` method shall be
	             * used.
	             */var EventBus=function EventBusClosure(){function EventBus(){this._listeners=Object.create(null);}EventBus.prototype={on:function EventBus_on(eventName,listener){var eventListeners=this._listeners[eventName];if(!eventListeners){eventListeners=[];this._listeners[eventName]=eventListeners;}eventListeners.push(listener);},off:function EventBus_on(eventName,listener){var eventListeners=this._listeners[eventName];var i;if(!eventListeners||(i=eventListeners.indexOf(listener))<0){return;}eventListeners.splice(i,1);},dispatch:function EventBus_dispath(eventName){var eventListeners=this._listeners[eventName];if(!eventListeners||eventListeners.length===0){return;}// Passing all arguments after the eventName to the listeners.
	var args=Array.prototype.slice.call(arguments,1);// Making copy of the listeners array in case if it will be modified
	// during dispatch.
	eventListeners.slice(0).forEach(function(listener){listener.apply(null,args);});}};return EventBus;}();var ProgressBar=function ProgressBarClosure(){function clamp(v,min,max){return Math.min(Math.max(v,min),max);}function ProgressBar(id,opts){this.visible=true;// Fetch the sub-elements for later.
	this.div=document.querySelector(id+' .progress');// Get the loading bar element, so it can be resized to fit the viewer.
	this.bar=this.div.parentNode;// Get options, with sensible defaults.
	this.height=opts.height||100;this.width=opts.width||100;this.units=opts.units||'%';// Initialize heights.
	this.div.style.height=this.height+this.units;this.percent=0;}ProgressBar.prototype={updateBar:function ProgressBar_updateBar(){if(this._indeterminate){this.div.classList.add('indeterminate');this.div.style.width=this.width+this.units;return;}this.div.classList.remove('indeterminate');var progressSize=this.width*this._percent/100;this.div.style.width=progressSize+this.units;},get percent(){return this._percent;},set percent(val){this._indeterminate=isNaN(val);this._percent=clamp(val,0,100);this.updateBar();},setWidth:function ProgressBar_setWidth(viewer){if(viewer){var container=viewer.parentNode;var scrollbarWidth=container.offsetWidth-viewer.offsetWidth;if(scrollbarWidth>0){this.bar.setAttribute('style','width: calc(100% - '+scrollbarWidth+'px);');}}},hide:function ProgressBar_hide(){if(!this.visible){return;}this.visible=false;this.bar.classList.add('hidden');document.body.classList.remove('loadingInProgress');},show:function ProgressBar_show(){if(this.visible){return;}this.visible=true;document.body.classList.add('loadingInProgress');this.bar.classList.remove('hidden');}};return ProgressBar;}();exports.CSS_UNITS=CSS_UNITS;exports.DEFAULT_SCALE_VALUE=DEFAULT_SCALE_VALUE;exports.DEFAULT_SCALE=DEFAULT_SCALE;exports.UNKNOWN_SCALE=UNKNOWN_SCALE;exports.MAX_AUTO_SCALE=MAX_AUTO_SCALE;exports.SCROLLBAR_PADDING=SCROLLBAR_PADDING;exports.VERTICAL_PADDING=VERTICAL_PADDING;exports.mozL10n=mozL10n;exports.EventBus=EventBus;exports.ProgressBar=ProgressBar;exports.getPDFFileNameFromURL=getPDFFileNameFromURL;exports.noContextMenuHandler=noContextMenuHandler;exports.parseQueryString=parseQueryString;exports.getVisibleElements=getVisibleElements;exports.roundToDivide=roundToDivide;exports.approximateFraction=approximateFraction;exports.getOutputScale=getOutputScale;exports.scrollIntoView=scrollIntoView;exports.watchScroll=watchScroll;exports.binarySearchFirstItem=binarySearchFirstItem;exports.normalizeWheelEventDelta=normalizeWheelEventDelta;});(function(root,factory){{factory(root.pdfjsWebDOMEvents={},root.pdfjsWebUIUtils);}})(this,function(exports,uiUtils){var EventBus=uiUtils.EventBus;// Attaching to the application event bus to dispatch events to the DOM for
	// backwards viewer API compatibility.
	function attachDOMEventsToEventBus(eventBus){eventBus.on('documentload',function(){var event=document.createEvent('CustomEvent');event.initCustomEvent('documentload',true,true,{});window.dispatchEvent(event);});eventBus.on('pagerendered',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('pagerendered',true,true,{pageNumber:e.pageNumber,cssTransform:e.cssTransform});e.source.div.dispatchEvent(event);});eventBus.on('textlayerrendered',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('textlayerrendered',true,true,{pageNumber:e.pageNumber});e.source.textLayerDiv.dispatchEvent(event);});eventBus.on('pagechange',function(e){var event=document.createEvent('UIEvents');event.initUIEvent('pagechange',true,true,window,0);event.pageNumber=e.pageNumber;e.source.container.dispatchEvent(event);});eventBus.on('pagesinit',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('pagesinit',true,true,null);e.source.container.dispatchEvent(event);});eventBus.on('pagesloaded',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('pagesloaded',true,true,{pagesCount:e.pagesCount});e.source.container.dispatchEvent(event);});eventBus.on('scalechange',function(e){var event=document.createEvent('UIEvents');event.initUIEvent('scalechange',true,true,window,0);event.scale=e.scale;event.presetValue=e.presetValue;e.source.container.dispatchEvent(event);});eventBus.on('updateviewarea',function(e){var event=document.createEvent('UIEvents');event.initUIEvent('updateviewarea',true,true,window,0);event.location=e.location;e.source.container.dispatchEvent(event);});eventBus.on('find',function(e){if(e.source===window){return;// event comes from FirefoxCom, no need to replicate
	}var event=document.createEvent('CustomEvent');event.initCustomEvent('find'+e.type,true,true,{query:e.query,phraseSearch:e.phraseSearch,caseSensitive:e.caseSensitive,highlightAll:e.highlightAll,findPrevious:e.findPrevious});window.dispatchEvent(event);});eventBus.on('attachmentsloaded',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('attachmentsloaded',true,true,{attachmentsCount:e.attachmentsCount});e.source.container.dispatchEvent(event);});eventBus.on('sidebarviewchanged',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('sidebarviewchanged',true,true,{view:e.view});e.source.outerContainer.dispatchEvent(event);});eventBus.on('pagemode',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('pagemode',true,true,{mode:e.mode});e.source.pdfViewer.container.dispatchEvent(event);});eventBus.on('namedaction',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('namedaction',true,true,{action:e.action});e.source.pdfViewer.container.dispatchEvent(event);});eventBus.on('presentationmodechanged',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('presentationmodechanged',true,true,{active:e.active,switchInProgress:e.switchInProgress});window.dispatchEvent(event);});eventBus.on('outlineloaded',function(e){var event=document.createEvent('CustomEvent');event.initCustomEvent('outlineloaded',true,true,{outlineCount:e.outlineCount});e.source.container.dispatchEvent(event);});}var globalEventBus=null;function getGlobalEventBus(){if(globalEventBus){return globalEventBus;}globalEventBus=new EventBus();attachDOMEventsToEventBus(globalEventBus);return globalEventBus;}exports.attachDOMEventsToEventBus=attachDOMEventsToEventBus;exports.getGlobalEventBus=getGlobalEventBus;});(function(root,factory){{factory(root.pdfjsWebPDFFindController={},root.pdfjsWebUIUtils);}})(this,function(exports,uiUtils){var scrollIntoView=uiUtils.scrollIntoView;var FindStates={FIND_FOUND:0,FIND_NOTFOUND:1,FIND_WRAPPED:2,FIND_PENDING:3};var FIND_SCROLL_OFFSET_TOP=-50;var FIND_SCROLL_OFFSET_LEFT=-400;var CHARACTERS_TO_NORMALIZE={'\u2018':'\'',// Left single quotation mark
	'\u2019':'\'',// Right single quotation mark
	'\u201A':'\'',// Single low-9 quotation mark
	'\u201B':'\'',// Single high-reversed-9 quotation mark
	'\u201C':'"',// Left double quotation mark
	'\u201D':'"',// Right double quotation mark
	'\u201E':'"',// Double low-9 quotation mark
	'\u201F':'"',// Double high-reversed-9 quotation mark
	'\xBC':'1/4',// Vulgar fraction one quarter
	'\xBD':'1/2',// Vulgar fraction one half
	'\xBE':'3/4'};/**
	             * Provides "search" or "find" functionality for the PDF.
	             * This object actually performs the search for a given string.
	             */var PDFFindController=function PDFFindControllerClosure(){function PDFFindController(options){this.pdfViewer=options.pdfViewer||null;this.onUpdateResultsCount=null;this.onUpdateState=null;this.reset();// Compile the regular expression for text normalization once.
	var replace=Object.keys(CHARACTERS_TO_NORMALIZE).join('');this.normalizationRegex=new RegExp('['+replace+']','g');}PDFFindController.prototype={reset:function PDFFindController_reset(){this.startedTextExtraction=false;this.extractTextPromises=[];this.pendingFindMatches=Object.create(null);this.active=false;// If active, find results will be highlighted.
	this.pageContents=[];// Stores the text for each page.
	this.pageMatches=[];this.pageMatchesLength=null;this.matchCount=0;this.selected={// Currently selected match.
	pageIdx:-1,matchIdx:-1};this.offset={// Where the find algorithm currently is in the document.
	pageIdx:null,matchIdx:null};this.pagesToSearch=null;this.resumePageIdx=null;this.state=null;this.dirtyMatch=false;this.findTimeout=null;this.firstPagePromise=new Promise(function(resolve){this.resolveFirstPage=resolve;}.bind(this));},normalize:function PDFFindController_normalize(text){return text.replace(this.normalizationRegex,function(ch){return CHARACTERS_TO_NORMALIZE[ch];});},// Helper for multiple search - fills matchesWithLength array
	// and takes into account cases when one search term
	// include another search term (for example, "tamed tame" or "this is").
	// Looking for intersecting terms in the 'matches' and
	// leave elements with a longer match-length.
	_prepareMatches:function PDFFindController_prepareMatches(matchesWithLength,matches,matchesLength){function isSubTerm(matchesWithLength,currentIndex){var currentElem,prevElem,nextElem;currentElem=matchesWithLength[currentIndex];nextElem=matchesWithLength[currentIndex+1];// checking for cases like "TAMEd TAME"
	if(currentIndex<matchesWithLength.length-1&&currentElem.match===nextElem.match){currentElem.skipped=true;return true;}// checking for cases like "thIS IS"
	for(var i=currentIndex-1;i>=0;i--){prevElem=matchesWithLength[i];if(prevElem.skipped){continue;}if(prevElem.match+prevElem.matchLength<currentElem.match){break;}if(prevElem.match+prevElem.matchLength>=currentElem.match+currentElem.matchLength){currentElem.skipped=true;return true;}}return false;}var i,len;// Sorting array of objects { match: <match>, matchLength: <matchLength> }
	// in increasing index first and then the lengths.
	matchesWithLength.sort(function(a,b){return a.match===b.match?a.matchLength-b.matchLength:a.match-b.match;});for(i=0,len=matchesWithLength.length;i<len;i++){if(isSubTerm(matchesWithLength,i)){continue;}matches.push(matchesWithLength[i].match);matchesLength.push(matchesWithLength[i].matchLength);}},calcFindPhraseMatch:function PDFFindController_calcFindPhraseMatch(query,pageIndex,pageContent){var matches=[];var queryLen=query.length;var matchIdx=-queryLen;while(true){matchIdx=pageContent.indexOf(query,matchIdx+queryLen);if(matchIdx===-1){break;}matches.push(matchIdx);}this.pageMatches[pageIndex]=matches;},calcFindWordMatch:function PDFFindController_calcFindWordMatch(query,pageIndex,pageContent){var matchesWithLength=[];// Divide the query into pieces and search for text on each piece.
	var queryArray=query.match(/\S+/g);var subquery,subqueryLen,matchIdx;for(var i=0,len=queryArray.length;i<len;i++){subquery=queryArray[i];subqueryLen=subquery.length;matchIdx=-subqueryLen;while(true){matchIdx=pageContent.indexOf(subquery,matchIdx+subqueryLen);if(matchIdx===-1){break;}// Other searches do not, so we store the length.
	matchesWithLength.push({match:matchIdx,matchLength:subqueryLen,skipped:false});}}// Prepare arrays for store the matches.
	if(!this.pageMatchesLength){this.pageMatchesLength=[];}this.pageMatchesLength[pageIndex]=[];this.pageMatches[pageIndex]=[];// Sort matchesWithLength, clean up intersecting terms
	// and put the result into the two arrays.
	this._prepareMatches(matchesWithLength,this.pageMatches[pageIndex],this.pageMatchesLength[pageIndex]);},calcFindMatch:function PDFFindController_calcFindMatch(pageIndex){var pageContent=this.normalize(this.pageContents[pageIndex]);var query=this.normalize(this.state.query);var caseSensitive=this.state.caseSensitive;var phraseSearch=this.state.phraseSearch;var queryLen=query.length;if(queryLen===0){// Do nothing: the matches should be wiped out already.
	return;}if(!caseSensitive){pageContent=pageContent.toLowerCase();query=query.toLowerCase();}if(phraseSearch){this.calcFindPhraseMatch(query,pageIndex,pageContent);}else{this.calcFindWordMatch(query,pageIndex,pageContent);}this.updatePage(pageIndex);if(this.resumePageIdx===pageIndex){this.resumePageIdx=null;this.nextPageMatch();}// Update the matches count
	if(this.pageMatches[pageIndex].length>0){this.matchCount+=this.pageMatches[pageIndex].length;this.updateUIResultsCount();}},extractText:function PDFFindController_extractText(){if(this.startedTextExtraction){return;}this.startedTextExtraction=true;this.pageContents=[];var extractTextPromisesResolves=[];var numPages=this.pdfViewer.pagesCount;for(var i=0;i<numPages;i++){this.extractTextPromises.push(new Promise(function(resolve){extractTextPromisesResolves.push(resolve);}));}var self=this;function extractPageText(pageIndex){self.pdfViewer.getPageTextContent(pageIndex).then(function textContentResolved(textContent){var textItems=textContent.items;var str=[];for(var i=0,len=textItems.length;i<len;i++){str.push(textItems[i].str);}// Store the pageContent as a string.
	self.pageContents.push(str.join(''));extractTextPromisesResolves[pageIndex](pageIndex);if(pageIndex+1<self.pdfViewer.pagesCount){extractPageText(pageIndex+1);}});}extractPageText(0);},executeCommand:function PDFFindController_executeCommand(cmd,state){if(this.state===null||cmd!=='findagain'){this.dirtyMatch=true;}this.state=state;this.updateUIState(FindStates.FIND_PENDING);this.firstPagePromise.then(function(){this.extractText();clearTimeout(this.findTimeout);if(cmd==='find'){// Only trigger the find action after 250ms of silence.
	this.findTimeout=setTimeout(this.nextMatch.bind(this),250);}else{this.nextMatch();}}.bind(this));},updatePage:function PDFFindController_updatePage(index){if(this.selected.pageIdx===index){// If the page is selected, scroll the page into view, which triggers
	// rendering the page, which adds the textLayer. Once the textLayer is
	// build, it will scroll onto the selected match.
	this.pdfViewer.currentPageNumber=index+1;}var page=this.pdfViewer.getPageView(index);if(page.textLayer){page.textLayer.updateMatches();}},nextMatch:function PDFFindController_nextMatch(){var previous=this.state.findPrevious;var currentPageIndex=this.pdfViewer.currentPageNumber-1;var numPages=this.pdfViewer.pagesCount;this.active=true;if(this.dirtyMatch){// Need to recalculate the matches, reset everything.
	this.dirtyMatch=false;this.selected.pageIdx=this.selected.matchIdx=-1;this.offset.pageIdx=currentPageIndex;this.offset.matchIdx=null;this.hadMatch=false;this.resumePageIdx=null;this.pageMatches=[];this.matchCount=0;this.pageMatchesLength=null;var self=this;for(var i=0;i<numPages;i++){// Wipe out any previous highlighted matches.
	this.updatePage(i);// As soon as the text is extracted start finding the matches.
	if(!(i in this.pendingFindMatches)){this.pendingFindMatches[i]=true;this.extractTextPromises[i].then(function(pageIdx){delete self.pendingFindMatches[pageIdx];self.calcFindMatch(pageIdx);});}}}// If there's no query there's no point in searching.
	if(this.state.query===''){this.updateUIState(FindStates.FIND_FOUND);return;}// If we're waiting on a page, we return since we can't do anything else.
	if(this.resumePageIdx){return;}var offset=this.offset;// Keep track of how many pages we should maximally iterate through.
	this.pagesToSearch=numPages;// If there's already a matchIdx that means we are iterating through a
	// page's matches.
	if(offset.matchIdx!==null){var numPageMatches=this.pageMatches[offset.pageIdx].length;if(!previous&&offset.matchIdx+1<numPageMatches||previous&&offset.matchIdx>0){// The simple case; we just have advance the matchIdx to select
	// the next match on the page.
	this.hadMatch=true;offset.matchIdx=previous?offset.matchIdx-1:offset.matchIdx+1;this.updateMatch(true);return;}// We went beyond the current page's matches, so we advance to
	// the next page.
	this.advanceOffsetPage(previous);}// Start searching through the page.
	this.nextPageMatch();},matchesReady:function PDFFindController_matchesReady(matches){var offset=this.offset;var numMatches=matches.length;var previous=this.state.findPrevious;if(numMatches){// There were matches for the page, so initialize the matchIdx.
	this.hadMatch=true;offset.matchIdx=previous?numMatches-1:0;this.updateMatch(true);return true;}else{// No matches, so attempt to search the next page.
	this.advanceOffsetPage(previous);if(offset.wrapped){offset.matchIdx=null;if(this.pagesToSearch<0){// No point in wrapping again, there were no matches.
	this.updateMatch(false);// while matches were not found, searching for a page
	// with matches should nevertheless halt.
	return true;}}// Matches were not found (and searching is not done).
	return false;}},/**
	                     * The method is called back from the text layer when match presentation
	                     * is updated.
	                     * @param {number} pageIndex - page index.
	                     * @param {number} index - match index.
	                     * @param {Array} elements - text layer div elements array.
	                     * @param {number} beginIdx - start index of the div array for the match.
	                     */updateMatchPosition:function PDFFindController_updateMatchPosition(pageIndex,index,elements,beginIdx){if(this.selected.matchIdx===index&&this.selected.pageIdx===pageIndex){var spot={top:FIND_SCROLL_OFFSET_TOP,left:FIND_SCROLL_OFFSET_LEFT};scrollIntoView(elements[beginIdx],spot,/* skipOverflowHiddenElements = */true);}},nextPageMatch:function PDFFindController_nextPageMatch(){if(this.resumePageIdx!==null){console.error('There can only be one pending page.');}do{var pageIdx=this.offset.pageIdx;var matches=this.pageMatches[pageIdx];if(!matches){// The matches don't exist yet for processing by "matchesReady",
	// so set a resume point for when they do exist.
	this.resumePageIdx=pageIdx;break;}}while(!this.matchesReady(matches));},advanceOffsetPage:function PDFFindController_advanceOffsetPage(previous){var offset=this.offset;var numPages=this.extractTextPromises.length;offset.pageIdx=previous?offset.pageIdx-1:offset.pageIdx+1;offset.matchIdx=null;this.pagesToSearch--;if(offset.pageIdx>=numPages||offset.pageIdx<0){offset.pageIdx=previous?numPages-1:0;offset.wrapped=true;}},updateMatch:function PDFFindController_updateMatch(found){var state=FindStates.FIND_NOTFOUND;var wrapped=this.offset.wrapped;this.offset.wrapped=false;if(found){var previousPage=this.selected.pageIdx;this.selected.pageIdx=this.offset.pageIdx;this.selected.matchIdx=this.offset.matchIdx;state=wrapped?FindStates.FIND_WRAPPED:FindStates.FIND_FOUND;// Update the currently selected page to wipe out any selected matches.
	if(previousPage!==-1&&previousPage!==this.selected.pageIdx){this.updatePage(previousPage);}}this.updateUIState(state,this.state.findPrevious);if(this.selected.pageIdx!==-1){this.updatePage(this.selected.pageIdx);}},updateUIResultsCount:function PDFFindController_updateUIResultsCount(){if(this.onUpdateResultsCount){this.onUpdateResultsCount(this.matchCount);}},updateUIState:function PDFFindController_updateUIState(state,previous){if(this.onUpdateState){this.onUpdateState(state,previous,this.matchCount);}}};return PDFFindController;}();exports.FindStates=FindStates;exports.PDFFindController=PDFFindController;});(function(root,factory){{factory(root.pdfjsWebPDFHistory={},root.pdfjsWebDOMEvents);}})(this,function(exports,domEvents){function PDFHistory(options){this.linkService=options.linkService;this.eventBus=options.eventBus||domEvents.getGlobalEventBus();this.initialized=false;this.initialDestination=null;this.initialBookmark=null;}PDFHistory.prototype={/**
	                 * @param {string} fingerprint
	                 */initialize:function pdfHistoryInitialize(fingerprint){this.initialized=true;this.reInitialized=false;this.allowHashChange=true;this.historyUnlocked=true;this.isViewerInPresentationMode=false;this.previousHash=window.location.hash.substring(1);this.currentBookmark='';this.currentPage=0;this.updatePreviousBookmark=false;this.previousBookmark='';this.previousPage=0;this.nextHashParam='';this.fingerprint=fingerprint;this.currentUid=this.uid=0;this.current={};var state=window.history.state;if(this._isStateObjectDefined(state)){// This corresponds to navigating back to the document
	// from another page in the browser history.
	if(state.target.dest){this.initialDestination=state.target.dest;}else{this.initialBookmark=state.target.hash;}this.currentUid=state.uid;this.uid=state.uid+1;this.current=state.target;}else{// This corresponds to the loading of a new document.
	if(state&&state.fingerprint&&this.fingerprint!==state.fingerprint){// Reinitialize the browsing history when a new document
	// is opened in the web viewer.
	this.reInitialized=true;}this._pushOrReplaceState({fingerprint:this.fingerprint},true);}var self=this;window.addEventListener('popstate',function pdfHistoryPopstate(evt){if(!self.historyUnlocked){return;}if(evt.state){// Move back/forward in the history.
	self._goTo(evt.state);return;}// If the state is not set, then the user tried to navigate to a
	// different hash by manually editing the URL and pressing Enter, or by
	// clicking on an in-page link (e.g. the "current view" link).
	// Save the current view state to the browser history.
	// Note: In Firefox, history.null could also be null after an in-page
	// navigation to the same URL, and without dispatching the popstate
	// event: https://bugzilla.mozilla.org/show_bug.cgi?id=1183881
	if(self.uid===0){// Replace the previous state if it was not explicitly set.
	var previousParams=self.previousHash&&self.currentBookmark&&self.previousHash!==self.currentBookmark?{hash:self.currentBookmark,page:self.currentPage}:{page:1};replacePreviousHistoryState(previousParams,function(){updateHistoryWithCurrentHash();});}else{updateHistoryWithCurrentHash();}},false);function updateHistoryWithCurrentHash(){self.previousHash=window.location.hash.slice(1);self._pushToHistory({hash:self.previousHash},false,true);self._updatePreviousBookmark();}function replacePreviousHistoryState(params,callback){// To modify the previous history entry, the following happens:
	// 1. history.back()
	// 2. _pushToHistory, which calls history.replaceState( ... )
	// 3. history.forward()
	// Because a navigation via the history API does not immediately update
	// the history state, the popstate event is used for synchronization.
	self.historyUnlocked=false;// Suppress the hashchange event to avoid side effects caused by
	// navigating back and forward.
	self.allowHashChange=false;window.addEventListener('popstate',rewriteHistoryAfterBack);history.back();function rewriteHistoryAfterBack(){window.removeEventListener('popstate',rewriteHistoryAfterBack);window.addEventListener('popstate',rewriteHistoryAfterForward);self._pushToHistory(params,false,true);history.forward();}function rewriteHistoryAfterForward(){window.removeEventListener('popstate',rewriteHistoryAfterForward);self.allowHashChange=true;self.historyUnlocked=true;callback();}}function pdfHistoryBeforeUnload(){var previousParams=self._getPreviousParams(null,true);if(previousParams){var replacePrevious=!self.current.dest&&self.current.hash!==self.previousHash;self._pushToHistory(previousParams,false,replacePrevious);self._updatePreviousBookmark();}// Remove the event listener when navigating away from the document,
	// since 'beforeunload' prevents Firefox from caching the document.
	window.removeEventListener('beforeunload',pdfHistoryBeforeUnload,false);}window.addEventListener('beforeunload',pdfHistoryBeforeUnload,false);window.addEventListener('pageshow',function pdfHistoryPageShow(evt){// If the entire viewer (including the PDF file) is cached in
	// the browser, we need to reattach the 'beforeunload' event listener
	// since the 'DOMContentLoaded' event is not fired on 'pageshow'.
	window.addEventListener('beforeunload',pdfHistoryBeforeUnload,false);},false);self.eventBus.on('presentationmodechanged',function(e){self.isViewerInPresentationMode=e.active;});},clearHistoryState:function pdfHistory_clearHistoryState(){this._pushOrReplaceState(null,true);},_isStateObjectDefined:function pdfHistory_isStateObjectDefined(state){return state&&state.uid>=0&&state.fingerprint&&this.fingerprint===state.fingerprint&&state.target&&state.target.hash?true:false;},_pushOrReplaceState:function pdfHistory_pushOrReplaceState(stateObj,replace){if(replace){window.history.replaceState(stateObj,'',document.URL);}else{window.history.pushState(stateObj,'',document.URL);}},get isHashChangeUnlocked(){if(!this.initialized){return true;}return this.allowHashChange;},_updatePreviousBookmark:function pdfHistory_updatePreviousBookmark(){if(this.updatePreviousBookmark&&this.currentBookmark&&this.currentPage){this.previousBookmark=this.currentBookmark;this.previousPage=this.currentPage;this.updatePreviousBookmark=false;}},updateCurrentBookmark:function pdfHistoryUpdateCurrentBookmark(bookmark,pageNum){if(this.initialized){this.currentBookmark=bookmark.substring(1);this.currentPage=pageNum|0;this._updatePreviousBookmark();}},updateNextHashParam:function pdfHistoryUpdateNextHashParam(param){if(this.initialized){this.nextHashParam=param;}},push:function pdfHistoryPush(params,isInitialBookmark){if(!(this.initialized&&this.historyUnlocked)){return;}if(params.dest&&!params.hash){params.hash=this.current.hash&&this.current.dest&&this.current.dest===params.dest?this.current.hash:this.linkService.getDestinationHash(params.dest).split('#')[1];}if(params.page){params.page|=0;}if(isInitialBookmark){var target=window.history.state.target;if(!target){// Invoked when the user specifies an initial bookmark,
	// thus setting initialBookmark, when the document is loaded.
	this._pushToHistory(params,false);this.previousHash=window.location.hash.substring(1);}this.updatePreviousBookmark=this.nextHashParam?false:true;if(target){// If the current document is reloaded,
	// avoid creating duplicate entries in the history.
	this._updatePreviousBookmark();}return;}if(this.nextHashParam){if(this.nextHashParam===params.hash){this.nextHashParam=null;this.updatePreviousBookmark=true;return;}else{this.nextHashParam=null;}}if(params.hash){if(this.current.hash){if(this.current.hash!==params.hash){this._pushToHistory(params,true);}else{if(!this.current.page&&params.page){this._pushToHistory(params,false,true);}this.updatePreviousBookmark=true;}}else{this._pushToHistory(params,true);}}else if(this.current.page&&params.page&&this.current.page!==params.page){this._pushToHistory(params,true);}},_getPreviousParams:function pdfHistory_getPreviousParams(onlyCheckPage,beforeUnload){if(!(this.currentBookmark&&this.currentPage)){return null;}else if(this.updatePreviousBookmark){this.updatePreviousBookmark=false;}if(this.uid>0&&!(this.previousBookmark&&this.previousPage)){// Prevent the history from getting stuck in the current state,
	// effectively preventing the user from going back/forward in
	// the history.
	//
	// This happens if the current position in the document didn't change
	// when the history was previously updated. The reasons for this are
	// either:
	// 1. The current zoom value is such that the document does not need to,
	//    or cannot, be scrolled to display the destination.
	// 2. The previous destination is broken, and doesn't actally point to a
	//    position within the document.
	//    (This is either due to a bad PDF generator, or the user making a
	//     mistake when entering a destination in the hash parameters.)
	return null;}if(!this.current.dest&&!onlyCheckPage||beforeUnload){if(this.previousBookmark===this.currentBookmark){return null;}}else if(this.current.page||onlyCheckPage){if(this.previousPage===this.currentPage){return null;}}else{return null;}var params={hash:this.currentBookmark,page:this.currentPage};if(this.isViewerInPresentationMode){params.hash=null;}return params;},_stateObj:function pdfHistory_stateObj(params){return{fingerprint:this.fingerprint,uid:this.uid,target:params};},_pushToHistory:function pdfHistory_pushToHistory(params,addPrevious,overwrite){if(!this.initialized){return;}if(!params.hash&&params.page){params.hash='page='+params.page;}if(addPrevious&&!overwrite){var previousParams=this._getPreviousParams();if(previousParams){var replacePrevious=!this.current.dest&&this.current.hash!==this.previousHash;this._pushToHistory(previousParams,false,replacePrevious);}}this._pushOrReplaceState(this._stateObj(params),overwrite||this.uid===0);this.currentUid=this.uid++;this.current=params;this.updatePreviousBookmark=true;},_goTo:function pdfHistory_goTo(state){if(!(this.initialized&&this.historyUnlocked&&this._isStateObjectDefined(state))){return;}if(!this.reInitialized&&state.uid<this.currentUid){var previousParams=this._getPreviousParams(true);if(previousParams){this._pushToHistory(this.current,false);this._pushToHistory(previousParams,false);this.currentUid=state.uid;window.history.back();return;}}this.historyUnlocked=false;if(state.target.dest){this.linkService.navigateTo(state.target.dest);}else{this.linkService.setHash(state.target.hash);}this.currentUid=state.uid;if(state.uid>this.uid){this.uid=state.uid;}this.current=state.target;this.updatePreviousBookmark=true;var currentHash=window.location.hash.substring(1);if(this.previousHash!==currentHash){this.allowHashChange=false;}this.previousHash=currentHash;this.historyUnlocked=true;},back:function pdfHistoryBack(){this.go(-1);},forward:function pdfHistoryForward(){this.go(1);},go:function pdfHistoryGo(direction){if(this.initialized&&this.historyUnlocked){var state=window.history.state;if(direction===-1&&state&&state.uid>0){window.history.back();}else if(direction===1&&state&&state.uid<this.uid-1){window.history.forward();}}}};exports.PDFHistory=PDFHistory;});(function(root,factory){{factory(root.pdfjsWebPDFLinkService={},root.pdfjsWebUIUtils,root.pdfjsWebDOMEvents);}})(this,function(exports,uiUtils,domEvents){var parseQueryString=uiUtils.parseQueryString;var PageNumberRegExp=/^\d+$/;function isPageNumber(str){return PageNumberRegExp.test(str);}/**
	             * @typedef {Object} PDFLinkServiceOptions
	             * @property {EventBus} eventBus - The application event bus.
	             *//**
	             * Performs navigation functions inside PDF, such as opening specified page,
	             * or destination.
	             * @class
	             * @implements {IPDFLinkService}
	             */var PDFLinkService=function PDFLinkServiceClosure(){/**
	                 * @constructs PDFLinkService
	                 * @param {PDFLinkServiceOptions} options
	                 */function PDFLinkService(options){options=options||{};this.eventBus=options.eventBus||domEvents.getGlobalEventBus();this.baseUrl=null;this.pdfDocument=null;this.pdfViewer=null;this.pdfHistory=null;this._pagesRefCache=null;}PDFLinkService.prototype={setDocument:function PDFLinkService_setDocument(pdfDocument,baseUrl){this.baseUrl=baseUrl;this.pdfDocument=pdfDocument;this._pagesRefCache=Object.create(null);},setViewer:function PDFLinkService_setViewer(pdfViewer){this.pdfViewer=pdfViewer;},setHistory:function PDFLinkService_setHistory(pdfHistory){this.pdfHistory=pdfHistory;},/**
	                     * @returns {number}
	                     */get pagesCount(){return this.pdfDocument?this.pdfDocument.numPages:0;},/**
	                     * @returns {number}
	                     */get page(){return this.pdfViewer.currentPageNumber;},/**
	                     * @param {number} value
	                     */set page(value){this.pdfViewer.currentPageNumber=value;},/**
	                     * @param dest - The PDF destination object.
	                     */navigateTo:function PDFLinkService_navigateTo(dest){var destString='';var self=this;var goToDestination=function goToDestination(destRef){// dest array looks like that: <page-ref> </XYZ|/FitXXX> <args..>
	var pageNumber=destRef instanceof Object?self._pagesRefCache[destRef.num+' '+destRef.gen+' R']:destRef+1;if(pageNumber){if(pageNumber>self.pagesCount){console.error('PDFLinkService_navigateTo: '+'Trying to navigate to a non-existent page.');return;}self.pdfViewer.scrollPageIntoView({pageNumber:pageNumber,destArray:dest});if(self.pdfHistory){// Update the browsing history.
	self.pdfHistory.push({dest:dest,hash:destString,page:pageNumber});}}else{self.pdfDocument.getPageIndex(destRef).then(function(pageIndex){var pageNum=pageIndex+1;var cacheKey=destRef.num+' '+destRef.gen+' R';self._pagesRefCache[cacheKey]=pageNum;goToDestination(destRef);});}};var destinationPromise;if(typeof dest==='string'){destString=dest;destinationPromise=this.pdfDocument.getDestination(dest);}else{destinationPromise=Promise.resolve(dest);}destinationPromise.then(function(destination){dest=destination;if(!(destination instanceof Array)){return;// invalid destination
	}goToDestination(destination[0]);});},/**
	                     * @param dest - The PDF destination object.
	                     * @returns {string} The hyperlink to the PDF object.
	                     */getDestinationHash:function PDFLinkService_getDestinationHash(dest){if(typeof dest==='string'){// In practice, a named destination may contain only a number.
	// If that happens, use the '#nameddest=' form to avoid the link
	// redirecting to a page, instead of the correct destination.
	return this.getAnchorUrl('#'+(isPageNumber(dest)?'nameddest=':'')+escape(dest));}if(dest instanceof Array){var str=JSON.stringify(dest);return this.getAnchorUrl('#'+escape(str));}return this.getAnchorUrl('');},/**
	                     * Prefix the full url on anchor links to make sure that links are resolved
	                     * relative to the current URL instead of the one defined in <base href>.
	                     * @param {String} anchor The anchor hash, including the #.
	                     * @returns {string} The hyperlink to the PDF object.
	                     */getAnchorUrl:function PDFLinkService_getAnchorUrl(anchor){return(this.baseUrl||'')+anchor;},/**
	                     * @param {string} hash
	                     */setHash:function PDFLinkService_setHash(hash){var pageNumber,dest;if(hash.indexOf('=')>=0){var params=parseQueryString(hash);if('search'in params){this.eventBus.dispatch('findfromurlhash',{source:this,query:params['search'].replace(/"/g,''),phraseSearch:params['phrase']==='true'});}// borrowing syntax from "Parameters for Opening PDF Files"
	if('nameddest'in params){if(this.pdfHistory){this.pdfHistory.updateNextHashParam(params.nameddest);}this.navigateTo(params.nameddest);return;}if('page'in params){pageNumber=params.page|0||1;}if('zoom'in params){// Build the destination array.
	var zoomArgs=params.zoom.split(',');// scale,left,top
	var zoomArg=zoomArgs[0];var zoomArgNumber=parseFloat(zoomArg);if(zoomArg.indexOf('Fit')===-1){// If the zoomArg is a number, it has to get divided by 100. If it's
	// a string, it should stay as it is.
	dest=[null,{name:'XYZ'},zoomArgs.length>1?zoomArgs[1]|0:null,zoomArgs.length>2?zoomArgs[2]|0:null,zoomArgNumber?zoomArgNumber/100:zoomArg];}else{if(zoomArg==='Fit'||zoomArg==='FitB'){dest=[null,{name:zoomArg}];}else if(zoomArg==='FitH'||zoomArg==='FitBH'||zoomArg==='FitV'||zoomArg==='FitBV'){dest=[null,{name:zoomArg},zoomArgs.length>1?zoomArgs[1]|0:null];}else if(zoomArg==='FitR'){if(zoomArgs.length!==5){console.error('PDFLinkService_setHash: '+'Not enough parameters for \'FitR\'.');}else{dest=[null,{name:zoomArg},zoomArgs[1]|0,zoomArgs[2]|0,zoomArgs[3]|0,zoomArgs[4]|0];}}else{console.error('PDFLinkService_setHash: \''+zoomArg+'\' is not a valid zoom value.');}}}if(dest){this.pdfViewer.scrollPageIntoView({pageNumber:pageNumber||this.page,destArray:dest,allowNegativeOffset:true});}else if(pageNumber){this.page=pageNumber;// simple page
	}if('pagemode'in params){this.eventBus.dispatch('pagemode',{source:this,mode:params.pagemode});}}else if(isPageNumber(hash)){// Page number.
	this.page=hash|0;}else{// Named (or explicit) destination.
	dest=unescape(hash);try{dest=JSON.parse(dest);}catch(ex){}if(typeof dest==='string'||isValidExplicitDestination(dest)){if(this.pdfHistory){this.pdfHistory.updateNextHashParam(dest);}this.navigateTo(dest);return;}console.error('PDFLinkService_setHash: \''+unescape(hash)+'\' is not a valid destination.');}},/**
	                     * @param {string} action
	                     */executeNamedAction:function PDFLinkService_executeNamedAction(action){// See PDF reference, table 8.45 - Named action
	switch(action){case'GoBack':if(this.pdfHistory){this.pdfHistory.back();}break;case'GoForward':if(this.pdfHistory){this.pdfHistory.forward();}break;case'NextPage':if(this.page<this.pagesCount){this.page++;}break;case'PrevPage':if(this.page>1){this.page--;}break;case'LastPage':this.page=this.pagesCount;break;case'FirstPage':this.page=1;break;default:break;// No action according to spec
	}this.eventBus.dispatch('namedaction',{source:this,action:action});},/**
	                     * @param {number} pageNum - page number.
	                     * @param {Object} pageRef - reference to the page.
	                     */cachePageRef:function PDFLinkService_cachePageRef(pageNum,pageRef){var refStr=pageRef.num+' '+pageRef.gen+' R';this._pagesRefCache[refStr]=pageNum;}};function isValidExplicitDestination(dest){if(!(dest instanceof Array)){return false;}var destLength=dest.length,allowNull=true;if(destLength<2){return false;}var page=dest[0];if(!((typeof page==='undefined'?'undefined':_typeof(page))==='object'&&typeof page.num==='number'&&(page.num|0)===page.num&&typeof page.gen==='number'&&(page.gen|0)===page.gen)&&!(typeof page==='number'&&(page|0)===page&&page>=0)){return false;}var zoom=dest[1];if(!((typeof zoom==='undefined'?'undefined':_typeof(zoom))==='object'&&typeof zoom.name==='string')){return false;}switch(zoom.name){case'XYZ':if(destLength!==5){return false;}break;case'Fit':case'FitB':return destLength===2;case'FitH':case'FitBH':case'FitV':case'FitBV':if(destLength!==3){return false;}break;case'FitR':if(destLength!==6){return false;}allowNull=false;break;default:return false;}for(var i=2;i<destLength;i++){var param=dest[i];if(!(typeof param==='number'||allowNull&&param===null)){return false;}}return true;}return PDFLinkService;}();var SimpleLinkService=function SimpleLinkServiceClosure(){function SimpleLinkService(){}SimpleLinkService.prototype={/**
	                     * @returns {number}
	                     */get page(){return 0;},/**
	                     * @param {number} value
	                     */set page(value){},/**
	                     * @param dest - The PDF destination object.
	                     */navigateTo:function navigateTo(dest){},/**
	                     * @param dest - The PDF destination object.
	                     * @returns {string} The hyperlink to the PDF object.
	                     */getDestinationHash:function getDestinationHash(dest){return'#';},/**
	                     * @param hash - The PDF parameters/hash.
	                     * @returns {string} The hyperlink to the PDF object.
	                     */getAnchorUrl:function getAnchorUrl(hash){return'#';},/**
	                     * @param {string} hash
	                     */setHash:function setHash(hash){},/**
	                     * @param {string} action
	                     */executeNamedAction:function executeNamedAction(action){},/**
	                     * @param {number} pageNum - page number.
	                     * @param {Object} pageRef - reference to the page.
	                     */cachePageRef:function cachePageRef(pageNum,pageRef){}};return SimpleLinkService;}();exports.PDFLinkService=PDFLinkService;exports.SimpleLinkService=SimpleLinkService;});(function(root,factory){{factory(root.pdfjsWebPDFPageView={},root.pdfjsWebUIUtils,root.pdfjsWebPDFRenderingQueue,root.pdfjsWebDOMEvents,root.pdfjsWebPDFJS);}})(this,function(exports,uiUtils,pdfRenderingQueue,domEvents,pdfjsLib){var CSS_UNITS=uiUtils.CSS_UNITS;var DEFAULT_SCALE=uiUtils.DEFAULT_SCALE;var getOutputScale=uiUtils.getOutputScale;var approximateFraction=uiUtils.approximateFraction;var roundToDivide=uiUtils.roundToDivide;var RenderingStates=pdfRenderingQueue.RenderingStates;var TEXT_LAYER_RENDER_DELAY=200;// ms
	/**
	             * @typedef {Object} PDFPageViewOptions
	             * @property {HTMLDivElement} container - The viewer element.
	             * @property {EventBus} eventBus - The application event bus.
	             * @property {number} id - The page unique ID (normally its number).
	             * @property {number} scale - The page scale display.
	             * @property {PageViewport} defaultViewport - The page viewport.
	             * @property {PDFRenderingQueue} renderingQueue - The rendering queue object.
	             * @property {IPDFTextLayerFactory} textLayerFactory
	             * @property {IPDFAnnotationLayerFactory} annotationLayerFactory
	             * @property {boolean} enhanceTextSelection - Turns on the text selection
	             *   enhancement. The default is `false`.
	             * @property {boolean} renderInteractiveForms - Turns on rendering of
	             *   interactive form elements. The default is `false`.
	             *//**
	             * @class
	             * @implements {IRenderableView}
	             */var PDFPageView=function PDFPageViewClosure(){/**
	                 * @constructs PDFPageView
	                 * @param {PDFPageViewOptions} options
	                 */function PDFPageView(options){var container=options.container;var id=options.id;var scale=options.scale;var defaultViewport=options.defaultViewport;var renderingQueue=options.renderingQueue;var textLayerFactory=options.textLayerFactory;var annotationLayerFactory=options.annotationLayerFactory;var enhanceTextSelection=options.enhanceTextSelection||false;var renderInteractiveForms=options.renderInteractiveForms||false;this.id=id;this.renderingId='page'+id;this.rotation=0;this.scale=scale||DEFAULT_SCALE;this.viewport=defaultViewport;this.pdfPageRotate=defaultViewport.rotation;this.hasRestrictedScaling=false;this.enhanceTextSelection=enhanceTextSelection;this.renderInteractiveForms=renderInteractiveForms;this.eventBus=options.eventBus||domEvents.getGlobalEventBus();this.renderingQueue=renderingQueue;this.textLayerFactory=textLayerFactory;this.annotationLayerFactory=annotationLayerFactory;this.renderingState=RenderingStates.INITIAL;this.resume=null;this.onBeforeDraw=null;this.onAfterDraw=null;this.textLayer=null;this.zoomLayer=null;this.annotationLayer=null;var div=document.createElement('div');div.id='pageContainer'+this.id;div.className='page';div.style.width=Math.floor(this.viewport.width)+'px';div.style.height=Math.floor(this.viewport.height)+'px';div.setAttribute('data-page-number',this.id);this.div=div;container.appendChild(div);}PDFPageView.prototype={setPdfPage:function PDFPageView_setPdfPage(pdfPage){this.pdfPage=pdfPage;this.pdfPageRotate=pdfPage.rotate;var totalRotation=(this.rotation+this.pdfPageRotate)%360;this.viewport=pdfPage.getViewport(this.scale*CSS_UNITS,totalRotation);this.stats=pdfPage.stats;this.reset();},destroy:function PDFPageView_destroy(){this.zoomLayer=null;this.reset();if(this.pdfPage){this.pdfPage.cleanup();}},reset:function PDFPageView_reset(keepZoomLayer,keepAnnotations){if(this.renderTask){this.renderTask.cancel();}this.resume=null;this.renderingState=RenderingStates.INITIAL;var div=this.div;div.style.width=Math.floor(this.viewport.width)+'px';div.style.height=Math.floor(this.viewport.height)+'px';var childNodes=div.childNodes;var currentZoomLayerNode=keepZoomLayer&&this.zoomLayer||null;var currentAnnotationNode=keepAnnotations&&this.annotationLayer&&this.annotationLayer.div||null;for(var i=childNodes.length-1;i>=0;i--){var node=childNodes[i];if(currentZoomLayerNode===node||currentAnnotationNode===node){continue;}div.removeChild(node);}div.removeAttribute('data-loaded');if(currentAnnotationNode){// Hide annotationLayer until all elements are resized
	// so they are not displayed on the already-resized page
	this.annotationLayer.hide();}else{this.annotationLayer=null;}if(this.canvas&&!currentZoomLayerNode){// Zeroing the width and height causes Firefox to release graphics
	// resources immediately, which can greatly reduce memory consumption.
	this.canvas.width=0;this.canvas.height=0;delete this.canvas;}this.loadingIconDiv=document.createElement('div');this.loadingIconDiv.className='loadingIcon';div.appendChild(this.loadingIconDiv);},update:function PDFPageView_update(scale,rotation){this.scale=scale||this.scale;if(typeof rotation!=='undefined'){this.rotation=rotation;}var totalRotation=(this.rotation+this.pdfPageRotate)%360;this.viewport=this.viewport.clone({scale:this.scale*CSS_UNITS,rotation:totalRotation});var isScalingRestricted=false;if(this.canvas&&pdfjsLib.PDFJS.maxCanvasPixels>0){var outputScale=this.outputScale;if((Math.floor(this.viewport.width)*outputScale.sx|0)*(Math.floor(this.viewport.height)*outputScale.sy|0)>pdfjsLib.PDFJS.maxCanvasPixels){isScalingRestricted=true;}}if(this.canvas){if(pdfjsLib.PDFJS.useOnlyCssZoom||this.hasRestrictedScaling&&isScalingRestricted){this.cssTransform(this.canvas,true);this.eventBus.dispatch('pagerendered',{source:this,pageNumber:this.id,cssTransform:true});return;}if(!this.zoomLayer){this.zoomLayer=this.canvas.parentNode;this.zoomLayer.style.position='absolute';}}if(this.zoomLayer){this.cssTransform(this.zoomLayer.firstChild);}this.reset(/* keepZoomLayer = */true,/* keepAnnotations = */true);},/**
	                     * Called when moved in the parent's container.
	                     */updatePosition:function PDFPageView_updatePosition(){if(this.textLayer){this.textLayer.render(TEXT_LAYER_RENDER_DELAY);}},cssTransform:function PDFPageView_transform(canvas,redrawAnnotations){var CustomStyle=pdfjsLib.CustomStyle;// Scale canvas, canvas wrapper, and page container.
	var width=this.viewport.width;var height=this.viewport.height;var div=this.div;canvas.style.width=canvas.parentNode.style.width=div.style.width=Math.floor(width)+'px';canvas.style.height=canvas.parentNode.style.height=div.style.height=Math.floor(height)+'px';// The canvas may have been originally rotated, rotate relative to that.
	var relativeRotation=this.viewport.rotation-canvas._viewport.rotation;var absRotation=Math.abs(relativeRotation);var scaleX=1,scaleY=1;if(absRotation===90||absRotation===270){// Scale x and y because of the rotation.
	scaleX=height/width;scaleY=width/height;}var cssTransform='rotate('+relativeRotation+'deg) '+'scale('+scaleX+','+scaleY+')';CustomStyle.setProp('transform',canvas,cssTransform);if(this.textLayer){// Rotating the text layer is more complicated since the divs inside the
	// the text layer are rotated.
	// TODO: This could probably be simplified by drawing the text layer in
	// one orientation then rotating overall.
	var textLayerViewport=this.textLayer.viewport;var textRelativeRotation=this.viewport.rotation-textLayerViewport.rotation;var textAbsRotation=Math.abs(textRelativeRotation);var scale=width/textLayerViewport.width;if(textAbsRotation===90||textAbsRotation===270){scale=width/textLayerViewport.height;}var textLayerDiv=this.textLayer.textLayerDiv;var transX,transY;switch(textAbsRotation){case 0:transX=transY=0;break;case 90:transX=0;transY='-'+textLayerDiv.style.height;break;case 180:transX='-'+textLayerDiv.style.width;transY='-'+textLayerDiv.style.height;break;case 270:transX='-'+textLayerDiv.style.width;transY=0;break;default:console.error('Bad rotation value.');break;}CustomStyle.setProp('transform',textLayerDiv,'rotate('+textAbsRotation+'deg) '+'scale('+scale+', '+scale+') '+'translate('+transX+', '+transY+')');CustomStyle.setProp('transformOrigin',textLayerDiv,'0% 0%');}if(redrawAnnotations&&this.annotationLayer){this.annotationLayer.render(this.viewport,'display');}},get width(){return this.viewport.width;},get height(){return this.viewport.height;},getPagePoint:function PDFPageView_getPagePoint(x,y){return this.viewport.convertToPdfPoint(x,y);},draw:function PDFPageView_draw(){if(this.renderingState!==RenderingStates.INITIAL){console.error('Must be in new state before drawing');}this.renderingState=RenderingStates.RUNNING;var pdfPage=this.pdfPage;var viewport=this.viewport;var div=this.div;// Wrap the canvas so if it has a css transform for highdpi the overflow
	// will be hidden in FF.
	var canvasWrapper=document.createElement('div');canvasWrapper.style.width=div.style.width;canvasWrapper.style.height=div.style.height;canvasWrapper.classList.add('canvasWrapper');var canvas=document.createElement('canvas');canvas.id='page'+this.id;// Keep the canvas hidden until the first draw callback, or until drawing
	// is complete when `!this.renderingQueue`, to prevent black flickering.
	canvas.setAttribute('hidden','hidden');var isCanvasHidden=true;canvasWrapper.appendChild(canvas);if(this.annotationLayer&&this.annotationLayer.div){// annotationLayer needs to stay on top
	div.insertBefore(canvasWrapper,this.annotationLayer.div);}else{div.appendChild(canvasWrapper);}this.canvas=canvas;canvas.mozOpaque=true;var ctx=canvas.getContext('2d',{alpha:false});var outputScale=getOutputScale(ctx);this.outputScale=outputScale;if(pdfjsLib.PDFJS.useOnlyCssZoom){var actualSizeViewport=viewport.clone({scale:CSS_UNITS});// Use a scale that will make the canvas be the original intended size
	// of the page.
	outputScale.sx*=actualSizeViewport.width/viewport.width;outputScale.sy*=actualSizeViewport.height/viewport.height;outputScale.scaled=true;}if(pdfjsLib.PDFJS.maxCanvasPixels>0){var pixelsInViewport=viewport.width*viewport.height;var maxScale=Math.sqrt(pdfjsLib.PDFJS.maxCanvasPixels/pixelsInViewport);if(outputScale.sx>maxScale||outputScale.sy>maxScale){outputScale.sx=maxScale;outputScale.sy=maxScale;outputScale.scaled=true;this.hasRestrictedScaling=true;}else{this.hasRestrictedScaling=false;}}var sfx=approximateFraction(outputScale.sx);var sfy=approximateFraction(outputScale.sy);canvas.width=roundToDivide(viewport.width*outputScale.sx,sfx[0]);canvas.height=roundToDivide(viewport.height*outputScale.sy,sfy[0]);canvas.style.width=roundToDivide(viewport.width,sfx[1])+'px';canvas.style.height=roundToDivide(viewport.height,sfy[1])+'px';// Add the viewport so it's known what it was originally drawn with.
	canvas._viewport=viewport;var textLayerDiv=null;var textLayer=null;if(this.textLayerFactory){textLayerDiv=document.createElement('div');textLayerDiv.className='textLayer';textLayerDiv.style.width=canvasWrapper.style.width;textLayerDiv.style.height=canvasWrapper.style.height;if(this.annotationLayer&&this.annotationLayer.div){// annotationLayer needs to stay on top
	div.insertBefore(textLayerDiv,this.annotationLayer.div);}else{div.appendChild(textLayerDiv);}textLayer=this.textLayerFactory.createTextLayerBuilder(textLayerDiv,this.id-1,this.viewport,this.enhanceTextSelection);}this.textLayer=textLayer;var resolveRenderPromise,rejectRenderPromise;var promise=new Promise(function(resolve,reject){resolveRenderPromise=resolve;rejectRenderPromise=reject;});// Rendering area
	var self=this;function pageViewDrawCallback(error){// The renderTask may have been replaced by a new one, so only remove
	// the reference to the renderTask if it matches the one that is
	// triggering this callback.
	if(renderTask===self.renderTask){self.renderTask=null;}if(error==='cancelled'){rejectRenderPromise(error);return;}self.renderingState=RenderingStates.FINISHED;if(isCanvasHidden){self.canvas.removeAttribute('hidden');isCanvasHidden=false;}if(self.loadingIconDiv){div.removeChild(self.loadingIconDiv);delete self.loadingIconDiv;}if(self.zoomLayer){// Zeroing the width and height causes Firefox to release graphics
	// resources immediately, which can greatly reduce memory consumption.
	var zoomLayerCanvas=self.zoomLayer.firstChild;zoomLayerCanvas.width=0;zoomLayerCanvas.height=0;if(div.contains(self.zoomLayer)){// Prevent "Node was not found" errors if the `zoomLayer` was
	// already removed. This may occur intermittently if the scale
	// changes many times in very quick succession.
	div.removeChild(self.zoomLayer);}self.zoomLayer=null;}self.error=error;self.stats=pdfPage.stats;if(self.onAfterDraw){self.onAfterDraw();}self.eventBus.dispatch('pagerendered',{source:self,pageNumber:self.id,cssTransform:false});if(!error){resolveRenderPromise(undefined);}else{rejectRenderPromise(error);}}var renderContinueCallback=null;if(this.renderingQueue){renderContinueCallback=function renderContinueCallback(cont){if(!self.renderingQueue.isHighestPriority(self)){self.renderingState=RenderingStates.PAUSED;self.resume=function resumeCallback(){self.renderingState=RenderingStates.RUNNING;cont();};return;}if(isCanvasHidden){self.canvas.removeAttribute('hidden');isCanvasHidden=false;}cont();};}var transform=!outputScale.scaled?null:[outputScale.sx,0,0,outputScale.sy,0,0];var renderContext={canvasContext:ctx,transform:transform,viewport:this.viewport,renderInteractiveForms:this.renderInteractiveForms};var renderTask=this.renderTask=this.pdfPage.render(renderContext);renderTask.onContinue=renderContinueCallback;this.renderTask.promise.then(function pdfPageRenderCallback(){pageViewDrawCallback(null);if(textLayer){self.pdfPage.getTextContent({normalizeWhitespace:true}).then(function textContentResolved(textContent){textLayer.setTextContent(textContent);textLayer.render(TEXT_LAYER_RENDER_DELAY);});}},function pdfPageRenderError(error){pageViewDrawCallback(error);});if(this.annotationLayerFactory){if(!this.annotationLayer){this.annotationLayer=this.annotationLayerFactory.createAnnotationLayerBuilder(div,this.pdfPage,this.renderInteractiveForms);}this.annotationLayer.render(this.viewport,'display');}div.setAttribute('data-loaded',true);if(self.onBeforeDraw){self.onBeforeDraw();}return promise;},beforePrint:function PDFPageView_beforePrint(printContainer){var CustomStyle=pdfjsLib.CustomStyle;var pdfPage=this.pdfPage;var viewport=pdfPage.getViewport(1);var canvas=document.createElement('canvas');// The size of the canvas in pixels for printing.
	var PRINT_RESOLUTION=150;var PRINT_UNITS=PRINT_RESOLUTION/72.0;canvas.width=Math.floor(viewport.width*PRINT_UNITS);canvas.height=Math.floor(viewport.height*PRINT_UNITS);// The physical size of the canvas as specified by the PDF document.
	canvas.style.width=Math.floor(viewport.width*CSS_UNITS)+'px';canvas.style.height=Math.floor(viewport.height*CSS_UNITS)+'px';var canvasWrapper=document.createElement('div');canvasWrapper.appendChild(canvas);printContainer.appendChild(canvasWrapper);canvas.mozPrintCallback=function(obj){var ctx=obj.context;ctx.save();ctx.fillStyle='rgb(255, 255, 255)';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.restore();var renderContext={canvasContext:ctx,transform:[PRINT_UNITS,0,0,PRINT_UNITS,0,0],viewport:viewport,intent:'print'};pdfPage.render(renderContext).promise.then(function(){// Tell the printEngine that rendering this canvas/page has finished.
	obj.done();},function(error){console.error(error);// Tell the printEngine that rendering this canvas/page has failed.
	// This will make the print process stop.
	if('abort'in obj){obj.abort();}else{obj.done();}});};}};return PDFPageView;}();exports.PDFPageView=PDFPageView;});(function(root,factory){{factory(root.pdfjsWebTextLayerBuilder={},root.pdfjsWebDOMEvents,root.pdfjsWebPDFJS);}})(this,function(exports,domEvents,pdfjsLib){var EXPAND_DIVS_TIMEOUT=300;// ms
	/**
	             * @typedef {Object} TextLayerBuilderOptions
	             * @property {HTMLDivElement} textLayerDiv - The text layer container.
	             * @property {EventBus} eventBus - The application event bus.
	             * @property {number} pageIndex - The page index.
	             * @property {PageViewport} viewport - The viewport of the text layer.
	             * @property {PDFFindController} findController
	             * @property {boolean} enhanceTextSelection - Option to turn on improved
	             *   text selection.
	             *//**
	             * TextLayerBuilder provides text-selection functionality for the PDF.
	             * It does this by creating overlay divs over the PDF text. These divs
	             * contain text that matches the PDF text they are overlaying. This object
	             * also provides a way to highlight text that is being searched for.
	             * @class
	             */var TextLayerBuilder=function TextLayerBuilderClosure(){function TextLayerBuilder(options){this.textLayerDiv=options.textLayerDiv;this.eventBus=options.eventBus||domEvents.getGlobalEventBus();this.renderingDone=false;this.divContentDone=false;this.pageIdx=options.pageIndex;this.pageNumber=this.pageIdx+1;this.matches=[];this.viewport=options.viewport;this.textDivs=[];this.findController=options.findController||null;this.textLayerRenderTask=null;this.enhanceTextSelection=options.enhanceTextSelection;this._bindMouse();}TextLayerBuilder.prototype={_finishRendering:function TextLayerBuilder_finishRendering(){this.renderingDone=true;if(!this.enhanceTextSelection){var endOfContent=document.createElement('div');endOfContent.className='endOfContent';this.textLayerDiv.appendChild(endOfContent);}this.eventBus.dispatch('textlayerrendered',{source:this,pageNumber:this.pageNumber});},/**
	                     * Renders the text layer.
	                     * @param {number} timeout (optional) if specified, the rendering waits
	                     *   for specified amount of ms.
	                     */render:function TextLayerBuilder_render(timeout){if(!this.divContentDone||this.renderingDone){return;}if(this.textLayerRenderTask){this.textLayerRenderTask.cancel();this.textLayerRenderTask=null;}this.textDivs=[];var textLayerFrag=document.createDocumentFragment();this.textLayerRenderTask=pdfjsLib.renderTextLayer({textContent:this.textContent,container:textLayerFrag,viewport:this.viewport,textDivs:this.textDivs,timeout:timeout,enhanceTextSelection:this.enhanceTextSelection});this.textLayerRenderTask.promise.then(function(){this.textLayerDiv.appendChild(textLayerFrag);this._finishRendering();this.updateMatches();}.bind(this),function(reason){// canceled or failed to render text layer -- skipping errors
	});},setTextContent:function TextLayerBuilder_setTextContent(textContent){if(this.textLayerRenderTask){this.textLayerRenderTask.cancel();this.textLayerRenderTask=null;}this.textContent=textContent;this.divContentDone=true;},convertMatches:function TextLayerBuilder_convertMatches(matches,matchesLength){var i=0;var iIndex=0;var bidiTexts=this.textContent.items;var end=bidiTexts.length-1;var queryLen=this.findController===null?0:this.findController.state.query.length;var ret=[];if(!matches){return ret;}for(var m=0,len=matches.length;m<len;m++){// Calculate the start position.
	var matchIdx=matches[m];// Loop over the divIdxs.
	while(i!==end&&matchIdx>=iIndex+bidiTexts[i].str.length){iIndex+=bidiTexts[i].str.length;i++;}if(i===bidiTexts.length){console.error('Could not find a matching mapping');}var match={begin:{divIdx:i,offset:matchIdx-iIndex}};// Calculate the end position.
	if(matchesLength){// multiterm search
	matchIdx+=matchesLength[m];}else{// phrase search
	matchIdx+=queryLen;}// Somewhat the same array as above, but use > instead of >= to get
	// the end position right.
	while(i!==end&&matchIdx>iIndex+bidiTexts[i].str.length){iIndex+=bidiTexts[i].str.length;i++;}match.end={divIdx:i,offset:matchIdx-iIndex};ret.push(match);}return ret;},renderMatches:function TextLayerBuilder_renderMatches(matches){// Early exit if there is nothing to render.
	if(matches.length===0){return;}var bidiTexts=this.textContent.items;var textDivs=this.textDivs;var prevEnd=null;var pageIdx=this.pageIdx;var isSelectedPage=this.findController===null?false:pageIdx===this.findController.selected.pageIdx;var selectedMatchIdx=this.findController===null?-1:this.findController.selected.matchIdx;var highlightAll=this.findController===null?false:this.findController.state.highlightAll;var infinity={divIdx:-1,offset:undefined};function beginText(begin,className){var divIdx=begin.divIdx;textDivs[divIdx].textContent='';appendTextToDiv(divIdx,0,begin.offset,className);}function appendTextToDiv(divIdx,fromOffset,toOffset,className){var div=textDivs[divIdx];var content=bidiTexts[divIdx].str.substring(fromOffset,toOffset);var node=document.createTextNode(content);if(className){var span=document.createElement('span');span.className=className;span.appendChild(node);div.appendChild(span);return;}div.appendChild(node);}var i0=selectedMatchIdx,i1=i0+1;if(highlightAll){i0=0;i1=matches.length;}else if(!isSelectedPage){// Not highlighting all and this isn't the selected page, so do nothing.
	return;}for(var i=i0;i<i1;i++){var match=matches[i];var begin=match.begin;var end=match.end;var isSelected=isSelectedPage&&i===selectedMatchIdx;var highlightSuffix=isSelected?' selected':'';if(this.findController){this.findController.updateMatchPosition(pageIdx,i,textDivs,begin.divIdx);}// Match inside new div.
	if(!prevEnd||begin.divIdx!==prevEnd.divIdx){// If there was a previous div, then add the text at the end.
	if(prevEnd!==null){appendTextToDiv(prevEnd.divIdx,prevEnd.offset,infinity.offset);}// Clear the divs and set the content until the starting point.
	beginText(begin);}else{appendTextToDiv(prevEnd.divIdx,prevEnd.offset,begin.offset);}if(begin.divIdx===end.divIdx){appendTextToDiv(begin.divIdx,begin.offset,end.offset,'highlight'+highlightSuffix);}else{appendTextToDiv(begin.divIdx,begin.offset,infinity.offset,'highlight begin'+highlightSuffix);for(var n0=begin.divIdx+1,n1=end.divIdx;n0<n1;n0++){textDivs[n0].className='highlight middle'+highlightSuffix;}beginText(end,'highlight end'+highlightSuffix);}prevEnd=end;}if(prevEnd){appendTextToDiv(prevEnd.divIdx,prevEnd.offset,infinity.offset);}},updateMatches:function TextLayerBuilder_updateMatches(){// Only show matches when all rendering is done.
	if(!this.renderingDone){return;}// Clear all matches.
	var matches=this.matches;var textDivs=this.textDivs;var bidiTexts=this.textContent.items;var clearedUntilDivIdx=-1;// Clear all current matches.
	for(var i=0,len=matches.length;i<len;i++){var match=matches[i];var begin=Math.max(clearedUntilDivIdx,match.begin.divIdx);for(var n=begin,end=match.end.divIdx;n<=end;n++){var div=textDivs[n];div.textContent=bidiTexts[n].str;div.className='';}clearedUntilDivIdx=match.end.divIdx+1;}if(this.findController===null||!this.findController.active){return;}// Convert the matches on the page controller into the match format
	// used for the textLayer.
	var pageMatches,pageMatchesLength;if(this.findController!==null){pageMatches=this.findController.pageMatches[this.pageIdx]||null;pageMatchesLength=this.findController.pageMatchesLength?this.findController.pageMatchesLength[this.pageIdx]||null:null;}this.matches=this.convertMatches(pageMatches,pageMatchesLength);this.renderMatches(this.matches);},/**
	                     * Fixes text selection: adds additional div where mouse was clicked.
	                     * This reduces flickering of the content if mouse slowly dragged down/up.
	                     * @private
	                     */_bindMouse:function TextLayerBuilder_bindMouse(){var div=this.textLayerDiv;var self=this;var expandDivsTimer=null;div.addEventListener('mousedown',function(e){if(self.enhanceTextSelection&&self.textLayerRenderTask){self.textLayerRenderTask.expandTextDivs(true);if(expandDivsTimer){clearTimeout(expandDivsTimer);expandDivsTimer=null;}return;}var end=div.querySelector('.endOfContent');if(!end){return;}// On non-Firefox browsers, the selection will feel better if the height
	// of the endOfContent div will be adjusted to start at mouse click
	// location -- this will avoid flickering when selections moves up.
	// However it does not work when selection started on empty space.
	var adjustTop=e.target!==div;adjustTop=adjustTop&&window.getComputedStyle(end).getPropertyValue('-moz-user-select')!=='none';if(adjustTop){var divBounds=div.getBoundingClientRect();var r=Math.max(0,(e.pageY-divBounds.top)/divBounds.height);end.style.top=(r*100).toFixed(2)+'%';}end.classList.add('active');});div.addEventListener('mouseup',function(e){if(self.enhanceTextSelection&&self.textLayerRenderTask){expandDivsTimer=setTimeout(function(){self.textLayerRenderTask.expandTextDivs(false);expandDivsTimer=null;},EXPAND_DIVS_TIMEOUT);return;}var end=div.querySelector('.endOfContent');if(!end){return;}end.style.top='';end.classList.remove('active');});}};return TextLayerBuilder;}();/**
	             * @constructor
	             * @implements IPDFTextLayerFactory
	             */function DefaultTextLayerFactory(){}DefaultTextLayerFactory.prototype={/**
	                 * @param {HTMLDivElement} textLayerDiv
	                 * @param {number} pageIndex
	                 * @param {PageViewport} viewport
	                 * @param {boolean} enhanceTextSelection
	                 * @returns {TextLayerBuilder}
	                 */createTextLayerBuilder:function createTextLayerBuilder(textLayerDiv,pageIndex,viewport,enhanceTextSelection){return new TextLayerBuilder({textLayerDiv:textLayerDiv,pageIndex:pageIndex,viewport:viewport,enhanceTextSelection:enhanceTextSelection});}};exports.TextLayerBuilder=TextLayerBuilder;exports.DefaultTextLayerFactory=DefaultTextLayerFactory;});(function(root,factory){{factory(root.pdfjsWebAnnotationLayerBuilder={},root.pdfjsWebUIUtils,root.pdfjsWebPDFLinkService,root.pdfjsWebPDFJS);}})(this,function(exports,uiUtils,pdfLinkService,pdfjsLib){var mozL10n=uiUtils.mozL10n;var SimpleLinkService=pdfLinkService.SimpleLinkService;/**
	             * @typedef {Object} AnnotationLayerBuilderOptions
	             * @property {HTMLDivElement} pageDiv
	             * @property {PDFPage} pdfPage
	             * @property {boolean} renderInteractiveForms
	             * @property {IPDFLinkService} linkService
	             * @property {DownloadManager} downloadManager
	             *//**
	             * @class
	             */var AnnotationLayerBuilder=function AnnotationLayerBuilderClosure(){/**
	                 * @param {AnnotationLayerBuilderOptions} options
	                 * @constructs AnnotationLayerBuilder
	                 */function AnnotationLayerBuilder(options){this.pageDiv=options.pageDiv;this.pdfPage=options.pdfPage;this.renderInteractiveForms=options.renderInteractiveForms;this.linkService=options.linkService;this.downloadManager=options.downloadManager;this.div=null;}AnnotationLayerBuilder.prototype=/** @lends AnnotationLayerBuilder.prototype */{/**
	                         * @param {PageViewport} viewport
	                         * @param {string} intent (default value is 'display')
	                         */render:function AnnotationLayerBuilder_render(viewport,intent){var self=this;var parameters={intent:intent===undefined?'display':intent};this.pdfPage.getAnnotations(parameters).then(function(annotations){viewport=viewport.clone({dontFlip:true});parameters={viewport:viewport,div:self.div,annotations:annotations,page:self.pdfPage,renderInteractiveForms:self.renderInteractiveForms,linkService:self.linkService,downloadManager:self.downloadManager};if(self.div){// If an annotationLayer already exists, refresh its children's
	// transformation matrices.
	pdfjsLib.AnnotationLayer.update(parameters);}else{// Create an annotation layer div and render the annotations
	// if there is at least one annotation.
	if(annotations.length===0){return;}self.div=document.createElement('div');self.div.className='annotationLayer';self.pageDiv.appendChild(self.div);parameters.div=self.div;pdfjsLib.AnnotationLayer.render(parameters);if(typeof mozL10n!=='undefined'){mozL10n.translate(self.div);}}});},hide:function AnnotationLayerBuilder_hide(){if(!this.div){return;}this.div.setAttribute('hidden','true');}};return AnnotationLayerBuilder;}();/**
	             * @constructor
	             * @implements IPDFAnnotationLayerFactory
	             */function DefaultAnnotationLayerFactory(){}DefaultAnnotationLayerFactory.prototype={/**
	                 * @param {HTMLDivElement} pageDiv
	                 * @param {PDFPage} pdfPage
	                 * @param {boolean} renderInteractiveForms
	                 * @returns {AnnotationLayerBuilder}
	                 */createAnnotationLayerBuilder:function createAnnotationLayerBuilder(pageDiv,pdfPage,renderInteractiveForms){return new AnnotationLayerBuilder({pageDiv:pageDiv,pdfPage:pdfPage,renderInteractiveForms:renderInteractiveForms,linkService:new SimpleLinkService()});}};exports.AnnotationLayerBuilder=AnnotationLayerBuilder;exports.DefaultAnnotationLayerFactory=DefaultAnnotationLayerFactory;});(function(root,factory){{factory(root.pdfjsWebPDFViewer={},root.pdfjsWebUIUtils,root.pdfjsWebPDFPageView,root.pdfjsWebPDFRenderingQueue,root.pdfjsWebTextLayerBuilder,root.pdfjsWebAnnotationLayerBuilder,root.pdfjsWebPDFLinkService,root.pdfjsWebDOMEvents,root.pdfjsWebPDFJS);}})(this,function(exports,uiUtils,pdfPageView,pdfRenderingQueue,textLayerBuilder,annotationLayerBuilder,pdfLinkService,domEvents,pdfjsLib){var UNKNOWN_SCALE=uiUtils.UNKNOWN_SCALE;var SCROLLBAR_PADDING=uiUtils.SCROLLBAR_PADDING;var VERTICAL_PADDING=uiUtils.VERTICAL_PADDING;var MAX_AUTO_SCALE=uiUtils.MAX_AUTO_SCALE;var CSS_UNITS=uiUtils.CSS_UNITS;var DEFAULT_SCALE=uiUtils.DEFAULT_SCALE;var DEFAULT_SCALE_VALUE=uiUtils.DEFAULT_SCALE_VALUE;var scrollIntoView=uiUtils.scrollIntoView;var watchScroll=uiUtils.watchScroll;var getVisibleElements=uiUtils.getVisibleElements;var PDFPageView=pdfPageView.PDFPageView;var RenderingStates=pdfRenderingQueue.RenderingStates;var PDFRenderingQueue=pdfRenderingQueue.PDFRenderingQueue;var TextLayerBuilder=textLayerBuilder.TextLayerBuilder;var AnnotationLayerBuilder=annotationLayerBuilder.AnnotationLayerBuilder;var SimpleLinkService=pdfLinkService.SimpleLinkService;var PresentationModeState={UNKNOWN:0,NORMAL:1,CHANGING:2,FULLSCREEN:3};var DEFAULT_CACHE_SIZE=10;/**
	             * @typedef {Object} PDFViewerOptions
	             * @property {HTMLDivElement} container - The container for the viewer element.
	             * @property {HTMLDivElement} viewer - (optional) The viewer element.
	             * @property {EventBus} eventBus - The application event bus.
	             * @property {IPDFLinkService} linkService - The navigation/linking service.
	             * @property {DownloadManager} downloadManager - (optional) The download
	             *   manager component.
	             * @property {PDFRenderingQueue} renderingQueue - (optional) The rendering
	             *   queue object.
	             * @property {boolean} removePageBorders - (optional) Removes the border shadow
	             *   around the pages. The default is false.
	             * @property {boolean} enhanceTextSelection - (optional) Enables the improved
	             *   text selection behaviour. The default is `false`.
	             * @property {boolean} renderInteractiveForms - (optional) Enables rendering of
	             *   interactive form elements. The default is `false`.
	             *//**
	             * Simple viewer control to display PDF content/pages.
	             * @class
	             * @implements {IRenderableView}
	             */var PDFViewer=function pdfViewer(){function PDFPageViewBuffer(size){var data=[];this.push=function cachePush(view){var i=data.indexOf(view);if(i>=0){data.splice(i,1);}data.push(view);if(data.length>size){data.shift().destroy();}};this.resize=function(newSize){size=newSize;while(data.length>size){data.shift().destroy();}};}function isSameScale(oldScale,newScale){if(newScale===oldScale){return true;}if(Math.abs(newScale-oldScale)<1e-15){// Prevent unnecessary re-rendering of all pages when the scale
	// changes only because of limited numerical precision.
	return true;}return false;}/**
	                 * @constructs PDFViewer
	                 * @param {PDFViewerOptions} options
	                 */function PDFViewer(options){this.container=options.container;this.viewer=options.viewer||options.container.firstElementChild;this.eventBus=options.eventBus||domEvents.getGlobalEventBus();this.linkService=options.linkService||new SimpleLinkService();this.downloadManager=options.downloadManager||null;this.removePageBorders=options.removePageBorders||false;this.enhanceTextSelection=options.enhanceTextSelection||false;this.renderInteractiveForms=options.renderInteractiveForms||false;this.defaultRenderingQueue=!options.renderingQueue;if(this.defaultRenderingQueue){// Custom rendering queue is not specified, using default one
	this.renderingQueue=new PDFRenderingQueue();this.renderingQueue.setViewer(this);}else{this.renderingQueue=options.renderingQueue;}this.scroll=watchScroll(this.container,this._scrollUpdate.bind(this));this.presentationModeState=PresentationModeState.UNKNOWN;this._resetView();if(this.removePageBorders){this.viewer.classList.add('removePageBorders');}}PDFViewer.prototype=/** @lends PDFViewer.prototype */{get pagesCount(){return this._pages.length;},getPageView:function getPageView(index){return this._pages[index];},/**
	                     * @returns {number}
	                     */get currentPageNumber(){return this._currentPageNumber;},/**
	                     * @param {number} val - The page number.
	                     */set currentPageNumber(val){if((val|0)!==val){// Ensure that `val` is an integer.
	throw new Error('Invalid page number.');}if(!this.pdfDocument){this._currentPageNumber=val;return;}// The intent can be to just reset a scroll position and/or scale.
	this._setCurrentPageNumber(val,/* resetCurrentPageView = */true);},/**
	                     * @private
	                     */_setCurrentPageNumber:function PDFViewer_setCurrentPageNumber(val,resetCurrentPageView){if(this._currentPageNumber===val){if(resetCurrentPageView){this._resetCurrentPageView();}return;}if(!(0<val&&val<=this.pagesCount)){console.error('PDFViewer_setCurrentPageNumber: "'+val+'" is out of bounds.');return;}var arg={source:this,pageNumber:val};this._currentPageNumber=val;this.eventBus.dispatch('pagechanging',arg);this.eventBus.dispatch('pagechange',arg);if(resetCurrentPageView){this._resetCurrentPageView();}},/**
	                     * @returns {number}
	                     */get currentScale(){return this._currentScale!==UNKNOWN_SCALE?this._currentScale:DEFAULT_SCALE;},/**
	                     * @param {number} val - Scale of the pages in percents.
	                     */set currentScale(val){if(isNaN(val)){throw new Error('Invalid numeric scale');}if(!this.pdfDocument){this._currentScale=val;this._currentScaleValue=val!==UNKNOWN_SCALE?val.toString():null;return;}this._setScale(val,false);},/**
	                     * @returns {string}
	                     */get currentScaleValue(){return this._currentScaleValue;},/**
	                     * @param val - The scale of the pages (in percent or predefined value).
	                     */set currentScaleValue(val){if(!this.pdfDocument){this._currentScale=isNaN(val)?UNKNOWN_SCALE:val;this._currentScaleValue=val.toString();return;}this._setScale(val,false);},/**
	                     * @returns {number}
	                     */get pagesRotation(){return this._pagesRotation;},/**
	                     * @param {number} rotation - The rotation of the pages (0, 90, 180, 270).
	                     */set pagesRotation(rotation){if(!(typeof rotation==='number'&&rotation%90===0)){throw new Error('Invalid pages rotation angle.');}this._pagesRotation=rotation;if(!this.pdfDocument){return;}for(var i=0,l=this._pages.length;i<l;i++){var pageView=this._pages[i];pageView.update(pageView.scale,rotation);}this._setScale(this._currentScaleValue,true);if(this.defaultRenderingQueue){this.update();}},/**
	                     * @param pdfDocument {PDFDocument}
	                     */setDocument:function setDocument(pdfDocument){if(this.pdfDocument){this._resetView();}this.pdfDocument=pdfDocument;if(!pdfDocument){return;}var pagesCount=pdfDocument.numPages;var self=this;var resolvePagesPromise;var pagesPromise=new Promise(function(resolve){resolvePagesPromise=resolve;});this.pagesPromise=pagesPromise;pagesPromise.then(function(){self.eventBus.dispatch('pagesloaded',{source:self,pagesCount:pagesCount});});var isOnePageRenderedResolved=false;var resolveOnePageRendered=null;var onePageRendered=new Promise(function(resolve){resolveOnePageRendered=resolve;});this.onePageRendered=onePageRendered;var bindOnAfterAndBeforeDraw=function bindOnAfterAndBeforeDraw(pageView){pageView.onBeforeDraw=function pdfViewLoadOnBeforeDraw(){// Add the page to the buffer at the start of drawing. That way it can
	// be evicted from the buffer and destroyed even if we pause its
	// rendering.
	self._buffer.push(this);};pageView.onAfterDraw=function pdfViewLoadOnAfterDraw(){if(!isOnePageRenderedResolved){isOnePageRenderedResolved=true;resolveOnePageRendered();}};};var firstPagePromise=pdfDocument.getPage(1);this.firstPagePromise=firstPagePromise;// Fetch a single page so we can get a viewport that will be the default
	// viewport for all pages
	return firstPagePromise.then(function(pdfPage){var scale=this.currentScale;var viewport=pdfPage.getViewport(scale*CSS_UNITS);for(var pageNum=1;pageNum<=pagesCount;++pageNum){var textLayerFactory=null;if(!pdfjsLib.PDFJS.disableTextLayer){textLayerFactory=this;}var pageView=new PDFPageView({container:this.viewer,eventBus:this.eventBus,id:pageNum,scale:scale,defaultViewport:viewport.clone(),renderingQueue:this.renderingQueue,textLayerFactory:textLayerFactory,annotationLayerFactory:this,enhanceTextSelection:this.enhanceTextSelection,renderInteractiveForms:this.renderInteractiveForms});bindOnAfterAndBeforeDraw(pageView);this._pages.push(pageView);}var linkService=this.linkService;// Fetch all the pages since the viewport is needed before printing
	// starts to create the correct size canvas. Wait until one page is
	// rendered so we don't tie up too many resources early on.
	onePageRendered.then(function(){if(!pdfjsLib.PDFJS.disableAutoFetch){var getPagesLeft=pagesCount;for(var pageNum=1;pageNum<=pagesCount;++pageNum){pdfDocument.getPage(pageNum).then(function(pageNum,pdfPage){var pageView=self._pages[pageNum-1];if(!pageView.pdfPage){pageView.setPdfPage(pdfPage);}linkService.cachePageRef(pageNum,pdfPage.ref);getPagesLeft--;if(!getPagesLeft){resolvePagesPromise();}}.bind(null,pageNum));}}else{// XXX: Printing is semi-broken with auto fetch disabled.
	resolvePagesPromise();}});self.eventBus.dispatch('pagesinit',{source:self});if(this.defaultRenderingQueue){this.update();}if(this.findController){this.findController.resolveFirstPage();}}.bind(this));},_resetView:function _resetView(){this._pages=[];this._currentPageNumber=1;this._currentScale=UNKNOWN_SCALE;this._currentScaleValue=null;this._buffer=new PDFPageViewBuffer(DEFAULT_CACHE_SIZE);this._location=null;this._pagesRotation=0;this._pagesRequests=[];var container=this.viewer;while(container.hasChildNodes()){container.removeChild(container.lastChild);}},_scrollUpdate:function PDFViewer_scrollUpdate(){if(this.pagesCount===0){return;}this.update();for(var i=0,ii=this._pages.length;i<ii;i++){this._pages[i].updatePosition();}},_setScaleDispatchEvent:function pdfViewer_setScaleDispatchEvent(newScale,newValue,preset){var arg={source:this,scale:newScale,presetValue:preset?newValue:undefined};this.eventBus.dispatch('scalechanging',arg);this.eventBus.dispatch('scalechange',arg);},_setScaleUpdatePages:function pdfViewer_setScaleUpdatePages(newScale,newValue,noScroll,preset){this._currentScaleValue=newValue.toString();if(isSameScale(this._currentScale,newScale)){if(preset){this._setScaleDispatchEvent(newScale,newValue,true);}return;}for(var i=0,ii=this._pages.length;i<ii;i++){this._pages[i].update(newScale);}this._currentScale=newScale;if(!noScroll){var page=this._currentPageNumber,dest;if(this._location&&!pdfjsLib.PDFJS.ignoreCurrentPositionOnZoom&&!(this.isInPresentationMode||this.isChangingPresentationMode)){page=this._location.pageNumber;dest=[null,{name:'XYZ'},this._location.left,this._location.top,null];}this.scrollPageIntoView({pageNumber:page,destArray:dest,allowNegativeOffset:true});}this._setScaleDispatchEvent(newScale,newValue,preset);if(this.defaultRenderingQueue){this.update();}},_setScale:function PDFViewer_setScale(value,noScroll){var scale=parseFloat(value);if(scale>0){this._setScaleUpdatePages(scale,value,noScroll,false);}else{var currentPage=this._pages[this._currentPageNumber-1];if(!currentPage){return;}var hPadding=this.isInPresentationMode||this.removePageBorders?0:SCROLLBAR_PADDING;var vPadding=this.isInPresentationMode||this.removePageBorders?0:VERTICAL_PADDING;var pageWidthScale=(this.container.clientWidth-hPadding)/currentPage.width*currentPage.scale;var pageHeightScale=(this.container.clientHeight-vPadding)/currentPage.height*currentPage.scale;switch(value){case'page-actual':scale=1;break;case'page-width':scale=pageWidthScale;break;case'page-height':scale=pageHeightScale;break;case'page-fit':scale=Math.min(pageWidthScale,pageHeightScale);break;case'auto':var isLandscape=currentPage.width>currentPage.height;// For pages in landscape mode, fit the page height to the viewer
	// *unless* the page would thus become too wide to fit horizontally.
	var horizontalScale=isLandscape?Math.min(pageHeightScale,pageWidthScale):pageWidthScale;scale=Math.min(MAX_AUTO_SCALE,horizontalScale);break;default:console.error('PDFViewer_setScale: "'+value+'" is an unknown zoom value.');return;}this._setScaleUpdatePages(scale,value,noScroll,true);}},/**
	                     * Refreshes page view: scrolls to the current page and updates the scale.
	                     * @private
	                     */_resetCurrentPageView:function _resetCurrentPageView(){if(this.isInPresentationMode){// Fixes the case when PDF has different page sizes.
	this._setScale(this._currentScaleValue,true);}var pageView=this._pages[this._currentPageNumber-1];scrollIntoView(pageView.div);},/**
	                     * @typedef ScrollPageIntoViewParameters
	                     * @param {number} pageNumber - The page number.
	                     * @param {Array} destArray - (optional) The original PDF destination array,
	                     *   in the format: <page-ref> </XYZ|/FitXXX> <args..>
	                     * @param {boolean} allowNegativeOffset - (optional) Allow negative page
	                     *   offsets. The default value is `false`.
	                     *//**
	                     * Scrolls page into view.
	                     * @param {ScrollPageIntoViewParameters} params
	                     */scrollPageIntoView:function PDFViewer_scrollPageIntoView(params){if(!this.pdfDocument){return;}if(arguments.length>1||typeof params==='number'){console.warn('Call of scrollPageIntoView() with obsolete signature.');var paramObj={};if(typeof params==='number'){paramObj.pageNumber=params;// pageNumber argument was found.
	}if(arguments[1]instanceof Array){paramObj.destArray=arguments[1];// destArray argument was found.
	}params=paramObj;}var pageNumber=params.pageNumber||0;var dest=params.destArray||null;var allowNegativeOffset=params.allowNegativeOffset||false;if(this.isInPresentationMode||!dest){this._setCurrentPageNumber(pageNumber,/* resetCurrentPageView */true);return;}var pageView=this._pages[pageNumber-1];if(!pageView){console.error('PDFViewer_scrollPageIntoView: '+'Invalid "pageNumber" parameter.');return;}var x=0,y=0;var width=0,height=0,widthScale,heightScale;var changeOrientation=pageView.rotation%180===0?false:true;var pageWidth=(changeOrientation?pageView.height:pageView.width)/pageView.scale/CSS_UNITS;var pageHeight=(changeOrientation?pageView.width:pageView.height)/pageView.scale/CSS_UNITS;var scale=0;switch(dest[1].name){case'XYZ':x=dest[2];y=dest[3];scale=dest[4];// If x and/or y coordinates are not supplied, default to
	// _top_ left of the page (not the obvious bottom left,
	// since aligning the bottom of the intended page with the
	// top of the window is rarely helpful).
	x=x!==null?x:0;y=y!==null?y:pageHeight;break;case'Fit':case'FitB':scale='page-fit';break;case'FitH':case'FitBH':y=dest[2];scale='page-width';// According to the PDF spec, section 12.3.2.2, a `null` value in the
	// parameter should maintain the position relative to the new page.
	if(y===null&&this._location){x=this._location.left;y=this._location.top;}break;case'FitV':case'FitBV':x=dest[2];width=pageWidth;height=pageHeight;scale='page-height';break;case'FitR':x=dest[2];y=dest[3];width=dest[4]-x;height=dest[5]-y;var hPadding=this.removePageBorders?0:SCROLLBAR_PADDING;var vPadding=this.removePageBorders?0:VERTICAL_PADDING;widthScale=(this.container.clientWidth-hPadding)/width/CSS_UNITS;heightScale=(this.container.clientHeight-vPadding)/height/CSS_UNITS;scale=Math.min(Math.abs(widthScale),Math.abs(heightScale));break;default:console.error('PDFViewer_scrollPageIntoView: \''+dest[1].name+'\' is not a valid destination type.');return;}if(scale&&scale!==this._currentScale){this.currentScaleValue=scale;}else if(this._currentScale===UNKNOWN_SCALE){this.currentScaleValue=DEFAULT_SCALE_VALUE;}if(scale==='page-fit'&&!dest[4]){scrollIntoView(pageView.div);return;}var boundingRect=[pageView.viewport.convertToViewportPoint(x,y),pageView.viewport.convertToViewportPoint(x+width,y+height)];var left=Math.min(boundingRect[0][0],boundingRect[1][0]);var top=Math.min(boundingRect[0][1],boundingRect[1][1]);if(!allowNegativeOffset){// Some bad PDF generators will create destinations with e.g. top values
	// that exceeds the page height. Ensure that offsets are not negative,
	// to prevent a previous page from becoming visible (fixes bug 874482).
	left=Math.max(left,0);top=Math.max(top,0);}scrollIntoView(pageView.div,{left:left,top:top});},_updateLocation:function _updateLocation(firstPage){var currentScale=this._currentScale;var currentScaleValue=this._currentScaleValue;var normalizedScaleValue=parseFloat(currentScaleValue)===currentScale?Math.round(currentScale*10000)/100:currentScaleValue;var pageNumber=firstPage.id;var pdfOpenParams='#page='+pageNumber;pdfOpenParams+='&zoom='+normalizedScaleValue;var currentPageView=this._pages[pageNumber-1];var container=this.container;var topLeft=currentPageView.getPagePoint(container.scrollLeft-firstPage.x,container.scrollTop-firstPage.y);var intLeft=Math.round(topLeft[0]);var intTop=Math.round(topLeft[1]);pdfOpenParams+=','+intLeft+','+intTop;this._location={pageNumber:pageNumber,scale:normalizedScaleValue,top:intTop,left:intLeft,pdfOpenParams:pdfOpenParams};},update:function PDFViewer_update(){var visible=this._getVisiblePages();var visiblePages=visible.views;if(visiblePages.length===0){return;}var suggestedCacheSize=Math.max(DEFAULT_CACHE_SIZE,2*visiblePages.length+1);this._buffer.resize(suggestedCacheSize);this.renderingQueue.renderHighestPriority(visible);var currentId=this._currentPageNumber;var firstPage=visible.first;for(var i=0,ii=visiblePages.length,stillFullyVisible=false;i<ii;++i){var page=visiblePages[i];if(page.percent<100){break;}if(page.id===currentId){stillFullyVisible=true;break;}}if(!stillFullyVisible){currentId=visiblePages[0].id;}if(!this.isInPresentationMode){this._setCurrentPageNumber(currentId);}this._updateLocation(firstPage);this.eventBus.dispatch('updateviewarea',{source:this,location:this._location});},containsElement:function containsElement(element){return this.container.contains(element);},focus:function focus(){this.container.focus();},get isInPresentationMode(){return this.presentationModeState===PresentationModeState.FULLSCREEN;},get isChangingPresentationMode(){return this.presentationModeState===PresentationModeState.CHANGING;},get isHorizontalScrollbarEnabled(){return this.isInPresentationMode?false:this.container.scrollWidth>this.container.clientWidth;},_getVisiblePages:function _getVisiblePages(){if(!this.isInPresentationMode){return getVisibleElements(this.container,this._pages,true);}else{// The algorithm in getVisibleElements doesn't work in all browsers and
	// configurations when presentation mode is active.
	var visible=[];var currentPage=this._pages[this._currentPageNumber-1];visible.push({id:currentPage.id,view:currentPage});return{first:currentPage,last:currentPage,views:visible};}},cleanup:function cleanup(){for(var i=0,ii=this._pages.length;i<ii;i++){if(this._pages[i]&&this._pages[i].renderingState!==RenderingStates.FINISHED){this._pages[i].reset();}}},/**
	                     * @param {PDFPageView} pageView
	                     * @returns {PDFPage}
	                     * @private
	                     */_ensurePdfPageLoaded:function _ensurePdfPageLoaded(pageView){if(pageView.pdfPage){return Promise.resolve(pageView.pdfPage);}var pageNumber=pageView.id;if(this._pagesRequests[pageNumber]){return this._pagesRequests[pageNumber];}var promise=this.pdfDocument.getPage(pageNumber).then(function(pdfPage){pageView.setPdfPage(pdfPage);this._pagesRequests[pageNumber]=null;return pdfPage;}.bind(this));this._pagesRequests[pageNumber]=promise;return promise;},forceRendering:function forceRendering(currentlyVisiblePages){var visiblePages=currentlyVisiblePages||this._getVisiblePages();var pageView=this.renderingQueue.getHighestPriority(visiblePages,this._pages,this.scroll.down);if(pageView){this._ensurePdfPageLoaded(pageView).then(function(){this.renderingQueue.renderView(pageView);}.bind(this));return true;}return false;},getPageTextContent:function getPageTextContent(pageIndex){return this.pdfDocument.getPage(pageIndex+1).then(function(page){return page.getTextContent({normalizeWhitespace:true});});},/**
	                     * @param {HTMLDivElement} textLayerDiv
	                     * @param {number} pageIndex
	                     * @param {PageViewport} viewport
	                     * @returns {TextLayerBuilder}
	                     */createTextLayerBuilder:function createTextLayerBuilder(textLayerDiv,pageIndex,viewport,enhanceTextSelection){return new TextLayerBuilder({textLayerDiv:textLayerDiv,eventBus:this.eventBus,pageIndex:pageIndex,viewport:viewport,findController:this.isInPresentationMode?null:this.findController,enhanceTextSelection:this.isInPresentationMode?false:enhanceTextSelection});},/**
	                     * @param {HTMLDivElement} pageDiv
	                     * @param {PDFPage} pdfPage
	                     * @param {boolean} renderInteractiveForms
	                     * @returns {AnnotationLayerBuilder}
	                     */createAnnotationLayerBuilder:function createAnnotationLayerBuilder(pageDiv,pdfPage,renderInteractiveForms){return new AnnotationLayerBuilder({pageDiv:pageDiv,pdfPage:pdfPage,renderInteractiveForms:renderInteractiveForms,linkService:this.linkService,downloadManager:this.downloadManager});},setFindController:function setFindController(findController){this.findController=findController;}};return PDFViewer;}();exports.PresentationModeState=PresentationModeState;exports.PDFViewer=PDFViewer;});}).call(pdfViewerLibs);var PDFJS=pdfjsLib.PDFJS;PDFJS.PDFViewer=pdfViewerLibs.pdfjsWebPDFViewer.PDFViewer;PDFJS.PDFPageView=pdfViewerLibs.pdfjsWebPDFPageView.PDFPageView;PDFJS.PDFLinkService=pdfViewerLibs.pdfjsWebPDFLinkService.PDFLinkService;PDFJS.TextLayerBuilder=pdfViewerLibs.pdfjsWebTextLayerBuilder.TextLayerBuilder;PDFJS.DefaultTextLayerFactory=pdfViewerLibs.pdfjsWebTextLayerBuilder.DefaultTextLayerFactory;PDFJS.AnnotationLayerBuilder=pdfViewerLibs.pdfjsWebAnnotationLayerBuilder.AnnotationLayerBuilder;PDFJS.DefaultAnnotationLayerFactory=pdfViewerLibs.pdfjsWebAnnotationLayerBuilder.DefaultAnnotationLayerFactory;PDFJS.PDFHistory=pdfViewerLibs.pdfjsWebPDFHistory.PDFHistory;PDFJS.PDFFindController=pdfViewerLibs.pdfjsWebPDFFindController.PDFFindController;PDFJS.EventBus=pdfViewerLibs.pdfjsWebUIUtils.EventBus;PDFJS.DownloadManager=pdfViewerLibs.pdfjsWebDownloadManager.DownloadManager;PDFJS.ProgressBar=pdfViewerLibs.pdfjsWebUIUtils.ProgressBar;exports.PDFJS=PDFJS;});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/* Copyright 2012 Mozilla Foundation
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/* jshint globalstrict: false */
	/* umdutils ignore */

	(function (root, factory) {
	  'use strict';
	  if (true) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined') {
	    factory(exports);
	  } else {
	factory((root.pdfjsDistBuildPdf = {}));
	  }
	}(this, function (exports) {
	  // Use strict in our context only - users might not want it
	  'use strict';

	var pdfjsVersion = '1.6.221';
	var pdfjsBuild = 'f8bd3d4';

	  var pdfjsFilePath =
	    typeof document !== 'undefined' && document.currentScript ?
	      document.currentScript.src : null;

	  var pdfjsLibs = {};

	  (function pdfjsWrapper() {



	(function (root, factory) {
	  {
	    factory((root.pdfjsSharedUtil = {}));
	  }
	}(this, function (exports) {

	var globalScope = (typeof window !== 'undefined') ? window :
	                  (typeof global !== 'undefined') ? global :
	                  (typeof self !== 'undefined') ? self : this;

	var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];

	var TextRenderingMode = {
	  FILL: 0,
	  STROKE: 1,
	  FILL_STROKE: 2,
	  INVISIBLE: 3,
	  FILL_ADD_TO_PATH: 4,
	  STROKE_ADD_TO_PATH: 5,
	  FILL_STROKE_ADD_TO_PATH: 6,
	  ADD_TO_PATH: 7,
	  FILL_STROKE_MASK: 3,
	  ADD_TO_PATH_FLAG: 4
	};

	var ImageKind = {
	  GRAYSCALE_1BPP: 1,
	  RGB_24BPP: 2,
	  RGBA_32BPP: 3
	};

	var AnnotationType = {
	  TEXT: 1,
	  LINK: 2,
	  FREETEXT: 3,
	  LINE: 4,
	  SQUARE: 5,
	  CIRCLE: 6,
	  POLYGON: 7,
	  POLYLINE: 8,
	  HIGHLIGHT: 9,
	  UNDERLINE: 10,
	  SQUIGGLY: 11,
	  STRIKEOUT: 12,
	  STAMP: 13,
	  CARET: 14,
	  INK: 15,
	  POPUP: 16,
	  FILEATTACHMENT: 17,
	  SOUND: 18,
	  MOVIE: 19,
	  WIDGET: 20,
	  SCREEN: 21,
	  PRINTERMARK: 22,
	  TRAPNET: 23,
	  WATERMARK: 24,
	  THREED: 25,
	  REDACT: 26
	};

	var AnnotationFlag = {
	  INVISIBLE: 0x01,
	  HIDDEN: 0x02,
	  PRINT: 0x04,
	  NOZOOM: 0x08,
	  NOROTATE: 0x10,
	  NOVIEW: 0x20,
	  READONLY: 0x40,
	  LOCKED: 0x80,
	  TOGGLENOVIEW: 0x100,
	  LOCKEDCONTENTS: 0x200
	};

	var AnnotationFieldFlag = {
	  READONLY: 0x0000001,
	  REQUIRED: 0x0000002,
	  NOEXPORT: 0x0000004,
	  MULTILINE: 0x0001000,
	  PASSWORD: 0x0002000,
	  NOTOGGLETOOFF: 0x0004000,
	  RADIO: 0x0008000,
	  PUSHBUTTON: 0x0010000,
	  COMBO: 0x0020000,
	  EDIT: 0x0040000,
	  SORT: 0x0080000,
	  FILESELECT: 0x0100000,
	  MULTISELECT: 0x0200000,
	  DONOTSPELLCHECK: 0x0400000,
	  DONOTSCROLL: 0x0800000,
	  COMB: 0x1000000,
	  RICHTEXT: 0x2000000,
	  RADIOSINUNISON: 0x2000000,
	  COMMITONSELCHANGE: 0x4000000,
	};

	var AnnotationBorderStyleType = {
	  SOLID: 1,
	  DASHED: 2,
	  BEVELED: 3,
	  INSET: 4,
	  UNDERLINE: 5
	};

	var StreamType = {
	  UNKNOWN: 0,
	  FLATE: 1,
	  LZW: 2,
	  DCT: 3,
	  JPX: 4,
	  JBIG: 5,
	  A85: 6,
	  AHX: 7,
	  CCF: 8,
	  RL: 9
	};

	var FontType = {
	  UNKNOWN: 0,
	  TYPE1: 1,
	  TYPE1C: 2,
	  CIDFONTTYPE0: 3,
	  CIDFONTTYPE0C: 4,
	  TRUETYPE: 5,
	  CIDFONTTYPE2: 6,
	  TYPE3: 7,
	  OPENTYPE: 8,
	  TYPE0: 9,
	  MMTYPE1: 10
	};

	var VERBOSITY_LEVELS = {
	  errors: 0,
	  warnings: 1,
	  infos: 5
	};

	// All the possible operations for an operator list.
	var OPS = {
	  // Intentionally start from 1 so it is easy to spot bad operators that will be
	  // 0's.
	  dependency: 1,
	  setLineWidth: 2,
	  setLineCap: 3,
	  setLineJoin: 4,
	  setMiterLimit: 5,
	  setDash: 6,
	  setRenderingIntent: 7,
	  setFlatness: 8,
	  setGState: 9,
	  save: 10,
	  restore: 11,
	  transform: 12,
	  moveTo: 13,
	  lineTo: 14,
	  curveTo: 15,
	  curveTo2: 16,
	  curveTo3: 17,
	  closePath: 18,
	  rectangle: 19,
	  stroke: 20,
	  closeStroke: 21,
	  fill: 22,
	  eoFill: 23,
	  fillStroke: 24,
	  eoFillStroke: 25,
	  closeFillStroke: 26,
	  closeEOFillStroke: 27,
	  endPath: 28,
	  clip: 29,
	  eoClip: 30,
	  beginText: 31,
	  endText: 32,
	  setCharSpacing: 33,
	  setWordSpacing: 34,
	  setHScale: 35,
	  setLeading: 36,
	  setFont: 37,
	  setTextRenderingMode: 38,
	  setTextRise: 39,
	  moveText: 40,
	  setLeadingMoveText: 41,
	  setTextMatrix: 42,
	  nextLine: 43,
	  showText: 44,
	  showSpacedText: 45,
	  nextLineShowText: 46,
	  nextLineSetSpacingShowText: 47,
	  setCharWidth: 48,
	  setCharWidthAndBounds: 49,
	  setStrokeColorSpace: 50,
	  setFillColorSpace: 51,
	  setStrokeColor: 52,
	  setStrokeColorN: 53,
	  setFillColor: 54,
	  setFillColorN: 55,
	  setStrokeGray: 56,
	  setFillGray: 57,
	  setStrokeRGBColor: 58,
	  setFillRGBColor: 59,
	  setStrokeCMYKColor: 60,
	  setFillCMYKColor: 61,
	  shadingFill: 62,
	  beginInlineImage: 63,
	  beginImageData: 64,
	  endInlineImage: 65,
	  paintXObject: 66,
	  markPoint: 67,
	  markPointProps: 68,
	  beginMarkedContent: 69,
	  beginMarkedContentProps: 70,
	  endMarkedContent: 71,
	  beginCompat: 72,
	  endCompat: 73,
	  paintFormXObjectBegin: 74,
	  paintFormXObjectEnd: 75,
	  beginGroup: 76,
	  endGroup: 77,
	  beginAnnotations: 78,
	  endAnnotations: 79,
	  beginAnnotation: 80,
	  endAnnotation: 81,
	  paintJpegXObject: 82,
	  paintImageMaskXObject: 83,
	  paintImageMaskXObjectGroup: 84,
	  paintImageXObject: 85,
	  paintInlineImageXObject: 86,
	  paintInlineImageXObjectGroup: 87,
	  paintImageXObjectRepeat: 88,
	  paintImageMaskXObjectRepeat: 89,
	  paintSolidColorImageMask: 90,
	  constructPath: 91
	};

	var verbosity = VERBOSITY_LEVELS.warnings;

	function setVerbosityLevel(level) {
	  verbosity = level;
	}

	function getVerbosityLevel() {
	  return verbosity;
	}

	// A notice for devs. These are good for things that are helpful to devs, such
	// as warning that Workers were disabled, which is important to devs but not
	// end users.
	function info(msg) {
	  if (verbosity >= VERBOSITY_LEVELS.infos) {
	    console.log('Info: ' + msg);
	  }
	}

	// Non-fatal warnings.
	function warn(msg) {
	  if (verbosity >= VERBOSITY_LEVELS.warnings) {
	    console.log('Warning: ' + msg);
	  }
	}

	// Deprecated API function -- display regardless of the PDFJS.verbosity setting.
	function deprecated(details) {
	  console.log('Deprecated API usage: ' + details);
	}

	// Fatal errors that should trigger the fallback UI and halt execution by
	// throwing an exception.
	function error(msg) {
	  if (verbosity >= VERBOSITY_LEVELS.errors) {
	    console.log('Error: ' + msg);
	    console.log(backtrace());
	  }
	  throw new Error(msg);
	}

	function backtrace() {
	  try {
	    throw new Error();
	  } catch (e) {
	    return e.stack ? e.stack.split('\n').slice(2).join('\n') : '';
	  }
	}

	function assert(cond, msg) {
	  if (!cond) {
	    error(msg);
	  }
	}

	var UNSUPPORTED_FEATURES = {
	  unknown: 'unknown',
	  forms: 'forms',
	  javaScript: 'javaScript',
	  smask: 'smask',
	  shadingPattern: 'shadingPattern',
	  font: 'font'
	};

	// Checks if URLs have the same origin. For non-HTTP based URLs, returns false.
	function isSameOrigin(baseUrl, otherUrl) {
	  try {
	    var base = new URL(baseUrl);
	    if (!base.origin || base.origin === 'null') {
	      return false; // non-HTTP url
	    }
	  } catch (e) {
	    return false;
	  }

	  var other = new URL(otherUrl, base);
	  return base.origin === other.origin;
	}

	// Validates if URL is safe and allowed, e.g. to avoid XSS.
	function isValidUrl(url, allowRelative) {
	  if (!url || typeof url !== 'string') {
	    return false;
	  }
	  // RFC 3986 (http://tools.ietf.org/html/rfc3986#section-3.1)
	  // scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
	  var protocol = /^[a-z][a-z0-9+\-.]*(?=:)/i.exec(url);
	  if (!protocol) {
	    return allowRelative;
	  }
	  protocol = protocol[0].toLowerCase();
	  switch (protocol) {
	    case 'http':
	    case 'https':
	    case 'ftp':
	    case 'mailto':
	    case 'tel':
	      return true;
	    default:
	      return false;
	  }
	}

	function shadow(obj, prop, value) {
	  Object.defineProperty(obj, prop, { value: value,
	                                     enumerable: true,
	                                     configurable: true,
	                                     writable: false });
	  return value;
	}

	function getLookupTableFactory(initializer) {
	  var lookup;
	  return function () {
	    if (initializer) {
	      lookup = Object.create(null);
	      initializer(lookup);
	      initializer = null;
	    }
	    return lookup;
	  };
	}

	var PasswordResponses = {
	  NEED_PASSWORD: 1,
	  INCORRECT_PASSWORD: 2
	};

	var PasswordException = (function PasswordExceptionClosure() {
	  function PasswordException(msg, code) {
	    this.name = 'PasswordException';
	    this.message = msg;
	    this.code = code;
	  }

	  PasswordException.prototype = new Error();
	  PasswordException.constructor = PasswordException;

	  return PasswordException;
	})();

	var UnknownErrorException = (function UnknownErrorExceptionClosure() {
	  function UnknownErrorException(msg, details) {
	    this.name = 'UnknownErrorException';
	    this.message = msg;
	    this.details = details;
	  }

	  UnknownErrorException.prototype = new Error();
	  UnknownErrorException.constructor = UnknownErrorException;

	  return UnknownErrorException;
	})();

	var InvalidPDFException = (function InvalidPDFExceptionClosure() {
	  function InvalidPDFException(msg) {
	    this.name = 'InvalidPDFException';
	    this.message = msg;
	  }

	  InvalidPDFException.prototype = new Error();
	  InvalidPDFException.constructor = InvalidPDFException;

	  return InvalidPDFException;
	})();

	var MissingPDFException = (function MissingPDFExceptionClosure() {
	  function MissingPDFException(msg) {
	    this.name = 'MissingPDFException';
	    this.message = msg;
	  }

	  MissingPDFException.prototype = new Error();
	  MissingPDFException.constructor = MissingPDFException;

	  return MissingPDFException;
	})();

	var UnexpectedResponseException =
	    (function UnexpectedResponseExceptionClosure() {
	  function UnexpectedResponseException(msg, status) {
	    this.name = 'UnexpectedResponseException';
	    this.message = msg;
	    this.status = status;
	  }

	  UnexpectedResponseException.prototype = new Error();
	  UnexpectedResponseException.constructor = UnexpectedResponseException;

	  return UnexpectedResponseException;
	})();

	var NotImplementedException = (function NotImplementedExceptionClosure() {
	  function NotImplementedException(msg) {
	    this.message = msg;
	  }

	  NotImplementedException.prototype = new Error();
	  NotImplementedException.prototype.name = 'NotImplementedException';
	  NotImplementedException.constructor = NotImplementedException;

	  return NotImplementedException;
	})();

	var MissingDataException = (function MissingDataExceptionClosure() {
	  function MissingDataException(begin, end) {
	    this.begin = begin;
	    this.end = end;
	    this.message = 'Missing data [' + begin + ', ' + end + ')';
	  }

	  MissingDataException.prototype = new Error();
	  MissingDataException.prototype.name = 'MissingDataException';
	  MissingDataException.constructor = MissingDataException;

	  return MissingDataException;
	})();

	var XRefParseException = (function XRefParseExceptionClosure() {
	  function XRefParseException(msg) {
	    this.message = msg;
	  }

	  XRefParseException.prototype = new Error();
	  XRefParseException.prototype.name = 'XRefParseException';
	  XRefParseException.constructor = XRefParseException;

	  return XRefParseException;
	})();

	var NullCharactersRegExp = /\x00/g;

	function removeNullCharacters(str) {
	  if (typeof str !== 'string') {
	    warn('The argument for removeNullCharacters must be a string.');
	    return str;
	  }
	  return str.replace(NullCharactersRegExp, '');
	}

	function bytesToString(bytes) {
	  assert(bytes !== null && typeof bytes === 'object' &&
	         bytes.length !== undefined, 'Invalid argument for bytesToString');
	  var length = bytes.length;
	  var MAX_ARGUMENT_COUNT = 8192;
	  if (length < MAX_ARGUMENT_COUNT) {
	    return String.fromCharCode.apply(null, bytes);
	  }
	  var strBuf = [];
	  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
	    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
	    var chunk = bytes.subarray(i, chunkEnd);
	    strBuf.push(String.fromCharCode.apply(null, chunk));
	  }
	  return strBuf.join('');
	}

	function stringToBytes(str) {
	  assert(typeof str === 'string', 'Invalid argument for stringToBytes');
	  var length = str.length;
	  var bytes = new Uint8Array(length);
	  for (var i = 0; i < length; ++i) {
	    bytes[i] = str.charCodeAt(i) & 0xFF;
	  }
	  return bytes;
	}

	/**
	 * Gets length of the array (Array, Uint8Array, or string) in bytes.
	 * @param {Array|Uint8Array|string} arr
	 * @returns {number}
	 */
	function arrayByteLength(arr) {
	  if (arr.length !== undefined) {
	    return arr.length;
	  }
	  assert(arr.byteLength !== undefined);
	  return arr.byteLength;
	}

	/**
	 * Combines array items (arrays) into single Uint8Array object.
	 * @param {Array} arr - the array of the arrays (Array, Uint8Array, or string).
	 * @returns {Uint8Array}
	 */
	function arraysToBytes(arr) {
	  // Shortcut: if first and only item is Uint8Array, return it.
	  if (arr.length === 1 && (arr[0] instanceof Uint8Array)) {
	    return arr[0];
	  }
	  var resultLength = 0;
	  var i, ii = arr.length;
	  var item, itemLength ;
	  for (i = 0; i < ii; i++) {
	    item = arr[i];
	    itemLength = arrayByteLength(item);
	    resultLength += itemLength;
	  }
	  var pos = 0;
	  var data = new Uint8Array(resultLength);
	  for (i = 0; i < ii; i++) {
	    item = arr[i];
	    if (!(item instanceof Uint8Array)) {
	      if (typeof item === 'string') {
	        item = stringToBytes(item);
	      } else {
	        item = new Uint8Array(item);
	      }
	    }
	    itemLength = item.byteLength;
	    data.set(item, pos);
	    pos += itemLength;
	  }
	  return data;
	}

	function string32(value) {
	  return String.fromCharCode((value >> 24) & 0xff, (value >> 16) & 0xff,
	                             (value >> 8) & 0xff, value & 0xff);
	}

	function log2(x) {
	  var n = 1, i = 0;
	  while (x > n) {
	    n <<= 1;
	    i++;
	  }
	  return i;
	}

	function readInt8(data, start) {
	  return (data[start] << 24) >> 24;
	}

	function readUint16(data, offset) {
	  return (data[offset] << 8) | data[offset + 1];
	}

	function readUint32(data, offset) {
	  return ((data[offset] << 24) | (data[offset + 1] << 16) |
	         (data[offset + 2] << 8) | data[offset + 3]) >>> 0;
	}

	// Lazy test the endianness of the platform
	// NOTE: This will be 'true' for simulated TypedArrays
	function isLittleEndian() {
	  var buffer8 = new Uint8Array(2);
	  buffer8[0] = 1;
	  var buffer16 = new Uint16Array(buffer8.buffer);
	  return (buffer16[0] === 1);
	}

	// Checks if it's possible to eval JS expressions.
	function isEvalSupported() {
	  try {
	    /* jshint evil: true */
	    new Function('');
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	var Uint32ArrayView = (function Uint32ArrayViewClosure() {

	  function Uint32ArrayView(buffer, length) {
	    this.buffer = buffer;
	    this.byteLength = buffer.length;
	    this.length = length === undefined ? (this.byteLength >> 2) : length;
	    ensureUint32ArrayViewProps(this.length);
	  }
	  Uint32ArrayView.prototype = Object.create(null);

	  var uint32ArrayViewSetters = 0;
	  function createUint32ArrayProp(index) {
	    return {
	      get: function () {
	        var buffer = this.buffer, offset = index << 2;
	        return (buffer[offset] | (buffer[offset + 1] << 8) |
	          (buffer[offset + 2] << 16) | (buffer[offset + 3] << 24)) >>> 0;
	      },
	      set: function (value) {
	        var buffer = this.buffer, offset = index << 2;
	        buffer[offset] = value & 255;
	        buffer[offset + 1] = (value >> 8) & 255;
	        buffer[offset + 2] = (value >> 16) & 255;
	        buffer[offset + 3] = (value >>> 24) & 255;
	      }
	    };
	  }

	  function ensureUint32ArrayViewProps(length) {
	    while (uint32ArrayViewSetters < length) {
	      Object.defineProperty(Uint32ArrayView.prototype,
	        uint32ArrayViewSetters,
	        createUint32ArrayProp(uint32ArrayViewSetters));
	      uint32ArrayViewSetters++;
	    }
	  }

	  return Uint32ArrayView;
	})();

	exports.Uint32ArrayView = Uint32ArrayView;

	var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];

	var Util = (function UtilClosure() {
	  function Util() {}

	  var rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];

	  // makeCssRgb() can be called thousands of times. Using |rgbBuf| avoids
	  // creating many intermediate strings.
	  Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
	    rgbBuf[1] = r;
	    rgbBuf[3] = g;
	    rgbBuf[5] = b;
	    return rgbBuf.join('');
	  };

	  // Concatenates two transformation matrices together and returns the result.
	  Util.transform = function Util_transform(m1, m2) {
	    return [
	      m1[0] * m2[0] + m1[2] * m2[1],
	      m1[1] * m2[0] + m1[3] * m2[1],
	      m1[0] * m2[2] + m1[2] * m2[3],
	      m1[1] * m2[2] + m1[3] * m2[3],
	      m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
	      m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
	    ];
	  };

	  // For 2d affine transforms
	  Util.applyTransform = function Util_applyTransform(p, m) {
	    var xt = p[0] * m[0] + p[1] * m[2] + m[4];
	    var yt = p[0] * m[1] + p[1] * m[3] + m[5];
	    return [xt, yt];
	  };

	  Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
	    var d = m[0] * m[3] - m[1] * m[2];
	    var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
	    var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
	    return [xt, yt];
	  };

	  // Applies the transform to the rectangle and finds the minimum axially
	  // aligned bounding box.
	  Util.getAxialAlignedBoundingBox =
	    function Util_getAxialAlignedBoundingBox(r, m) {

	    var p1 = Util.applyTransform(r, m);
	    var p2 = Util.applyTransform(r.slice(2, 4), m);
	    var p3 = Util.applyTransform([r[0], r[3]], m);
	    var p4 = Util.applyTransform([r[2], r[1]], m);
	    return [
	      Math.min(p1[0], p2[0], p3[0], p4[0]),
	      Math.min(p1[1], p2[1], p3[1], p4[1]),
	      Math.max(p1[0], p2[0], p3[0], p4[0]),
	      Math.max(p1[1], p2[1], p3[1], p4[1])
	    ];
	  };

	  Util.inverseTransform = function Util_inverseTransform(m) {
	    var d = m[0] * m[3] - m[1] * m[2];
	    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d,
	      (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
	  };

	  // Apply a generic 3d matrix M on a 3-vector v:
	  //   | a b c |   | X |
	  //   | d e f | x | Y |
	  //   | g h i |   | Z |
	  // M is assumed to be serialized as [a,b,c,d,e,f,g,h,i],
	  // with v as [X,Y,Z]
	  Util.apply3dTransform = function Util_apply3dTransform(m, v) {
	    return [
	      m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
	      m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
	      m[6] * v[0] + m[7] * v[1] + m[8] * v[2]
	    ];
	  };

	  // This calculation uses Singular Value Decomposition.
	  // The SVD can be represented with formula A = USV. We are interested in the
	  // matrix S here because it represents the scale values.
	  Util.singularValueDecompose2dScale =
	    function Util_singularValueDecompose2dScale(m) {

	    var transpose = [m[0], m[2], m[1], m[3]];

	    // Multiply matrix m with its transpose.
	    var a = m[0] * transpose[0] + m[1] * transpose[2];
	    var b = m[0] * transpose[1] + m[1] * transpose[3];
	    var c = m[2] * transpose[0] + m[3] * transpose[2];
	    var d = m[2] * transpose[1] + m[3] * transpose[3];

	    // Solve the second degree polynomial to get roots.
	    var first = (a + d) / 2;
	    var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
	    var sx = first + second || 1;
	    var sy = first - second || 1;

	    // Scale values are the square roots of the eigenvalues.
	    return [Math.sqrt(sx), Math.sqrt(sy)];
	  };

	  // Normalize rectangle rect=[x1, y1, x2, y2] so that (x1,y1) < (x2,y2)
	  // For coordinate systems whose origin lies in the bottom-left, this
	  // means normalization to (BL,TR) ordering. For systems with origin in the
	  // top-left, this means (TL,BR) ordering.
	  Util.normalizeRect = function Util_normalizeRect(rect) {
	    var r = rect.slice(0); // clone rect
	    if (rect[0] > rect[2]) {
	      r[0] = rect[2];
	      r[2] = rect[0];
	    }
	    if (rect[1] > rect[3]) {
	      r[1] = rect[3];
	      r[3] = rect[1];
	    }
	    return r;
	  };

	  // Returns a rectangle [x1, y1, x2, y2] corresponding to the
	  // intersection of rect1 and rect2. If no intersection, returns 'false'
	  // The rectangle coordinates of rect1, rect2 should be [x1, y1, x2, y2]
	  Util.intersect = function Util_intersect(rect1, rect2) {
	    function compare(a, b) {
	      return a - b;
	    }

	    // Order points along the axes
	    var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare),
	        orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare),
	        result = [];

	    rect1 = Util.normalizeRect(rect1);
	    rect2 = Util.normalizeRect(rect2);

	    // X: first and second points belong to different rectangles?
	    if ((orderedX[0] === rect1[0] && orderedX[1] === rect2[0]) ||
	        (orderedX[0] === rect2[0] && orderedX[1] === rect1[0])) {
	      // Intersection must be between second and third points
	      result[0] = orderedX[1];
	      result[2] = orderedX[2];
	    } else {
	      return false;
	    }

	    // Y: first and second points belong to different rectangles?
	    if ((orderedY[0] === rect1[1] && orderedY[1] === rect2[1]) ||
	        (orderedY[0] === rect2[1] && orderedY[1] === rect1[1])) {
	      // Intersection must be between second and third points
	      result[1] = orderedY[1];
	      result[3] = orderedY[2];
	    } else {
	      return false;
	    }

	    return result;
	  };

	  Util.sign = function Util_sign(num) {
	    return num < 0 ? -1 : 1;
	  };

	  var ROMAN_NUMBER_MAP = [
	    '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
	    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
	    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'
	  ];
	  /**
	   * Converts positive integers to (upper case) Roman numerals.
	   * @param {integer} number - The number that should be converted.
	   * @param {boolean} lowerCase - Indicates if the result should be converted
	   *   to lower case letters. The default is false.
	   * @return {string} The resulting Roman number.
	   */
	  Util.toRoman = function Util_toRoman(number, lowerCase) {
	    assert(isInt(number) && number > 0,
	           'The number should be a positive integer.');
	    var pos, romanBuf = [];
	    // Thousands
	    while (number >= 1000) {
	      number -= 1000;
	      romanBuf.push('M');
	    }
	    // Hundreds
	    pos = (number / 100) | 0;
	    number %= 100;
	    romanBuf.push(ROMAN_NUMBER_MAP[pos]);
	    // Tens
	    pos = (number / 10) | 0;
	    number %= 10;
	    romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
	    // Ones
	    romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);

	    var romanStr = romanBuf.join('');
	    return (lowerCase ? romanStr.toLowerCase() : romanStr);
	  };

	  Util.appendToArray = function Util_appendToArray(arr1, arr2) {
	    Array.prototype.push.apply(arr1, arr2);
	  };

	  Util.prependToArray = function Util_prependToArray(arr1, arr2) {
	    Array.prototype.unshift.apply(arr1, arr2);
	  };

	  Util.extendObj = function extendObj(obj1, obj2) {
	    for (var key in obj2) {
	      obj1[key] = obj2[key];
	    }
	  };

	  Util.getInheritableProperty =
	      function Util_getInheritableProperty(dict, name, getArray) {
	    while (dict && !dict.has(name)) {
	      dict = dict.get('Parent');
	    }
	    if (!dict) {
	      return null;
	    }
	    return getArray ? dict.getArray(name) : dict.get(name);
	  };

	  Util.inherit = function Util_inherit(sub, base, prototype) {
	    sub.prototype = Object.create(base.prototype);
	    sub.prototype.constructor = sub;
	    for (var prop in prototype) {
	      sub.prototype[prop] = prototype[prop];
	    }
	  };

	  Util.loadScript = function Util_loadScript(src, callback) {
	    var script = document.createElement('script');
	    var loaded = false;
	    script.setAttribute('src', src);
	    if (callback) {
	      script.onload = function() {
	        if (!loaded) {
	          callback();
	        }
	        loaded = true;
	      };
	    }
	    document.getElementsByTagName('head')[0].appendChild(script);
	  };

	  return Util;
	})();

	/**
	 * PDF page viewport created based on scale, rotation and offset.
	 * @class
	 * @alias PageViewport
	 */
	var PageViewport = (function PageViewportClosure() {
	  /**
	   * @constructor
	   * @private
	   * @param viewBox {Array} xMin, yMin, xMax and yMax coordinates.
	   * @param scale {number} scale of the viewport.
	   * @param rotation {number} rotations of the viewport in degrees.
	   * @param offsetX {number} offset X
	   * @param offsetY {number} offset Y
	   * @param dontFlip {boolean} if true, axis Y will not be flipped.
	   */
	  function PageViewport(viewBox, scale, rotation, offsetX, offsetY, dontFlip) {
	    this.viewBox = viewBox;
	    this.scale = scale;
	    this.rotation = rotation;
	    this.offsetX = offsetX;
	    this.offsetY = offsetY;

	    // creating transform to convert pdf coordinate system to the normal
	    // canvas like coordinates taking in account scale and rotation
	    var centerX = (viewBox[2] + viewBox[0]) / 2;
	    var centerY = (viewBox[3] + viewBox[1]) / 2;
	    var rotateA, rotateB, rotateC, rotateD;
	    rotation = rotation % 360;
	    rotation = rotation < 0 ? rotation + 360 : rotation;
	    switch (rotation) {
	      case 180:
	        rotateA = -1; rotateB = 0; rotateC = 0; rotateD = 1;
	        break;
	      case 90:
	        rotateA = 0; rotateB = 1; rotateC = 1; rotateD = 0;
	        break;
	      case 270:
	        rotateA = 0; rotateB = -1; rotateC = -1; rotateD = 0;
	        break;
	      //case 0:
	      default:
	        rotateA = 1; rotateB = 0; rotateC = 0; rotateD = -1;
	        break;
	    }

	    if (dontFlip) {
	      rotateC = -rotateC; rotateD = -rotateD;
	    }

	    var offsetCanvasX, offsetCanvasY;
	    var width, height;
	    if (rotateA === 0) {
	      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
	      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
	      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
	      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
	    } else {
	      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
	      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
	      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
	      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
	    }
	    // creating transform for the following operations:
	    // translate(-centerX, -centerY), rotate and flip vertically,
	    // scale, and translate(offsetCanvasX, offsetCanvasY)
	    this.transform = [
	      rotateA * scale,
	      rotateB * scale,
	      rotateC * scale,
	      rotateD * scale,
	      offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY,
	      offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY
	    ];

	    this.width = width;
	    this.height = height;
	    this.fontScale = scale;
	  }
	  PageViewport.prototype = /** @lends PageViewport.prototype */ {
	    /**
	     * Clones viewport with additional properties.
	     * @param args {Object} (optional) If specified, may contain the 'scale' or
	     * 'rotation' properties to override the corresponding properties in
	     * the cloned viewport.
	     * @returns {PageViewport} Cloned viewport.
	     */
	    clone: function PageViewPort_clone(args) {
	      args = args || {};
	      var scale = 'scale' in args ? args.scale : this.scale;
	      var rotation = 'rotation' in args ? args.rotation : this.rotation;
	      return new PageViewport(this.viewBox.slice(), scale, rotation,
	                              this.offsetX, this.offsetY, args.dontFlip);
	    },
	    /**
	     * Converts PDF point to the viewport coordinates. For examples, useful for
	     * converting PDF location into canvas pixel coordinates.
	     * @param x {number} X coordinate.
	     * @param y {number} Y coordinate.
	     * @returns {Object} Object that contains 'x' and 'y' properties of the
	     * point in the viewport coordinate space.
	     * @see {@link convertToPdfPoint}
	     * @see {@link convertToViewportRectangle}
	     */
	    convertToViewportPoint: function PageViewport_convertToViewportPoint(x, y) {
	      return Util.applyTransform([x, y], this.transform);
	    },
	    /**
	     * Converts PDF rectangle to the viewport coordinates.
	     * @param rect {Array} xMin, yMin, xMax and yMax coordinates.
	     * @returns {Array} Contains corresponding coordinates of the rectangle
	     * in the viewport coordinate space.
	     * @see {@link convertToViewportPoint}
	     */
	    convertToViewportRectangle:
	      function PageViewport_convertToViewportRectangle(rect) {
	      var tl = Util.applyTransform([rect[0], rect[1]], this.transform);
	      var br = Util.applyTransform([rect[2], rect[3]], this.transform);
	      return [tl[0], tl[1], br[0], br[1]];
	    },
	    /**
	     * Converts viewport coordinates to the PDF location. For examples, useful
	     * for converting canvas pixel location into PDF one.
	     * @param x {number} X coordinate.
	     * @param y {number} Y coordinate.
	     * @returns {Object} Object that contains 'x' and 'y' properties of the
	     * point in the PDF coordinate space.
	     * @see {@link convertToViewportPoint}
	     */
	    convertToPdfPoint: function PageViewport_convertToPdfPoint(x, y) {
	      return Util.applyInverseTransform([x, y], this.transform);
	    }
	  };
	  return PageViewport;
	})();

	var PDFStringTranslateTable = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014,
	  0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C,
	  0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160,
	  0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC
	];

	function stringToPDFString(str) {
	  var i, n = str.length, strBuf = [];
	  if (str[0] === '\xFE' && str[1] === '\xFF') {
	    // UTF16BE BOM
	    for (i = 2; i < n; i += 2) {
	      strBuf.push(String.fromCharCode(
	        (str.charCodeAt(i) << 8) | str.charCodeAt(i + 1)));
	    }
	  } else {
	    for (i = 0; i < n; ++i) {
	      var code = PDFStringTranslateTable[str.charCodeAt(i)];
	      strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
	    }
	  }
	  return strBuf.join('');
	}

	function stringToUTF8String(str) {
	  return decodeURIComponent(escape(str));
	}

	function utf8StringToString(str) {
	  return unescape(encodeURIComponent(str));
	}

	function isEmptyObj(obj) {
	  for (var key in obj) {
	    return false;
	  }
	  return true;
	}

	function isBool(v) {
	  return typeof v === 'boolean';
	}

	function isInt(v) {
	  return typeof v === 'number' && ((v | 0) === v);
	}

	function isNum(v) {
	  return typeof v === 'number';
	}

	function isString(v) {
	  return typeof v === 'string';
	}

	function isArray(v) {
	  return v instanceof Array;
	}

	function isArrayBuffer(v) {
	  return typeof v === 'object' && v !== null && v.byteLength !== undefined;
	}

	// Checks if ch is one of the following characters: SPACE, TAB, CR or LF.
	function isSpace(ch) {
	  return (ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A);
	}

	/**
	 * Promise Capability object.
	 *
	 * @typedef {Object} PromiseCapability
	 * @property {Promise} promise - A promise object.
	 * @property {function} resolve - Fulfills the promise.
	 * @property {function} reject - Rejects the promise.
	 */

	/**
	 * Creates a promise capability object.
	 * @alias createPromiseCapability
	 *
	 * @return {PromiseCapability} A capability object contains:
	 * - a Promise, resolve and reject methods.
	 */
	function createPromiseCapability() {
	  var capability = {};
	  capability.promise = new Promise(function (resolve, reject) {
	    capability.resolve = resolve;
	    capability.reject = reject;
	  });
	  return capability;
	}

	/**
	 * Polyfill for Promises:
	 * The following promise implementation tries to generally implement the
	 * Promise/A+ spec. Some notable differences from other promise libraries are:
	 * - There currently isn't a separate deferred and promise object.
	 * - Unhandled rejections eventually show an error if they aren't handled.
	 *
	 * Based off of the work in:
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=810490
	 */
	(function PromiseClosure() {
	  if (globalScope.Promise) {
	    // Promises existing in the DOM/Worker, checking presence of all/resolve
	    if (typeof globalScope.Promise.all !== 'function') {
	      globalScope.Promise.all = function (iterable) {
	        var count = 0, results = [], resolve, reject;
	        var promise = new globalScope.Promise(function (resolve_, reject_) {
	          resolve = resolve_;
	          reject = reject_;
	        });
	        iterable.forEach(function (p, i) {
	          count++;
	          p.then(function (result) {
	            results[i] = result;
	            count--;
	            if (count === 0) {
	              resolve(results);
	            }
	          }, reject);
	        });
	        if (count === 0) {
	          resolve(results);
	        }
	        return promise;
	      };
	    }
	    if (typeof globalScope.Promise.resolve !== 'function') {
	      globalScope.Promise.resolve = function (value) {
	        return new globalScope.Promise(function (resolve) { resolve(value); });
	      };
	    }
	    if (typeof globalScope.Promise.reject !== 'function') {
	      globalScope.Promise.reject = function (reason) {
	        return new globalScope.Promise(function (resolve, reject) {
	          reject(reason);
	        });
	      };
	    }
	    if (typeof globalScope.Promise.prototype.catch !== 'function') {
	      globalScope.Promise.prototype.catch = function (onReject) {
	        return globalScope.Promise.prototype.then(undefined, onReject);
	      };
	    }
	    return;
	  }
	  var STATUS_PENDING = 0;
	  var STATUS_RESOLVED = 1;
	  var STATUS_REJECTED = 2;

	  // In an attempt to avoid silent exceptions, unhandled rejections are
	  // tracked and if they aren't handled in a certain amount of time an
	  // error is logged.
	  var REJECTION_TIMEOUT = 500;

	  var HandlerManager = {
	    handlers: [],
	    running: false,
	    unhandledRejections: [],
	    pendingRejectionCheck: false,

	    scheduleHandlers: function scheduleHandlers(promise) {
	      if (promise._status === STATUS_PENDING) {
	        return;
	      }

	      this.handlers = this.handlers.concat(promise._handlers);
	      promise._handlers = [];

	      if (this.running) {
	        return;
	      }
	      this.running = true;

	      setTimeout(this.runHandlers.bind(this), 0);
	    },

	    runHandlers: function runHandlers() {
	      var RUN_TIMEOUT = 1; // ms
	      var timeoutAt = Date.now() + RUN_TIMEOUT;
	      while (this.handlers.length > 0) {
	        var handler = this.handlers.shift();

	        var nextStatus = handler.thisPromise._status;
	        var nextValue = handler.thisPromise._value;

	        try {
	          if (nextStatus === STATUS_RESOLVED) {
	            if (typeof handler.onResolve === 'function') {
	              nextValue = handler.onResolve(nextValue);
	            }
	          } else if (typeof handler.onReject === 'function') {
	              nextValue = handler.onReject(nextValue);
	              nextStatus = STATUS_RESOLVED;

	              if (handler.thisPromise._unhandledRejection) {
	                this.removeUnhandeledRejection(handler.thisPromise);
	              }
	          }
	        } catch (ex) {
	          nextStatus = STATUS_REJECTED;
	          nextValue = ex;
	        }

	        handler.nextPromise._updateStatus(nextStatus, nextValue);
	        if (Date.now() >= timeoutAt) {
	          break;
	        }
	      }

	      if (this.handlers.length > 0) {
	        setTimeout(this.runHandlers.bind(this), 0);
	        return;
	      }

	      this.running = false;
	    },

	    addUnhandledRejection: function addUnhandledRejection(promise) {
	      this.unhandledRejections.push({
	        promise: promise,
	        time: Date.now()
	      });
	      this.scheduleRejectionCheck();
	    },

	    removeUnhandeledRejection: function removeUnhandeledRejection(promise) {
	      promise._unhandledRejection = false;
	      for (var i = 0; i < this.unhandledRejections.length; i++) {
	        if (this.unhandledRejections[i].promise === promise) {
	          this.unhandledRejections.splice(i);
	          i--;
	        }
	      }
	    },

	    scheduleRejectionCheck: function scheduleRejectionCheck() {
	      if (this.pendingRejectionCheck) {
	        return;
	      }
	      this.pendingRejectionCheck = true;
	      setTimeout(function rejectionCheck() {
	        this.pendingRejectionCheck = false;
	        var now = Date.now();
	        for (var i = 0; i < this.unhandledRejections.length; i++) {
	          if (now - this.unhandledRejections[i].time > REJECTION_TIMEOUT) {
	            var unhandled = this.unhandledRejections[i].promise._value;
	            var msg = 'Unhandled rejection: ' + unhandled;
	            if (unhandled.stack) {
	              msg += '\n' + unhandled.stack;
	            }
	            warn(msg);
	            this.unhandledRejections.splice(i);
	            i--;
	          }
	        }
	        if (this.unhandledRejections.length) {
	          this.scheduleRejectionCheck();
	        }
	      }.bind(this), REJECTION_TIMEOUT);
	    }
	  };

	  function Promise(resolver) {
	    this._status = STATUS_PENDING;
	    this._handlers = [];
	    try {
	      resolver.call(this, this._resolve.bind(this), this._reject.bind(this));
	    } catch (e) {
	      this._reject(e);
	    }
	  }
	  /**
	   * Builds a promise that is resolved when all the passed in promises are
	   * resolved.
	   * @param {array} promises array of data and/or promises to wait for.
	   * @return {Promise} New dependent promise.
	   */
	  Promise.all = function Promise_all(promises) {
	    var resolveAll, rejectAll;
	    var deferred = new Promise(function (resolve, reject) {
	      resolveAll = resolve;
	      rejectAll = reject;
	    });
	    var unresolved = promises.length;
	    var results = [];
	    if (unresolved === 0) {
	      resolveAll(results);
	      return deferred;
	    }
	    function reject(reason) {
	      if (deferred._status === STATUS_REJECTED) {
	        return;
	      }
	      results = [];
	      rejectAll(reason);
	    }
	    for (var i = 0, ii = promises.length; i < ii; ++i) {
	      var promise = promises[i];
	      var resolve = (function(i) {
	        return function(value) {
	          if (deferred._status === STATUS_REJECTED) {
	            return;
	          }
	          results[i] = value;
	          unresolved--;
	          if (unresolved === 0) {
	            resolveAll(results);
	          }
	        };
	      })(i);
	      if (Promise.isPromise(promise)) {
	        promise.then(resolve, reject);
	      } else {
	        resolve(promise);
	      }
	    }
	    return deferred;
	  };

	  /**
	   * Checks if the value is likely a promise (has a 'then' function).
	   * @return {boolean} true if value is thenable
	   */
	  Promise.isPromise = function Promise_isPromise(value) {
	    return value && typeof value.then === 'function';
	  };

	  /**
	   * Creates resolved promise
	   * @param value resolve value
	   * @returns {Promise}
	   */
	  Promise.resolve = function Promise_resolve(value) {
	    return new Promise(function (resolve) { resolve(value); });
	  };

	  /**
	   * Creates rejected promise
	   * @param reason rejection value
	   * @returns {Promise}
	   */
	  Promise.reject = function Promise_reject(reason) {
	    return new Promise(function (resolve, reject) { reject(reason); });
	  };

	  Promise.prototype = {
	    _status: null,
	    _value: null,
	    _handlers: null,
	    _unhandledRejection: null,

	    _updateStatus: function Promise__updateStatus(status, value) {
	      if (this._status === STATUS_RESOLVED ||
	          this._status === STATUS_REJECTED) {
	        return;
	      }

	      if (status === STATUS_RESOLVED &&
	          Promise.isPromise(value)) {
	        value.then(this._updateStatus.bind(this, STATUS_RESOLVED),
	                   this._updateStatus.bind(this, STATUS_REJECTED));
	        return;
	      }

	      this._status = status;
	      this._value = value;

	      if (status === STATUS_REJECTED && this._handlers.length === 0) {
	        this._unhandledRejection = true;
	        HandlerManager.addUnhandledRejection(this);
	      }

	      HandlerManager.scheduleHandlers(this);
	    },

	    _resolve: function Promise_resolve(value) {
	      this._updateStatus(STATUS_RESOLVED, value);
	    },

	    _reject: function Promise_reject(reason) {
	      this._updateStatus(STATUS_REJECTED, reason);
	    },

	    then: function Promise_then(onResolve, onReject) {
	      var nextPromise = new Promise(function (resolve, reject) {
	        this.resolve = resolve;
	        this.reject = reject;
	      });
	      this._handlers.push({
	        thisPromise: this,
	        onResolve: onResolve,
	        onReject: onReject,
	        nextPromise: nextPromise
	      });
	      HandlerManager.scheduleHandlers(this);
	      return nextPromise;
	    },

	    catch: function Promise_catch(onReject) {
	      return this.then(undefined, onReject);
	    }
	  };

	  globalScope.Promise = Promise;
	})();

	(function WeakMapClosure() {
	  if (globalScope.WeakMap) {
	    return;
	  }

	  var id = 0;
	  function WeakMap() {
	    this.id = '$weakmap' + (id++);
	  }
	  WeakMap.prototype = {
	    has: function(obj) {
	      return !!Object.getOwnPropertyDescriptor(obj, this.id);
	    },
	    get: function(obj, defaultValue) {
	      return this.has(obj) ? obj[this.id] : defaultValue;
	    },
	    set: function(obj, value) {
	      Object.defineProperty(obj, this.id, {
	        value: value,
	        enumerable: false,
	        configurable: true
	      });
	    },
	    delete: function(obj) {
	      delete obj[this.id];
	    }
	  };

	  globalScope.WeakMap = WeakMap;
	})();

	var StatTimer = (function StatTimerClosure() {
	  function rpad(str, pad, length) {
	    while (str.length < length) {
	      str += pad;
	    }
	    return str;
	  }
	  function StatTimer() {
	    this.started = Object.create(null);
	    this.times = [];
	    this.enabled = true;
	  }
	  StatTimer.prototype = {
	    time: function StatTimer_time(name) {
	      if (!this.enabled) {
	        return;
	      }
	      if (name in this.started) {
	        warn('Timer is already running for ' + name);
	      }
	      this.started[name] = Date.now();
	    },
	    timeEnd: function StatTimer_timeEnd(name) {
	      if (!this.enabled) {
	        return;
	      }
	      if (!(name in this.started)) {
	        warn('Timer has not been started for ' + name);
	      }
	      this.times.push({
	        'name': name,
	        'start': this.started[name],
	        'end': Date.now()
	      });
	      // Remove timer from started so it can be called again.
	      delete this.started[name];
	    },
	    toString: function StatTimer_toString() {
	      var i, ii;
	      var times = this.times;
	      var out = '';
	      // Find the longest name for padding purposes.
	      var longest = 0;
	      for (i = 0, ii = times.length; i < ii; ++i) {
	        var name = times[i]['name'];
	        if (name.length > longest) {
	          longest = name.length;
	        }
	      }
	      for (i = 0, ii = times.length; i < ii; ++i) {
	        var span = times[i];
	        var duration = span.end - span.start;
	        out += rpad(span['name'], ' ', longest) + ' ' + duration + 'ms\n';
	      }
	      return out;
	    }
	  };
	  return StatTimer;
	})();

	var createBlob = function createBlob(data, contentType) {
	  if (typeof Blob !== 'undefined') {
	    return new Blob([data], { type: contentType });
	  }
	  warn('The "Blob" constructor is not supported.');
	};

	var createObjectURL = (function createObjectURLClosure() {
	  // Blob/createObjectURL is not available, falling back to data schema.
	  var digits =
	    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	  return function createObjectURL(data, contentType, forceDataSchema) {
	    if (!forceDataSchema &&
	        typeof URL !== 'undefined' && URL.createObjectURL) {
	      var blob = createBlob(data, contentType);
	      return URL.createObjectURL(blob);
	    }

	    var buffer = 'data:' + contentType + ';base64,';
	    for (var i = 0, ii = data.length; i < ii; i += 3) {
	      var b1 = data[i] & 0xFF;
	      var b2 = data[i + 1] & 0xFF;
	      var b3 = data[i + 2] & 0xFF;
	      var d1 = b1 >> 2, d2 = ((b1 & 3) << 4) | (b2 >> 4);
	      var d3 = i + 1 < ii ? ((b2 & 0xF) << 2) | (b3 >> 6) : 64;
	      var d4 = i + 2 < ii ? (b3 & 0x3F) : 64;
	      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
	    }
	    return buffer;
	  };
	})();

	function MessageHandler(sourceName, targetName, comObj) {
	  this.sourceName = sourceName;
	  this.targetName = targetName;
	  this.comObj = comObj;
	  this.callbackIndex = 1;
	  this.postMessageTransfers = true;
	  var callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
	  var ah = this.actionHandler = Object.create(null);

	  this._onComObjOnMessage = function messageHandlerComObjOnMessage(event) {
	    var data = event.data;
	    if (data.targetName !== this.sourceName) {
	      return;
	    }
	    if (data.isReply) {
	      var callbackId = data.callbackId;
	      if (data.callbackId in callbacksCapabilities) {
	        var callback = callbacksCapabilities[callbackId];
	        delete callbacksCapabilities[callbackId];
	        if ('error' in data) {
	          callback.reject(data.error);
	        } else {
	          callback.resolve(data.data);
	        }
	      } else {
	        error('Cannot resolve callback ' + callbackId);
	      }
	    } else if (data.action in ah) {
	      var action = ah[data.action];
	      if (data.callbackId) {
	        var sourceName = this.sourceName;
	        var targetName = data.sourceName;
	        Promise.resolve().then(function () {
	          return action[0].call(action[1], data.data);
	        }).then(function (result) {
	          comObj.postMessage({
	            sourceName: sourceName,
	            targetName: targetName,
	            isReply: true,
	            callbackId: data.callbackId,
	            data: result
	          });
	        }, function (reason) {
	          if (reason instanceof Error) {
	            // Serialize error to avoid "DataCloneError"
	            reason = reason + '';
	          }
	          comObj.postMessage({
	            sourceName: sourceName,
	            targetName: targetName,
	            isReply: true,
	            callbackId: data.callbackId,
	            error: reason
	          });
	        });
	      } else {
	        action[0].call(action[1], data.data);
	      }
	    } else {
	      error('Unknown action from worker: ' + data.action);
	    }
	  }.bind(this);
	  comObj.addEventListener('message', this._onComObjOnMessage);
	}

	MessageHandler.prototype = {
	  on: function messageHandlerOn(actionName, handler, scope) {
	    var ah = this.actionHandler;
	    if (ah[actionName]) {
	      error('There is already an actionName called "' + actionName + '"');
	    }
	    ah[actionName] = [handler, scope];
	  },
	  /**
	   * Sends a message to the comObj to invoke the action with the supplied data.
	   * @param {String} actionName Action to call.
	   * @param {JSON} data JSON data to send.
	   * @param {Array} [transfers] Optional list of transfers/ArrayBuffers
	   */
	  send: function messageHandlerSend(actionName, data, transfers) {
	    var message = {
	      sourceName: this.sourceName,
	      targetName: this.targetName,
	      action: actionName,
	      data: data
	    };
	    this.postMessage(message, transfers);
	  },
	  /**
	   * Sends a message to the comObj to invoke the action with the supplied data.
	   * Expects that other side will callback with the response.
	   * @param {String} actionName Action to call.
	   * @param {JSON} data JSON data to send.
	   * @param {Array} [transfers] Optional list of transfers/ArrayBuffers.
	   * @returns {Promise} Promise to be resolved with response data.
	   */
	  sendWithPromise:
	    function messageHandlerSendWithPromise(actionName, data, transfers) {
	    var callbackId = this.callbackIndex++;
	    var message = {
	      sourceName: this.sourceName,
	      targetName: this.targetName,
	      action: actionName,
	      data: data,
	      callbackId: callbackId
	    };
	    var capability = createPromiseCapability();
	    this.callbacksCapabilities[callbackId] = capability;
	    try {
	      this.postMessage(message, transfers);
	    } catch (e) {
	      capability.reject(e);
	    }
	    return capability.promise;
	  },
	  /**
	   * Sends raw message to the comObj.
	   * @private
	   * @param message {Object} Raw message.
	   * @param transfers List of transfers/ArrayBuffers, or undefined.
	   */
	  postMessage: function (message, transfers) {
	    if (transfers && this.postMessageTransfers) {
	      this.comObj.postMessage(message, transfers);
	    } else {
	      this.comObj.postMessage(message);
	    }
	  },

	  destroy: function () {
	    this.comObj.removeEventListener('message', this._onComObjOnMessage);
	  }
	};

	function loadJpegStream(id, imageUrl, objs) {
	  var img = new Image();
	  img.onload = (function loadJpegStream_onloadClosure() {
	    objs.resolve(id, img);
	  });
	  img.onerror = (function loadJpegStream_onerrorClosure() {
	    objs.resolve(id, null);
	    warn('Error during JPEG image loading');
	  });
	  img.src = imageUrl;
	}

	  // Polyfill from https://github.com/Polymer/URL
	/* Any copyright is dedicated to the Public Domain.
	 * http://creativecommons.org/publicdomain/zero/1.0/ */
	(function checkURLConstructor(scope) {
	  // feature detect for URL constructor
	  var hasWorkingUrl = false;
	  try {
	    if (typeof URL === 'function' &&
	        typeof URL.prototype === 'object' &&
	        ('origin' in URL.prototype)) {
	      var u = new URL('b', 'http://a');
	      u.pathname = 'c%20d';
	      hasWorkingUrl = u.href === 'http://a/c%20d';
	    }
	  } catch(e) { }

	  if (hasWorkingUrl) {
	    return;
	  }

	  var relative = Object.create(null);
	  relative['ftp'] = 21;
	  relative['file'] = 0;
	  relative['gopher'] = 70;
	  relative['http'] = 80;
	  relative['https'] = 443;
	  relative['ws'] = 80;
	  relative['wss'] = 443;

	  var relativePathDotMapping = Object.create(null);
	  relativePathDotMapping['%2e'] = '.';
	  relativePathDotMapping['.%2e'] = '..';
	  relativePathDotMapping['%2e.'] = '..';
	  relativePathDotMapping['%2e%2e'] = '..';

	  function isRelativeScheme(scheme) {
	    return relative[scheme] !== undefined;
	  }

	  function invalid() {
	    clear.call(this);
	    this._isInvalid = true;
	  }

	  function IDNAToASCII(h) {
	    if ('' === h) {
	      invalid.call(this);
	    }
	    // XXX
	    return h.toLowerCase();
	  }

	  function percentEscape(c) {
	    var unicode = c.charCodeAt(0);
	    if (unicode > 0x20 &&
	       unicode < 0x7F &&
	       // " # < > ? `
	       [0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].indexOf(unicode) === -1
	      ) {
	      return c;
	    }
	    return encodeURIComponent(c);
	  }

	  function percentEscapeQuery(c) {
	    // XXX This actually needs to encode c using encoding and then
	    // convert the bytes one-by-one.

	    var unicode = c.charCodeAt(0);
	    if (unicode > 0x20 &&
	       unicode < 0x7F &&
	       // " # < > ` (do not escape '?')
	       [0x22, 0x23, 0x3C, 0x3E, 0x60].indexOf(unicode) === -1
	      ) {
	      return c;
	    }
	    return encodeURIComponent(c);
	  }

	  var EOF, ALPHA = /[a-zA-Z]/,
	      ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;

	  function parse(input, stateOverride, base) {
	    function err(message) {
	      errors.push(message);
	    }

	    var state = stateOverride || 'scheme start',
	        cursor = 0,
	        buffer = '',
	        seenAt = false,
	        seenBracket = false,
	        errors = [];

	    loop: while ((input[cursor - 1] !== EOF || cursor === 0) &&
	                 !this._isInvalid) {
	      var c = input[cursor];
	      switch (state) {
	        case 'scheme start':
	          if (c && ALPHA.test(c)) {
	            buffer += c.toLowerCase(); // ASCII-safe
	            state = 'scheme';
	          } else if (!stateOverride) {
	            buffer = '';
	            state = 'no scheme';
	            continue;
	          } else {
	            err('Invalid scheme.');
	            break loop;
	          }
	          break;

	        case 'scheme':
	          if (c && ALPHANUMERIC.test(c)) {
	            buffer += c.toLowerCase(); // ASCII-safe
	          } else if (':' === c) {
	            this._scheme = buffer;
	            buffer = '';
	            if (stateOverride) {
	              break loop;
	            }
	            if (isRelativeScheme(this._scheme)) {
	              this._isRelative = true;
	            }
	            if ('file' === this._scheme) {
	              state = 'relative';
	            } else if (this._isRelative && base &&
	                       base._scheme === this._scheme) {
	              state = 'relative or authority';
	            } else if (this._isRelative) {
	              state = 'authority first slash';
	            } else {
	              state = 'scheme data';
	            }
	          } else if (!stateOverride) {
	            buffer = '';
	            cursor = 0;
	            state = 'no scheme';
	            continue;
	          } else if (EOF === c) {
	            break loop;
	          } else {
	            err('Code point not allowed in scheme: ' + c);
	            break loop;
	          }
	          break;

	        case 'scheme data':
	          if ('?' === c) {
	            this._query = '?';
	            state = 'query';
	          } else if ('#' === c) {
	            this._fragment = '#';
	            state = 'fragment';
	          } else {
	            // XXX error handling
	            if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
	              this._schemeData += percentEscape(c);
	            }
	          }
	          break;

	        case 'no scheme':
	          if (!base || !(isRelativeScheme(base._scheme))) {
	            err('Missing scheme.');
	            invalid.call(this);
	          } else {
	            state = 'relative';
	            continue;
	          }
	          break;

	        case 'relative or authority':
	          if ('/' === c && '/' === input[cursor+1]) {
	            state = 'authority ignore slashes';
	          } else {
	            err('Expected /, got: ' + c);
	            state = 'relative';
	            continue;
	          }
	          break;

	        case 'relative':
	          this._isRelative = true;
	          if ('file' !== this._scheme) {
	            this._scheme = base._scheme;
	          }
	          if (EOF === c) {
	            this._host = base._host;
	            this._port = base._port;
	            this._path = base._path.slice();
	            this._query = base._query;
	            this._username = base._username;
	            this._password = base._password;
	            break loop;
	          } else if ('/' === c || '\\' === c) {
	            if ('\\' === c) {
	              err('\\ is an invalid code point.');
	            }
	            state = 'relative slash';
	          } else if ('?' === c) {
	            this._host = base._host;
	            this._port = base._port;
	            this._path = base._path.slice();
	            this._query = '?';
	            this._username = base._username;
	            this._password = base._password;
	            state = 'query';
	          } else if ('#' === c) {
	            this._host = base._host;
	            this._port = base._port;
	            this._path = base._path.slice();
	            this._query = base._query;
	            this._fragment = '#';
	            this._username = base._username;
	            this._password = base._password;
	            state = 'fragment';
	          } else {
	            var nextC = input[cursor+1];
	            var nextNextC = input[cursor+2];
	            if ('file' !== this._scheme || !ALPHA.test(c) ||
	                (nextC !== ':' && nextC !== '|') ||
	                (EOF !== nextNextC && '/' !== nextNextC && '\\' !== nextNextC &&
	                '?' !== nextNextC && '#' !== nextNextC)) {
	              this._host = base._host;
	              this._port = base._port;
	              this._username = base._username;
	              this._password = base._password;
	              this._path = base._path.slice();
	              this._path.pop();
	            }
	            state = 'relative path';
	            continue;
	          }
	          break;

	        case 'relative slash':
	          if ('/' === c || '\\' === c) {
	            if ('\\' === c) {
	              err('\\ is an invalid code point.');
	            }
	            if ('file' === this._scheme) {
	              state = 'file host';
	            } else {
	              state = 'authority ignore slashes';
	            }
	          } else {
	            if ('file' !== this._scheme) {
	              this._host = base._host;
	              this._port = base._port;
	              this._username = base._username;
	              this._password = base._password;
	            }
	            state = 'relative path';
	            continue;
	          }
	          break;

	        case 'authority first slash':
	          if ('/' === c) {
	            state = 'authority second slash';
	          } else {
	            err('Expected \'/\', got: ' + c);
	            state = 'authority ignore slashes';
	            continue;
	          }
	          break;

	        case 'authority second slash':
	          state = 'authority ignore slashes';
	          if ('/' !== c) {
	            err('Expected \'/\', got: ' + c);
	            continue;
	          }
	          break;

	        case 'authority ignore slashes':
	          if ('/' !== c && '\\' !== c) {
	            state = 'authority';
	            continue;
	          } else {
	            err('Expected authority, got: ' + c);
	          }
	          break;

	        case 'authority':
	          if ('@' === c) {
	            if (seenAt) {
	              err('@ already seen.');
	              buffer += '%40';
	            }
	            seenAt = true;
	            for (var i = 0; i < buffer.length; i++) {
	              var cp = buffer[i];
	              if ('\t' === cp || '\n' === cp || '\r' === cp) {
	                err('Invalid whitespace in authority.');
	                continue;
	              }
	              // XXX check URL code points
	              if (':' === cp && null === this._password) {
	                this._password = '';
	                continue;
	              }
	              var tempC = percentEscape(cp);
	              if (null !== this._password) {
	                this._password += tempC;
	              } else {
	                this._username += tempC;
	              }
	            }
	            buffer = '';
	          } else if (EOF === c || '/' === c || '\\' === c ||
	                     '?' === c || '#' === c) {
	            cursor -= buffer.length;
	            buffer = '';
	            state = 'host';
	            continue;
	          } else {
	            buffer += c;
	          }
	          break;

	        case 'file host':
	          if (EOF === c || '/' === c || '\\' === c || '?' === c || '#' === c) {
	            if (buffer.length === 2 && ALPHA.test(buffer[0]) &&
	                (buffer[1] === ':' || buffer[1] === '|')) {
	              state = 'relative path';
	            } else if (buffer.length === 0) {
	              state = 'relative path start';
	            } else {
	              this._host = IDNAToASCII.call(this, buffer);
	              buffer = '';
	              state = 'relative path start';
	            }
	            continue;
	          } else if ('\t' === c || '\n' === c || '\r' === c) {
	            err('Invalid whitespace in file host.');
	          } else {
	            buffer += c;
	          }
	          break;

	        case 'host':
	        case 'hostname':
	          if (':' === c && !seenBracket) {
	            // XXX host parsing
	            this._host = IDNAToASCII.call(this, buffer);
	            buffer = '';
	            state = 'port';
	            if ('hostname' === stateOverride) {
	              break loop;
	            }
	          } else if (EOF === c || '/' === c ||
	                     '\\' === c || '?' === c || '#' === c) {
	            this._host = IDNAToASCII.call(this, buffer);
	            buffer = '';
	            state = 'relative path start';
	            if (stateOverride) {
	              break loop;
	            }
	            continue;
	          } else if ('\t' !== c && '\n' !== c && '\r' !== c) {
	            if ('[' === c) {
	              seenBracket = true;
	            } else if (']' === c) {
	              seenBracket = false;
	            }
	            buffer += c;
	          } else {
	            err('Invalid code point in host/hostname: ' + c);
	          }
	          break;

	        case 'port':
	          if (/[0-9]/.test(c)) {
	            buffer += c;
	          } else if (EOF === c || '/' === c || '\\' === c ||
	                     '?' === c || '#' === c || stateOverride) {
	            if ('' !== buffer) {
	              var temp = parseInt(buffer, 10);
	              if (temp !== relative[this._scheme]) {
	                this._port = temp + '';
	              }
	              buffer = '';
	            }
	            if (stateOverride) {
	              break loop;
	            }
	            state = 'relative path start';
	            continue;
	          } else if ('\t' === c || '\n' === c || '\r' === c) {
	            err('Invalid code point in port: ' + c);
	          } else {
	            invalid.call(this);
	          }
	          break;

	        case 'relative path start':
	          if ('\\' === c) {
	            err('\'\\\' not allowed in path.');
	          }
	          state = 'relative path';
	          if ('/' !== c && '\\' !== c) {
	            continue;
	          }
	          break;

	        case 'relative path':
	          if (EOF === c || '/' === c || '\\' === c ||
	              (!stateOverride && ('?' === c || '#' === c))) {
	            if ('\\' === c) {
	              err('\\ not allowed in relative path.');
	            }
	            var tmp;
	            if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
	              buffer = tmp;
	            }
	            if ('..' === buffer) {
	              this._path.pop();
	              if ('/' !== c && '\\' !== c) {
	                this._path.push('');
	              }
	            } else if ('.' === buffer && '/' !== c && '\\' !== c) {
	              this._path.push('');
	            } else if ('.' !== buffer) {
	              if ('file' === this._scheme && this._path.length === 0 &&
	                  buffer.length === 2 && ALPHA.test(buffer[0]) &&
	                  buffer[1] === '|') {
	                buffer = buffer[0] + ':';
	              }
	              this._path.push(buffer);
	            }
	            buffer = '';
	            if ('?' === c) {
	              this._query = '?';
	              state = 'query';
	            } else if ('#' === c) {
	              this._fragment = '#';
	              state = 'fragment';
	            }
	          } else if ('\t' !== c && '\n' !== c && '\r' !== c) {
	            buffer += percentEscape(c);
	          }
	          break;

	        case 'query':
	          if (!stateOverride && '#' === c) {
	            this._fragment = '#';
	            state = 'fragment';
	          } else if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
	            this._query += percentEscapeQuery(c);
	          }
	          break;

	        case 'fragment':
	          if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
	            this._fragment += c;
	          }
	          break;
	      }

	      cursor++;
	    }
	  }

	  function clear() {
	    this._scheme = '';
	    this._schemeData = '';
	    this._username = '';
	    this._password = null;
	    this._host = '';
	    this._port = '';
	    this._path = [];
	    this._query = '';
	    this._fragment = '';
	    this._isInvalid = false;
	    this._isRelative = false;
	  }

	  // Does not process domain names or IP addresses.
	  // Does not handle encoding for the query parameter.
	  function JURL(url, base /* , encoding */) {
	    if (base !== undefined && !(base instanceof JURL)) {
	      base = new JURL(String(base));
	    }

	    this._url = url;
	    clear.call(this);

	    var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
	    // encoding = encoding || 'utf-8'

	    parse.call(this, input, null, base);
	  }

	  JURL.prototype = {
	    toString: function() {
	      return this.href;
	    },
	    get href() {
	      if (this._isInvalid) {
	        return this._url;
	      }
	      var authority = '';
	      if ('' !== this._username || null !== this._password) {
	        authority = this._username +
	            (null !== this._password ? ':' + this._password : '') + '@';
	      }

	      return this.protocol +
	          (this._isRelative ? '//' + authority + this.host : '') +
	          this.pathname + this._query + this._fragment;
	    },
	    set href(href) {
	      clear.call(this);
	      parse.call(this, href);
	    },

	    get protocol() {
	      return this._scheme + ':';
	    },
	    set protocol(protocol) {
	      if (this._isInvalid) {
	        return;
	      }
	      parse.call(this, protocol + ':', 'scheme start');
	    },

	    get host() {
	      return this._isInvalid ? '' : this._port ?
	          this._host + ':' + this._port : this._host;
	    },
	    set host(host) {
	      if (this._isInvalid || !this._isRelative) {
	        return;
	      }
	      parse.call(this, host, 'host');
	    },

	    get hostname() {
	      return this._host;
	    },
	    set hostname(hostname) {
	      if (this._isInvalid || !this._isRelative) {
	        return;
	      }
	      parse.call(this, hostname, 'hostname');
	    },

	    get port() {
	      return this._port;
	    },
	    set port(port) {
	      if (this._isInvalid || !this._isRelative) {
	        return;
	      }
	      parse.call(this, port, 'port');
	    },

	    get pathname() {
	      return this._isInvalid ? '' : this._isRelative ?
	          '/' + this._path.join('/') : this._schemeData;
	    },
	    set pathname(pathname) {
	      if (this._isInvalid || !this._isRelative) {
	        return;
	      }
	      this._path = [];
	      parse.call(this, pathname, 'relative path start');
	    },

	    get search() {
	      return this._isInvalid || !this._query || '?' === this._query ?
	          '' : this._query;
	    },
	    set search(search) {
	      if (this._isInvalid || !this._isRelative) {
	        return;
	      }
	      this._query = '?';
	      if ('?' === search[0]) {
	        search = search.slice(1);
	      }
	      parse.call(this, search, 'query');
	    },

	    get hash() {
	      return this._isInvalid || !this._fragment || '#' === this._fragment ?
	          '' : this._fragment;
	    },
	    set hash(hash) {
	      if (this._isInvalid) {
	        return;
	      }
	      this._fragment = '#';
	      if ('#' === hash[0]) {
	        hash = hash.slice(1);
	      }
	      parse.call(this, hash, 'fragment');
	    },

	    get origin() {
	      var host;
	      if (this._isInvalid || !this._scheme) {
	        return '';
	      }
	      // javascript: Gecko returns String(""), WebKit/Blink String("null")
	      // Gecko throws error for "data://"
	      // data: Gecko returns "", Blink returns "data://", WebKit returns "null"
	      // Gecko returns String("") for file: mailto:
	      // WebKit/Blink returns String("SCHEME://") for file: mailto:
	      switch (this._scheme) {
	        case 'data':
	        case 'file':
	        case 'javascript':
	        case 'mailto':
	          return 'null';
	      }
	      host = this.host;
	      if (!host) {
	        return '';
	      }
	      return this._scheme + '://' + host;
	    }
	  };

	  // Copy over the static methods
	  var OriginalURL = scope.URL;
	  if (OriginalURL) {
	    JURL.createObjectURL = function(blob) {
	      // IE extension allows a second optional options argument.
	      // http://msdn.microsoft.com/en-us/library/ie/hh772302(v=vs.85).aspx
	      return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
	    };
	    JURL.revokeObjectURL = function(url) {
	      OriginalURL.revokeObjectURL(url);
	    };
	  }

	  scope.URL = JURL;
	})(globalScope);

	exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
	exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
	exports.OPS = OPS;
	exports.VERBOSITY_LEVELS = VERBOSITY_LEVELS;
	exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
	exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
	exports.AnnotationFieldFlag = AnnotationFieldFlag;
	exports.AnnotationFlag = AnnotationFlag;
	exports.AnnotationType = AnnotationType;
	exports.FontType = FontType;
	exports.ImageKind = ImageKind;
	exports.InvalidPDFException = InvalidPDFException;
	exports.MessageHandler = MessageHandler;
	exports.MissingDataException = MissingDataException;
	exports.MissingPDFException = MissingPDFException;
	exports.NotImplementedException = NotImplementedException;
	exports.PageViewport = PageViewport;
	exports.PasswordException = PasswordException;
	exports.PasswordResponses = PasswordResponses;
	exports.StatTimer = StatTimer;
	exports.StreamType = StreamType;
	exports.TextRenderingMode = TextRenderingMode;
	exports.UnexpectedResponseException = UnexpectedResponseException;
	exports.UnknownErrorException = UnknownErrorException;
	exports.Util = Util;
	exports.XRefParseException = XRefParseException;
	exports.arrayByteLength = arrayByteLength;
	exports.arraysToBytes = arraysToBytes;
	exports.assert = assert;
	exports.bytesToString = bytesToString;
	exports.createBlob = createBlob;
	exports.createPromiseCapability = createPromiseCapability;
	exports.createObjectURL = createObjectURL;
	exports.deprecated = deprecated;
	exports.error = error;
	exports.getLookupTableFactory = getLookupTableFactory;
	exports.getVerbosityLevel = getVerbosityLevel;
	exports.globalScope = globalScope;
	exports.info = info;
	exports.isArray = isArray;
	exports.isArrayBuffer = isArrayBuffer;
	exports.isBool = isBool;
	exports.isEmptyObj = isEmptyObj;
	exports.isInt = isInt;
	exports.isNum = isNum;
	exports.isString = isString;
	exports.isSpace = isSpace;
	exports.isSameOrigin = isSameOrigin;
	exports.isValidUrl = isValidUrl;
	exports.isLittleEndian = isLittleEndian;
	exports.isEvalSupported = isEvalSupported;
	exports.loadJpegStream = loadJpegStream;
	exports.log2 = log2;
	exports.readInt8 = readInt8;
	exports.readUint16 = readUint16;
	exports.readUint32 = readUint32;
	exports.removeNullCharacters = removeNullCharacters;
	exports.setVerbosityLevel = setVerbosityLevel;
	exports.shadow = shadow;
	exports.string32 = string32;
	exports.stringToBytes = stringToBytes;
	exports.stringToPDFString = stringToPDFString;
	exports.stringToUTF8String = stringToUTF8String;
	exports.utf8StringToString = utf8StringToString;
	exports.warn = warn;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayDOMUtils = {}), root.pdfjsSharedUtil);
	  }
	}(this, function (exports, sharedUtil) {

	var removeNullCharacters = sharedUtil.removeNullCharacters;
	var warn = sharedUtil.warn;

	/**
	 * Optimised CSS custom property getter/setter.
	 * @class
	 */
	var CustomStyle = (function CustomStyleClosure() {

	  // As noted on: http://www.zachstronaut.com/posts/2009/02/17/
	  //              animate-css-transforms-firefox-webkit.html
	  // in some versions of IE9 it is critical that ms appear in this list
	  // before Moz
	  var prefixes = ['ms', 'Moz', 'Webkit', 'O'];
	  var _cache = Object.create(null);

	  function CustomStyle() {}

	  CustomStyle.getProp = function get(propName, element) {
	    // check cache only when no element is given
	    if (arguments.length === 1 && typeof _cache[propName] === 'string') {
	      return _cache[propName];
	    }

	    element = element || document.documentElement;
	    var style = element.style, prefixed, uPropName;

	    // test standard property first
	    if (typeof style[propName] === 'string') {
	      return (_cache[propName] = propName);
	    }

	    // capitalize
	    uPropName = propName.charAt(0).toUpperCase() + propName.slice(1);

	    // test vendor specific properties
	    for (var i = 0, l = prefixes.length; i < l; i++) {
	      prefixed = prefixes[i] + uPropName;
	      if (typeof style[prefixed] === 'string') {
	        return (_cache[propName] = prefixed);
	      }
	    }

	    //if all fails then set to undefined
	    return (_cache[propName] = 'undefined');
	  };

	  CustomStyle.setProp = function set(propName, element, str) {
	    var prop = this.getProp(propName);
	    if (prop !== 'undefined') {
	      element.style[prop] = str;
	    }
	  };

	  return CustomStyle;
	})();

	function hasCanvasTypedArrays() {
	  var canvas = document.createElement('canvas');
	  canvas.width = canvas.height = 1;
	  var ctx = canvas.getContext('2d');
	  var imageData = ctx.createImageData(1, 1);
	  return (typeof imageData.data.buffer !== 'undefined');
	}

	var LinkTarget = {
	  NONE: 0, // Default value.
	  SELF: 1,
	  BLANK: 2,
	  PARENT: 3,
	  TOP: 4,
	};

	var LinkTargetStringMap = [
	  '',
	  '_self',
	  '_blank',
	  '_parent',
	  '_top'
	];

	/**
	 * @typedef ExternalLinkParameters
	 * @typedef {Object} ExternalLinkParameters
	 * @property {string} url - An absolute URL.
	 * @property {LinkTarget} target - The link target.
	 * @property {string} rel - The link relationship.
	 */

	/**
	 * Adds various attributes (href, title, target, rel) to hyperlinks.
	 * @param {HTMLLinkElement} link - The link element.
	 * @param {ExternalLinkParameters} params
	 */
	function addLinkAttributes(link, params) {
	  var url = params && params.url;
	  link.href = link.title = (url ? removeNullCharacters(url) : '');

	  if (url) {
	    var target = params.target;
	    if (typeof target === 'undefined') {
	      target = getDefaultSetting('externalLinkTarget');
	    }
	    link.target = LinkTargetStringMap[target];

	    var rel = params.rel;
	    if (typeof rel === 'undefined') {
	      rel = getDefaultSetting('externalLinkRel');
	    }
	    link.rel = rel;
	  }
	}

	// Gets the file name from a given URL.
	function getFilenameFromUrl(url) {
	  var anchor = url.indexOf('#');
	  var query = url.indexOf('?');
	  var end = Math.min(
	    anchor > 0 ? anchor : url.length,
	    query > 0 ? query : url.length);
	  return url.substring(url.lastIndexOf('/', end) + 1, end);
	}

	function getDefaultSetting(id) {
	  // The list of the settings and their default is maintained for backward
	  // compatibility and shall not be extended or modified. See also global.js.
	  var globalSettings = sharedUtil.globalScope.PDFJS;
	  switch (id) {
	    case 'pdfBug':
	      return globalSettings ? globalSettings.pdfBug : false;
	    case 'disableAutoFetch':
	      return globalSettings ? globalSettings.disableAutoFetch : false;
	    case 'disableStream':
	      return globalSettings ? globalSettings.disableStream : false;
	    case 'disableRange':
	      return globalSettings ? globalSettings.disableRange : false;
	    case 'disableFontFace':
	      return globalSettings ? globalSettings.disableFontFace : false;
	    case 'disableCreateObjectURL':
	      return globalSettings ? globalSettings.disableCreateObjectURL : false;
	    case 'disableWebGL':
	      return globalSettings ? globalSettings.disableWebGL : true;
	    case 'cMapUrl':
	      return globalSettings ? globalSettings.cMapUrl : null;
	    case 'cMapPacked':
	      return globalSettings ? globalSettings.cMapPacked : false;
	    case 'postMessageTransfers':
	      return globalSettings ? globalSettings.postMessageTransfers : true;
	    case 'workerSrc':
	      return globalSettings ? globalSettings.workerSrc : null;
	    case 'disableWorker':
	      return globalSettings ? globalSettings.disableWorker : false;
	    case 'maxImageSize':
	      return globalSettings ? globalSettings.maxImageSize : -1;
	    case 'imageResourcesPath':
	      return globalSettings ? globalSettings.imageResourcesPath : '';
	    case 'isEvalSupported':
	      return globalSettings ? globalSettings.isEvalSupported : true;
	    case 'externalLinkTarget':
	      if (!globalSettings) {
	        return LinkTarget.NONE;
	      }
	      switch (globalSettings.externalLinkTarget) {
	        case LinkTarget.NONE:
	        case LinkTarget.SELF:
	        case LinkTarget.BLANK:
	        case LinkTarget.PARENT:
	        case LinkTarget.TOP:
	          return globalSettings.externalLinkTarget;
	      }
	      warn('PDFJS.externalLinkTarget is invalid: ' +
	           globalSettings.externalLinkTarget);
	      // Reset the external link target, to suppress further warnings.
	      globalSettings.externalLinkTarget = LinkTarget.NONE;
	      return LinkTarget.NONE;
	    case 'externalLinkRel':
	      return globalSettings ? globalSettings.externalLinkRel : 'noreferrer';
	    case 'enableStats':
	      return !!(globalSettings && globalSettings.enableStats);
	    default:
	      throw new Error('Unknown default setting: ' + id);
	  }
	}

	function isExternalLinkTargetSet() {
	  var externalLinkTarget = getDefaultSetting('externalLinkTarget');
	  switch (externalLinkTarget) {
	    case LinkTarget.NONE:
	      return false;
	    case LinkTarget.SELF:
	    case LinkTarget.BLANK:
	    case LinkTarget.PARENT:
	    case LinkTarget.TOP:
	      return true;
	  }
	}

	exports.CustomStyle = CustomStyle;
	exports.addLinkAttributes = addLinkAttributes;
	exports.isExternalLinkTargetSet = isExternalLinkTargetSet;
	exports.getFilenameFromUrl = getFilenameFromUrl;
	exports.LinkTarget = LinkTarget;
	exports.hasCanvasTypedArrays = hasCanvasTypedArrays;
	exports.getDefaultSetting = getDefaultSetting;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayFontLoader = {}), root.pdfjsSharedUtil);
	  }
	}(this, function (exports, sharedUtil) {

	var assert = sharedUtil.assert;
	var bytesToString = sharedUtil.bytesToString;
	var string32 = sharedUtil.string32;
	var shadow = sharedUtil.shadow;
	var warn = sharedUtil.warn;

	function FontLoader(docId) {
	  this.docId = docId;
	  this.styleElement = null;
	  this.nativeFontFaces = [];
	  this.loadTestFontId = 0;
	  this.loadingContext = {
	    requests: [],
	    nextRequestId: 0
	  };
	}
	FontLoader.prototype = {
	  insertRule: function fontLoaderInsertRule(rule) {
	    var styleElement = this.styleElement;
	    if (!styleElement) {
	      styleElement = this.styleElement = document.createElement('style');
	      styleElement.id = 'PDFJS_FONT_STYLE_TAG_' + this.docId;
	      document.documentElement.getElementsByTagName('head')[0].appendChild(
	        styleElement);
	    }

	    var styleSheet = styleElement.sheet;
	    styleSheet.insertRule(rule, styleSheet.cssRules.length);
	  },

	  clear: function fontLoaderClear() {
	    var styleElement = this.styleElement;
	    if (styleElement) {
	      styleElement.parentNode.removeChild(styleElement);
	      styleElement = this.styleElement = null;
	    }
	    this.nativeFontFaces.forEach(function(nativeFontFace) {
	      document.fonts.delete(nativeFontFace);
	    });
	    this.nativeFontFaces.length = 0;
	  },
	  get loadTestFont() {
	    // This is a CFF font with 1 glyph for '.' that fills its entire width and
	    // height.
	    return shadow(this, 'loadTestFont', atob(
	      'T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQ' +
	      'AABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwA' +
	      'AAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbm' +
	      'FtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAA' +
	      'AADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6A' +
	      'ABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAA' +
	      'MQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAA' +
	      'AAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAA' +
	      'AAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQ' +
	      'AAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMA' +
	      'AQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAA' +
	      'EAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAA' +
	      'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAA' +
	      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
	      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
	      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
	      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAA' +
	      'AAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgc' +
	      'A/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWF' +
	      'hYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQA' +
	      'AAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAg' +
	      'ABAAAAAAAAAAAD6AAAAAAAAA=='
	    ));
	  },

	  addNativeFontFace: function fontLoader_addNativeFontFace(nativeFontFace) {
	    this.nativeFontFaces.push(nativeFontFace);
	    document.fonts.add(nativeFontFace);
	  },

	  bind: function fontLoaderBind(fonts, callback) {
	    var rules = [];
	    var fontsToLoad = [];
	    var fontLoadPromises = [];
	    var getNativeFontPromise = function(nativeFontFace) {
	      // Return a promise that is always fulfilled, even when the font fails to
	      // load.
	      return nativeFontFace.loaded.catch(function(e) {
	        warn('Failed to load font "' + nativeFontFace.family + '": ' + e);
	      });
	    };
	    // Firefox Font Loading API does not work with mozPrintCallback --
	    // disabling it in this case.
	    var isFontLoadingAPISupported = FontLoader.isFontLoadingAPISupported &&
	                                    !FontLoader.isSyncFontLoadingSupported;
	    for (var i = 0, ii = fonts.length; i < ii; i++) {
	      var font = fonts[i];

	      // Add the font to the DOM only once or skip if the font
	      // is already loaded.
	      if (font.attached || font.loading === false) {
	        continue;
	      }
	      font.attached = true;

	      if (isFontLoadingAPISupported) {
	        var nativeFontFace = font.createNativeFontFace();
	        if (nativeFontFace) {
	          this.addNativeFontFace(nativeFontFace);
	          fontLoadPromises.push(getNativeFontPromise(nativeFontFace));
	        }
	      } else {
	        var rule = font.createFontFaceRule();
	        if (rule) {
	          this.insertRule(rule);
	          rules.push(rule);
	          fontsToLoad.push(font);
	        }
	      }
	    }

	    var request = this.queueLoadingCallback(callback);
	    if (isFontLoadingAPISupported) {
	      Promise.all(fontLoadPromises).then(function() {
	        request.complete();
	      });
	    } else if (rules.length > 0 && !FontLoader.isSyncFontLoadingSupported) {
	      this.prepareFontLoadEvent(rules, fontsToLoad, request);
	    } else {
	      request.complete();
	    }
	  },

	  queueLoadingCallback: function FontLoader_queueLoadingCallback(callback) {
	    function LoadLoader_completeRequest() {
	      assert(!request.end, 'completeRequest() cannot be called twice');
	      request.end = Date.now();

	      // sending all completed requests in order how they were queued
	      while (context.requests.length > 0 && context.requests[0].end) {
	        var otherRequest = context.requests.shift();
	        setTimeout(otherRequest.callback, 0);
	      }
	    }

	    var context = this.loadingContext;
	    var requestId = 'pdfjs-font-loading-' + (context.nextRequestId++);
	    var request = {
	      id: requestId,
	      complete: LoadLoader_completeRequest,
	      callback: callback,
	      started: Date.now()
	    };
	    context.requests.push(request);
	    return request;
	  },

	  prepareFontLoadEvent: function fontLoaderPrepareFontLoadEvent(rules,
	                                                                fonts,
	                                                                request) {
	      /** Hack begin */
	      // There's currently no event when a font has finished downloading so the
	      // following code is a dirty hack to 'guess' when a font is
	      // ready. It's assumed fonts are loaded in order, so add a known test
	      // font after the desired fonts and then test for the loading of that
	      // test font.

	      function int32(data, offset) {
	        return (data.charCodeAt(offset) << 24) |
	               (data.charCodeAt(offset + 1) << 16) |
	               (data.charCodeAt(offset + 2) << 8) |
	               (data.charCodeAt(offset + 3) & 0xff);
	      }

	      function spliceString(s, offset, remove, insert) {
	        var chunk1 = s.substr(0, offset);
	        var chunk2 = s.substr(offset + remove);
	        return chunk1 + insert + chunk2;
	      }

	      var i, ii;

	      var canvas = document.createElement('canvas');
	      canvas.width = 1;
	      canvas.height = 1;
	      var ctx = canvas.getContext('2d');

	      var called = 0;
	      function isFontReady(name, callback) {
	        called++;
	        // With setTimeout clamping this gives the font ~100ms to load.
	        if(called > 30) {
	          warn('Load test font never loaded.');
	          callback();
	          return;
	        }
	        ctx.font = '30px ' + name;
	        ctx.fillText('.', 0, 20);
	        var imageData = ctx.getImageData(0, 0, 1, 1);
	        if (imageData.data[3] > 0) {
	          callback();
	          return;
	        }
	        setTimeout(isFontReady.bind(null, name, callback));
	      }

	      var loadTestFontId = 'lt' + Date.now() + this.loadTestFontId++;
	      // Chromium seems to cache fonts based on a hash of the actual font data,
	      // so the font must be modified for each load test else it will appear to
	      // be loaded already.
	      // TODO: This could maybe be made faster by avoiding the btoa of the full
	      // font by splitting it in chunks before hand and padding the font id.
	      var data = this.loadTestFont;
	      var COMMENT_OFFSET = 976; // has to be on 4 byte boundary (for checksum)
	      data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length,
	                          loadTestFontId);
	      // CFF checksum is important for IE, adjusting it
	      var CFF_CHECKSUM_OFFSET = 16;
	      var XXXX_VALUE = 0x58585858; // the "comment" filled with 'X'
	      var checksum = int32(data, CFF_CHECKSUM_OFFSET);
	      for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
	        checksum = (checksum - XXXX_VALUE + int32(loadTestFontId, i)) | 0;
	      }
	      if (i < loadTestFontId.length) { // align to 4 bytes boundary
	        checksum = (checksum - XXXX_VALUE +
	                    int32(loadTestFontId + 'XXX', i)) | 0;
	      }
	      data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));

	      var url = 'url(data:font/opentype;base64,' + btoa(data) + ');';
	      var rule = '@font-face { font-family:"' + loadTestFontId + '";src:' +
	                 url + '}';
	      this.insertRule(rule);

	      var names = [];
	      for (i = 0, ii = fonts.length; i < ii; i++) {
	        names.push(fonts[i].loadedName);
	      }
	      names.push(loadTestFontId);

	      var div = document.createElement('div');
	      div.setAttribute('style',
	                       'visibility: hidden;' +
	                       'width: 10px; height: 10px;' +
	                       'position: absolute; top: 0px; left: 0px;');
	      for (i = 0, ii = names.length; i < ii; ++i) {
	        var span = document.createElement('span');
	        span.textContent = 'Hi';
	        span.style.fontFamily = names[i];
	        div.appendChild(span);
	      }
	      document.body.appendChild(div);

	      isFontReady(loadTestFontId, function() {
	        document.body.removeChild(div);
	        request.complete();
	      });
	      /** Hack end */
	  }
	};
	FontLoader.isFontLoadingAPISupported = typeof document !== 'undefined' &&
	                                       !!document.fonts;
	Object.defineProperty(FontLoader, 'isSyncFontLoadingSupported', {
	  get: function () {
	    if (typeof navigator === 'undefined') {
	      // node.js - we can pretend sync font loading is supported.
	      return shadow(FontLoader, 'isSyncFontLoadingSupported', true);
	    }

	    var supported = false;

	    // User agent string sniffing is bad, but there is no reliable way to tell
	    // if font is fully loaded and ready to be used with canvas.
	    var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
	    if (m && m[1] >= 14) {
	      supported = true;
	    }
	    // TODO other browsers
	    return shadow(FontLoader, 'isSyncFontLoadingSupported', supported);
	  },
	  enumerable: true,
	  configurable: true
	});

	var IsEvalSupportedCached = {
	  get value() {
	    return shadow(this, 'value', sharedUtil.isEvalSupported());
	  }
	};

	var FontFaceObject = (function FontFaceObjectClosure() {
	  function FontFaceObject(translatedData, options) {
	    this.compiledGlyphs = Object.create(null);
	    // importing translated data
	    for (var i in translatedData) {
	      this[i] = translatedData[i];
	    }
	    this.options = options;
	  }
	  FontFaceObject.prototype = {
	    createNativeFontFace: function FontFaceObject_createNativeFontFace() {
	      if (!this.data) {
	        return null;
	      }

	      if (this.options.disableFontFace) {
	        this.disableFontFace = true;
	        return null;
	      }

	      var nativeFontFace = new FontFace(this.loadedName, this.data, {});

	      if (this.options.fontRegistry) {
	        this.options.fontRegistry.registerFont(this);
	      }
	      return nativeFontFace;
	    },

	    createFontFaceRule: function FontFaceObject_createFontFaceRule() {
	      if (!this.data) {
	        return null;
	      }

	      if (this.options.disableFontFace) {
	        this.disableFontFace = true;
	        return null;
	      }

	      var data = bytesToString(new Uint8Array(this.data));
	      var fontName = this.loadedName;

	      // Add the font-face rule to the document
	      var url = ('url(data:' + this.mimetype + ';base64,' + btoa(data) + ');');
	      var rule = '@font-face { font-family:"' + fontName + '";src:' + url + '}';

	      if (this.options.fontRegistry) {
	        this.options.fontRegistry.registerFont(this, url);
	      }

	      return rule;
	    },

	    getPathGenerator:
	        function FontFaceObject_getPathGenerator(objs, character) {
	      if (!(character in this.compiledGlyphs)) {
	        var cmds = objs.get(this.loadedName + '_path_' + character);
	        var current, i, len;

	        // If we can, compile cmds into JS for MAXIMUM SPEED
	        if (this.options.isEvalSupported && IsEvalSupportedCached.value) {
	          var args, js = '';
	          for (i = 0, len = cmds.length; i < len; i++) {
	            current = cmds[i];

	            if (current.args !== undefined) {
	              args = current.args.join(',');
	            } else {
	              args = '';
	            }

	            js += 'c.' + current.cmd + '(' + args + ');\n';
	          }
	          /* jshint -W054 */
	          this.compiledGlyphs[character] = new Function('c', 'size', js);
	        } else {
	          // But fall back on using Function.prototype.apply() if we're
	          // blocked from using eval() for whatever reason (like CSP policies)
	          this.compiledGlyphs[character] = function(c, size) {
	            for (i = 0, len = cmds.length; i < len; i++) {
	              current = cmds[i];

	              if (current.cmd === 'scale') {
	                current.args = [size, -size];
	              }

	              c[current.cmd].apply(c, current.args);
	            }
	          };
	        }
	      }
	      return this.compiledGlyphs[character];
	    }
	  };
	  return FontFaceObject;
	})();

	exports.FontFaceObject = FontFaceObject;
	exports.FontLoader = FontLoader;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayMetadata = {}), root.pdfjsSharedUtil);
	  }
	}(this, function (exports, sharedUtil) {

	var error = sharedUtil.error;

	  function fixMetadata(meta) {
	    return meta.replace(/>\\376\\377([^<]+)/g, function(all, codes) {
	      var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g,
	                                function(code, d1, d2, d3) {
	        return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
	      });
	      var chars = '';
	      for (var i = 0; i < bytes.length; i += 2) {
	        var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
	        chars += code >= 32 && code < 127 && code !== 60 && code !== 62 &&
	          code !== 38 && false ? String.fromCharCode(code) :
	          '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
	      }
	      return '>' + chars;
	    });
	  }

	  function Metadata(meta) {
	    if (typeof meta === 'string') {
	      // Ghostscript produces invalid metadata
	      meta = fixMetadata(meta);

	      var parser = new DOMParser();
	      meta = parser.parseFromString(meta, 'application/xml');
	    } else if (!(meta instanceof Document)) {
	      error('Metadata: Invalid metadata object');
	    }

	    this.metaDocument = meta;
	    this.metadata = Object.create(null);
	    this.parse();
	  }

	  Metadata.prototype = {
	    parse: function Metadata_parse() {
	      var doc = this.metaDocument;
	      var rdf = doc.documentElement;

	      if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') { // Wrapped in <xmpmeta>
	        rdf = rdf.firstChild;
	        while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
	          rdf = rdf.nextSibling;
	        }
	      }

	      var nodeName = (rdf) ? rdf.nodeName.toLowerCase() : null;
	      if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
	        return;
	      }

	      var children = rdf.childNodes, desc, entry, name, i, ii, length, iLength;
	      for (i = 0, length = children.length; i < length; i++) {
	        desc = children[i];
	        if (desc.nodeName.toLowerCase() !== 'rdf:description') {
	          continue;
	        }

	        for (ii = 0, iLength = desc.childNodes.length; ii < iLength; ii++) {
	          if (desc.childNodes[ii].nodeName.toLowerCase() !== '#text') {
	            entry = desc.childNodes[ii];
	            name = entry.nodeName.toLowerCase();
	            this.metadata[name] = entry.textContent.trim();
	          }
	        }
	      }
	    },

	    get: function Metadata_get(name) {
	      return this.metadata[name] || null;
	    },

	    has: function Metadata_has(name) {
	      return typeof this.metadata[name] !== 'undefined';
	    }
	  };

	exports.Metadata = Metadata;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplaySVG = {}), root.pdfjsSharedUtil);
	  }
	}(this, function (exports, sharedUtil) {
	var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
	var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
	var ImageKind = sharedUtil.ImageKind;
	var OPS = sharedUtil.OPS;
	var Util = sharedUtil.Util;
	var isNum = sharedUtil.isNum;
	var isArray = sharedUtil.isArray;
	var warn = sharedUtil.warn;
	var createObjectURL = sharedUtil.createObjectURL;

	var SVG_DEFAULTS = {
	  fontStyle: 'normal',
	  fontWeight: 'normal',
	  fillColor: '#000000'
	};

	var convertImgDataToPng = (function convertImgDataToPngClosure() {
	  var PNG_HEADER =
	    new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

	  var CHUNK_WRAPPER_SIZE = 12;

	  var crcTable = new Int32Array(256);
	  for (var i = 0; i < 256; i++) {
	    var c = i;
	    for (var h = 0; h < 8; h++) {
	      if (c & 1) {
	        c = 0xedB88320 ^ ((c >> 1) & 0x7fffffff);
	      } else {
	        c = (c >> 1) & 0x7fffffff;
	      }
	    }
	    crcTable[i] = c;
	  }

	  function crc32(data, start, end) {
	    var crc = -1;
	    for (var i = start; i < end; i++) {
	      var a = (crc ^ data[i]) & 0xff;
	      var b = crcTable[a];
	      crc = (crc >>> 8) ^ b;
	    }
	    return crc ^ -1;
	  }

	  function writePngChunk(type, body, data, offset) {
	    var p = offset;
	    var len = body.length;

	    data[p] = len >> 24 & 0xff;
	    data[p + 1] = len >> 16 & 0xff;
	    data[p + 2] = len >> 8 & 0xff;
	    data[p + 3] = len & 0xff;
	    p += 4;

	    data[p] = type.charCodeAt(0) & 0xff;
	    data[p + 1] = type.charCodeAt(1) & 0xff;
	    data[p + 2] = type.charCodeAt(2) & 0xff;
	    data[p + 3] = type.charCodeAt(3) & 0xff;
	    p += 4;

	    data.set(body, p);
	    p += body.length;

	    var crc = crc32(data, offset + 4, p);

	    data[p] = crc >> 24 & 0xff;
	    data[p + 1] = crc >> 16 & 0xff;
	    data[p + 2] = crc >> 8 & 0xff;
	    data[p + 3] = crc & 0xff;
	  }

	  function adler32(data, start, end) {
	    var a = 1;
	    var b = 0;
	    for (var i = start; i < end; ++i) {
	      a = (a + (data[i] & 0xff)) % 65521;
	      b = (b + a) % 65521;
	    }
	    return (b << 16) | a;
	  }

	  function encode(imgData, kind, forceDataSchema) {
	    var width = imgData.width;
	    var height = imgData.height;
	    var bitDepth, colorType, lineSize;
	    var bytes = imgData.data;

	    switch (kind) {
	      case ImageKind.GRAYSCALE_1BPP:
	        colorType = 0;
	        bitDepth = 1;
	        lineSize = (width + 7) >> 3;
	        break;
	      case ImageKind.RGB_24BPP:
	        colorType = 2;
	        bitDepth = 8;
	        lineSize = width * 3;
	        break;
	      case ImageKind.RGBA_32BPP:
	        colorType = 6;
	        bitDepth = 8;
	        lineSize = width * 4;
	        break;
	      default:
	        throw new Error('invalid format');
	    }

	    // prefix every row with predictor 0
	    var literals = new Uint8Array((1 + lineSize) * height);
	    var offsetLiterals = 0, offsetBytes = 0;
	    var y, i;
	    for (y = 0; y < height; ++y) {
	      literals[offsetLiterals++] = 0; // no prediction
	      literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize),
	                   offsetLiterals);
	      offsetBytes += lineSize;
	      offsetLiterals += lineSize;
	    }

	    if (kind === ImageKind.GRAYSCALE_1BPP) {
	      // inverting for B/W
	      offsetLiterals = 0;
	      for (y = 0; y < height; y++) {
	        offsetLiterals++; // skipping predictor
	        for (i = 0; i < lineSize; i++) {
	          literals[offsetLiterals++] ^= 0xFF;
	        }
	      }
	    }

	    var ihdr = new Uint8Array([
	      width >> 24 & 0xff,
	      width >> 16 & 0xff,
	      width >> 8 & 0xff,
	      width & 0xff,
	      height >> 24 & 0xff,
	      height >> 16 & 0xff,
	      height >> 8 & 0xff,
	      height & 0xff,
	      bitDepth, // bit depth
	      colorType, // color type
	      0x00, // compression method
	      0x00, // filter method
	      0x00 // interlace method
	    ]);

	    var len = literals.length;
	    var maxBlockLength = 0xFFFF;

	    var deflateBlocks = Math.ceil(len / maxBlockLength);
	    var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
	    var pi = 0;
	    idat[pi++] = 0x78; // compression method and flags
	    idat[pi++] = 0x9c; // flags

	    var pos = 0;
	    while (len > maxBlockLength) {
	      // writing non-final DEFLATE blocks type 0 and length of 65535
	      idat[pi++] = 0x00;
	      idat[pi++] = 0xff;
	      idat[pi++] = 0xff;
	      idat[pi++] = 0x00;
	      idat[pi++] = 0x00;
	      idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
	      pi += maxBlockLength;
	      pos += maxBlockLength;
	      len -= maxBlockLength;
	    }

	    // writing non-final DEFLATE blocks type 0
	    idat[pi++] = 0x01;
	    idat[pi++] = len & 0xff;
	    idat[pi++] = len >> 8 & 0xff;
	    idat[pi++] = (~len & 0xffff) & 0xff;
	    idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
	    idat.set(literals.subarray(pos), pi);
	    pi += literals.length - pos;

	    var adler = adler32(literals, 0, literals.length); // checksum
	    idat[pi++] = adler >> 24 & 0xff;
	    idat[pi++] = adler >> 16 & 0xff;
	    idat[pi++] = adler >> 8 & 0xff;
	    idat[pi++] = adler & 0xff;

	    // PNG will consists: header, IHDR+data, IDAT+data, and IEND.
	    var pngLength = PNG_HEADER.length + (CHUNK_WRAPPER_SIZE * 3) +
	                    ihdr.length + idat.length;
	    var data = new Uint8Array(pngLength);
	    var offset = 0;
	    data.set(PNG_HEADER, offset);
	    offset += PNG_HEADER.length;
	    writePngChunk('IHDR', ihdr, data, offset);
	    offset += CHUNK_WRAPPER_SIZE + ihdr.length;
	    writePngChunk('IDATA', idat, data, offset);
	    offset += CHUNK_WRAPPER_SIZE + idat.length;
	    writePngChunk('IEND', new Uint8Array(0), data, offset);

	    return createObjectURL(data, 'image/png', forceDataSchema);
	  }

	  return function convertImgDataToPng(imgData, forceDataSchema) {
	    var kind = (imgData.kind === undefined ?
	                ImageKind.GRAYSCALE_1BPP : imgData.kind);
	    return encode(imgData, kind, forceDataSchema);
	  };
	})();

	var SVGExtraState = (function SVGExtraStateClosure() {
	  function SVGExtraState() {
	    this.fontSizeScale = 1;
	    this.fontWeight = SVG_DEFAULTS.fontWeight;
	    this.fontSize = 0;

	    this.textMatrix = IDENTITY_MATRIX;
	    this.fontMatrix = FONT_IDENTITY_MATRIX;
	    this.leading = 0;

	    // Current point (in user coordinates)
	    this.x = 0;
	    this.y = 0;

	    // Start of text line (in text coordinates)
	    this.lineX = 0;
	    this.lineY = 0;

	    // Character and word spacing
	    this.charSpacing = 0;
	    this.wordSpacing = 0;
	    this.textHScale = 1;
	    this.textRise = 0;

	    // Default foreground and background colors
	    this.fillColor = SVG_DEFAULTS.fillColor;
	    this.strokeColor = '#000000';

	    this.fillAlpha = 1;
	    this.strokeAlpha = 1;
	    this.lineWidth = 1;
	    this.lineJoin = '';
	    this.lineCap = '';
	    this.miterLimit = 0;

	    this.dashArray = [];
	    this.dashPhase = 0;

	    this.dependencies = [];

	    // Clipping
	    this.clipId = '';
	    this.pendingClip = false;

	    this.maskId = '';
	  }

	  SVGExtraState.prototype = {
	    clone: function SVGExtraState_clone() {
	      return Object.create(this);
	    },
	    setCurrentPoint: function SVGExtraState_setCurrentPoint(x, y) {
	      this.x = x;
	      this.y = y;
	    }
	  };
	  return SVGExtraState;
	})();

	var SVGGraphics = (function SVGGraphicsClosure() {
	  function createScratchSVG(width, height) {
	    var NS = 'http://www.w3.org/2000/svg';
	    var svg = document.createElementNS(NS, 'svg:svg');
	    svg.setAttributeNS(null, 'version', '1.1');
	    svg.setAttributeNS(null, 'width', width + 'px');
	    svg.setAttributeNS(null, 'height', height + 'px');
	    svg.setAttributeNS(null, 'viewBox', '0 0 ' + width + ' ' + height);
	    return svg;
	  }

	  function opListToTree(opList) {
	    var opTree = [];
	    var tmp = [];
	    var opListLen = opList.length;

	    for (var x = 0; x < opListLen; x++) {
	      if (opList[x].fn === 'save') {
	        opTree.push({'fnId': 92, 'fn': 'group', 'items': []});
	        tmp.push(opTree);
	        opTree = opTree[opTree.length - 1].items;
	        continue;
	      }

	      if(opList[x].fn === 'restore') {
	        opTree = tmp.pop();
	      } else {
	        opTree.push(opList[x]);
	      }
	    }
	    return opTree;
	  }

	  /**
	   * Formats float number.
	   * @param value {number} number to format.
	   * @returns {string}
	   */
	  function pf(value) {
	    if (value === (value | 0)) { // integer number
	      return value.toString();
	    }
	    var s = value.toFixed(10);
	    var i = s.length - 1;
	    if (s[i] !== '0') {
	      return s;
	    }
	    // removing trailing zeros
	    do {
	      i--;
	    } while (s[i] === '0');
	    return s.substr(0, s[i] === '.' ? i : i + 1);
	  }

	  /**
	   * Formats transform matrix. The standard rotation, scale and translate
	   * matrices are replaced by their shorter forms, and for identity matrix
	   * returns empty string to save the memory.
	   * @param m {Array} matrix to format.
	   * @returns {string}
	   */
	  function pm(m) {
	    if (m[4] === 0 && m[5] === 0) {
	      if (m[1] === 0 && m[2] === 0) {
	        if (m[0] === 1 && m[3] === 1) {
	          return '';
	        }
	        return 'scale(' + pf(m[0]) + ' ' + pf(m[3]) + ')';
	      }
	      if (m[0] === m[3] && m[1] === -m[2]) {
	        var a = Math.acos(m[0]) * 180 / Math.PI;
	        return 'rotate(' + pf(a) + ')';
	      }
	    } else {
	      if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
	        return 'translate(' + pf(m[4]) + ' ' + pf(m[5]) + ')';
	      }
	    }
	    return 'matrix(' + pf(m[0]) + ' ' + pf(m[1]) + ' ' + pf(m[2]) + ' ' +
	      pf(m[3]) + ' ' + pf(m[4]) + ' ' + pf(m[5]) + ')';
	  }

	  function SVGGraphics(commonObjs, objs, forceDataSchema) {
	    this.current = new SVGExtraState();
	    this.transformMatrix = IDENTITY_MATRIX; // Graphics state matrix
	    this.transformStack = [];
	    this.extraStack = [];
	    this.commonObjs = commonObjs;
	    this.objs = objs;
	    this.pendingEOFill = false;

	    this.embedFonts = false;
	    this.embeddedFonts = Object.create(null);
	    this.cssStyle = null;
	    this.forceDataSchema = !!forceDataSchema;
	  }

	  var NS = 'http://www.w3.org/2000/svg';
	  var XML_NS = 'http://www.w3.org/XML/1998/namespace';
	  var XLINK_NS = 'http://www.w3.org/1999/xlink';
	  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
	  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
	  var clipCount = 0;
	  var maskCount = 0;

	  SVGGraphics.prototype = {
	    save: function SVGGraphics_save() {
	      this.transformStack.push(this.transformMatrix);
	      var old = this.current;
	      this.extraStack.push(old);
	      this.current = old.clone();
	    },

	    restore: function SVGGraphics_restore() {
	      this.transformMatrix = this.transformStack.pop();
	      this.current = this.extraStack.pop();

	      this.tgrp = document.createElementNS(NS, 'svg:g');
	      this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
	      this.pgrp.appendChild(this.tgrp);
	    },

	    group: function SVGGraphics_group(items) {
	      this.save();
	      this.executeOpTree(items);
	      this.restore();
	    },

	    loadDependencies: function SVGGraphics_loadDependencies(operatorList) {
	      var fnArray = operatorList.fnArray;
	      var fnArrayLen = fnArray.length;
	      var argsArray = operatorList.argsArray;

	      var self = this;
	      for (var i = 0; i < fnArrayLen; i++) {
	        if (OPS.dependency === fnArray[i]) {
	          var deps = argsArray[i];
	          for (var n = 0, nn = deps.length; n < nn; n++) {
	            var obj = deps[n];
	            var common = obj.substring(0, 2) === 'g_';
	            var promise;
	            if (common) {
	              promise = new Promise(function(resolve) {
	                self.commonObjs.get(obj, resolve);
	              });
	            } else {
	              promise = new Promise(function(resolve) {
	                self.objs.get(obj, resolve);
	              });
	            }
	            this.current.dependencies.push(promise);
	          }
	        }
	      }
	      return Promise.all(this.current.dependencies);
	    },

	    transform: function SVGGraphics_transform(a, b, c, d, e, f) {
	      var transformMatrix = [a, b, c, d, e, f];
	      this.transformMatrix = Util.transform(this.transformMatrix,
	                                            transformMatrix);

	      this.tgrp = document.createElementNS(NS, 'svg:g');
	      this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
	    },

	    getSVG: function SVGGraphics_getSVG(operatorList, viewport) {
	      this.svg = createScratchSVG(viewport.width, viewport.height);
	      this.viewport = viewport;

	      return this.loadDependencies(operatorList).then(function () {
	        this.transformMatrix = IDENTITY_MATRIX;
	        this.pgrp = document.createElementNS(NS, 'svg:g'); // Parent group
	        this.pgrp.setAttributeNS(null, 'transform', pm(viewport.transform));
	        this.tgrp = document.createElementNS(NS, 'svg:g'); // Transform group
	        this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
	        this.defs = document.createElementNS(NS, 'svg:defs');
	        this.pgrp.appendChild(this.defs);
	        this.pgrp.appendChild(this.tgrp);
	        this.svg.appendChild(this.pgrp);
	        var opTree = this.convertOpList(operatorList);
	        this.executeOpTree(opTree);
	        return this.svg;
	      }.bind(this));
	    },

	    convertOpList: function SVGGraphics_convertOpList(operatorList) {
	      var argsArray = operatorList.argsArray;
	      var fnArray = operatorList.fnArray;
	      var fnArrayLen  = fnArray.length;
	      var REVOPS = [];
	      var opList = [];

	      for (var op in OPS) {
	        REVOPS[OPS[op]] = op;
	      }

	      for (var x = 0; x < fnArrayLen; x++) {
	        var fnId = fnArray[x];
	        opList.push({'fnId' : fnId, 'fn': REVOPS[fnId], 'args': argsArray[x]});
	      }
	      return opListToTree(opList);
	    },

	    executeOpTree: function SVGGraphics_executeOpTree(opTree) {
	      var opTreeLen = opTree.length;
	      for(var x = 0; x < opTreeLen; x++) {
	        var fn = opTree[x].fn;
	        var fnId = opTree[x].fnId;
	        var args = opTree[x].args;

	        switch (fnId | 0) {
	          case OPS.beginText:
	            this.beginText();
	            break;
	          case OPS.setLeading:
	            this.setLeading(args);
	            break;
	          case OPS.setLeadingMoveText:
	            this.setLeadingMoveText(args[0], args[1]);
	            break;
	          case OPS.setFont:
	            this.setFont(args);
	            break;
	          case OPS.showText:
	            this.showText(args[0]);
	            break;
	          case OPS.showSpacedText:
	            this.showText(args[0]);
	            break;
	          case OPS.endText:
	            this.endText();
	            break;
	          case OPS.moveText:
	            this.moveText(args[0], args[1]);
	            break;
	          case OPS.setCharSpacing:
	            this.setCharSpacing(args[0]);
	            break;
	          case OPS.setWordSpacing:
	            this.setWordSpacing(args[0]);
	            break;
	          case OPS.setHScale:
	            this.setHScale(args[0]);
	            break;
	          case OPS.setTextMatrix:
	            this.setTextMatrix(args[0], args[1], args[2],
	                               args[3], args[4], args[5]);
	            break;
	          case OPS.setLineWidth:
	            this.setLineWidth(args[0]);
	            break;
	          case OPS.setLineJoin:
	            this.setLineJoin(args[0]);
	            break;
	          case OPS.setLineCap:
	            this.setLineCap(args[0]);
	            break;
	          case OPS.setMiterLimit:
	            this.setMiterLimit(args[0]);
	            break;
	          case OPS.setFillRGBColor:
	            this.setFillRGBColor(args[0], args[1], args[2]);
	            break;
	          case OPS.setStrokeRGBColor:
	            this.setStrokeRGBColor(args[0], args[1], args[2]);
	            break;
	          case OPS.setDash:
	            this.setDash(args[0], args[1]);
	            break;
	          case OPS.setGState:
	            this.setGState(args[0]);
	            break;
	          case OPS.fill:
	            this.fill();
	            break;
	          case OPS.eoFill:
	            this.eoFill();
	            break;
	          case OPS.stroke:
	            this.stroke();
	            break;
	          case OPS.fillStroke:
	            this.fillStroke();
	            break;
	          case OPS.eoFillStroke:
	            this.eoFillStroke();
	            break;
	          case OPS.clip:
	            this.clip('nonzero');
	            break;
	          case OPS.eoClip:
	            this.clip('evenodd');
	            break;
	          case OPS.paintSolidColorImageMask:
	            this.paintSolidColorImageMask();
	            break;
	          case OPS.paintJpegXObject:
	            this.paintJpegXObject(args[0], args[1], args[2]);
	            break;
	          case OPS.paintImageXObject:
	            this.paintImageXObject(args[0]);
	            break;
	          case OPS.paintInlineImageXObject:
	            this.paintInlineImageXObject(args[0]);
	            break;
	          case OPS.paintImageMaskXObject:
	            this.paintImageMaskXObject(args[0]);
	            break;
	          case OPS.paintFormXObjectBegin:
	            this.paintFormXObjectBegin(args[0], args[1]);
	            break;
	          case OPS.paintFormXObjectEnd:
	            this.paintFormXObjectEnd();
	            break;
	          case OPS.closePath:
	            this.closePath();
	            break;
	          case OPS.closeStroke:
	            this.closeStroke();
	            break;
	          case OPS.closeFillStroke:
	            this.closeFillStroke();
	            break;
	          case OPS.nextLine:
	            this.nextLine();
	            break;
	          case OPS.transform:
	            this.transform(args[0], args[1], args[2], args[3],
	                           args[4], args[5]);
	            break;
	          case OPS.constructPath:
	            this.constructPath(args[0], args[1]);
	            break;
	          case OPS.endPath:
	            this.endPath();
	            break;
	          case 92:
	            this.group(opTree[x].items);
	            break;
	          default:
	            warn('Unimplemented method '+ fn);
	            break;
	        }
	      }
	    },

	    setWordSpacing: function SVGGraphics_setWordSpacing(wordSpacing) {
	      this.current.wordSpacing = wordSpacing;
	    },

	    setCharSpacing: function SVGGraphics_setCharSpacing(charSpacing) {
	      this.current.charSpacing = charSpacing;
	    },

	    nextLine: function SVGGraphics_nextLine() {
	      this.moveText(0, this.current.leading);
	    },

	    setTextMatrix: function SVGGraphics_setTextMatrix(a, b, c, d, e, f) {
	      var current = this.current;
	      this.current.textMatrix = this.current.lineMatrix = [a, b, c, d, e, f];

	      this.current.x = this.current.lineX = 0;
	      this.current.y = this.current.lineY = 0;

	      current.xcoords = [];
	      current.tspan = document.createElementNS(NS, 'svg:tspan');
	      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
	      current.tspan.setAttributeNS(null, 'font-size',
	                                   pf(current.fontSize) + 'px');
	      current.tspan.setAttributeNS(null, 'y', pf(-current.y));

	      current.txtElement = document.createElementNS(NS, 'svg:text');
	      current.txtElement.appendChild(current.tspan);
	    },

	    beginText: function SVGGraphics_beginText() {
	      this.current.x = this.current.lineX = 0;
	      this.current.y = this.current.lineY = 0;
	      this.current.textMatrix = IDENTITY_MATRIX;
	      this.current.lineMatrix = IDENTITY_MATRIX;
	      this.current.tspan = document.createElementNS(NS, 'svg:tspan');
	      this.current.txtElement = document.createElementNS(NS, 'svg:text');
	      this.current.txtgrp = document.createElementNS(NS, 'svg:g');
	      this.current.xcoords = [];
	    },

	    moveText: function SVGGraphics_moveText(x, y) {
	      var current = this.current;
	      this.current.x = this.current.lineX += x;
	      this.current.y = this.current.lineY += y;

	      current.xcoords = [];
	      current.tspan = document.createElementNS(NS, 'svg:tspan');
	      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
	      current.tspan.setAttributeNS(null, 'font-size',
	                                   pf(current.fontSize) + 'px');
	      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
	    },

	    showText: function SVGGraphics_showText(glyphs) {
	      var current = this.current;
	      var font = current.font;
	      var fontSize = current.fontSize;

	      if (fontSize === 0) {
	        return;
	      }

	      var charSpacing = current.charSpacing;
	      var wordSpacing = current.wordSpacing;
	      var fontDirection = current.fontDirection;
	      var textHScale = current.textHScale * fontDirection;
	      var glyphsLength = glyphs.length;
	      var vertical = font.vertical;
	      var widthAdvanceScale = fontSize * current.fontMatrix[0];

	      var x = 0, i;
	      for (i = 0; i < glyphsLength; ++i) {
	        var glyph = glyphs[i];
	        if (glyph === null) {
	          // word break
	          x += fontDirection * wordSpacing;
	          continue;
	        } else if (isNum(glyph)) {
	          x += -glyph * fontSize * 0.001;
	          continue;
	        }
	        current.xcoords.push(current.x + x * textHScale);

	        var width = glyph.width;
	        var character = glyph.fontChar;
	        var charWidth = width * widthAdvanceScale + charSpacing * fontDirection;
	        x += charWidth;

	        current.tspan.textContent += character;
	      }
	      if (vertical) {
	        current.y -= x * textHScale;
	      } else {
	        current.x += x * textHScale;
	      }

	      current.tspan.setAttributeNS(null, 'x',
	                                   current.xcoords.map(pf).join(' '));
	      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
	      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
	      current.tspan.setAttributeNS(null, 'font-size',
	                                   pf(current.fontSize) + 'px');
	      if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
	        current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
	      }
	      if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
	        current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
	      }
	      if (current.fillColor !== SVG_DEFAULTS.fillColor) {
	        current.tspan.setAttributeNS(null, 'fill', current.fillColor);
	      }

	      current.txtElement.setAttributeNS(null, 'transform',
	                                        pm(current.textMatrix) +
	                                        ' scale(1, -1)' );
	      current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
	      current.txtElement.appendChild(current.tspan);
	      current.txtgrp.appendChild(current.txtElement);

	      this.tgrp.appendChild(current.txtElement);

	    },

	    setLeadingMoveText: function SVGGraphics_setLeadingMoveText(x, y) {
	      this.setLeading(-y);
	      this.moveText(x, y);
	    },

	    addFontStyle: function SVGGraphics_addFontStyle(fontObj) {
	      if (!this.cssStyle) {
	        this.cssStyle = document.createElementNS(NS, 'svg:style');
	        this.cssStyle.setAttributeNS(null, 'type', 'text/css');
	        this.defs.appendChild(this.cssStyle);
	      }

	      var url = createObjectURL(fontObj.data, fontObj.mimetype,
	                                this.forceDataSchema);
	      this.cssStyle.textContent +=
	        '@font-face { font-family: "' + fontObj.loadedName + '";' +
	        ' src: url(' + url + '); }\n';
	    },

	    setFont: function SVGGraphics_setFont(details) {
	      var current = this.current;
	      var fontObj = this.commonObjs.get(details[0]);
	      var size = details[1];
	      this.current.font = fontObj;

	      if (this.embedFonts && fontObj.data &&
	          !this.embeddedFonts[fontObj.loadedName]) {
	        this.addFontStyle(fontObj);
	        this.embeddedFonts[fontObj.loadedName] = fontObj;
	      }

	      current.fontMatrix = (fontObj.fontMatrix ?
	                            fontObj.fontMatrix : FONT_IDENTITY_MATRIX);

	      var bold = fontObj.black ? (fontObj.bold ? 'bolder' : 'bold') :
	                                 (fontObj.bold ? 'bold' : 'normal');
	      var italic = fontObj.italic ? 'italic' : 'normal';

	      if (size < 0) {
	        size = -size;
	        current.fontDirection = -1;
	      } else {
	        current.fontDirection = 1;
	      }
	      current.fontSize = size;
	      current.fontFamily = fontObj.loadedName;
	      current.fontWeight = bold;
	      current.fontStyle = italic;

	      current.tspan = document.createElementNS(NS, 'svg:tspan');
	      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
	      current.xcoords = [];
	    },

	    endText: function SVGGraphics_endText() {
	      if (this.current.pendingClip) {
	        this.cgrp.appendChild(this.tgrp);
	        this.pgrp.appendChild(this.cgrp);
	      } else {
	        this.pgrp.appendChild(this.tgrp);
	      }
	      this.tgrp = document.createElementNS(NS, 'svg:g');
	      this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
	    },

	    // Path properties
	    setLineWidth: function SVGGraphics_setLineWidth(width) {
	      this.current.lineWidth = width;
	    },
	    setLineCap: function SVGGraphics_setLineCap(style) {
	      this.current.lineCap = LINE_CAP_STYLES[style];
	    },
	    setLineJoin: function SVGGraphics_setLineJoin(style) {
	      this.current.lineJoin = LINE_JOIN_STYLES[style];
	    },
	    setMiterLimit: function SVGGraphics_setMiterLimit(limit) {
	      this.current.miterLimit = limit;
	    },
	    setStrokeRGBColor: function SVGGraphics_setStrokeRGBColor(r, g, b) {
	      var color = Util.makeCssRgb(r, g, b);
	      this.current.strokeColor = color;
	    },
	    setFillRGBColor: function SVGGraphics_setFillRGBColor(r, g, b) {
	      var color = Util.makeCssRgb(r, g, b);
	      this.current.fillColor = color;
	      this.current.tspan = document.createElementNS(NS, 'svg:tspan');
	      this.current.xcoords = [];
	    },
	    setDash: function SVGGraphics_setDash(dashArray, dashPhase) {
	      this.current.dashArray = dashArray;
	      this.current.dashPhase = dashPhase;
	    },

	    constructPath: function SVGGraphics_constructPath(ops, args) {
	      var current = this.current;
	      var x = current.x, y = current.y;
	      current.path = document.createElementNS(NS, 'svg:path');
	      var d = [];
	      var opLength = ops.length;

	      for (var i = 0, j = 0; i < opLength; i++) {
	        switch (ops[i] | 0) {
	          case OPS.rectangle:
	            x = args[j++];
	            y = args[j++];
	            var width = args[j++];
	            var height = args[j++];
	            var xw = x + width;
	            var yh = y + height;
	            d.push('M', pf(x), pf(y), 'L', pf(xw) , pf(y), 'L', pf(xw), pf(yh),
	                   'L', pf(x), pf(yh), 'Z');
	            break;
	          case OPS.moveTo:
	            x = args[j++];
	            y = args[j++];
	            d.push('M', pf(x), pf(y));
	            break;
	          case OPS.lineTo:
	            x = args[j++];
	            y = args[j++];
	            d.push('L', pf(x) , pf(y));
	            break;
	          case OPS.curveTo:
	            x = args[j + 4];
	            y = args[j + 5];
	            d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]),
	                   pf(args[j + 3]), pf(x), pf(y));
	            j += 6;
	            break;
	          case OPS.curveTo2:
	            x = args[j + 2];
	            y = args[j + 3];
	            d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]),
	                   pf(args[j + 2]), pf(args[j + 3]));
	            j += 4;
	            break;
	          case OPS.curveTo3:
	            x = args[j + 2];
	            y = args[j + 3];
	            d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y),
	                   pf(x), pf(y));
	            j += 4;
	            break;
	          case OPS.closePath:
	            d.push('Z');
	            break;
	        }
	      }
	      current.path.setAttributeNS(null, 'd', d.join(' '));
	      current.path.setAttributeNS(null, 'stroke-miterlimit',
	                                  pf(current.miterLimit));
	      current.path.setAttributeNS(null, 'stroke-linecap', current.lineCap);
	      current.path.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
	      current.path.setAttributeNS(null, 'stroke-width',
	                                  pf(current.lineWidth) + 'px');
	      current.path.setAttributeNS(null, 'stroke-dasharray',
	                                  current.dashArray.map(pf).join(' '));
	      current.path.setAttributeNS(null, 'stroke-dashoffset',
	                                  pf(current.dashPhase) + 'px');
	      current.path.setAttributeNS(null, 'fill', 'none');

	      this.tgrp.appendChild(current.path);
	      if (current.pendingClip) {
	        this.cgrp.appendChild(this.tgrp);
	        this.pgrp.appendChild(this.cgrp);
	      } else {
	        this.pgrp.appendChild(this.tgrp);
	      }
	      // Saving a reference in current.element so that it can be addressed
	      // in 'fill' and 'stroke'
	      current.element = current.path;
	      current.setCurrentPoint(x, y);
	    },

	    endPath: function SVGGraphics_endPath() {
	      var current = this.current;
	      if (current.pendingClip) {
	        this.cgrp.appendChild(this.tgrp);
	        this.pgrp.appendChild(this.cgrp);
	      } else {
	        this.pgrp.appendChild(this.tgrp);
	      }
	      this.tgrp = document.createElementNS(NS, 'svg:g');
	      this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
	    },

	    clip: function SVGGraphics_clip(type) {
	      var current = this.current;
	      // Add current path to clipping path
	      current.clipId = 'clippath' + clipCount;
	      clipCount++;
	      this.clippath = document.createElementNS(NS, 'svg:clipPath');
	      this.clippath.setAttributeNS(null, 'id', current.clipId);
	      var clipElement = current.element.cloneNode();
	      if (type === 'evenodd') {
	        clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
	      } else {
	        clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
	      }
	      this.clippath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
	      this.clippath.appendChild(clipElement);
	      this.defs.appendChild(this.clippath);

	      // Create a new group with that attribute
	      current.pendingClip = true;
	      this.cgrp = document.createElementNS(NS, 'svg:g');
	      this.cgrp.setAttributeNS(null, 'clip-path',
	                               'url(#' + current.clipId + ')');
	      this.pgrp.appendChild(this.cgrp);
	    },

	    closePath: function SVGGraphics_closePath() {
	      var current = this.current;
	      var d = current.path.getAttributeNS(null, 'd');
	      d += 'Z';
	      current.path.setAttributeNS(null, 'd', d);
	    },

	    setLeading: function SVGGraphics_setLeading(leading) {
	      this.current.leading = -leading;
	    },

	    setTextRise: function SVGGraphics_setTextRise(textRise) {
	      this.current.textRise = textRise;
	    },

	    setHScale: function SVGGraphics_setHScale(scale) {
	      this.current.textHScale = scale / 100;
	    },

	    setGState: function SVGGraphics_setGState(states) {
	      for (var i = 0, ii = states.length; i < ii; i++) {
	        var state = states[i];
	        var key = state[0];
	        var value = state[1];

	        switch (key) {
	          case 'LW':
	            this.setLineWidth(value);
	            break;
	          case 'LC':
	            this.setLineCap(value);
	            break;
	          case 'LJ':
	            this.setLineJoin(value);
	            break;
	          case 'ML':
	            this.setMiterLimit(value);
	            break;
	          case 'D':
	            this.setDash(value[0], value[1]);
	            break;
	          case 'RI':
	            break;
	          case 'FL':
	            break;
	          case 'Font':
	            this.setFont(value);
	            break;
	          case 'CA':
	            break;
	          case 'ca':
	            break;
	          case 'BM':
	            break;
	          case 'SMask':
	            break;
	        }
	      }
	    },

	    fill: function SVGGraphics_fill() {
	      var current = this.current;
	      current.element.setAttributeNS(null, 'fill', current.fillColor);
	    },

	    stroke: function SVGGraphics_stroke() {
	      var current = this.current;
	      current.element.setAttributeNS(null, 'stroke', current.strokeColor);
	      current.element.setAttributeNS(null, 'fill', 'none');
	    },

	    eoFill: function SVGGraphics_eoFill() {
	      var current = this.current;
	      current.element.setAttributeNS(null, 'fill', current.fillColor);
	      current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
	    },

	    fillStroke: function SVGGraphics_fillStroke() {
	      // Order is important since stroke wants fill to be none.
	      // First stroke, then if fill needed, it will be overwritten.
	      this.stroke();
	      this.fill();
	    },

	    eoFillStroke: function SVGGraphics_eoFillStroke() {
	      this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
	      this.fillStroke();
	    },

	    closeStroke: function SVGGraphics_closeStroke() {
	      this.closePath();
	      this.stroke();
	    },

	    closeFillStroke: function SVGGraphics_closeFillStroke() {
	      this.closePath();
	      this.fillStroke();
	    },

	    paintSolidColorImageMask:
	        function SVGGraphics_paintSolidColorImageMask() {
	      var current = this.current;
	      var rect = document.createElementNS(NS, 'svg:rect');
	      rect.setAttributeNS(null, 'x', '0');
	      rect.setAttributeNS(null, 'y', '0');
	      rect.setAttributeNS(null, 'width', '1px');
	      rect.setAttributeNS(null, 'height', '1px');
	      rect.setAttributeNS(null, 'fill', current.fillColor);
	      this.tgrp.appendChild(rect);
	    },

	    paintJpegXObject: function SVGGraphics_paintJpegXObject(objId, w, h) {
	      var current = this.current;
	      var imgObj = this.objs.get(objId);
	      var imgEl = document.createElementNS(NS, 'svg:image');
	      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
	      imgEl.setAttributeNS(null, 'width', imgObj.width + 'px');
	      imgEl.setAttributeNS(null, 'height', imgObj.height + 'px');
	      imgEl.setAttributeNS(null, 'x', '0');
	      imgEl.setAttributeNS(null, 'y', pf(-h));
	      imgEl.setAttributeNS(null, 'transform',
	                           'scale(' + pf(1 / w) + ' ' + pf(-1 / h) + ')');

	      this.tgrp.appendChild(imgEl);
	      if (current.pendingClip) {
	        this.cgrp.appendChild(this.tgrp);
	        this.pgrp.appendChild(this.cgrp);
	      } else {
	        this.pgrp.appendChild(this.tgrp);
	      }
	    },

	    paintImageXObject: function SVGGraphics_paintImageXObject(objId) {
	      var imgData = this.objs.get(objId);
	      if (!imgData) {
	        warn('Dependent image isn\'t ready yet');
	        return;
	      }
	      this.paintInlineImageXObject(imgData);
	    },

	    paintInlineImageXObject:
	        function SVGGraphics_paintInlineImageXObject(imgData, mask) {
	      var current = this.current;
	      var width = imgData.width;
	      var height = imgData.height;

	      var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema);
	      var cliprect = document.createElementNS(NS, 'svg:rect');
	      cliprect.setAttributeNS(null, 'x', '0');
	      cliprect.setAttributeNS(null, 'y', '0');
	      cliprect.setAttributeNS(null, 'width', pf(width));
	      cliprect.setAttributeNS(null, 'height', pf(height));
	      current.element = cliprect;
	      this.clip('nonzero');
	      var imgEl = document.createElementNS(NS, 'svg:image');
	      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
	      imgEl.setAttributeNS(null, 'x', '0');
	      imgEl.setAttributeNS(null, 'y', pf(-height));
	      imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
	      imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
	      imgEl.setAttributeNS(null, 'transform',
	                           'scale(' + pf(1 / width) + ' ' +
	                           pf(-1 / height) + ')');
	      if (mask) {
	        mask.appendChild(imgEl);
	      } else {
	        this.tgrp.appendChild(imgEl);
	      }
	      if (current.pendingClip) {
	        this.cgrp.appendChild(this.tgrp);
	        this.pgrp.appendChild(this.cgrp);
	      } else {
	        this.pgrp.appendChild(this.tgrp);
	      }
	    },

	    paintImageMaskXObject:
	        function SVGGraphics_paintImageMaskXObject(imgData) {
	      var current = this.current;
	      var width = imgData.width;
	      var height = imgData.height;
	      var fillColor = current.fillColor;

	      current.maskId = 'mask' + maskCount++;
	      var mask = document.createElementNS(NS, 'svg:mask');
	      mask.setAttributeNS(null, 'id', current.maskId);

	      var rect = document.createElementNS(NS, 'svg:rect');
	      rect.setAttributeNS(null, 'x', '0');
	      rect.setAttributeNS(null, 'y', '0');
	      rect.setAttributeNS(null, 'width', pf(width));
	      rect.setAttributeNS(null, 'height', pf(height));
	      rect.setAttributeNS(null, 'fill', fillColor);
	      rect.setAttributeNS(null, 'mask', 'url(#' + current.maskId +')');
	      this.defs.appendChild(mask);
	      this.tgrp.appendChild(rect);

	      this.paintInlineImageXObject(imgData, mask);
	    },

	    paintFormXObjectBegin:
	        function SVGGraphics_paintFormXObjectBegin(matrix, bbox) {
	      this.save();

	      if (isArray(matrix) && matrix.length === 6) {
	        this.transform(matrix[0], matrix[1], matrix[2],
	                       matrix[3], matrix[4], matrix[5]);
	      }

	      if (isArray(bbox) && bbox.length === 4) {
	        var width = bbox[2] - bbox[0];
	        var height = bbox[3] - bbox[1];

	        var cliprect = document.createElementNS(NS, 'svg:rect');
	        cliprect.setAttributeNS(null, 'x', bbox[0]);
	        cliprect.setAttributeNS(null, 'y', bbox[1]);
	        cliprect.setAttributeNS(null, 'width', pf(width));
	        cliprect.setAttributeNS(null, 'height', pf(height));
	        this.current.element = cliprect;
	        this.clip('nonzero');
	        this.endPath();
	      }
	    },

	    paintFormXObjectEnd:
	        function SVGGraphics_paintFormXObjectEnd() {
	      this.restore();
	    }
	  };
	  return SVGGraphics;
	})();

	exports.SVGGraphics = SVGGraphics;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayAnnotationLayer = {}), root.pdfjsSharedUtil,
	      root.pdfjsDisplayDOMUtils);
	  }
	}(this, function (exports, sharedUtil, displayDOMUtils) {

	var AnnotationBorderStyleType = sharedUtil.AnnotationBorderStyleType;
	var AnnotationType = sharedUtil.AnnotationType;
	var Util = sharedUtil.Util;
	var addLinkAttributes = displayDOMUtils.addLinkAttributes;
	var LinkTarget = displayDOMUtils.LinkTarget;
	var getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
	var warn = sharedUtil.warn;
	var CustomStyle = displayDOMUtils.CustomStyle;
	var getDefaultSetting = displayDOMUtils.getDefaultSetting;

	/**
	 * @typedef {Object} AnnotationElementParameters
	 * @property {Object} data
	 * @property {HTMLDivElement} layer
	 * @property {PDFPage} page
	 * @property {PageViewport} viewport
	 * @property {IPDFLinkService} linkService
	 * @property {DownloadManager} downloadManager
	 * @property {string} imageResourcesPath
	 * @property {boolean} renderInteractiveForms
	 */

	/**
	 * @class
	 * @alias AnnotationElementFactory
	 */
	function AnnotationElementFactory() {}
	AnnotationElementFactory.prototype =
	    /** @lends AnnotationElementFactory.prototype */ {
	  /**
	   * @param {AnnotationElementParameters} parameters
	   * @returns {AnnotationElement}
	   */
	  create: function AnnotationElementFactory_create(parameters) {
	    var subtype = parameters.data.annotationType;

	    switch (subtype) {
	      case AnnotationType.LINK:
	        return new LinkAnnotationElement(parameters);

	      case AnnotationType.TEXT:
	        return new TextAnnotationElement(parameters);

	      case AnnotationType.WIDGET:
	        var fieldType = parameters.data.fieldType;

	        switch (fieldType) {
	          case 'Tx':
	            return new TextWidgetAnnotationElement(parameters);
	          case 'Ch':
	            return new ChoiceWidgetAnnotationElement(parameters);
	        }
	        return new WidgetAnnotationElement(parameters);

	      case AnnotationType.POPUP:
	        return new PopupAnnotationElement(parameters);

	      case AnnotationType.HIGHLIGHT:
	        return new HighlightAnnotationElement(parameters);

	      case AnnotationType.UNDERLINE:
	        return new UnderlineAnnotationElement(parameters);

	      case AnnotationType.SQUIGGLY:
	        return new SquigglyAnnotationElement(parameters);

	      case AnnotationType.STRIKEOUT:
	        return new StrikeOutAnnotationElement(parameters);

	      case AnnotationType.FILEATTACHMENT:
	        return new FileAttachmentAnnotationElement(parameters);

	      default:
	        return new AnnotationElement(parameters);
	    }
	  }
	};

	/**
	 * @class
	 * @alias AnnotationElement
	 */
	var AnnotationElement = (function AnnotationElementClosure() {
	  function AnnotationElement(parameters, isRenderable) {
	    this.isRenderable = isRenderable || false;
	    this.data = parameters.data;
	    this.layer = parameters.layer;
	    this.page = parameters.page;
	    this.viewport = parameters.viewport;
	    this.linkService = parameters.linkService;
	    this.downloadManager = parameters.downloadManager;
	    this.imageResourcesPath = parameters.imageResourcesPath;
	    this.renderInteractiveForms = parameters.renderInteractiveForms;

	    if (isRenderable) {
	      this.container = this._createContainer();
	    }
	  }

	  AnnotationElement.prototype = /** @lends AnnotationElement.prototype */ {
	    /**
	     * Create an empty container for the annotation's HTML element.
	     *
	     * @private
	     * @memberof AnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    _createContainer: function AnnotationElement_createContainer() {
	      var data = this.data, page = this.page, viewport = this.viewport;
	      var container = document.createElement('section');
	      var width = data.rect[2] - data.rect[0];
	      var height = data.rect[3] - data.rect[1];

	      container.setAttribute('data-annotation-id', data.id);

	      // Do *not* modify `data.rect`, since that will corrupt the annotation
	      // position on subsequent calls to `_createContainer` (see issue 6804).
	      var rect = Util.normalizeRect([
	        data.rect[0],
	        page.view[3] - data.rect[1] + page.view[1],
	        data.rect[2],
	        page.view[3] - data.rect[3] + page.view[1]
	      ]);

	      CustomStyle.setProp('transform', container,
	                          'matrix(' + viewport.transform.join(',') + ')');
	      CustomStyle.setProp('transformOrigin', container,
	                          -rect[0] + 'px ' + -rect[1] + 'px');

	      if (data.borderStyle.width > 0) {
	        container.style.borderWidth = data.borderStyle.width + 'px';
	        if (data.borderStyle.style !== AnnotationBorderStyleType.UNDERLINE) {
	          // Underline styles only have a bottom border, so we do not need
	          // to adjust for all borders. This yields a similar result as
	          // Adobe Acrobat/Reader.
	          width = width - 2 * data.borderStyle.width;
	          height = height - 2 * data.borderStyle.width;
	        }

	        var horizontalRadius = data.borderStyle.horizontalCornerRadius;
	        var verticalRadius = data.borderStyle.verticalCornerRadius;
	        if (horizontalRadius > 0 || verticalRadius > 0) {
	          var radius = horizontalRadius + 'px / ' + verticalRadius + 'px';
	          CustomStyle.setProp('borderRadius', container, radius);
	        }

	        switch (data.borderStyle.style) {
	          case AnnotationBorderStyleType.SOLID:
	            container.style.borderStyle = 'solid';
	            break;

	          case AnnotationBorderStyleType.DASHED:
	            container.style.borderStyle = 'dashed';
	            break;

	          case AnnotationBorderStyleType.BEVELED:
	            warn('Unimplemented border style: beveled');
	            break;

	          case AnnotationBorderStyleType.INSET:
	            warn('Unimplemented border style: inset');
	            break;

	          case AnnotationBorderStyleType.UNDERLINE:
	            container.style.borderBottomStyle = 'solid';
	            break;

	          default:
	            break;
	        }

	        if (data.color) {
	          container.style.borderColor =
	            Util.makeCssRgb(data.color[0] | 0,
	                            data.color[1] | 0,
	                            data.color[2] | 0);
	        } else {
	          // Transparent (invisible) border, so do not draw it at all.
	          container.style.borderWidth = 0;
	        }
	      }

	      container.style.left = rect[0] + 'px';
	      container.style.top = rect[1] + 'px';

	      container.style.width = width + 'px';
	      container.style.height = height + 'px';

	      return container;
	    },

	    /**
	     * Create a popup for the annotation's HTML element. This is used for
	     * annotations that do not have a Popup entry in the dictionary, but
	     * are of a type that works with popups (such as Highlight annotations).
	     *
	     * @private
	     * @param {HTMLSectionElement} container
	     * @param {HTMLDivElement|HTMLImageElement|null} trigger
	     * @param {Object} data
	     * @memberof AnnotationElement
	     */
	    _createPopup:
	        function AnnotationElement_createPopup(container, trigger, data) {
	      // If no trigger element is specified, create it.
	      if (!trigger) {
	        trigger = document.createElement('div');
	        trigger.style.height = container.style.height;
	        trigger.style.width = container.style.width;
	        container.appendChild(trigger);
	      }

	      var popupElement = new PopupElement({
	        container: container,
	        trigger: trigger,
	        color: data.color,
	        title: data.title,
	        contents: data.contents,
	        hideWrapper: true
	      });
	      var popup = popupElement.render();

	      // Position the popup next to the annotation's container.
	      popup.style.left = container.style.width;

	      container.appendChild(popup);
	    },

	    /**
	     * Render the annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof AnnotationElement
	     */
	    render: function AnnotationElement_render() {
	      throw new Error('Abstract method AnnotationElement.render called');
	    }
	  };

	  return AnnotationElement;
	})();

	/**
	 * @class
	 * @alias LinkAnnotationElement
	 */
	var LinkAnnotationElement = (function LinkAnnotationElementClosure() {
	  function LinkAnnotationElement(parameters) {
	    AnnotationElement.call(this, parameters, true);
	  }

	  Util.inherit(LinkAnnotationElement, AnnotationElement, {
	    /**
	     * Render the link annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof LinkAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function LinkAnnotationElement_render() {
	      this.container.className = 'linkAnnotation';

	      var link = document.createElement('a');
	      addLinkAttributes(link, {
	        url: this.data.url,
	        target: (this.data.newWindow ? LinkTarget.BLANK : undefined),
	      });

	      if (!this.data.url) {
	        if (this.data.action) {
	          this._bindNamedAction(link, this.data.action);
	        } else {
	          this._bindLink(link, (this.data.dest || null));
	        }
	      }

	      this.container.appendChild(link);
	      return this.container;
	    },

	    /**
	     * Bind internal links to the link element.
	     *
	     * @private
	     * @param {Object} link
	     * @param {Object} destination
	     * @memberof LinkAnnotationElement
	     */
	    _bindLink: function LinkAnnotationElement_bindLink(link, destination) {
	      var self = this;

	      link.href = this.linkService.getDestinationHash(destination);
	      link.onclick = function() {
	        if (destination) {
	          self.linkService.navigateTo(destination);
	        }
	        return false;
	      };
	      if (destination) {
	        link.className = 'internalLink';
	      }
	    },

	    /**
	     * Bind named actions to the link element.
	     *
	     * @private
	     * @param {Object} link
	     * @param {Object} action
	     * @memberof LinkAnnotationElement
	     */
	    _bindNamedAction:
	        function LinkAnnotationElement_bindNamedAction(link, action) {
	      var self = this;

	      link.href = this.linkService.getAnchorUrl('');
	      link.onclick = function() {
	        self.linkService.executeNamedAction(action);
	        return false;
	      };
	      link.className = 'internalLink';
	    }
	  });

	  return LinkAnnotationElement;
	})();

	/**
	 * @class
	 * @alias TextAnnotationElement
	 */
	var TextAnnotationElement = (function TextAnnotationElementClosure() {
	  function TextAnnotationElement(parameters) {
	    var isRenderable = !!(parameters.data.hasPopup ||
	                          parameters.data.title || parameters.data.contents);
	    AnnotationElement.call(this, parameters, isRenderable);
	  }

	  Util.inherit(TextAnnotationElement, AnnotationElement, {
	    /**
	     * Render the text annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof TextAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function TextAnnotationElement_render() {
	      this.container.className = 'textAnnotation';

	      var image = document.createElement('img');
	      image.style.height = this.container.style.height;
	      image.style.width = this.container.style.width;
	      image.src = this.imageResourcesPath + 'annotation-' +
	        this.data.name.toLowerCase() + '.svg';
	      image.alt = '[{{type}} Annotation]';
	      image.dataset.l10nId = 'text_annotation_type';
	      image.dataset.l10nArgs = JSON.stringify({type: this.data.name});

	      if (!this.data.hasPopup) {
	        this._createPopup(this.container, image, this.data);
	      }

	      this.container.appendChild(image);
	      return this.container;
	    }
	  });

	  return TextAnnotationElement;
	})();

	/**
	 * @class
	 * @alias WidgetAnnotationElement
	 */
	var WidgetAnnotationElement = (function WidgetAnnotationElementClosure() {
	  function WidgetAnnotationElement(parameters, isRenderable) {
	    AnnotationElement.call(this, parameters, isRenderable);
	  }

	  Util.inherit(WidgetAnnotationElement, AnnotationElement, {
	    /**
	     * Render the widget annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof WidgetAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function WidgetAnnotationElement_render() {
	      // Show only the container for unsupported field types.
	      return this.container;
	    }
	  });

	  return WidgetAnnotationElement;
	})();

	/**
	 * @class
	 * @alias TextWidgetAnnotationElement
	 */
	var TextWidgetAnnotationElement = (
	    function TextWidgetAnnotationElementClosure() {
	  var TEXT_ALIGNMENT = ['left', 'center', 'right'];

	  function TextWidgetAnnotationElement(parameters) {
	    var isRenderable = parameters.renderInteractiveForms ||
	      (!parameters.data.hasAppearance && !!parameters.data.fieldValue);
	    WidgetAnnotationElement.call(this, parameters, isRenderable);
	  }

	  Util.inherit(TextWidgetAnnotationElement, WidgetAnnotationElement, {
	    /**
	     * Render the text widget annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof TextWidgetAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function TextWidgetAnnotationElement_render() {
	      this.container.className = 'textWidgetAnnotation';

	      var element = null;
	      if (this.renderInteractiveForms) {
	        // NOTE: We cannot set the values using `element.value` below, since it
	        //       prevents the AnnotationLayer rasterizer in `test/driver.js`
	        //       from parsing the elements correctly for the reference tests.
	        if (this.data.multiLine) {
	          element = document.createElement('textarea');
	          element.textContent = this.data.fieldValue;
	        } else {
	          element = document.createElement('input');
	          element.type = 'text';
	          element.setAttribute('value', this.data.fieldValue);
	        }

	        element.disabled = this.data.readOnly;

	        if (this.data.maxLen !== null) {
	          element.maxLength = this.data.maxLen;
	        }

	        if (this.data.comb) {
	          var fieldWidth = this.data.rect[2] - this.data.rect[0];
	          var combWidth = fieldWidth / this.data.maxLen;

	          element.classList.add('comb');
	          element.style.letterSpacing = 'calc(' + combWidth + 'px - 1ch)';
	        }
	      } else {
	        element = document.createElement('div');
	        element.textContent = this.data.fieldValue;
	        element.style.verticalAlign = 'middle';
	        element.style.display = 'table-cell';

	        var font = null;
	        if (this.data.fontRefName) {
	          font = this.page.commonObjs.getData(this.data.fontRefName);
	        }
	        this._setTextStyle(element, font);
	      }

	      if (this.data.textAlignment !== null) {
	        element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
	      }

	      this.container.appendChild(element);
	      return this.container;
	    },

	    /**
	     * Apply text styles to the text in the element.
	     *
	     * @private
	     * @param {HTMLDivElement} element
	     * @param {Object} font
	     * @memberof TextWidgetAnnotationElement
	     */
	    _setTextStyle:
	        function TextWidgetAnnotationElement_setTextStyle(element, font) {
	      // TODO: This duplicates some of the logic in CanvasGraphics.setFont().
	      var style = element.style;
	      style.fontSize = this.data.fontSize + 'px';
	      style.direction = (this.data.fontDirection < 0 ? 'rtl': 'ltr');

	      if (!font) {
	        return;
	      }

	      style.fontWeight = (font.black ?
	        (font.bold ? '900' : 'bold') :
	        (font.bold ? 'bold' : 'normal'));
	      style.fontStyle = (font.italic ? 'italic' : 'normal');

	      // Use a reasonable default font if the font doesn't specify a fallback.
	      var fontFamily = font.loadedName ? '"' + font.loadedName + '", ' : '';
	      var fallbackName = font.fallbackName || 'Helvetica, sans-serif';
	      style.fontFamily = fontFamily + fallbackName;
	    }
	  });

	  return TextWidgetAnnotationElement;
	})();

	/**
	 * @class
	 * @alias ChoiceWidgetAnnotationElement
	 */
	var ChoiceWidgetAnnotationElement = (
	    function ChoiceWidgetAnnotationElementClosure() {
	  function ChoiceWidgetAnnotationElement(parameters) {
	    WidgetAnnotationElement.call(this, parameters,
	                                 parameters.renderInteractiveForms);
	  }

	  Util.inherit(ChoiceWidgetAnnotationElement, WidgetAnnotationElement, {
	    /**
	     * Render the choice widget annotation's HTML element in the empty
	     * container.
	     *
	     * @public
	     * @memberof ChoiceWidgetAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function ChoiceWidgetAnnotationElement_render() {
	      this.container.className = 'choiceWidgetAnnotation';

	      var selectElement = document.createElement('select');
	      selectElement.disabled = this.data.readOnly;

	      if (!this.data.combo) {
	        // List boxes have a size and (optionally) multiple selection.
	        selectElement.size = this.data.options.length;

	        if (this.data.multiSelect) {
	          selectElement.multiple = true;
	        }
	      }

	      // Insert the options into the choice field.
	      for (var i = 0, ii = this.data.options.length; i < ii; i++) {
	        var option = this.data.options[i];

	        var optionElement = document.createElement('option');
	        optionElement.textContent = option.displayValue;
	        optionElement.value = option.exportValue;

	        if (this.data.fieldValue.indexOf(option.displayValue) >= 0) {
	          optionElement.setAttribute('selected', true);
	        }

	        selectElement.appendChild(optionElement);
	      }

	      this.container.appendChild(selectElement);
	      return this.container;
	    }
	  });

	  return ChoiceWidgetAnnotationElement;
	})();

	/**
	 * @class
	 * @alias PopupAnnotationElement
	 */
	var PopupAnnotationElement = (function PopupAnnotationElementClosure() {
	  function PopupAnnotationElement(parameters) {
	    var isRenderable = !!(parameters.data.title || parameters.data.contents);
	    AnnotationElement.call(this, parameters, isRenderable);
	  }

	  Util.inherit(PopupAnnotationElement, AnnotationElement, {
	    /**
	     * Render the popup annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof PopupAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function PopupAnnotationElement_render() {
	      this.container.className = 'popupAnnotation';

	      var selector = '[data-annotation-id="' + this.data.parentId + '"]';
	      var parentElement = this.layer.querySelector(selector);
	      if (!parentElement) {
	        return this.container;
	      }

	      var popup = new PopupElement({
	        container: this.container,
	        trigger: parentElement,
	        color: this.data.color,
	        title: this.data.title,
	        contents: this.data.contents
	      });

	      // Position the popup next to the parent annotation's container.
	      // PDF viewers ignore a popup annotation's rectangle.
	      var parentLeft = parseFloat(parentElement.style.left);
	      var parentWidth = parseFloat(parentElement.style.width);
	      CustomStyle.setProp('transformOrigin', this.container,
	                          -(parentLeft + parentWidth) + 'px -' +
	                          parentElement.style.top);
	      this.container.style.left = (parentLeft + parentWidth) + 'px';

	      this.container.appendChild(popup.render());
	      return this.container;
	    }
	  });

	  return PopupAnnotationElement;
	})();

	/**
	 * @class
	 * @alias PopupElement
	 */
	var PopupElement = (function PopupElementClosure() {
	  var BACKGROUND_ENLIGHT = 0.7;

	  function PopupElement(parameters) {
	    this.container = parameters.container;
	    this.trigger = parameters.trigger;
	    this.color = parameters.color;
	    this.title = parameters.title;
	    this.contents = parameters.contents;
	    this.hideWrapper = parameters.hideWrapper || false;

	    this.pinned = false;
	  }

	  PopupElement.prototype = /** @lends PopupElement.prototype */ {
	    /**
	     * Render the popup's HTML element.
	     *
	     * @public
	     * @memberof PopupElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function PopupElement_render() {
	      var wrapper = document.createElement('div');
	      wrapper.className = 'popupWrapper';

	      // For Popup annotations we hide the entire section because it contains
	      // only the popup. However, for Text annotations without a separate Popup
	      // annotation, we cannot hide the entire container as the image would
	      // disappear too. In that special case, hiding the wrapper suffices.
	      this.hideElement = (this.hideWrapper ? wrapper : this.container);
	      this.hideElement.setAttribute('hidden', true);

	      var popup = document.createElement('div');
	      popup.className = 'popup';

	      var color = this.color;
	      if (color) {
	        // Enlighten the color.
	        var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
	        var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
	        var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
	        popup.style.backgroundColor = Util.makeCssRgb(r | 0, g | 0, b | 0);
	      }

	      var contents = this._formatContents(this.contents);
	      var title = document.createElement('h1');
	      title.textContent = this.title;

	      // Attach the event listeners to the trigger element.
	      this.trigger.addEventListener('click', this._toggle.bind(this));
	      this.trigger.addEventListener('mouseover', this._show.bind(this, false));
	      this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
	      popup.addEventListener('click', this._hide.bind(this, true));

	      popup.appendChild(title);
	      popup.appendChild(contents);
	      wrapper.appendChild(popup);
	      return wrapper;
	    },

	    /**
	     * Format the contents of the popup by adding newlines where necessary.
	     *
	     * @private
	     * @param {string} contents
	     * @memberof PopupElement
	     * @returns {HTMLParagraphElement}
	     */
	    _formatContents: function PopupElement_formatContents(contents) {
	      var p = document.createElement('p');
	      var lines = contents.split(/(?:\r\n?|\n)/);
	      for (var i = 0, ii = lines.length; i < ii; ++i) {
	        var line = lines[i];
	        p.appendChild(document.createTextNode(line));
	        if (i < (ii - 1)) {
	          p.appendChild(document.createElement('br'));
	        }
	      }
	      return p;
	    },

	    /**
	     * Toggle the visibility of the popup.
	     *
	     * @private
	     * @memberof PopupElement
	     */
	    _toggle: function PopupElement_toggle() {
	      if (this.pinned) {
	        this._hide(true);
	      } else {
	        this._show(true);
	      }
	    },

	    /**
	     * Show the popup.
	     *
	     * @private
	     * @param {boolean} pin
	     * @memberof PopupElement
	     */
	    _show: function PopupElement_show(pin) {
	      if (pin) {
	        this.pinned = true;
	      }
	      if (this.hideElement.hasAttribute('hidden')) {
	        this.hideElement.removeAttribute('hidden');
	        this.container.style.zIndex += 1;
	      }
	    },

	    /**
	     * Hide the popup.
	     *
	     * @private
	     * @param {boolean} unpin
	     * @memberof PopupElement
	     */
	    _hide: function PopupElement_hide(unpin) {
	      if (unpin) {
	        this.pinned = false;
	      }
	      if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
	        this.hideElement.setAttribute('hidden', true);
	        this.container.style.zIndex -= 1;
	      }
	    }
	  };

	  return PopupElement;
	})();

	/**
	 * @class
	 * @alias HighlightAnnotationElement
	 */
	var HighlightAnnotationElement = (
	    function HighlightAnnotationElementClosure() {
	  function HighlightAnnotationElement(parameters) {
	    var isRenderable = !!(parameters.data.hasPopup ||
	                          parameters.data.title || parameters.data.contents);
	    AnnotationElement.call(this, parameters, isRenderable);
	  }

	  Util.inherit(HighlightAnnotationElement, AnnotationElement, {
	    /**
	     * Render the highlight annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof HighlightAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function HighlightAnnotationElement_render() {
	      this.container.className = 'highlightAnnotation';

	      if (!this.data.hasPopup) {
	        this._createPopup(this.container, null, this.data);
	      }

	      return this.container;
	    }
	  });

	  return HighlightAnnotationElement;
	})();

	/**
	 * @class
	 * @alias UnderlineAnnotationElement
	 */
	var UnderlineAnnotationElement = (
	    function UnderlineAnnotationElementClosure() {
	  function UnderlineAnnotationElement(parameters) {
	    var isRenderable = !!(parameters.data.hasPopup ||
	                          parameters.data.title || parameters.data.contents);
	    AnnotationElement.call(this, parameters, isRenderable);
	  }

	  Util.inherit(UnderlineAnnotationElement, AnnotationElement, {
	    /**
	     * Render the underline annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof UnderlineAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function UnderlineAnnotationElement_render() {
	      this.container.className = 'underlineAnnotation';

	      if (!this.data.hasPopup) {
	        this._createPopup(this.container, null, this.data);
	      }

	      return this.container;
	    }
	  });

	  return UnderlineAnnotationElement;
	})();

	/**
	 * @class
	 * @alias SquigglyAnnotationElement
	 */
	var SquigglyAnnotationElement = (function SquigglyAnnotationElementClosure() {
	  function SquigglyAnnotationElement(parameters) {
	    var isRenderable = !!(parameters.data.hasPopup ||
	                          parameters.data.title || parameters.data.contents);
	    AnnotationElement.call(this, parameters, isRenderable);
	  }

	  Util.inherit(SquigglyAnnotationElement, AnnotationElement, {
	    /**
	     * Render the squiggly annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof SquigglyAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function SquigglyAnnotationElement_render() {
	      this.container.className = 'squigglyAnnotation';

	      if (!this.data.hasPopup) {
	        this._createPopup(this.container, null, this.data);
	      }

	      return this.container;
	    }
	  });

	  return SquigglyAnnotationElement;
	})();

	/**
	 * @class
	 * @alias StrikeOutAnnotationElement
	 */
	var StrikeOutAnnotationElement = (
	    function StrikeOutAnnotationElementClosure() {
	  function StrikeOutAnnotationElement(parameters) {
	    var isRenderable = !!(parameters.data.hasPopup ||
	                          parameters.data.title || parameters.data.contents);
	    AnnotationElement.call(this, parameters, isRenderable);
	  }

	  Util.inherit(StrikeOutAnnotationElement, AnnotationElement, {
	    /**
	     * Render the strikeout annotation's HTML element in the empty container.
	     *
	     * @public
	     * @memberof StrikeOutAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function StrikeOutAnnotationElement_render() {
	      this.container.className = 'strikeoutAnnotation';

	      if (!this.data.hasPopup) {
	        this._createPopup(this.container, null, this.data);
	      }

	      return this.container;
	    }
	  });

	  return StrikeOutAnnotationElement;
	})();

	/**
	 * @class
	 * @alias FileAttachmentAnnotationElement
	 */
	var FileAttachmentAnnotationElement = (
	    function FileAttachmentAnnotationElementClosure() {
	  function FileAttachmentAnnotationElement(parameters) {
	    AnnotationElement.call(this, parameters, true);

	    this.filename = getFilenameFromUrl(parameters.data.file.filename);
	    this.content = parameters.data.file.content;
	  }

	  Util.inherit(FileAttachmentAnnotationElement, AnnotationElement, {
	    /**
	     * Render the file attachment annotation's HTML element in the empty
	     * container.
	     *
	     * @public
	     * @memberof FileAttachmentAnnotationElement
	     * @returns {HTMLSectionElement}
	     */
	    render: function FileAttachmentAnnotationElement_render() {
	      this.container.className = 'fileAttachmentAnnotation';

	      var trigger = document.createElement('div');
	      trigger.style.height = this.container.style.height;
	      trigger.style.width = this.container.style.width;
	      trigger.addEventListener('dblclick', this._download.bind(this));

	      if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
	        this._createPopup(this.container, trigger, this.data);
	      }

	      this.container.appendChild(trigger);
	      return this.container;
	    },

	    /**
	     * Download the file attachment associated with this annotation.
	     *
	     * @private
	     * @memberof FileAttachmentAnnotationElement
	     */
	    _download: function FileAttachmentAnnotationElement_download() {
	      if (!this.downloadManager) {
	        warn('Download cannot be started due to unavailable download manager');
	        return;
	      }
	      this.downloadManager.downloadData(this.content, this.filename, '');
	    }
	  });

	  return FileAttachmentAnnotationElement;
	})();

	/**
	 * @typedef {Object} AnnotationLayerParameters
	 * @property {PageViewport} viewport
	 * @property {HTMLDivElement} div
	 * @property {Array} annotations
	 * @property {PDFPage} page
	 * @property {IPDFLinkService} linkService
	 * @property {string} imageResourcesPath
	 * @property {boolean} renderInteractiveForms
	 */

	/**
	 * @class
	 * @alias AnnotationLayer
	 */
	var AnnotationLayer = (function AnnotationLayerClosure() {
	  return {
	    /**
	     * Render a new annotation layer with all annotation elements.
	     *
	     * @public
	     * @param {AnnotationLayerParameters} parameters
	     * @memberof AnnotationLayer
	     */
	    render: function AnnotationLayer_render(parameters) {
	      var annotationElementFactory = new AnnotationElementFactory();

	      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
	        var data = parameters.annotations[i];
	        if (!data) {
	          continue;
	        }

	        var properties = {
	          data: data,
	          layer: parameters.div,
	          page: parameters.page,
	          viewport: parameters.viewport,
	          linkService: parameters.linkService,
	          downloadManager: parameters.downloadManager,
	          imageResourcesPath: parameters.imageResourcesPath ||
	                              getDefaultSetting('imageResourcesPath'),
	          renderInteractiveForms: parameters.renderInteractiveForms || false,
	        };
	        var element = annotationElementFactory.create(properties);
	        if (element.isRenderable) {
	          parameters.div.appendChild(element.render());
	        }
	      }
	    },

	    /**
	     * Update the annotation elements on existing annotation layer.
	     *
	     * @public
	     * @param {AnnotationLayerParameters} parameters
	     * @memberof AnnotationLayer
	     */
	    update: function AnnotationLayer_update(parameters) {
	      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
	        var data = parameters.annotations[i];
	        var element = parameters.div.querySelector(
	          '[data-annotation-id="' + data.id + '"]');
	        if (element) {
	          CustomStyle.setProp('transform', element,
	            'matrix(' + parameters.viewport.transform.join(',') + ')');
	        }
	      }
	      parameters.div.removeAttribute('hidden');
	    }
	  };
	})();

	exports.AnnotationLayer = AnnotationLayer;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayTextLayer = {}), root.pdfjsSharedUtil,
	      root.pdfjsDisplayDOMUtils);
	  }
	}(this, function (exports, sharedUtil, displayDOMUtils) {

	var Util = sharedUtil.Util;
	var createPromiseCapability = sharedUtil.createPromiseCapability;
	var CustomStyle = displayDOMUtils.CustomStyle;
	var getDefaultSetting = displayDOMUtils.getDefaultSetting;

	/**
	 * Text layer render parameters.
	 *
	 * @typedef {Object} TextLayerRenderParameters
	 * @property {TextContent} textContent - Text content to render (the object is
	 *   returned by the page's getTextContent() method).
	 * @property {HTMLElement} container - HTML element that will contain text runs.
	 * @property {PageViewport} viewport - The target viewport to properly
	 *   layout the text runs.
	 * @property {Array} textDivs - (optional) HTML elements that are correspond
	 *   the text items of the textContent input. This is output and shall be
	 *   initially be set to empty array.
	 * @property {number} timeout - (optional) Delay in milliseconds before
	 *   rendering of the text  runs occurs.
	 * @property {boolean} enhanceTextSelection - (optional) Whether to turn on the
	 *   text selection enhancement.
	 */
	var renderTextLayer = (function renderTextLayerClosure() {
	  var MAX_TEXT_DIVS_TO_RENDER = 100000;

	  var NonWhitespaceRegexp = /\S/;

	  function isAllWhitespace(str) {
	    return !NonWhitespaceRegexp.test(str);
	  }

	  // Text layers may contain many thousand div's, and using `styleBuf` avoids
	  // creating many intermediate strings when building their 'style' properties.
	  var styleBuf = ['left: ', 0, 'px; top: ', 0, 'px; font-size: ', 0,
	                  'px; font-family: ', '', ';'];

	  function appendText(task, geom, styles) {
	    // Initialize all used properties to keep the caches monomorphic.
	    var textDiv = document.createElement('div');
	    var textDivProperties = {
	      style: null,
	      angle: 0,
	      canvasWidth: 0,
	      isWhitespace: false,
	      originalTransform: null,
	      paddingBottom: 0,
	      paddingLeft: 0,
	      paddingRight: 0,
	      paddingTop: 0,
	      scale: 1,
	    };

	    task._textDivs.push(textDiv);
	    if (isAllWhitespace(geom.str)) {
	      textDivProperties.isWhitespace = true;
	      task._textDivProperties.set(textDiv, textDivProperties);
	      return;
	    }

	    var tx = Util.transform(task._viewport.transform, geom.transform);
	    var angle = Math.atan2(tx[1], tx[0]);
	    var style = styles[geom.fontName];
	    if (style.vertical) {
	      angle += Math.PI / 2;
	    }
	    var fontHeight = Math.sqrt((tx[2] * tx[2]) + (tx[3] * tx[3]));
	    var fontAscent = fontHeight;
	    if (style.ascent) {
	      fontAscent = style.ascent * fontAscent;
	    } else if (style.descent) {
	      fontAscent = (1 + style.descent) * fontAscent;
	    }

	    var left;
	    var top;
	    if (angle === 0) {
	      left = tx[4];
	      top = tx[5] - fontAscent;
	    } else {
	      left = tx[4] + (fontAscent * Math.sin(angle));
	      top = tx[5] - (fontAscent * Math.cos(angle));
	    }
	    styleBuf[1] = left;
	    styleBuf[3] = top;
	    styleBuf[5] = fontHeight;
	    styleBuf[7] = style.fontFamily;
	    textDivProperties.style = styleBuf.join('');
	    textDiv.setAttribute('style', textDivProperties.style);

	    textDiv.textContent = geom.str;
	    // |fontName| is only used by the Font Inspector. This test will succeed
	    // when e.g. the Font Inspector is off but the Stepper is on, but it's
	    // not worth the effort to do a more accurate test. We only use `dataset`
	    // here to make the font name available for the debugger.
	    if (getDefaultSetting('pdfBug')) {
	      textDiv.dataset.fontName = geom.fontName;
	    }
	    if (angle !== 0) {
	      textDivProperties.angle = angle * (180 / Math.PI);
	    }
	    // We don't bother scaling single-char text divs, because it has very
	    // little effect on text highlighting. This makes scrolling on docs with
	    // lots of such divs a lot faster.
	    if (geom.str.length > 1) {
	      if (style.vertical) {
	        textDivProperties.canvasWidth = geom.height * task._viewport.scale;
	      } else {
	        textDivProperties.canvasWidth = geom.width * task._viewport.scale;
	      }
	    }
	    task._textDivProperties.set(textDiv, textDivProperties);

	    if (task._enhanceTextSelection) {
	      var angleCos = 1, angleSin = 0;
	      if (angle !== 0) {
	        angleCos = Math.cos(angle);
	        angleSin = Math.sin(angle);
	      }
	      var divWidth = (style.vertical ? geom.height : geom.width) *
	                     task._viewport.scale;
	      var divHeight = fontHeight;

	      var m, b;
	      if (angle !== 0) {
	        m = [angleCos, angleSin, -angleSin, angleCos, left, top];
	        b = Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
	      } else {
	        b = [left, top, left + divWidth, top + divHeight];
	      }

	      task._bounds.push({
	        left: b[0],
	        top: b[1],
	        right: b[2],
	        bottom: b[3],
	        div: textDiv,
	        size: [divWidth, divHeight],
	        m: m
	      });
	    }
	  }

	  function render(task) {
	    if (task._canceled) {
	      return;
	    }
	    var textLayerFrag = task._container;
	    var textDivs = task._textDivs;
	    var capability = task._capability;
	    var textDivsLength = textDivs.length;

	    // No point in rendering many divs as it would make the browser
	    // unusable even after the divs are rendered.
	    if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
	      task._renderingDone = true;
	      capability.resolve();
	      return;
	    }

	    var canvas = document.createElement('canvas');
	    canvas.mozOpaque = true;
	    var ctx = canvas.getContext('2d', {alpha: false});

	    var lastFontSize;
	    var lastFontFamily;
	    for (var i = 0; i < textDivsLength; i++) {
	      var textDiv = textDivs[i];
	      var textDivProperties = task._textDivProperties.get(textDiv);
	      if (textDivProperties.isWhitespace) {
	        continue;
	      }

	      var fontSize = textDiv.style.fontSize;
	      var fontFamily = textDiv.style.fontFamily;

	      // Only build font string and set to context if different from last.
	      if (fontSize !== lastFontSize || fontFamily !== lastFontFamily) {
	        ctx.font = fontSize + ' ' + fontFamily;
	        lastFontSize = fontSize;
	        lastFontFamily = fontFamily;
	      }

	      var width = ctx.measureText(textDiv.textContent).width;
	      textLayerFrag.appendChild(textDiv);

	      var transform = '';
	      if (textDivProperties.canvasWidth !== 0 && width > 0) {
	        textDivProperties.scale = textDivProperties.canvasWidth / width;
	        transform = 'scaleX(' + textDivProperties.scale + ')';
	      }
	      if (textDivProperties.angle !== 0) {
	        transform = 'rotate(' + textDivProperties.angle + 'deg) ' + transform;
	      }
	      if (transform !== '') {
	        textDivProperties.originalTransform = transform;
	        CustomStyle.setProp('transform', textDiv, transform);
	      }
	      task._textDivProperties.set(textDiv, textDivProperties);
	    }
	    task._renderingDone = true;
	    capability.resolve();
	  }

	  function expand(task) {
	    var bounds = task._bounds;
	    var viewport = task._viewport;

	    var expanded = expandBounds(viewport.width, viewport.height, bounds);
	    for (var i = 0; i < expanded.length; i++) {
	      var div = bounds[i].div;
	      var divProperties = task._textDivProperties.get(div);
	      if (divProperties.angle === 0) {
	        divProperties.paddingLeft = bounds[i].left - expanded[i].left;
	        divProperties.paddingTop = bounds[i].top - expanded[i].top;
	        divProperties.paddingRight = expanded[i].right - bounds[i].right;
	        divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
	        task._textDivProperties.set(div, divProperties);
	        continue;
	      }
	      // Box is rotated -- trying to find padding so rotated div will not
	      // exceed its expanded bounds.
	      var e = expanded[i], b = bounds[i];
	      var m = b.m, c = m[0], s = m[1];
	      // Finding intersections with expanded box.
	      var points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
	      var ts = new Float64Array(64);
	      points.forEach(function (p, i) {
	        var t = Util.applyTransform(p, m);
	        ts[i + 0] = c && (e.left - t[0]) / c;
	        ts[i + 4] = s && (e.top - t[1]) / s;
	        ts[i + 8] = c && (e.right - t[0]) / c;
	        ts[i + 12] = s && (e.bottom - t[1]) / s;

	        ts[i + 16] = s && (e.left - t[0]) / -s;
	        ts[i + 20] = c && (e.top - t[1]) / c;
	        ts[i + 24] = s && (e.right - t[0]) / -s;
	        ts[i + 28] = c && (e.bottom - t[1]) / c;

	        ts[i + 32] = c && (e.left - t[0]) / -c;
	        ts[i + 36] = s && (e.top - t[1]) / -s;
	        ts[i + 40] = c && (e.right - t[0]) / -c;
	        ts[i + 44] = s && (e.bottom - t[1]) / -s;

	        ts[i + 48] = s && (e.left - t[0]) / s;
	        ts[i + 52] = c && (e.top - t[1]) / -c;
	        ts[i + 56] = s && (e.right - t[0]) / s;
	        ts[i + 60] = c && (e.bottom - t[1]) / -c;
	      });
	      var findPositiveMin = function (ts, offset, count) {
	        var result = 0;
	        for (var i = 0; i < count; i++) {
	          var t = ts[offset++];
	          if (t > 0) {
	            result = result ? Math.min(t, result) : t;
	          }
	        }
	        return result;
	      };
	      // Not based on math, but to simplify calculations, using cos and sin
	      // absolute values to not exceed the box (it can but insignificantly).
	      var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
	      divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
	      divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
	      divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
	      divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
	      task._textDivProperties.set(div, divProperties);
	    }
	  }

	  function expandBounds(width, height, boxes) {
	    var bounds = boxes.map(function (box, i) {
	      return {
	        x1: box.left,
	        y1: box.top,
	        x2: box.right,
	        y2: box.bottom,
	        index: i,
	        x1New: undefined,
	        x2New: undefined
	      };
	    });
	    expandBoundsLTR(width, bounds);
	    var expanded = new Array(boxes.length);
	    bounds.forEach(function (b) {
	      var i = b.index;
	      expanded[i] = {
	        left: b.x1New,
	        top: 0,
	        right: b.x2New,
	        bottom: 0
	      };
	    });

	    // Rotating on 90 degrees and extending extended boxes. Reusing the bounds
	    // array and objects.
	    boxes.map(function (box, i) {
	      var e = expanded[i], b = bounds[i];
	      b.x1 = box.top;
	      b.y1 = width - e.right;
	      b.x2 = box.bottom;
	      b.y2 = width - e.left;
	      b.index = i;
	      b.x1New = undefined;
	      b.x2New = undefined;
	    });
	    expandBoundsLTR(height, bounds);

	    bounds.forEach(function (b) {
	      var i = b.index;
	      expanded[i].top = b.x1New;
	      expanded[i].bottom = b.x2New;
	    });
	    return expanded;
	  }

	  function expandBoundsLTR(width, bounds) {
	    // Sorting by x1 coordinate and walk by the bounds in the same order.
	    bounds.sort(function (a, b) { return a.x1 - b.x1 || a.index - b.index; });

	    // First we see on the horizon is a fake boundary.
	    var fakeBoundary = {
	      x1: -Infinity,
	      y1: -Infinity,
	      x2: 0,
	      y2: Infinity,
	      index: -1,
	      x1New: 0,
	      x2New: 0
	    };
	    var horizon = [{
	      start: -Infinity,
	      end: Infinity,
	      boundary: fakeBoundary
	    }];

	    bounds.forEach(function (boundary) {
	      // Searching for the affected part of horizon.
	      // TODO red-black tree or simple binary search
	      var i = 0;
	      while (i < horizon.length && horizon[i].end <= boundary.y1) {
	        i++;
	      }
	      var j = horizon.length - 1;
	      while(j >= 0 && horizon[j].start >= boundary.y2) {
	        j--;
	      }

	      var horizonPart, affectedBoundary;
	      var q, k, maxXNew = -Infinity;
	      for (q = i; q <= j; q++) {
	        horizonPart = horizon[q];
	        affectedBoundary = horizonPart.boundary;
	        var xNew;
	        if (affectedBoundary.x2 > boundary.x1) {
	          // In the middle of the previous element, new x shall be at the
	          // boundary start. Extending if further if the affected bondary
	          // placed on top of the current one.
	          xNew = affectedBoundary.index > boundary.index ?
	            affectedBoundary.x1New : boundary.x1;
	        } else if (affectedBoundary.x2New === undefined) {
	          // We have some space in between, new x in middle will be a fair
	          // choice.
	          xNew = (affectedBoundary.x2 + boundary.x1) / 2;
	        } else {
	          // Affected boundary has x2new set, using it as new x.
	          xNew = affectedBoundary.x2New;
	        }
	        if (xNew > maxXNew) {
	          maxXNew = xNew;
	        }
	      }

	      // Set new x1 for current boundary.
	      boundary.x1New = maxXNew;

	      // Adjusts new x2 for the affected boundaries.
	      for (q = i; q <= j; q++) {
	        horizonPart = horizon[q];
	        affectedBoundary = horizonPart.boundary;
	        if (affectedBoundary.x2New === undefined) {
	          // Was not set yet, choosing new x if possible.
	          if (affectedBoundary.x2 > boundary.x1) {
	            // Current and affected boundaries intersect. If affected boundary
	            // is placed on top of the current, shrinking the affected.
	            if (affectedBoundary.index > boundary.index) {
	              affectedBoundary.x2New = affectedBoundary.x2;
	            }
	          } else {
	            affectedBoundary.x2New = maxXNew;
	          }
	        } else if (affectedBoundary.x2New > maxXNew) {
	          // Affected boundary is touching new x, pushing it back.
	          affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
	        }
	      }

	      // Fixing the horizon.
	      var changedHorizon = [], lastBoundary = null;
	      for (q = i; q <= j; q++) {
	        horizonPart = horizon[q];
	        affectedBoundary = horizonPart.boundary;
	        // Checking which boundary will be visible.
	        var useBoundary = affectedBoundary.x2 > boundary.x2 ?
	          affectedBoundary : boundary;
	        if (lastBoundary === useBoundary) {
	          // Merging with previous.
	          changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
	        } else {
	          changedHorizon.push({
	            start: horizonPart.start,
	            end: horizonPart.end,
	            boundary: useBoundary
	          });
	          lastBoundary = useBoundary;
	        }
	      }
	      if (horizon[i].start < boundary.y1) {
	        changedHorizon[0].start = boundary.y1;
	        changedHorizon.unshift({
	          start: horizon[i].start,
	          end: boundary.y1,
	          boundary: horizon[i].boundary
	        });
	      }
	      if (boundary.y2 < horizon[j].end) {
	        changedHorizon[changedHorizon.length - 1].end = boundary.y2;
	        changedHorizon.push({
	          start: boundary.y2,
	          end: horizon[j].end,
	          boundary: horizon[j].boundary
	        });
	      }

	      // Set x2 new of boundary that is no longer visible (see overlapping case
	      // above).
	      // TODO more efficient, e.g. via reference counting.
	      for (q = i; q <= j; q++) {
	        horizonPart = horizon[q];
	        affectedBoundary = horizonPart.boundary;
	        if (affectedBoundary.x2New !== undefined) {
	          continue;
	        }
	        var used = false;
	        for (k = i - 1; !used && k >= 0 &&
	        horizon[k].start >= affectedBoundary.y1; k--) {
	          used = horizon[k].boundary === affectedBoundary;
	        }
	        for (k = j + 1; !used && k < horizon.length &&
	        horizon[k].end <= affectedBoundary.y2; k++) {
	          used = horizon[k].boundary === affectedBoundary;
	        }
	        for (k = 0; !used && k < changedHorizon.length; k++) {
	          used = changedHorizon[k].boundary === affectedBoundary;
	        }
	        if (!used) {
	          affectedBoundary.x2New = maxXNew;
	        }
	      }

	      Array.prototype.splice.apply(horizon,
	        [i, j - i + 1].concat(changedHorizon));
	    });

	    // Set new x2 for all unset boundaries.
	    horizon.forEach(function (horizonPart) {
	      var affectedBoundary = horizonPart.boundary;
	      if (affectedBoundary.x2New === undefined) {
	        affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
	      }
	    });
	  }

	  /**
	   * Text layer rendering task.
	   *
	   * @param {TextContent} textContent
	   * @param {HTMLElement} container
	   * @param {PageViewport} viewport
	   * @param {Array} textDivs
	   * @param {boolean} enhanceTextSelection
	   * @private
	   */
	  function TextLayerRenderTask(textContent, container, viewport, textDivs,
	                               enhanceTextSelection) {
	    this._textContent = textContent;
	    this._container = container;
	    this._viewport = viewport;
	    this._textDivs = textDivs || [];
	    this._textDivProperties = new WeakMap();
	    this._renderingDone = false;
	    this._canceled = false;
	    this._capability = createPromiseCapability();
	    this._renderTimer = null;
	    this._bounds = [];
	    this._enhanceTextSelection = !!enhanceTextSelection;
	  }
	  TextLayerRenderTask.prototype = {
	    get promise() {
	      return this._capability.promise;
	    },

	    cancel: function TextLayer_cancel() {
	      this._canceled = true;
	      if (this._renderTimer !== null) {
	        clearTimeout(this._renderTimer);
	        this._renderTimer = null;
	      }
	      this._capability.reject('canceled');
	    },

	    _render: function TextLayer_render(timeout) {
	      var textItems = this._textContent.items;
	      var textStyles = this._textContent.styles;
	      for (var i = 0, len = textItems.length; i < len; i++) {
	        appendText(this, textItems[i], textStyles);
	      }

	      if (!timeout) { // Render right away
	        render(this);
	      } else { // Schedule
	        var self = this;
	        this._renderTimer = setTimeout(function() {
	          render(self);
	          self._renderTimer = null;
	        }, timeout);
	      }
	    },

	    expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
	      if (!this._enhanceTextSelection || !this._renderingDone) {
	        return;
	      }
	      if (this._bounds !== null) {
	        expand(this);
	        this._bounds = null;
	      }

	      for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
	        var div = this._textDivs[i];
	        var divProperties = this._textDivProperties.get(div);

	        if (divProperties.isWhitespace) {
	          continue;
	        }
	        if (expandDivs) {
	          var transform = '', padding = '';

	          if (divProperties.scale !== 1) {
	            transform = 'scaleX(' + divProperties.scale + ')';
	          }
	          if (divProperties.angle !== 0) {
	            transform = 'rotate(' + divProperties.angle + 'deg) ' + transform;
	          }
	          if (divProperties.paddingLeft !== 0) {
	            padding += ' padding-left: ' +
	              (divProperties.paddingLeft / divProperties.scale) + 'px;';
	            transform += ' translateX(' +
	              (-divProperties.paddingLeft / divProperties.scale) + 'px)';
	          }
	          if (divProperties.paddingTop !== 0) {
	            padding += ' padding-top: ' + divProperties.paddingTop + 'px;';
	            transform += ' translateY(' + (-divProperties.paddingTop) + 'px)';
	          }
	          if (divProperties.paddingRight !== 0) {
	            padding += ' padding-right: ' +
	              (divProperties.paddingRight / divProperties.scale) + 'px;';
	          }
	          if (divProperties.paddingBottom !== 0) {
	            padding += ' padding-bottom: ' +
	              divProperties.paddingBottom + 'px;';
	          }

	          if (padding !== '') {
	            div.setAttribute('style', divProperties.style + padding);
	          }
	          if (transform !== '') {
	            CustomStyle.setProp('transform', div, transform);
	          }
	        } else {
	          div.style.padding = 0;
	          CustomStyle.setProp('transform', div,
	                              divProperties.originalTransform || '');
	        }
	      }
	    },
	  };

	  /**
	   * Starts rendering of the text layer.
	   *
	   * @param {TextLayerRenderParameters} renderParameters
	   * @returns {TextLayerRenderTask}
	   */
	  function renderTextLayer(renderParameters) {
	    var task = new TextLayerRenderTask(renderParameters.textContent,
	                                       renderParameters.container,
	                                       renderParameters.viewport,
	                                       renderParameters.textDivs,
	                                       renderParameters.enhanceTextSelection);
	    task._render(renderParameters.timeout);
	    return task;
	  }

	  return renderTextLayer;
	})();

	exports.renderTextLayer = renderTextLayer;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayWebGL = {}), root.pdfjsSharedUtil,
	      root.pdfjsDisplayDOMUtils);
	  }
	}(this, function (exports, sharedUtil, displayDOMUtils) {

	var shadow = sharedUtil.shadow;
	var getDefaultSetting = displayDOMUtils.getDefaultSetting;

	var WebGLUtils = (function WebGLUtilsClosure() {
	  function loadShader(gl, code, shaderType) {
	    var shader = gl.createShader(shaderType);
	    gl.shaderSource(shader, code);
	    gl.compileShader(shader);
	    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	    if (!compiled) {
	      var errorMsg = gl.getShaderInfoLog(shader);
	      throw new Error('Error during shader compilation: ' + errorMsg);
	    }
	    return shader;
	  }
	  function createVertexShader(gl, code) {
	    return loadShader(gl, code, gl.VERTEX_SHADER);
	  }
	  function createFragmentShader(gl, code) {
	    return loadShader(gl, code, gl.FRAGMENT_SHADER);
	  }
	  function createProgram(gl, shaders) {
	    var program = gl.createProgram();
	    for (var i = 0, ii = shaders.length; i < ii; ++i) {
	      gl.attachShader(program, shaders[i]);
	    }
	    gl.linkProgram(program);
	    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
	    if (!linked) {
	      var errorMsg = gl.getProgramInfoLog(program);
	      throw new Error('Error during program linking: ' + errorMsg);
	    }
	    return program;
	  }
	  function createTexture(gl, image, textureId) {
	    gl.activeTexture(textureId);
	    var texture = gl.createTexture();
	    gl.bindTexture(gl.TEXTURE_2D, texture);

	    // Set the parameters so we can render any size image.
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

	    // Upload the image into the texture.
	    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
	    return texture;
	  }

	  var currentGL, currentCanvas;
	  function generateGL() {
	    if (currentGL) {
	      return;
	    }
	    currentCanvas = document.createElement('canvas');
	    currentGL = currentCanvas.getContext('webgl',
	      { premultipliedalpha: false });
	  }

	  var smaskVertexShaderCode = '\
	  attribute vec2 a_position;                                    \
	  attribute vec2 a_texCoord;                                    \
	                                                                \
	  uniform vec2 u_resolution;                                    \
	                                                                \
	  varying vec2 v_texCoord;                                      \
	                                                                \
	  void main() {                                                 \
	    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
	    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
	                                                                \
	    v_texCoord = a_texCoord;                                    \
	  }                                                             ';

	  var smaskFragmentShaderCode = '\
	  precision mediump float;                                      \
	                                                                \
	  uniform vec4 u_backdrop;                                      \
	  uniform int u_subtype;                                        \
	  uniform sampler2D u_image;                                    \
	  uniform sampler2D u_mask;                                     \
	                                                                \
	  varying vec2 v_texCoord;                                      \
	                                                                \
	  void main() {                                                 \
	    vec4 imageColor = texture2D(u_image, v_texCoord);           \
	    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
	    if (u_backdrop.a > 0.0) {                                   \
	      maskColor.rgb = maskColor.rgb * maskColor.a +             \
	                      u_backdrop.rgb * (1.0 - maskColor.a);     \
	    }                                                           \
	    float lum;                                                  \
	    if (u_subtype == 0) {                                       \
	      lum = maskColor.a;                                        \
	    } else {                                                    \
	      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
	            maskColor.b * 0.11;                                 \
	    }                                                           \
	    imageColor.a *= lum;                                        \
	    imageColor.rgb *= imageColor.a;                             \
	    gl_FragColor = imageColor;                                  \
	  }                                                             ';

	  var smaskCache = null;

	  function initSmaskGL() {
	    var canvas, gl;

	    generateGL();
	    canvas = currentCanvas;
	    currentCanvas = null;
	    gl = currentGL;
	    currentGL = null;

	    // setup a GLSL program
	    var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
	    var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
	    var program = createProgram(gl, [vertexShader, fragmentShader]);
	    gl.useProgram(program);

	    var cache = {};
	    cache.gl = gl;
	    cache.canvas = canvas;
	    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
	    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
	    cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
	    cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');

	    var texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
	    var texLayerLocation = gl.getUniformLocation(program, 'u_image');
	    var texMaskLocation = gl.getUniformLocation(program, 'u_mask');

	    // provide texture coordinates for the rectangle.
	    var texCoordBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
	    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
	      0.0,  0.0,
	      1.0,  0.0,
	      0.0,  1.0,
	      0.0,  1.0,
	      1.0,  0.0,
	      1.0,  1.0]), gl.STATIC_DRAW);
	    gl.enableVertexAttribArray(texCoordLocation);
	    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

	    gl.uniform1i(texLayerLocation, 0);
	    gl.uniform1i(texMaskLocation, 1);

	    smaskCache = cache;
	  }

	  function composeSMask(layer, mask, properties) {
	    var width = layer.width, height = layer.height;

	    if (!smaskCache) {
	      initSmaskGL();
	    }
	    var cache = smaskCache,canvas = cache.canvas, gl = cache.gl;
	    canvas.width = width;
	    canvas.height = height;
	    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	    gl.uniform2f(cache.resolutionLocation, width, height);

	    if (properties.backdrop) {
	      gl.uniform4f(cache.resolutionLocation, properties.backdrop[0],
	                   properties.backdrop[1], properties.backdrop[2], 1);
	    } else {
	      gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
	    }
	    gl.uniform1i(cache.subtypeLocation,
	                 properties.subtype === 'Luminosity' ? 1 : 0);

	    // Create a textures
	    var texture = createTexture(gl, layer, gl.TEXTURE0);
	    var maskTexture = createTexture(gl, mask, gl.TEXTURE1);


	    // Create a buffer and put a single clipspace rectangle in
	    // it (2 triangles)
	    var buffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
	      0, 0,
	      width, 0,
	      0, height,
	      0, height,
	      width, 0,
	      width, height]), gl.STATIC_DRAW);
	    gl.enableVertexAttribArray(cache.positionLocation);
	    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);

	    // draw
	    gl.clearColor(0, 0, 0, 0);
	    gl.enable(gl.BLEND);
	    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
	    gl.clear(gl.COLOR_BUFFER_BIT);

	    gl.drawArrays(gl.TRIANGLES, 0, 6);

	    gl.flush();

	    gl.deleteTexture(texture);
	    gl.deleteTexture(maskTexture);
	    gl.deleteBuffer(buffer);

	    return canvas;
	  }

	  var figuresVertexShaderCode = '\
	  attribute vec2 a_position;                                    \
	  attribute vec3 a_color;                                       \
	                                                                \
	  uniform vec2 u_resolution;                                    \
	  uniform vec2 u_scale;                                         \
	  uniform vec2 u_offset;                                        \
	                                                                \
	  varying vec4 v_color;                                         \
	                                                                \
	  void main() {                                                 \
	    vec2 position = (a_position + u_offset) * u_scale;          \
	    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
	    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
	                                                                \
	    v_color = vec4(a_color / 255.0, 1.0);                       \
	  }                                                             ';

	  var figuresFragmentShaderCode = '\
	  precision mediump float;                                      \
	                                                                \
	  varying vec4 v_color;                                         \
	                                                                \
	  void main() {                                                 \
	    gl_FragColor = v_color;                                     \
	  }                                                             ';

	  var figuresCache = null;

	  function initFiguresGL() {
	    var canvas, gl;

	    generateGL();
	    canvas = currentCanvas;
	    currentCanvas = null;
	    gl = currentGL;
	    currentGL = null;

	    // setup a GLSL program
	    var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
	    var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
	    var program = createProgram(gl, [vertexShader, fragmentShader]);
	    gl.useProgram(program);

	    var cache = {};
	    cache.gl = gl;
	    cache.canvas = canvas;
	    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
	    cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
	    cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
	    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
	    cache.colorLocation = gl.getAttribLocation(program, 'a_color');

	    figuresCache = cache;
	  }

	  function drawFigures(width, height, backgroundColor, figures, context) {
	    if (!figuresCache) {
	      initFiguresGL();
	    }
	    var cache = figuresCache, canvas = cache.canvas, gl = cache.gl;

	    canvas.width = width;
	    canvas.height = height;
	    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	    gl.uniform2f(cache.resolutionLocation, width, height);

	    // count triangle points
	    var count = 0;
	    var i, ii, rows;
	    for (i = 0, ii = figures.length; i < ii; i++) {
	      switch (figures[i].type) {
	        case 'lattice':
	          rows = (figures[i].coords.length / figures[i].verticesPerRow) | 0;
	          count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
	          break;
	        case 'triangles':
	          count += figures[i].coords.length;
	          break;
	      }
	    }
	    // transfer data
	    var coords = new Float32Array(count * 2);
	    var colors = new Uint8Array(count * 3);
	    var coordsMap = context.coords, colorsMap = context.colors;
	    var pIndex = 0, cIndex = 0;
	    for (i = 0, ii = figures.length; i < ii; i++) {
	      var figure = figures[i], ps = figure.coords, cs = figure.colors;
	      switch (figure.type) {
	        case 'lattice':
	          var cols = figure.verticesPerRow;
	          rows = (ps.length / cols) | 0;
	          for (var row = 1; row < rows; row++) {
	            var offset = row * cols + 1;
	            for (var col = 1; col < cols; col++, offset++) {
	              coords[pIndex] = coordsMap[ps[offset - cols - 1]];
	              coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
	              coords[pIndex + 2] = coordsMap[ps[offset - cols]];
	              coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
	              coords[pIndex + 4] = coordsMap[ps[offset - 1]];
	              coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
	              colors[cIndex] = colorsMap[cs[offset - cols - 1]];
	              colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
	              colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
	              colors[cIndex + 3] = colorsMap[cs[offset - cols]];
	              colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
	              colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
	              colors[cIndex + 6] = colorsMap[cs[offset - 1]];
	              colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
	              colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];

	              coords[pIndex + 6] = coords[pIndex + 2];
	              coords[pIndex + 7] = coords[pIndex + 3];
	              coords[pIndex + 8] = coords[pIndex + 4];
	              coords[pIndex + 9] = coords[pIndex + 5];
	              coords[pIndex + 10] = coordsMap[ps[offset]];
	              coords[pIndex + 11] = coordsMap[ps[offset] + 1];
	              colors[cIndex + 9] = colors[cIndex + 3];
	              colors[cIndex + 10] = colors[cIndex + 4];
	              colors[cIndex + 11] = colors[cIndex + 5];
	              colors[cIndex + 12] = colors[cIndex + 6];
	              colors[cIndex + 13] = colors[cIndex + 7];
	              colors[cIndex + 14] = colors[cIndex + 8];
	              colors[cIndex + 15] = colorsMap[cs[offset]];
	              colors[cIndex + 16] = colorsMap[cs[offset] + 1];
	              colors[cIndex + 17] = colorsMap[cs[offset] + 2];
	              pIndex += 12;
	              cIndex += 18;
	            }
	          }
	          break;
	        case 'triangles':
	          for (var j = 0, jj = ps.length; j < jj; j++) {
	            coords[pIndex] = coordsMap[ps[j]];
	            coords[pIndex + 1] = coordsMap[ps[j] + 1];
	            colors[cIndex] = colorsMap[cs[j]];
	            colors[cIndex + 1] = colorsMap[cs[j] + 1];
	            colors[cIndex + 2] = colorsMap[cs[j] + 2];
	            pIndex += 2;
	            cIndex += 3;
	          }
	          break;
	      }
	    }

	    // draw
	    if (backgroundColor) {
	      gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255,
	                    backgroundColor[2] / 255, 1.0);
	    } else {
	      gl.clearColor(0, 0, 0, 0);
	    }
	    gl.clear(gl.COLOR_BUFFER_BIT);

	    var coordsBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
	    gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
	    gl.enableVertexAttribArray(cache.positionLocation);
	    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);

	    var colorsBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
	    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
	    gl.enableVertexAttribArray(cache.colorLocation);
	    gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false,
	                           0, 0);

	    gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
	    gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);

	    gl.drawArrays(gl.TRIANGLES, 0, count);

	    gl.flush();

	    gl.deleteBuffer(coordsBuffer);
	    gl.deleteBuffer(colorsBuffer);

	    return canvas;
	  }

	  function cleanup() {
	    if (smaskCache && smaskCache.canvas) {
	      smaskCache.canvas.width = 0;
	      smaskCache.canvas.height = 0;
	    }
	    if (figuresCache && figuresCache.canvas) {
	      figuresCache.canvas.width = 0;
	      figuresCache.canvas.height = 0;
	    }
	    smaskCache = null;
	    figuresCache = null;
	  }

	  return {
	    get isEnabled() {
	      if (getDefaultSetting('disableWebGL')) {
	        return false;
	      }
	      var enabled = false;
	      try {
	        generateGL();
	        enabled = !!currentGL;
	      } catch (e) { }
	      return shadow(this, 'isEnabled', enabled);
	    },
	    composeSMask: composeSMask,
	    drawFigures: drawFigures,
	    clear: cleanup
	  };
	})();

	exports.WebGLUtils = WebGLUtils;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayPatternHelper = {}), root.pdfjsSharedUtil,
	      root.pdfjsDisplayWebGL);
	  }
	}(this, function (exports, sharedUtil, displayWebGL) {

	var Util = sharedUtil.Util;
	var info = sharedUtil.info;
	var isArray = sharedUtil.isArray;
	var error = sharedUtil.error;
	var WebGLUtils = displayWebGL.WebGLUtils;

	var ShadingIRs = {};

	ShadingIRs.RadialAxial = {
	  fromIR: function RadialAxial_fromIR(raw) {
	    var type = raw[1];
	    var colorStops = raw[2];
	    var p0 = raw[3];
	    var p1 = raw[4];
	    var r0 = raw[5];
	    var r1 = raw[6];
	    return {
	      type: 'Pattern',
	      getPattern: function RadialAxial_getPattern(ctx) {
	        var grad;
	        if (type === 'axial') {
	          grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
	        } else if (type === 'radial') {
	          grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
	        }

	        for (var i = 0, ii = colorStops.length; i < ii; ++i) {
	          var c = colorStops[i];
	          grad.addColorStop(c[0], c[1]);
	        }
	        return grad;
	      }
	    };
	  }
	};

	var createMeshCanvas = (function createMeshCanvasClosure() {
	  function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
	    // Very basic Gouraud-shaded triangle rasterization algorithm.
	    var coords = context.coords, colors = context.colors;
	    var bytes = data.data, rowSize = data.width * 4;
	    var tmp;
	    if (coords[p1 + 1] > coords[p2 + 1]) {
	      tmp = p1; p1 = p2; p2 = tmp; tmp = c1; c1 = c2; c2 = tmp;
	    }
	    if (coords[p2 + 1] > coords[p3 + 1]) {
	      tmp = p2; p2 = p3; p3 = tmp; tmp = c2; c2 = c3; c3 = tmp;
	    }
	    if (coords[p1 + 1] > coords[p2 + 1]) {
	      tmp = p1; p1 = p2; p2 = tmp; tmp = c1; c1 = c2; c2 = tmp;
	    }
	    var x1 = (coords[p1] + context.offsetX) * context.scaleX;
	    var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
	    var x2 = (coords[p2] + context.offsetX) * context.scaleX;
	    var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
	    var x3 = (coords[p3] + context.offsetX) * context.scaleX;
	    var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
	    if (y1 >= y3) {
	      return;
	    }
	    var c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
	    var c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
	    var c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];

	    var minY = Math.round(y1), maxY = Math.round(y3);
	    var xa, car, cag, cab;
	    var xb, cbr, cbg, cbb;
	    var k;
	    for (var y = minY; y <= maxY; y++) {
	      if (y < y2) {
	        k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
	        xa = x1 - (x1 - x2) * k;
	        car = c1r - (c1r - c2r) * k;
	        cag = c1g - (c1g - c2g) * k;
	        cab = c1b - (c1b - c2b) * k;
	      } else {
	        k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
	        xa = x2 - (x2 - x3) * k;
	        car = c2r - (c2r - c3r) * k;
	        cag = c2g - (c2g - c3g) * k;
	        cab = c2b - (c2b - c3b) * k;
	      }
	      k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
	      xb = x1 - (x1 - x3) * k;
	      cbr = c1r - (c1r - c3r) * k;
	      cbg = c1g - (c1g - c3g) * k;
	      cbb = c1b - (c1b - c3b) * k;
	      var x1_ = Math.round(Math.min(xa, xb));
	      var x2_ = Math.round(Math.max(xa, xb));
	      var j = rowSize * y + x1_ * 4;
	      for (var x = x1_; x <= x2_; x++) {
	        k = (xa - x) / (xa - xb);
	        k = k < 0 ? 0 : k > 1 ? 1 : k;
	        bytes[j++] = (car - (car - cbr) * k) | 0;
	        bytes[j++] = (cag - (cag - cbg) * k) | 0;
	        bytes[j++] = (cab - (cab - cbb) * k) | 0;
	        bytes[j++] = 255;
	      }
	    }
	  }

	  function drawFigure(data, figure, context) {
	    var ps = figure.coords;
	    var cs = figure.colors;
	    var i, ii;
	    switch (figure.type) {
	      case 'lattice':
	        var verticesPerRow = figure.verticesPerRow;
	        var rows = Math.floor(ps.length / verticesPerRow) - 1;
	        var cols = verticesPerRow - 1;
	        for (i = 0; i < rows; i++) {
	          var q = i * verticesPerRow;
	          for (var j = 0; j < cols; j++, q++) {
	            drawTriangle(data, context,
	              ps[q], ps[q + 1], ps[q + verticesPerRow],
	              cs[q], cs[q + 1], cs[q + verticesPerRow]);
	            drawTriangle(data, context,
	              ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow],
	              cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
	          }
	        }
	        break;
	      case 'triangles':
	        for (i = 0, ii = ps.length; i < ii; i += 3) {
	          drawTriangle(data, context,
	            ps[i], ps[i + 1], ps[i + 2],
	            cs[i], cs[i + 1], cs[i + 2]);
	        }
	        break;
	      default:
	        error('illigal figure');
	        break;
	    }
	  }

	  function createMeshCanvas(bounds, combinesScale, coords, colors, figures,
	                            backgroundColor, cachedCanvases) {
	    // we will increase scale on some weird factor to let antialiasing take
	    // care of "rough" edges
	    var EXPECTED_SCALE = 1.1;
	    // MAX_PATTERN_SIZE is used to avoid OOM situation.
	    var MAX_PATTERN_SIZE = 3000; // 10in @ 300dpi shall be enough
	    // We need to keep transparent border around our pattern for fill():
	    // createPattern with 'no-repeat' will bleed edges across entire area.
	    var BORDER_SIZE = 2;

	    var offsetX = Math.floor(bounds[0]);
	    var offsetY = Math.floor(bounds[1]);
	    var boundsWidth = Math.ceil(bounds[2]) - offsetX;
	    var boundsHeight = Math.ceil(bounds[3]) - offsetY;

	    var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] *
	      EXPECTED_SCALE)), MAX_PATTERN_SIZE);
	    var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] *
	      EXPECTED_SCALE)), MAX_PATTERN_SIZE);
	    var scaleX = boundsWidth / width;
	    var scaleY = boundsHeight / height;

	    var context = {
	      coords: coords,
	      colors: colors,
	      offsetX: -offsetX,
	      offsetY: -offsetY,
	      scaleX: 1 / scaleX,
	      scaleY: 1 / scaleY
	    };

	    var paddedWidth = width + BORDER_SIZE * 2;
	    var paddedHeight = height + BORDER_SIZE * 2;

	    var canvas, tmpCanvas, i, ii;
	    if (WebGLUtils.isEnabled) {
	      canvas = WebGLUtils.drawFigures(width, height, backgroundColor,
	                                      figures, context);

	      // https://bugzilla.mozilla.org/show_bug.cgi?id=972126
	      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight,
	                                           false);
	      tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
	      canvas = tmpCanvas.canvas;
	    } else {
	      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight,
	                                           false);
	      var tmpCtx = tmpCanvas.context;

	      var data = tmpCtx.createImageData(width, height);
	      if (backgroundColor) {
	        var bytes = data.data;
	        for (i = 0, ii = bytes.length; i < ii; i += 4) {
	          bytes[i] = backgroundColor[0];
	          bytes[i + 1] = backgroundColor[1];
	          bytes[i + 2] = backgroundColor[2];
	          bytes[i + 3] = 255;
	        }
	      }
	      for (i = 0; i < figures.length; i++) {
	        drawFigure(data, figures[i], context);
	      }
	      tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
	      canvas = tmpCanvas.canvas;
	    }

	    return {canvas: canvas,
	            offsetX: offsetX - BORDER_SIZE * scaleX,
	            offsetY: offsetY - BORDER_SIZE * scaleY,
	            scaleX: scaleX, scaleY: scaleY};
	  }
	  return createMeshCanvas;
	})();

	ShadingIRs.Mesh = {
	  fromIR: function Mesh_fromIR(raw) {
	    //var type = raw[1];
	    var coords = raw[2];
	    var colors = raw[3];
	    var figures = raw[4];
	    var bounds = raw[5];
	    var matrix = raw[6];
	    //var bbox = raw[7];
	    var background = raw[8];
	    return {
	      type: 'Pattern',
	      getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
	        var scale;
	        if (shadingFill) {
	          scale = Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
	        } else {
	          // Obtain scale from matrix and current transformation matrix.
	          scale = Util.singularValueDecompose2dScale(owner.baseTransform);
	          if (matrix) {
	            var matrixScale = Util.singularValueDecompose2dScale(matrix);
	            scale = [scale[0] * matrixScale[0],
	                     scale[1] * matrixScale[1]];
	          }
	        }


	        // Rasterizing on the main thread since sending/queue large canvases
	        // might cause OOM.
	        var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords,
	          colors, figures, shadingFill ? null : background,
	          owner.cachedCanvases);

	        if (!shadingFill) {
	          ctx.setTransform.apply(ctx, owner.baseTransform);
	          if (matrix) {
	            ctx.transform.apply(ctx, matrix);
	          }
	        }

	        ctx.translate(temporaryPatternCanvas.offsetX,
	                      temporaryPatternCanvas.offsetY);
	        ctx.scale(temporaryPatternCanvas.scaleX,
	                  temporaryPatternCanvas.scaleY);

	        return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
	      }
	    };
	  }
	};

	ShadingIRs.Dummy = {
	  fromIR: function Dummy_fromIR() {
	    return {
	      type: 'Pattern',
	      getPattern: function Dummy_fromIR_getPattern() {
	        return 'hotpink';
	      }
	    };
	  }
	};

	function getShadingPatternFromIR(raw) {
	  var shadingIR = ShadingIRs[raw[0]];
	  if (!shadingIR) {
	    error('Unknown IR type: ' + raw[0]);
	  }
	  return shadingIR.fromIR(raw);
	}

	var TilingPattern = (function TilingPatternClosure() {
	  var PaintType = {
	    COLORED: 1,
	    UNCOLORED: 2
	  };

	  var MAX_PATTERN_SIZE = 3000; // 10in @ 300dpi shall be enough

	  function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
	    this.operatorList = IR[2];
	    this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
	    this.bbox = IR[4];
	    this.xstep = IR[5];
	    this.ystep = IR[6];
	    this.paintType = IR[7];
	    this.tilingType = IR[8];
	    this.color = color;
	    this.canvasGraphicsFactory = canvasGraphicsFactory;
	    this.baseTransform = baseTransform;
	    this.type = 'Pattern';
	    this.ctx = ctx;
	  }

	  TilingPattern.prototype = {
	    createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
	      var operatorList = this.operatorList;
	      var bbox = this.bbox;
	      var xstep = this.xstep;
	      var ystep = this.ystep;
	      var paintType = this.paintType;
	      var tilingType = this.tilingType;
	      var color = this.color;
	      var canvasGraphicsFactory = this.canvasGraphicsFactory;

	      info('TilingType: ' + tilingType);

	      var x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];

	      var topLeft = [x0, y0];
	      // we want the canvas to be as large as the step size
	      var botRight = [x0 + xstep, y0 + ystep];

	      var width = botRight[0] - topLeft[0];
	      var height = botRight[1] - topLeft[1];

	      // Obtain scale from matrix and current transformation matrix.
	      var matrixScale = Util.singularValueDecompose2dScale(this.matrix);
	      var curMatrixScale = Util.singularValueDecompose2dScale(
	        this.baseTransform);
	      var combinedScale = [matrixScale[0] * curMatrixScale[0],
	        matrixScale[1] * curMatrixScale[1]];

	      // MAX_PATTERN_SIZE is used to avoid OOM situation.
	      // Use width and height values that are as close as possible to the end
	      // result when the pattern is used. Too low value makes the pattern look
	      // blurry. Too large value makes it look too crispy.
	      width = Math.min(Math.ceil(Math.abs(width * combinedScale[0])),
	        MAX_PATTERN_SIZE);

	      height = Math.min(Math.ceil(Math.abs(height * combinedScale[1])),
	        MAX_PATTERN_SIZE);

	      var tmpCanvas = owner.cachedCanvases.getCanvas('pattern',
	        width, height, true);
	      var tmpCtx = tmpCanvas.context;
	      var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
	      graphics.groupLevel = owner.groupLevel;

	      this.setFillAndStrokeStyleToContext(tmpCtx, paintType, color);

	      this.setScale(width, height, xstep, ystep);
	      this.transformToScale(graphics);

	      // transform coordinates to pattern space
	      var tmpTranslate = [1, 0, 0, 1, -topLeft[0], -topLeft[1]];
	      graphics.transform.apply(graphics, tmpTranslate);

	      this.clipBbox(graphics, bbox, x0, y0, x1, y1);

	      graphics.executeOperatorList(operatorList);
	      return tmpCanvas.canvas;
	    },

	    setScale: function TilingPattern_setScale(width, height, xstep, ystep) {
	      this.scale = [width / xstep, height / ystep];
	    },

	    transformToScale: function TilingPattern_transformToScale(graphics) {
	      var scale = this.scale;
	      var tmpScale = [scale[0], 0, 0, scale[1], 0, 0];
	      graphics.transform.apply(graphics, tmpScale);
	    },

	    scaleToContext: function TilingPattern_scaleToContext() {
	      var scale = this.scale;
	      this.ctx.scale(1 / scale[0], 1 / scale[1]);
	    },

	    clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
	      if (bbox && isArray(bbox) && bbox.length === 4) {
	        var bboxWidth = x1 - x0;
	        var bboxHeight = y1 - y0;
	        graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
	        graphics.clip();
	        graphics.endPath();
	      }
	    },

	    setFillAndStrokeStyleToContext:
	      function setFillAndStrokeStyleToContext(context, paintType, color) {
	        switch (paintType) {
	          case PaintType.COLORED:
	            var ctx = this.ctx;
	            context.fillStyle = ctx.fillStyle;
	            context.strokeStyle = ctx.strokeStyle;
	            break;
	          case PaintType.UNCOLORED:
	            var cssColor = Util.makeCssRgb(color[0], color[1], color[2]);
	            context.fillStyle = cssColor;
	            context.strokeStyle = cssColor;
	            break;
	          default:
	            error('Unsupported paint type: ' + paintType);
	        }
	      },

	    getPattern: function TilingPattern_getPattern(ctx, owner) {
	      var temporaryPatternCanvas = this.createPatternCanvas(owner);

	      ctx = this.ctx;
	      ctx.setTransform.apply(ctx, this.baseTransform);
	      ctx.transform.apply(ctx, this.matrix);
	      this.scaleToContext();

	      return ctx.createPattern(temporaryPatternCanvas, 'repeat');
	    }
	  };

	  return TilingPattern;
	})();

	exports.getShadingPatternFromIR = getShadingPatternFromIR;
	exports.TilingPattern = TilingPattern;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayCanvas = {}), root.pdfjsSharedUtil,
	      root.pdfjsDisplayDOMUtils, root.pdfjsDisplayPatternHelper,
	      root.pdfjsDisplayWebGL);
	  }
	}(this, function (exports, sharedUtil, displayDOMUtils, displayPatternHelper,
	                  displayWebGL) {

	var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
	var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
	var ImageKind = sharedUtil.ImageKind;
	var OPS = sharedUtil.OPS;
	var TextRenderingMode = sharedUtil.TextRenderingMode;
	var Uint32ArrayView = sharedUtil.Uint32ArrayView;
	var Util = sharedUtil.Util;
	var assert = sharedUtil.assert;
	var info = sharedUtil.info;
	var isNum = sharedUtil.isNum;
	var isArray = sharedUtil.isArray;
	var isLittleEndian = sharedUtil.isLittleEndian;
	var error = sharedUtil.error;
	var shadow = sharedUtil.shadow;
	var warn = sharedUtil.warn;
	var TilingPattern = displayPatternHelper.TilingPattern;
	var getShadingPatternFromIR = displayPatternHelper.getShadingPatternFromIR;
	var WebGLUtils = displayWebGL.WebGLUtils;
	var hasCanvasTypedArrays = displayDOMUtils.hasCanvasTypedArrays;

	// <canvas> contexts store most of the state we need natively.
	// However, PDF needs a bit more state, which we store here.

	// Minimal font size that would be used during canvas fillText operations.
	var MIN_FONT_SIZE = 16;
	// Maximum font size that would be used during canvas fillText operations.
	var MAX_FONT_SIZE = 100;
	var MAX_GROUP_SIZE = 4096;

	// Heuristic value used when enforcing minimum line widths.
	var MIN_WIDTH_FACTOR = 0.65;

	var COMPILE_TYPE3_GLYPHS = true;
	var MAX_SIZE_TO_COMPILE = 1000;

	var FULL_CHUNK_HEIGHT = 16;

	var HasCanvasTypedArraysCached = {
	  get value() {
	    return shadow(HasCanvasTypedArraysCached, 'value', hasCanvasTypedArrays());
	  }
	};

	var IsLittleEndianCached = {
	  get value() {
	    return shadow(IsLittleEndianCached, 'value', isLittleEndian());
	  }
	};

	function createScratchCanvas(width, height) {
	  var canvas = document.createElement('canvas');
	  canvas.width = width;
	  canvas.height = height;
	  return canvas;
	}

	function addContextCurrentTransform(ctx) {
	  // If the context doesn't expose a `mozCurrentTransform`, add a JS based one.
	  if (!ctx.mozCurrentTransform) {
	    ctx._originalSave = ctx.save;
	    ctx._originalRestore = ctx.restore;
	    ctx._originalRotate = ctx.rotate;
	    ctx._originalScale = ctx.scale;
	    ctx._originalTranslate = ctx.translate;
	    ctx._originalTransform = ctx.transform;
	    ctx._originalSetTransform = ctx.setTransform;

	    ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
	    ctx._transformStack = [];

	    Object.defineProperty(ctx, 'mozCurrentTransform', {
	      get: function getCurrentTransform() {
	        return this._transformMatrix;
	      }
	    });

	    Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
	      get: function getCurrentTransformInverse() {
	        // Calculation done using WolframAlpha:
	        // http://www.wolframalpha.com/input/?
	        //   i=Inverse+{{a%2C+c%2C+e}%2C+{b%2C+d%2C+f}%2C+{0%2C+0%2C+1}}

	        var m = this._transformMatrix;
	        var a = m[0], b = m[1], c = m[2], d = m[3], e = m[4], f = m[5];

	        var ad_bc = a * d - b * c;
	        var bc_ad = b * c - a * d;

	        return [
	          d / ad_bc,
	          b / bc_ad,
	          c / bc_ad,
	          a / ad_bc,
	          (d * e - c * f) / bc_ad,
	          (b * e - a * f) / ad_bc
	        ];
	      }
	    });

	    ctx.save = function ctxSave() {
	      var old = this._transformMatrix;
	      this._transformStack.push(old);
	      this._transformMatrix = old.slice(0, 6);

	      this._originalSave();
	    };

	    ctx.restore = function ctxRestore() {
	      var prev = this._transformStack.pop();
	      if (prev) {
	        this._transformMatrix = prev;
	        this._originalRestore();
	      }
	    };

	    ctx.translate = function ctxTranslate(x, y) {
	      var m = this._transformMatrix;
	      m[4] = m[0] * x + m[2] * y + m[4];
	      m[5] = m[1] * x + m[3] * y + m[5];

	      this._originalTranslate(x, y);
	    };

	    ctx.scale = function ctxScale(x, y) {
	      var m = this._transformMatrix;
	      m[0] = m[0] * x;
	      m[1] = m[1] * x;
	      m[2] = m[2] * y;
	      m[3] = m[3] * y;

	      this._originalScale(x, y);
	    };

	    ctx.transform = function ctxTransform(a, b, c, d, e, f) {
	      var m = this._transformMatrix;
	      this._transformMatrix = [
	        m[0] * a + m[2] * b,
	        m[1] * a + m[3] * b,
	        m[0] * c + m[2] * d,
	        m[1] * c + m[3] * d,
	        m[0] * e + m[2] * f + m[4],
	        m[1] * e + m[3] * f + m[5]
	      ];

	      ctx._originalTransform(a, b, c, d, e, f);
	    };

	    ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
	      this._transformMatrix = [a, b, c, d, e, f];

	      ctx._originalSetTransform(a, b, c, d, e, f);
	    };

	    ctx.rotate = function ctxRotate(angle) {
	      var cosValue = Math.cos(angle);
	      var sinValue = Math.sin(angle);

	      var m = this._transformMatrix;
	      this._transformMatrix = [
	        m[0] * cosValue + m[2] * sinValue,
	        m[1] * cosValue + m[3] * sinValue,
	        m[0] * (-sinValue) + m[2] * cosValue,
	        m[1] * (-sinValue) + m[3] * cosValue,
	        m[4],
	        m[5]
	      ];

	      this._originalRotate(angle);
	    };
	  }
	}

	var CachedCanvases = (function CachedCanvasesClosure() {
	  function CachedCanvases() {
	    this.cache = Object.create(null);
	  }
	  CachedCanvases.prototype = {
	    getCanvas: function CachedCanvases_getCanvas(id, width, height,
	                                                 trackTransform) {
	      var canvasEntry;
	      if (this.cache[id] !== undefined) {
	        canvasEntry = this.cache[id];
	        canvasEntry.canvas.width = width;
	        canvasEntry.canvas.height = height;
	        // reset canvas transform for emulated mozCurrentTransform, if needed
	        canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
	      } else {
	        var canvas = createScratchCanvas(width, height);
	        var ctx = canvas.getContext('2d');
	        if (trackTransform) {
	          addContextCurrentTransform(ctx);
	        }
	        this.cache[id] = canvasEntry = {canvas: canvas, context: ctx};
	      }
	      return canvasEntry;
	    },
	    clear: function () {
	      for (var id in this.cache) {
	        var canvasEntry = this.cache[id];
	        // Zeroing the width and height causes Firefox to release graphics
	        // resources immediately, which can greatly reduce memory consumption.
	        canvasEntry.canvas.width = 0;
	        canvasEntry.canvas.height = 0;
	        delete this.cache[id];
	      }
	    }
	  };
	  return CachedCanvases;
	})();

	function compileType3Glyph(imgData) {
	  var POINT_TO_PROCESS_LIMIT = 1000;

	  var width = imgData.width, height = imgData.height;
	  var i, j, j0, width1 = width + 1;
	  var points = new Uint8Array(width1 * (height + 1));
	  var POINT_TYPES =
	      new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);

	  // decodes bit-packed mask data
	  var lineSize = (width + 7) & ~7, data0 = imgData.data;
	  var data = new Uint8Array(lineSize * height), pos = 0, ii;
	  for (i = 0, ii = data0.length; i < ii; i++) {
	    var mask = 128, elem = data0[i];
	    while (mask > 0) {
	      data[pos++] = (elem & mask) ? 0 : 255;
	      mask >>= 1;
	    }
	  }

	  // finding iteresting points: every point is located between mask pixels,
	  // so there will be points of the (width + 1)x(height + 1) grid. Every point
	  // will have flags assigned based on neighboring mask pixels:
	  //   4 | 8
	  //   --P--
	  //   2 | 1
	  // We are interested only in points with the flags:
	  //   - outside corners: 1, 2, 4, 8;
	  //   - inside corners: 7, 11, 13, 14;
	  //   - and, intersections: 5, 10.
	  var count = 0;
	  pos = 0;
	  if (data[pos] !== 0) {
	    points[0] = 1;
	    ++count;
	  }
	  for (j = 1; j < width; j++) {
	    if (data[pos] !== data[pos + 1]) {
	      points[j] = data[pos] ? 2 : 1;
	      ++count;
	    }
	    pos++;
	  }
	  if (data[pos] !== 0) {
	    points[j] = 2;
	    ++count;
	  }
	  for (i = 1; i < height; i++) {
	    pos = i * lineSize;
	    j0 = i * width1;
	    if (data[pos - lineSize] !== data[pos]) {
	      points[j0] = data[pos] ? 1 : 8;
	      ++count;
	    }
	    // 'sum' is the position of the current pixel configuration in the 'TYPES'
	    // array (in order 8-1-2-4, so we can use '>>2' to shift the column).
	    var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
	    for (j = 1; j < width; j++) {
	      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) +
	            (data[pos - lineSize + 1] ? 8 : 0);
	      if (POINT_TYPES[sum]) {
	        points[j0 + j] = POINT_TYPES[sum];
	        ++count;
	      }
	      pos++;
	    }
	    if (data[pos - lineSize] !== data[pos]) {
	      points[j0 + j] = data[pos] ? 2 : 4;
	      ++count;
	    }

	    if (count > POINT_TO_PROCESS_LIMIT) {
	      return null;
	    }
	  }

	  pos = lineSize * (height - 1);
	  j0 = i * width1;
	  if (data[pos] !== 0) {
	    points[j0] = 8;
	    ++count;
	  }
	  for (j = 1; j < width; j++) {
	    if (data[pos] !== data[pos + 1]) {
	      points[j0 + j] = data[pos] ? 4 : 8;
	      ++count;
	    }
	    pos++;
	  }
	  if (data[pos] !== 0) {
	    points[j0 + j] = 4;
	    ++count;
	  }
	  if (count > POINT_TO_PROCESS_LIMIT) {
	    return null;
	  }

	  // building outlines
	  var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
	  var outlines = [];
	  for (i = 0; count && i <= height; i++) {
	    var p = i * width1;
	    var end = p + width;
	    while (p < end && !points[p]) {
	      p++;
	    }
	    if (p === end) {
	      continue;
	    }
	    var coords = [p % width1, i];

	    var type = points[p], p0 = p, pp;
	    do {
	      var step = steps[type];
	      do {
	        p += step;
	      } while (!points[p]);

	      pp = points[p];
	      if (pp !== 5 && pp !== 10) {
	        // set new direction
	        type = pp;
	        // delete mark
	        points[p] = 0;
	      } else { // type is 5 or 10, ie, a crossing
	        // set new direction
	        type = pp & ((0x33 * type) >> 4);
	        // set new type for "future hit"
	        points[p] &= (type >> 2 | type << 2);
	      }

	      coords.push(p % width1);
	      coords.push((p / width1) | 0);
	      --count;
	    } while (p0 !== p);
	    outlines.push(coords);
	    --i;
	  }

	  var drawOutline = function(c) {
	    c.save();
	    // the path shall be painted in [0..1]x[0..1] space
	    c.scale(1 / width, -1 / height);
	    c.translate(0, -height);
	    c.beginPath();
	    for (var i = 0, ii = outlines.length; i < ii; i++) {
	      var o = outlines[i];
	      c.moveTo(o[0], o[1]);
	      for (var j = 2, jj = o.length; j < jj; j += 2) {
	        c.lineTo(o[j], o[j+1]);
	      }
	    }
	    c.fill();
	    c.beginPath();
	    c.restore();
	  };

	  return drawOutline;
	}

	var CanvasExtraState = (function CanvasExtraStateClosure() {
	  function CanvasExtraState(old) {
	    // Are soft masks and alpha values shapes or opacities?
	    this.alphaIsShape = false;
	    this.fontSize = 0;
	    this.fontSizeScale = 1;
	    this.textMatrix = IDENTITY_MATRIX;
	    this.textMatrixScale = 1;
	    this.fontMatrix = FONT_IDENTITY_MATRIX;
	    this.leading = 0;
	    // Current point (in user coordinates)
	    this.x = 0;
	    this.y = 0;
	    // Start of text line (in text coordinates)
	    this.lineX = 0;
	    this.lineY = 0;
	    // Character and word spacing
	    this.charSpacing = 0;
	    this.wordSpacing = 0;
	    this.textHScale = 1;
	    this.textRenderingMode = TextRenderingMode.FILL;
	    this.textRise = 0;
	    // Default fore and background colors
	    this.fillColor = '#000000';
	    this.strokeColor = '#000000';
	    this.patternFill = false;
	    // Note: fill alpha applies to all non-stroking operations
	    this.fillAlpha = 1;
	    this.strokeAlpha = 1;
	    this.lineWidth = 1;
	    this.activeSMask = null;
	    this.resumeSMaskCtx = null; // nonclonable field (see the save method below)

	    this.old = old;
	  }

	  CanvasExtraState.prototype = {
	    clone: function CanvasExtraState_clone() {
	      return Object.create(this);
	    },
	    setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
	      this.x = x;
	      this.y = y;
	    }
	  };
	  return CanvasExtraState;
	})();

	var CanvasGraphics = (function CanvasGraphicsClosure() {
	  // Defines the time the executeOperatorList is going to be executing
	  // before it stops and shedules a continue of execution.
	  var EXECUTION_TIME = 15;
	  // Defines the number of steps before checking the execution time
	  var EXECUTION_STEPS = 10;

	  function CanvasGraphics(canvasCtx, commonObjs, objs, imageLayer) {
	    this.ctx = canvasCtx;
	    this.current = new CanvasExtraState();
	    this.stateStack = [];
	    this.pendingClip = null;
	    this.pendingEOFill = false;
	    this.res = null;
	    this.xobjs = null;
	    this.commonObjs = commonObjs;
	    this.objs = objs;
	    this.imageLayer = imageLayer;
	    this.groupStack = [];
	    this.processingType3 = null;
	    // Patterns are painted relative to the initial page/form transform, see pdf
	    // spec 8.7.2 NOTE 1.
	    this.baseTransform = null;
	    this.baseTransformStack = [];
	    this.groupLevel = 0;
	    this.smaskStack = [];
	    this.smaskCounter = 0;
	    this.tempSMask = null;
	    this.cachedCanvases = new CachedCanvases();
	    if (canvasCtx) {
	      // NOTE: if mozCurrentTransform is polyfilled, then the current state of
	      // the transformation must already be set in canvasCtx._transformMatrix.
	      addContextCurrentTransform(canvasCtx);
	    }
	    this.cachedGetSinglePixelWidth = null;
	  }

	  function putBinaryImageData(ctx, imgData) {
	    if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
	      ctx.putImageData(imgData, 0, 0);
	      return;
	    }

	    // Put the image data to the canvas in chunks, rather than putting the
	    // whole image at once.  This saves JS memory, because the ImageData object
	    // is smaller. It also possibly saves C++ memory within the implementation
	    // of putImageData(). (E.g. in Firefox we make two short-lived copies of
	    // the data passed to putImageData()). |n| shouldn't be too small, however,
	    // because too many putImageData() calls will slow things down.
	    //
	    // Note: as written, if the last chunk is partial, the putImageData() call
	    // will (conceptually) put pixels past the bounds of the canvas.  But
	    // that's ok; any such pixels are ignored.

	    var height = imgData.height, width = imgData.width;
	    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
	    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
	    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;

	    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
	    var srcPos = 0, destPos;
	    var src = imgData.data;
	    var dest = chunkImgData.data;
	    var i, j, thisChunkHeight, elemsInThisChunk;

	    // There are multiple forms in which the pixel data can be passed, and
	    // imgData.kind tells us which one this is.
	    if (imgData.kind === ImageKind.GRAYSCALE_1BPP) {
	      // Grayscale, 1 bit per pixel (i.e. black-and-white).
	      var srcLength = src.byteLength;
	      var dest32 = HasCanvasTypedArraysCached.value ?
	        new Uint32Array(dest.buffer) : new Uint32ArrayView(dest);
	      var dest32DataLength = dest32.length;
	      var fullSrcDiff = (width + 7) >> 3;
	      var white = 0xFFFFFFFF;
	      var black = (IsLittleEndianCached.value ||
	                   !HasCanvasTypedArraysCached.value) ? 0xFF000000 : 0x000000FF;
	      for (i = 0; i < totalChunks; i++) {
	        thisChunkHeight =
	          (i < fullChunks) ? FULL_CHUNK_HEIGHT : partialChunkHeight;
	        destPos = 0;
	        for (j = 0; j < thisChunkHeight; j++) {
	          var srcDiff = srcLength - srcPos;
	          var k = 0;
	          var kEnd = (srcDiff > fullSrcDiff) ? width : srcDiff * 8 - 7;
	          var kEndUnrolled = kEnd & ~7;
	          var mask = 0;
	          var srcByte = 0;
	          for (; k < kEndUnrolled; k += 8) {
	            srcByte = src[srcPos++];
	            dest32[destPos++] = (srcByte & 128) ? white : black;
	            dest32[destPos++] = (srcByte & 64) ? white : black;
	            dest32[destPos++] = (srcByte & 32) ? white : black;
	            dest32[destPos++] = (srcByte & 16) ? white : black;
	            dest32[destPos++] = (srcByte & 8) ? white : black;
	            dest32[destPos++] = (srcByte & 4) ? white : black;
	            dest32[destPos++] = (srcByte & 2) ? white : black;
	            dest32[destPos++] = (srcByte & 1) ? white : black;
	          }
	          for (; k < kEnd; k++) {
	             if (mask === 0) {
	               srcByte = src[srcPos++];
	               mask = 128;
	             }

	            dest32[destPos++] = (srcByte & mask) ? white : black;
	            mask >>= 1;
	          }
	        }
	        // We ran out of input. Make all remaining pixels transparent.
	        while (destPos < dest32DataLength) {
	          dest32[destPos++] = 0;
	        }

	        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
	      }
	    } else if (imgData.kind === ImageKind.RGBA_32BPP) {
	      // RGBA, 32-bits per pixel.

	      j = 0;
	      elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
	      for (i = 0; i < fullChunks; i++) {
	        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
	        srcPos += elemsInThisChunk;

	        ctx.putImageData(chunkImgData, 0, j);
	        j += FULL_CHUNK_HEIGHT;
	      }
	      if (i < totalChunks) {
	        elemsInThisChunk = width * partialChunkHeight * 4;
	        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
	        ctx.putImageData(chunkImgData, 0, j);
	      }

	    } else if (imgData.kind === ImageKind.RGB_24BPP) {
	      // RGB, 24-bits per pixel.
	      thisChunkHeight = FULL_CHUNK_HEIGHT;
	      elemsInThisChunk = width * thisChunkHeight;
	      for (i = 0; i < totalChunks; i++) {
	        if (i >= fullChunks) {
	          thisChunkHeight = partialChunkHeight;
	          elemsInThisChunk = width * thisChunkHeight;
	        }

	        destPos = 0;
	        for (j = elemsInThisChunk; j--;) {
	          dest[destPos++] = src[srcPos++];
	          dest[destPos++] = src[srcPos++];
	          dest[destPos++] = src[srcPos++];
	          dest[destPos++] = 255;
	        }
	        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
	      }
	    } else {
	      error('bad image kind: ' + imgData.kind);
	    }
	  }

	  function putBinaryImageMask(ctx, imgData) {
	    var height = imgData.height, width = imgData.width;
	    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
	    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
	    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;

	    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
	    var srcPos = 0;
	    var src = imgData.data;
	    var dest = chunkImgData.data;

	    for (var i = 0; i < totalChunks; i++) {
	      var thisChunkHeight =
	        (i < fullChunks) ? FULL_CHUNK_HEIGHT : partialChunkHeight;

	      // Expand the mask so it can be used by the canvas.  Any required
	      // inversion has already been handled.
	      var destPos = 3; // alpha component offset
	      for (var j = 0; j < thisChunkHeight; j++) {
	        var mask = 0;
	        for (var k = 0; k < width; k++) {
	          if (!mask) {
	            var elem = src[srcPos++];
	            mask = 128;
	          }
	          dest[destPos] = (elem & mask) ? 0 : 255;
	          destPos += 4;
	          mask >>= 1;
	        }
	      }
	      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
	    }
	  }

	  function copyCtxState(sourceCtx, destCtx) {
	    var properties = ['strokeStyle', 'fillStyle', 'fillRule', 'globalAlpha',
	                      'lineWidth', 'lineCap', 'lineJoin', 'miterLimit',
	                      'globalCompositeOperation', 'font'];
	    for (var i = 0, ii = properties.length; i < ii; i++) {
	      var property = properties[i];
	      if (sourceCtx[property] !== undefined) {
	        destCtx[property] = sourceCtx[property];
	      }
	    }
	    if (sourceCtx.setLineDash !== undefined) {
	      destCtx.setLineDash(sourceCtx.getLineDash());
	      destCtx.lineDashOffset =  sourceCtx.lineDashOffset;
	    }
	  }

	  function composeSMaskBackdrop(bytes, r0, g0, b0) {
	    var length = bytes.length;
	    for (var i = 3; i < length; i += 4) {
	      var alpha = bytes[i];
	      if (alpha === 0) {
	        bytes[i - 3] = r0;
	        bytes[i - 2] = g0;
	        bytes[i - 1] = b0;
	      } else if (alpha < 255) {
	        var alpha_ = 255 - alpha;
	        bytes[i - 3] = (bytes[i - 3] * alpha + r0 * alpha_) >> 8;
	        bytes[i - 2] = (bytes[i - 2] * alpha + g0 * alpha_) >> 8;
	        bytes[i - 1] = (bytes[i - 1] * alpha + b0 * alpha_) >> 8;
	      }
	    }
	  }

	  function composeSMaskAlpha(maskData, layerData, transferMap) {
	    var length = maskData.length;
	    var scale = 1 / 255;
	    for (var i = 3; i < length; i += 4) {
	      var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
	      layerData[i] = (layerData[i] * alpha * scale) | 0;
	    }
	  }

	  function composeSMaskLuminosity(maskData, layerData, transferMap) {
	    var length = maskData.length;
	    for (var i = 3; i < length; i += 4) {
	      var y = (maskData[i - 3] * 77) +  // * 0.3 / 255 * 0x10000
	              (maskData[i - 2] * 152) + // * 0.59 ....
	              (maskData[i - 1] * 28);   // * 0.11 ....
	      layerData[i] = transferMap ?
	        (layerData[i] * transferMap[y >> 8]) >> 8 :
	        (layerData[i] * y) >> 16;
	    }
	  }

	  function genericComposeSMask(maskCtx, layerCtx, width, height,
	                               subtype, backdrop, transferMap) {
	    var hasBackdrop = !!backdrop;
	    var r0 = hasBackdrop ? backdrop[0] : 0;
	    var g0 = hasBackdrop ? backdrop[1] : 0;
	    var b0 = hasBackdrop ? backdrop[2] : 0;

	    var composeFn;
	    if (subtype === 'Luminosity') {
	      composeFn = composeSMaskLuminosity;
	    } else {
	      composeFn = composeSMaskAlpha;
	    }

	    // processing image in chunks to save memory
	    var PIXELS_TO_PROCESS = 1048576;
	    var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
	    for (var row = 0; row < height; row += chunkSize) {
	      var chunkHeight = Math.min(chunkSize, height - row);
	      var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
	      var layerData = layerCtx.getImageData(0, row, width, chunkHeight);

	      if (hasBackdrop) {
	        composeSMaskBackdrop(maskData.data, r0, g0, b0);
	      }
	      composeFn(maskData.data, layerData.data, transferMap);

	      maskCtx.putImageData(layerData, 0, row);
	    }
	  }

	  function composeSMask(ctx, smask, layerCtx) {
	    var mask = smask.canvas;
	    var maskCtx = smask.context;

	    ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY,
	                     smask.offsetX, smask.offsetY);

	    var backdrop = smask.backdrop || null;
	    if (!smask.transferMap && WebGLUtils.isEnabled) {
	      var composed = WebGLUtils.composeSMask(layerCtx.canvas, mask,
	        {subtype: smask.subtype, backdrop: backdrop});
	      ctx.setTransform(1, 0, 0, 1, 0, 0);
	      ctx.drawImage(composed, smask.offsetX, smask.offsetY);
	      return;
	    }
	    genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height,
	                        smask.subtype, backdrop, smask.transferMap);
	    ctx.drawImage(mask, 0, 0);
	  }

	  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
	  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
	  var NORMAL_CLIP = {};
	  var EO_CLIP = {};

	  CanvasGraphics.prototype = {

	    beginDrawing: function CanvasGraphics_beginDrawing(transform, viewport,
	                                                       transparency) {
	      // For pdfs that use blend modes we have to clear the canvas else certain
	      // blend modes can look wrong since we'd be blending with a white
	      // backdrop. The problem with a transparent backdrop though is we then
	      // don't get sub pixel anti aliasing on text, creating temporary
	      // transparent canvas when we have blend modes.
	      var width = this.ctx.canvas.width;
	      var height = this.ctx.canvas.height;

	      this.ctx.save();
	      this.ctx.fillStyle = 'rgb(255, 255, 255)';
	      this.ctx.fillRect(0, 0, width, height);
	      this.ctx.restore();

	      if (transparency) {
	        var transparentCanvas = this.cachedCanvases.getCanvas(
	          'transparent', width, height, true);
	        this.compositeCtx = this.ctx;
	        this.transparentCanvas = transparentCanvas.canvas;
	        this.ctx = transparentCanvas.context;
	        this.ctx.save();
	        // The transform can be applied before rendering, transferring it to
	        // the new canvas.
	        this.ctx.transform.apply(this.ctx,
	                                 this.compositeCtx.mozCurrentTransform);
	      }

	      this.ctx.save();
	      if (transform) {
	        this.ctx.transform.apply(this.ctx, transform);
	      }
	      this.ctx.transform.apply(this.ctx, viewport.transform);

	      this.baseTransform = this.ctx.mozCurrentTransform.slice();

	      if (this.imageLayer) {
	        this.imageLayer.beginLayout();
	      }
	    },

	    executeOperatorList: function CanvasGraphics_executeOperatorList(
	                                    operatorList,
	                                    executionStartIdx, continueCallback,
	                                    stepper) {
	      var argsArray = operatorList.argsArray;
	      var fnArray = operatorList.fnArray;
	      var i = executionStartIdx || 0;
	      var argsArrayLen = argsArray.length;

	      // Sometimes the OperatorList to execute is empty.
	      if (argsArrayLen === i) {
	        return i;
	      }

	      var chunkOperations = (argsArrayLen - i > EXECUTION_STEPS &&
	                             typeof continueCallback === 'function');
	      var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
	      var steps = 0;

	      var commonObjs = this.commonObjs;
	      var objs = this.objs;
	      var fnId;

	      while (true) {
	        if (stepper !== undefined && i === stepper.nextBreakPoint) {
	          stepper.breakIt(i, continueCallback);
	          return i;
	        }

	        fnId = fnArray[i];

	        if (fnId !== OPS.dependency) {
	          this[fnId].apply(this, argsArray[i]);
	        } else {
	          var deps = argsArray[i];
	          for (var n = 0, nn = deps.length; n < nn; n++) {
	            var depObjId = deps[n];
	            var common = depObjId[0] === 'g' && depObjId[1] === '_';
	            var objsPool = common ? commonObjs : objs;

	            // If the promise isn't resolved yet, add the continueCallback
	            // to the promise and bail out.
	            if (!objsPool.isResolved(depObjId)) {
	              objsPool.get(depObjId, continueCallback);
	              return i;
	            }
	          }
	        }

	        i++;

	        // If the entire operatorList was executed, stop as were done.
	        if (i === argsArrayLen) {
	          return i;
	        }

	        // If the execution took longer then a certain amount of time and
	        // `continueCallback` is specified, interrupt the execution.
	        if (chunkOperations && ++steps > EXECUTION_STEPS) {
	          if (Date.now() > endTime) {
	            continueCallback();
	            return i;
	          }
	          steps = 0;
	        }

	        // If the operatorList isn't executed completely yet OR the execution
	        // time was short enough, do another execution round.
	      }
	    },

	    endDrawing: function CanvasGraphics_endDrawing() {
	      // Finishing all opened operations such as SMask group painting.
	      if (this.current.activeSMask !== null) {
	        this.endSMaskGroup();
	      }

	      this.ctx.restore();

	      if (this.transparentCanvas) {
	        this.ctx = this.compositeCtx;
	        this.ctx.save();
	        this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Avoid apply transform twice
	        this.ctx.drawImage(this.transparentCanvas, 0, 0);
	        this.ctx.restore();
	        this.transparentCanvas = null;
	      }

	      this.cachedCanvases.clear();
	      WebGLUtils.clear();

	      if (this.imageLayer) {
	        this.imageLayer.endLayout();
	      }
	    },

	    // Graphics state
	    setLineWidth: function CanvasGraphics_setLineWidth(width) {
	      this.current.lineWidth = width;
	      this.ctx.lineWidth = width;
	    },
	    setLineCap: function CanvasGraphics_setLineCap(style) {
	      this.ctx.lineCap = LINE_CAP_STYLES[style];
	    },
	    setLineJoin: function CanvasGraphics_setLineJoin(style) {
	      this.ctx.lineJoin = LINE_JOIN_STYLES[style];
	    },
	    setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
	      this.ctx.miterLimit = limit;
	    },
	    setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
	      var ctx = this.ctx;
	      if (ctx.setLineDash !== undefined) {
	        ctx.setLineDash(dashArray);
	        ctx.lineDashOffset = dashPhase;
	      }
	    },
	    setRenderingIntent: function CanvasGraphics_setRenderingIntent(intent) {
	      // Maybe if we one day fully support color spaces this will be important
	      // for now we can ignore.
	      // TODO set rendering intent?
	    },
	    setFlatness: function CanvasGraphics_setFlatness(flatness) {
	      // There's no way to control this with canvas, but we can safely ignore.
	      // TODO set flatness?
	    },
	    setGState: function CanvasGraphics_setGState(states) {
	      for (var i = 0, ii = states.length; i < ii; i++) {
	        var state = states[i];
	        var key = state[0];
	        var value = state[1];

	        switch (key) {
	          case 'LW':
	            this.setLineWidth(value);
	            break;
	          case 'LC':
	            this.setLineCap(value);
	            break;
	          case 'LJ':
	            this.setLineJoin(value);
	            break;
	          case 'ML':
	            this.setMiterLimit(value);
	            break;
	          case 'D':
	            this.setDash(value[0], value[1]);
	            break;
	          case 'RI':
	            this.setRenderingIntent(value);
	            break;
	          case 'FL':
	            this.setFlatness(value);
	            break;
	          case 'Font':
	            this.setFont(value[0], value[1]);
	            break;
	          case 'CA':
	            this.current.strokeAlpha = state[1];
	            break;
	          case 'ca':
	            this.current.fillAlpha = state[1];
	            this.ctx.globalAlpha = state[1];
	            break;
	          case 'BM':
	            if (value && value.name && (value.name !== 'Normal')) {
	              var mode = value.name.replace(/([A-Z])/g,
	                function(c) {
	                  return '-' + c.toLowerCase();
	                }
	              ).substring(1);
	              this.ctx.globalCompositeOperation = mode;
	              if (this.ctx.globalCompositeOperation !== mode) {
	                warn('globalCompositeOperation "' + mode +
	                     '" is not supported');
	              }
	            } else {
	              this.ctx.globalCompositeOperation = 'source-over';
	            }
	            break;
	          case 'SMask':
	            if (this.current.activeSMask) {
	              // If SMask is currrenly used, it needs to be suspended or
	              // finished. Suspend only makes sense when at least one save()
	              // was performed and state needs to be reverted on restore().
	              if (this.stateStack.length > 0 &&
	                  (this.stateStack[this.stateStack.length - 1].activeSMask ===
	                   this.current.activeSMask)) {
	                this.suspendSMaskGroup();
	              } else {
	                this.endSMaskGroup();
	              }
	            }
	            this.current.activeSMask = value ? this.tempSMask : null;
	            if (this.current.activeSMask) {
	              this.beginSMaskGroup();
	            }
	            this.tempSMask = null;
	            break;
	        }
	      }
	    },
	    beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {

	      var activeSMask = this.current.activeSMask;
	      var drawnWidth = activeSMask.canvas.width;
	      var drawnHeight = activeSMask.canvas.height;
	      var cacheId = 'smaskGroupAt' + this.groupLevel;
	      var scratchCanvas = this.cachedCanvases.getCanvas(
	        cacheId, drawnWidth, drawnHeight, true);

	      var currentCtx = this.ctx;
	      var currentTransform = currentCtx.mozCurrentTransform;
	      this.ctx.save();

	      var groupCtx = scratchCanvas.context;
	      groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
	      groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
	      groupCtx.transform.apply(groupCtx, currentTransform);

	      activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;

	      copyCtxState(currentCtx, groupCtx);
	      this.ctx = groupCtx;
	      this.setGState([
	        ['BM', 'Normal'],
	        ['ca', 1],
	        ['CA', 1]
	      ]);
	      this.groupStack.push(currentCtx);
	      this.groupLevel++;
	    },
	    suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
	      // Similar to endSMaskGroup, the intermediate canvas has to be composed
	      // and future ctx state restored.
	      var groupCtx = this.ctx;
	      this.groupLevel--;
	      this.ctx = this.groupStack.pop();

	      composeSMask(this.ctx, this.current.activeSMask, groupCtx);
	      this.ctx.restore();
	      this.ctx.save(); // save is needed since SMask will be resumed.
	      copyCtxState(groupCtx, this.ctx);

	      // Saving state for resuming.
	      this.current.resumeSMaskCtx = groupCtx;
	      // Transform was changed in the SMask canvas, reflecting this change on
	      // this.ctx.
	      var deltaTransform = Util.transform(
	        this.current.activeSMask.startTransformInverse,
	        groupCtx.mozCurrentTransform);
	      this.ctx.transform.apply(this.ctx, deltaTransform);

	      // SMask was composed, the results at the groupCtx can be cleared.
	      groupCtx.save();
	      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
	      groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
	      groupCtx.restore();
	    },
	    resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
	      // Resuming state saved by suspendSMaskGroup. We don't need to restore
	      // any groupCtx state since restore() command (the only caller) will do
	      // that for us. See also beginSMaskGroup.
	      var groupCtx = this.current.resumeSMaskCtx;
	      var currentCtx = this.ctx;
	      this.ctx = groupCtx;
	      this.groupStack.push(currentCtx);
	      this.groupLevel++;
	    },
	    endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
	      var groupCtx = this.ctx;
	      this.groupLevel--;
	      this.ctx = this.groupStack.pop();

	      composeSMask(this.ctx, this.current.activeSMask, groupCtx);
	      this.ctx.restore();
	      copyCtxState(groupCtx, this.ctx);
	      // Transform was changed in the SMask canvas, reflecting this change on
	      // this.ctx.
	      var deltaTransform = Util.transform(
	        this.current.activeSMask.startTransformInverse,
	        groupCtx.mozCurrentTransform);
	      this.ctx.transform.apply(this.ctx, deltaTransform);
	    },
	    save: function CanvasGraphics_save() {
	      this.ctx.save();
	      var old = this.current;
	      this.stateStack.push(old);
	      this.current = old.clone();
	      this.current.resumeSMaskCtx = null;
	    },
	    restore: function CanvasGraphics_restore() {
	      // SMask was suspended, we just need to resume it.
	      if (this.current.resumeSMaskCtx) {
	        this.resumeSMaskGroup();
	      }
	      // SMask has to be finished once there is no states that are using the
	      // same SMask.
	      if (this.current.activeSMask !== null && (this.stateStack.length === 0 ||
	          this.stateStack[this.stateStack.length - 1].activeSMask !==
	          this.current.activeSMask)) {
	        this.endSMaskGroup();
	      }

	      if (this.stateStack.length !== 0) {
	        this.current = this.stateStack.pop();
	        this.ctx.restore();

	        // Ensure that the clipping path is reset (fixes issue6413.pdf).
	        this.pendingClip = null;

	        this.cachedGetSinglePixelWidth = null;
	      }
	    },
	    transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
	      this.ctx.transform(a, b, c, d, e, f);

	      this.cachedGetSinglePixelWidth = null;
	    },

	    // Path
	    constructPath: function CanvasGraphics_constructPath(ops, args) {
	      var ctx = this.ctx;
	      var current = this.current;
	      var x = current.x, y = current.y;
	      for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
	        switch (ops[i] | 0) {
	          case OPS.rectangle:
	            x = args[j++];
	            y = args[j++];
	            var width = args[j++];
	            var height = args[j++];
	            if (width === 0) {
	              width = this.getSinglePixelWidth();
	            }
	            if (height === 0) {
	              height = this.getSinglePixelWidth();
	            }
	            var xw = x + width;
	            var yh = y + height;
	            this.ctx.moveTo(x, y);
	            this.ctx.lineTo(xw, y);
	            this.ctx.lineTo(xw, yh);
	            this.ctx.lineTo(x, yh);
	            this.ctx.lineTo(x, y);
	            this.ctx.closePath();
	            break;
	          case OPS.moveTo:
	            x = args[j++];
	            y = args[j++];
	            ctx.moveTo(x, y);
	            break;
	          case OPS.lineTo:
	            x = args[j++];
	            y = args[j++];
	            ctx.lineTo(x, y);
	            break;
	          case OPS.curveTo:
	            x = args[j + 4];
	            y = args[j + 5];
	            ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3],
	                              x, y);
	            j += 6;
	            break;
	          case OPS.curveTo2:
	            ctx.bezierCurveTo(x, y, args[j], args[j + 1],
	                              args[j + 2], args[j + 3]);
	            x = args[j + 2];
	            y = args[j + 3];
	            j += 4;
	            break;
	          case OPS.curveTo3:
	            x = args[j + 2];
	            y = args[j + 3];
	            ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
	            j += 4;
	            break;
	          case OPS.closePath:
	            ctx.closePath();
	            break;
	        }
	      }
	      current.setCurrentPoint(x, y);
	    },
	    closePath: function CanvasGraphics_closePath() {
	      this.ctx.closePath();
	    },
	    stroke: function CanvasGraphics_stroke(consumePath) {
	      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
	      var ctx = this.ctx;
	      var strokeColor = this.current.strokeColor;
	      // Prevent drawing too thin lines by enforcing a minimum line width.
	      ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR,
	                               this.current.lineWidth);
	      // For stroke we want to temporarily change the global alpha to the
	      // stroking alpha.
	      ctx.globalAlpha = this.current.strokeAlpha;
	      if (strokeColor && strokeColor.hasOwnProperty('type') &&
	          strokeColor.type === 'Pattern') {
	        // for patterns, we transform to pattern space, calculate
	        // the pattern, call stroke, and restore to user space
	        ctx.save();
	        ctx.strokeStyle = strokeColor.getPattern(ctx, this);
	        ctx.stroke();
	        ctx.restore();
	      } else {
	        ctx.stroke();
	      }
	      if (consumePath) {
	        this.consumePath();
	      }
	      // Restore the global alpha to the fill alpha
	      ctx.globalAlpha = this.current.fillAlpha;
	    },
	    closeStroke: function CanvasGraphics_closeStroke() {
	      this.closePath();
	      this.stroke();
	    },
	    fill: function CanvasGraphics_fill(consumePath) {
	      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
	      var ctx = this.ctx;
	      var fillColor = this.current.fillColor;
	      var isPatternFill = this.current.patternFill;
	      var needRestore = false;

	      if (isPatternFill) {
	        ctx.save();
	        if (this.baseTransform) {
	          ctx.setTransform.apply(ctx, this.baseTransform);
	        }
	        ctx.fillStyle = fillColor.getPattern(ctx, this);
	        needRestore = true;
	      }

	      if (this.pendingEOFill) {
	        if (ctx.mozFillRule !== undefined) {
	          ctx.mozFillRule = 'evenodd';
	          ctx.fill();
	          ctx.mozFillRule = 'nonzero';
	        } else {
	          ctx.fill('evenodd');
	        }
	        this.pendingEOFill = false;
	      } else {
	        ctx.fill();
	      }

	      if (needRestore) {
	        ctx.restore();
	      }
	      if (consumePath) {
	        this.consumePath();
	      }
	    },
	    eoFill: function CanvasGraphics_eoFill() {
	      this.pendingEOFill = true;
	      this.fill();
	    },
	    fillStroke: function CanvasGraphics_fillStroke() {
	      this.fill(false);
	      this.stroke(false);

	      this.consumePath();
	    },
	    eoFillStroke: function CanvasGraphics_eoFillStroke() {
	      this.pendingEOFill = true;
	      this.fillStroke();
	    },
	    closeFillStroke: function CanvasGraphics_closeFillStroke() {
	      this.closePath();
	      this.fillStroke();
	    },
	    closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
	      this.pendingEOFill = true;
	      this.closePath();
	      this.fillStroke();
	    },
	    endPath: function CanvasGraphics_endPath() {
	      this.consumePath();
	    },

	    // Clipping
	    clip: function CanvasGraphics_clip() {
	      this.pendingClip = NORMAL_CLIP;
	    },
	    eoClip: function CanvasGraphics_eoClip() {
	      this.pendingClip = EO_CLIP;
	    },

	    // Text
	    beginText: function CanvasGraphics_beginText() {
	      this.current.textMatrix = IDENTITY_MATRIX;
	      this.current.textMatrixScale = 1;
	      this.current.x = this.current.lineX = 0;
	      this.current.y = this.current.lineY = 0;
	    },
	    endText: function CanvasGraphics_endText() {
	      var paths = this.pendingTextPaths;
	      var ctx = this.ctx;
	      if (paths === undefined) {
	        ctx.beginPath();
	        return;
	      }

	      ctx.save();
	      ctx.beginPath();
	      for (var i = 0; i < paths.length; i++) {
	        var path = paths[i];
	        ctx.setTransform.apply(ctx, path.transform);
	        ctx.translate(path.x, path.y);
	        path.addToPath(ctx, path.fontSize);
	      }
	      ctx.restore();
	      ctx.clip();
	      ctx.beginPath();
	      delete this.pendingTextPaths;
	    },
	    setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
	      this.current.charSpacing = spacing;
	    },
	    setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
	      this.current.wordSpacing = spacing;
	    },
	    setHScale: function CanvasGraphics_setHScale(scale) {
	      this.current.textHScale = scale / 100;
	    },
	    setLeading: function CanvasGraphics_setLeading(leading) {
	      this.current.leading = -leading;
	    },
	    setFont: function CanvasGraphics_setFont(fontRefName, size) {
	      var fontObj = this.commonObjs.get(fontRefName);
	      var current = this.current;

	      if (!fontObj) {
	        error('Can\'t find font for ' + fontRefName);
	      }

	      current.fontMatrix = (fontObj.fontMatrix ?
	                            fontObj.fontMatrix : FONT_IDENTITY_MATRIX);

	      // A valid matrix needs all main diagonal elements to be non-zero
	      // This also ensures we bypass FF bugzilla bug #719844.
	      if (current.fontMatrix[0] === 0 ||
	          current.fontMatrix[3] === 0) {
	        warn('Invalid font matrix for font ' + fontRefName);
	      }

	      // The spec for Tf (setFont) says that 'size' specifies the font 'scale',
	      // and in some docs this can be negative (inverted x-y axes).
	      if (size < 0) {
	        size = -size;
	        current.fontDirection = -1;
	      } else {
	        current.fontDirection = 1;
	      }

	      this.current.font = fontObj;
	      this.current.fontSize = size;

	      if (fontObj.isType3Font) {
	        return; // we don't need ctx.font for Type3 fonts
	      }

	      var name = fontObj.loadedName || 'sans-serif';
	      var bold = fontObj.black ? (fontObj.bold ? '900' : 'bold') :
	                                 (fontObj.bold ? 'bold' : 'normal');

	      var italic = fontObj.italic ? 'italic' : 'normal';
	      var typeface = '"' + name + '", ' + fontObj.fallbackName;

	      // Some font backends cannot handle fonts below certain size.
	      // Keeping the font at minimal size and using the fontSizeScale to change
	      // the current transformation matrix before the fillText/strokeText.
	      // See https://bugzilla.mozilla.org/show_bug.cgi?id=726227
	      var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE :
	                            size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
	      this.current.fontSizeScale = size / browserFontSize;

	      var rule = italic + ' ' + bold + ' ' + browserFontSize + 'px ' + typeface;
	      this.ctx.font = rule;
	    },
	    setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
	      this.current.textRenderingMode = mode;
	    },
	    setTextRise: function CanvasGraphics_setTextRise(rise) {
	      this.current.textRise = rise;
	    },
	    moveText: function CanvasGraphics_moveText(x, y) {
	      this.current.x = this.current.lineX += x;
	      this.current.y = this.current.lineY += y;
	    },
	    setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
	      this.setLeading(-y);
	      this.moveText(x, y);
	    },
	    setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
	      this.current.textMatrix = [a, b, c, d, e, f];
	      this.current.textMatrixScale = Math.sqrt(a * a + b * b);

	      this.current.x = this.current.lineX = 0;
	      this.current.y = this.current.lineY = 0;
	    },
	    nextLine: function CanvasGraphics_nextLine() {
	      this.moveText(0, this.current.leading);
	    },

	    paintChar: function CanvasGraphics_paintChar(character, x, y) {
	      var ctx = this.ctx;
	      var current = this.current;
	      var font = current.font;
	      var textRenderingMode = current.textRenderingMode;
	      var fontSize = current.fontSize / current.fontSizeScale;
	      var fillStrokeMode = textRenderingMode &
	        TextRenderingMode.FILL_STROKE_MASK;
	      var isAddToPathSet = !!(textRenderingMode &
	        TextRenderingMode.ADD_TO_PATH_FLAG);

	      var addToPath;
	      if (font.disableFontFace || isAddToPathSet) {
	        addToPath = font.getPathGenerator(this.commonObjs, character);
	      }

	      if (font.disableFontFace) {
	        ctx.save();
	        ctx.translate(x, y);
	        ctx.beginPath();
	        addToPath(ctx, fontSize);
	        if (fillStrokeMode === TextRenderingMode.FILL ||
	            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
	          ctx.fill();
	        }
	        if (fillStrokeMode === TextRenderingMode.STROKE ||
	            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
	          ctx.stroke();
	        }
	        ctx.restore();
	      } else {
	        if (fillStrokeMode === TextRenderingMode.FILL ||
	            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
	          ctx.fillText(character, x, y);
	        }
	        if (fillStrokeMode === TextRenderingMode.STROKE ||
	            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
	          ctx.strokeText(character, x, y);
	        }
	      }

	      if (isAddToPathSet) {
	        var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
	        paths.push({
	          transform: ctx.mozCurrentTransform,
	          x: x,
	          y: y,
	          fontSize: fontSize,
	          addToPath: addToPath
	        });
	      }
	    },

	    get isFontSubpixelAAEnabled() {
	      // Checks if anti-aliasing is enabled when scaled text is painted.
	      // On Windows GDI scaled fonts looks bad.
	      var ctx = document.createElement('canvas').getContext('2d');
	      ctx.scale(1.5, 1);
	      ctx.fillText('I', 0, 10);
	      var data = ctx.getImageData(0, 0, 10, 10).data;
	      var enabled = false;
	      for (var i = 3; i < data.length; i += 4) {
	        if (data[i] > 0 && data[i] < 255) {
	          enabled = true;
	          break;
	        }
	      }
	      return shadow(this, 'isFontSubpixelAAEnabled', enabled);
	    },

	    showText: function CanvasGraphics_showText(glyphs) {
	      var current = this.current;
	      var font = current.font;
	      if (font.isType3Font) {
	        return this.showType3Text(glyphs);
	      }

	      var fontSize = current.fontSize;
	      if (fontSize === 0) {
	        return;
	      }

	      var ctx = this.ctx;
	      var fontSizeScale = current.fontSizeScale;
	      var charSpacing = current.charSpacing;
	      var wordSpacing = current.wordSpacing;
	      var fontDirection = current.fontDirection;
	      var textHScale = current.textHScale * fontDirection;
	      var glyphsLength = glyphs.length;
	      var vertical = font.vertical;
	      var spacingDir = vertical ? 1 : -1;
	      var defaultVMetrics = font.defaultVMetrics;
	      var widthAdvanceScale = fontSize * current.fontMatrix[0];

	      var simpleFillText =
	        current.textRenderingMode === TextRenderingMode.FILL &&
	        !font.disableFontFace;

	      ctx.save();
	      ctx.transform.apply(ctx, current.textMatrix);
	      ctx.translate(current.x, current.y + current.textRise);

	      if (current.patternFill) {
	        // TODO: Some shading patterns are not applied correctly to text,
	        //       e.g. issues 3988 and 5432, and ShowText-ShadingPattern.pdf.
	        ctx.fillStyle = current.fillColor.getPattern(ctx, this);
	      }

	      if (fontDirection > 0) {
	        ctx.scale(textHScale, -1);
	      } else {
	        ctx.scale(textHScale, 1);
	      }

	      var lineWidth = current.lineWidth;
	      var scale = current.textMatrixScale;
	      if (scale === 0 || lineWidth === 0) {
	        var fillStrokeMode = current.textRenderingMode &
	          TextRenderingMode.FILL_STROKE_MASK;
	        if (fillStrokeMode === TextRenderingMode.STROKE ||
	            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
	          this.cachedGetSinglePixelWidth = null;
	          lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
	        }
	      } else {
	        lineWidth /= scale;
	      }

	      if (fontSizeScale !== 1.0) {
	        ctx.scale(fontSizeScale, fontSizeScale);
	        lineWidth /= fontSizeScale;
	      }

	      ctx.lineWidth = lineWidth;

	      var x = 0, i;
	      for (i = 0; i < glyphsLength; ++i) {
	        var glyph = glyphs[i];
	        if (isNum(glyph)) {
	          x += spacingDir * glyph * fontSize / 1000;
	          continue;
	        }

	        var restoreNeeded = false;
	        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
	        var character = glyph.fontChar;
	        var accent = glyph.accent;
	        var scaledX, scaledY, scaledAccentX, scaledAccentY;
	        var width = glyph.width;
	        if (vertical) {
	          var vmetric, vx, vy;
	          vmetric = glyph.vmetric || defaultVMetrics;
	          vx = glyph.vmetric ? vmetric[1] : width * 0.5;
	          vx = -vx * widthAdvanceScale;
	          vy = vmetric[2] * widthAdvanceScale;

	          width = vmetric ? -vmetric[0] : width;
	          scaledX = vx / fontSizeScale;
	          scaledY = (x + vy) / fontSizeScale;
	        } else {
	          scaledX = x / fontSizeScale;
	          scaledY = 0;
	        }

	        if (font.remeasure && width > 0) {
	          // Some standard fonts may not have the exact width: rescale per
	          // character if measured width is greater than expected glyph width
	          // and subpixel-aa is enabled, otherwise just center the glyph.
	          var measuredWidth = ctx.measureText(character).width * 1000 /
	            fontSize * fontSizeScale;
	          if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
	            var characterScaleX = width / measuredWidth;
	            restoreNeeded = true;
	            ctx.save();
	            ctx.scale(characterScaleX, 1);
	            scaledX /= characterScaleX;
	          } else if (width !== measuredWidth) {
	            scaledX += (width - measuredWidth) / 2000 *
	              fontSize / fontSizeScale;
	          }
	        }

	        // Only attempt to draw the glyph if it is actually in the embedded font
	        // file or if there isn't a font file so the fallback font is shown.
	        if (glyph.isInFont || font.missingFile) {
	          if (simpleFillText && !accent) {
	            // common case
	            ctx.fillText(character, scaledX, scaledY);
	          } else {
	            this.paintChar(character, scaledX, scaledY);
	            if (accent) {
	              scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
	              scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
	              this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY);
	            }
	          }
	        }

	        var charWidth = width * widthAdvanceScale + spacing * fontDirection;
	        x += charWidth;

	        if (restoreNeeded) {
	          ctx.restore();
	        }
	      }
	      if (vertical) {
	        current.y -= x * textHScale;
	      } else {
	        current.x += x * textHScale;
	      }
	      ctx.restore();
	    },

	    showType3Text: function CanvasGraphics_showType3Text(glyphs) {
	      // Type3 fonts - each glyph is a "mini-PDF"
	      var ctx = this.ctx;
	      var current = this.current;
	      var font = current.font;
	      var fontSize = current.fontSize;
	      var fontDirection = current.fontDirection;
	      var spacingDir = font.vertical ? 1 : -1;
	      var charSpacing = current.charSpacing;
	      var wordSpacing = current.wordSpacing;
	      var textHScale = current.textHScale * fontDirection;
	      var fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
	      var glyphsLength = glyphs.length;
	      var isTextInvisible =
	        current.textRenderingMode === TextRenderingMode.INVISIBLE;
	      var i, glyph, width, spacingLength;

	      if (isTextInvisible || fontSize === 0) {
	        return;
	      }
	      this.cachedGetSinglePixelWidth = null;

	      ctx.save();
	      ctx.transform.apply(ctx, current.textMatrix);
	      ctx.translate(current.x, current.y);

	      ctx.scale(textHScale, fontDirection);

	      for (i = 0; i < glyphsLength; ++i) {
	        glyph = glyphs[i];
	        if (isNum(glyph)) {
	          spacingLength = spacingDir * glyph * fontSize / 1000;
	          this.ctx.translate(spacingLength, 0);
	          current.x += spacingLength * textHScale;
	          continue;
	        }

	        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
	        var operatorList = font.charProcOperatorList[glyph.operatorListId];
	        if (!operatorList) {
	          warn('Type3 character \"' + glyph.operatorListId +
	               '\" is not available');
	          continue;
	        }
	        this.processingType3 = glyph;
	        this.save();
	        ctx.scale(fontSize, fontSize);
	        ctx.transform.apply(ctx, fontMatrix);
	        this.executeOperatorList(operatorList);
	        this.restore();

	        var transformed = Util.applyTransform([glyph.width, 0], fontMatrix);
	        width = transformed[0] * fontSize + spacing;

	        ctx.translate(width, 0);
	        current.x += width * textHScale;
	      }
	      ctx.restore();
	      this.processingType3 = null;
	    },

	    // Type3 fonts
	    setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {
	      // We can safely ignore this since the width should be the same
	      // as the width in the Widths array.
	    },
	    setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth,
	                                                                        yWidth,
	                                                                        llx,
	                                                                        lly,
	                                                                        urx,
	                                                                        ury) {
	      // TODO According to the spec we're also suppose to ignore any operators
	      // that set color or include images while processing this type3 font.
	      this.ctx.rect(llx, lly, urx - llx, ury - lly);
	      this.clip();
	      this.endPath();
	    },

	    // Color
	    getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
	      var pattern;
	      if (IR[0] === 'TilingPattern') {
	        var color = IR[1];
	        var baseTransform = this.baseTransform ||
	                            this.ctx.mozCurrentTransform.slice();
	        var self = this;
	        var canvasGraphicsFactory = {
	          createCanvasGraphics: function (ctx) {
	            return new CanvasGraphics(ctx, self.commonObjs, self.objs);
	          }
	        };
	        pattern = new TilingPattern(IR, color, this.ctx, canvasGraphicsFactory,
	                                    baseTransform);
	      } else {
	        pattern = getShadingPatternFromIR(IR);
	      }
	      return pattern;
	    },
	    setStrokeColorN: function CanvasGraphics_setStrokeColorN(/*...*/) {
	      this.current.strokeColor = this.getColorN_Pattern(arguments);
	    },
	    setFillColorN: function CanvasGraphics_setFillColorN(/*...*/) {
	      this.current.fillColor = this.getColorN_Pattern(arguments);
	      this.current.patternFill = true;
	    },
	    setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
	      var color = Util.makeCssRgb(r, g, b);
	      this.ctx.strokeStyle = color;
	      this.current.strokeColor = color;
	    },
	    setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
	      var color = Util.makeCssRgb(r, g, b);
	      this.ctx.fillStyle = color;
	      this.current.fillColor = color;
	      this.current.patternFill = false;
	    },

	    shadingFill: function CanvasGraphics_shadingFill(patternIR) {
	      var ctx = this.ctx;

	      this.save();
	      var pattern = getShadingPatternFromIR(patternIR);
	      ctx.fillStyle = pattern.getPattern(ctx, this, true);

	      var inv = ctx.mozCurrentTransformInverse;
	      if (inv) {
	        var canvas = ctx.canvas;
	        var width = canvas.width;
	        var height = canvas.height;

	        var bl = Util.applyTransform([0, 0], inv);
	        var br = Util.applyTransform([0, height], inv);
	        var ul = Util.applyTransform([width, 0], inv);
	        var ur = Util.applyTransform([width, height], inv);

	        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
	        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
	        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
	        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);

	        this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
	      } else {
	        // HACK to draw the gradient onto an infinite rectangle.
	        // PDF gradients are drawn across the entire image while
	        // Canvas only allows gradients to be drawn in a rectangle
	        // The following bug should allow us to remove this.
	        // https://bugzilla.mozilla.org/show_bug.cgi?id=664884

	        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
	      }

	      this.restore();
	    },

	    // Images
	    beginInlineImage: function CanvasGraphics_beginInlineImage() {
	      error('Should not call beginInlineImage');
	    },
	    beginImageData: function CanvasGraphics_beginImageData() {
	      error('Should not call beginImageData');
	    },

	    paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix,
	                                                                        bbox) {
	      this.save();
	      this.baseTransformStack.push(this.baseTransform);

	      if (isArray(matrix) && 6 === matrix.length) {
	        this.transform.apply(this, matrix);
	      }

	      this.baseTransform = this.ctx.mozCurrentTransform;

	      if (isArray(bbox) && 4 === bbox.length) {
	        var width = bbox[2] - bbox[0];
	        var height = bbox[3] - bbox[1];
	        this.ctx.rect(bbox[0], bbox[1], width, height);
	        this.clip();
	        this.endPath();
	      }
	    },

	    paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
	      this.restore();
	      this.baseTransform = this.baseTransformStack.pop();
	    },

	    beginGroup: function CanvasGraphics_beginGroup(group) {
	      this.save();
	      var currentCtx = this.ctx;
	      // TODO non-isolated groups - according to Rik at adobe non-isolated
	      // group results aren't usually that different and they even have tools
	      // that ignore this setting. Notes from Rik on implementing:
	      // - When you encounter an transparency group, create a new canvas with
	      // the dimensions of the bbox
	      // - copy the content from the previous canvas to the new canvas
	      // - draw as usual
	      // - remove the backdrop alpha:
	      // alphaNew = 1 - (1 - alpha)/(1 - alphaBackdrop) with 'alpha' the alpha
	      // value of your transparency group and 'alphaBackdrop' the alpha of the
	      // backdrop
	      // - remove background color:
	      // colorNew = color - alphaNew *colorBackdrop /(1 - alphaNew)
	      if (!group.isolated) {
	        info('TODO: Support non-isolated groups.');
	      }

	      // TODO knockout - supposedly possible with the clever use of compositing
	      // modes.
	      if (group.knockout) {
	        warn('Knockout groups not supported.');
	      }

	      var currentTransform = currentCtx.mozCurrentTransform;
	      if (group.matrix) {
	        currentCtx.transform.apply(currentCtx, group.matrix);
	      }
	      assert(group.bbox, 'Bounding box is required.');

	      // Based on the current transform figure out how big the bounding box
	      // will actually be.
	      var bounds = Util.getAxialAlignedBoundingBox(
	                    group.bbox,
	                    currentCtx.mozCurrentTransform);
	      // Clip the bounding box to the current canvas.
	      var canvasBounds = [0,
	                          0,
	                          currentCtx.canvas.width,
	                          currentCtx.canvas.height];
	      bounds = Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
	      // Use ceil in case we're between sizes so we don't create canvas that is
	      // too small and make the canvas at least 1x1 pixels.
	      var offsetX = Math.floor(bounds[0]);
	      var offsetY = Math.floor(bounds[1]);
	      var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
	      var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
	      var scaleX = 1, scaleY = 1;
	      if (drawnWidth > MAX_GROUP_SIZE) {
	        scaleX = drawnWidth / MAX_GROUP_SIZE;
	        drawnWidth = MAX_GROUP_SIZE;
	      }
	      if (drawnHeight > MAX_GROUP_SIZE) {
	        scaleY = drawnHeight / MAX_GROUP_SIZE;
	        drawnHeight = MAX_GROUP_SIZE;
	      }

	      var cacheId = 'groupAt' + this.groupLevel;
	      if (group.smask) {
	        // Using two cache entries is case if masks are used one after another.
	        cacheId +=  '_smask_' + ((this.smaskCounter++) % 2);
	      }
	      var scratchCanvas = this.cachedCanvases.getCanvas(
	        cacheId, drawnWidth, drawnHeight, true);
	      var groupCtx = scratchCanvas.context;

	      // Since we created a new canvas that is just the size of the bounding box
	      // we have to translate the group ctx.
	      groupCtx.scale(1 / scaleX, 1 / scaleY);
	      groupCtx.translate(-offsetX, -offsetY);
	      groupCtx.transform.apply(groupCtx, currentTransform);

	      if (group.smask) {
	        // Saving state and cached mask to be used in setGState.
	        this.smaskStack.push({
	          canvas: scratchCanvas.canvas,
	          context: groupCtx,
	          offsetX: offsetX,
	          offsetY: offsetY,
	          scaleX: scaleX,
	          scaleY: scaleY,
	          subtype: group.smask.subtype,
	          backdrop: group.smask.backdrop,
	          transferMap: group.smask.transferMap || null,
	          startTransformInverse: null, // used during suspend operation
	        });
	      } else {
	        // Setup the current ctx so when the group is popped we draw it at the
	        // right location.
	        currentCtx.setTransform(1, 0, 0, 1, 0, 0);
	        currentCtx.translate(offsetX, offsetY);
	        currentCtx.scale(scaleX, scaleY);
	      }
	      // The transparency group inherits all off the current graphics state
	      // except the blend mode, soft mask, and alpha constants.
	      copyCtxState(currentCtx, groupCtx);
	      this.ctx = groupCtx;
	      this.setGState([
	        ['BM', 'Normal'],
	        ['ca', 1],
	        ['CA', 1]
	      ]);
	      this.groupStack.push(currentCtx);
	      this.groupLevel++;

	      // Reseting mask state, masks will be applied on restore of the group.
	      this.current.activeSMask = null;
	    },

	    endGroup: function CanvasGraphics_endGroup(group) {
	      this.groupLevel--;
	      var groupCtx = this.ctx;
	      this.ctx = this.groupStack.pop();
	      // Turn off image smoothing to avoid sub pixel interpolation which can
	      // look kind of blurry for some pdfs.
	      if (this.ctx.imageSmoothingEnabled !== undefined) {
	        this.ctx.imageSmoothingEnabled = false;
	      } else {
	        this.ctx.mozImageSmoothingEnabled = false;
	      }
	      if (group.smask) {
	        this.tempSMask = this.smaskStack.pop();
	      } else {
	        this.ctx.drawImage(groupCtx.canvas, 0, 0);
	      }
	      this.restore();
	    },

	    beginAnnotations: function CanvasGraphics_beginAnnotations() {
	      this.save();
	      this.current = new CanvasExtraState();

	      if (this.baseTransform) {
	        this.ctx.setTransform.apply(this.ctx, this.baseTransform);
	      }
	    },

	    endAnnotations: function CanvasGraphics_endAnnotations() {
	      this.restore();
	    },

	    beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform,
	                                                             matrix) {
	      this.save();

	      if (isArray(rect) && 4 === rect.length) {
	        var width = rect[2] - rect[0];
	        var height = rect[3] - rect[1];
	        this.ctx.rect(rect[0], rect[1], width, height);
	        this.clip();
	        this.endPath();
	      }

	      this.transform.apply(this, transform);
	      this.transform.apply(this, matrix);
	    },

	    endAnnotation: function CanvasGraphics_endAnnotation() {
	      this.restore();
	    },

	    paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
	      var domImage = this.objs.get(objId);
	      if (!domImage) {
	        warn('Dependent image isn\'t ready yet');
	        return;
	      }

	      this.save();

	      var ctx = this.ctx;
	      // scale the image to the unit square
	      ctx.scale(1 / w, -1 / h);

	      ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height,
	                    0, -h, w, h);
	      if (this.imageLayer) {
	        var currentTransform = ctx.mozCurrentTransformInverse;
	        var position = this.getCanvasPosition(0, 0);
	        this.imageLayer.appendImage({
	          objId: objId,
	          left: position[0],
	          top: position[1],
	          width: w / currentTransform[0],
	          height: h / currentTransform[3]
	        });
	      }
	      this.restore();
	    },

	    paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
	      var ctx = this.ctx;
	      var width = img.width, height = img.height;
	      var fillColor = this.current.fillColor;
	      var isPatternFill = this.current.patternFill;

	      var glyph = this.processingType3;

	      if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
	        if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
	          glyph.compiled =
	            compileType3Glyph({data: img.data, width: width, height: height});
	        } else {
	          glyph.compiled = null;
	        }
	      }

	      if (glyph && glyph.compiled) {
	        glyph.compiled(ctx);
	        return;
	      }

	      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas',
	                                                     width, height);
	      var maskCtx = maskCanvas.context;
	      maskCtx.save();

	      putBinaryImageMask(maskCtx, img);

	      maskCtx.globalCompositeOperation = 'source-in';

	      maskCtx.fillStyle = isPatternFill ?
	                          fillColor.getPattern(maskCtx, this) : fillColor;
	      maskCtx.fillRect(0, 0, width, height);

	      maskCtx.restore();

	      this.paintInlineImageXObject(maskCanvas.canvas);
	    },

	    paintImageMaskXObjectRepeat:
	      function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX,
	                                                          scaleY, positions) {
	      var width = imgData.width;
	      var height = imgData.height;
	      var fillColor = this.current.fillColor;
	      var isPatternFill = this.current.patternFill;

	      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas',
	                                                     width, height);
	      var maskCtx = maskCanvas.context;
	      maskCtx.save();

	      putBinaryImageMask(maskCtx, imgData);

	      maskCtx.globalCompositeOperation = 'source-in';

	      maskCtx.fillStyle = isPatternFill ?
	                          fillColor.getPattern(maskCtx, this) : fillColor;
	      maskCtx.fillRect(0, 0, width, height);

	      maskCtx.restore();

	      var ctx = this.ctx;
	      for (var i = 0, ii = positions.length; i < ii; i += 2) {
	        ctx.save();
	        ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
	        ctx.scale(1, -1);
	        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height,
	          0, -1, 1, 1);
	        ctx.restore();
	      }
	    },

	    paintImageMaskXObjectGroup:
	      function CanvasGraphics_paintImageMaskXObjectGroup(images) {
	      var ctx = this.ctx;

	      var fillColor = this.current.fillColor;
	      var isPatternFill = this.current.patternFill;
	      for (var i = 0, ii = images.length; i < ii; i++) {
	        var image = images[i];
	        var width = image.width, height = image.height;

	        var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas',
	                                                       width, height);
	        var maskCtx = maskCanvas.context;
	        maskCtx.save();

	        putBinaryImageMask(maskCtx, image);

	        maskCtx.globalCompositeOperation = 'source-in';

	        maskCtx.fillStyle = isPatternFill ?
	                            fillColor.getPattern(maskCtx, this) : fillColor;
	        maskCtx.fillRect(0, 0, width, height);

	        maskCtx.restore();

	        ctx.save();
	        ctx.transform.apply(ctx, image.transform);
	        ctx.scale(1, -1);
	        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height,
	                      0, -1, 1, 1);
	        ctx.restore();
	      }
	    },

	    paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
	      var imgData = this.objs.get(objId);
	      if (!imgData) {
	        warn('Dependent image isn\'t ready yet');
	        return;
	      }

	      this.paintInlineImageXObject(imgData);
	    },

	    paintImageXObjectRepeat:
	      function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY,
	                                                          positions) {
	      var imgData = this.objs.get(objId);
	      if (!imgData) {
	        warn('Dependent image isn\'t ready yet');
	        return;
	      }

	      var width = imgData.width;
	      var height = imgData.height;
	      var map = [];
	      for (var i = 0, ii = positions.length; i < ii; i += 2) {
	        map.push({transform: [scaleX, 0, 0, scaleY, positions[i],
	                 positions[i + 1]], x: 0, y: 0, w: width, h: height});
	      }
	      this.paintInlineImageXObjectGroup(imgData, map);
	    },

	    paintInlineImageXObject:
	      function CanvasGraphics_paintInlineImageXObject(imgData) {
	      var width = imgData.width;
	      var height = imgData.height;
	      var ctx = this.ctx;

	      this.save();
	      // scale the image to the unit square
	      ctx.scale(1 / width, -1 / height);

	      var currentTransform = ctx.mozCurrentTransformInverse;
	      var a = currentTransform[0], b = currentTransform[1];
	      var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
	      var c = currentTransform[2], d = currentTransform[3];
	      var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);

	      var imgToPaint, tmpCanvas;
	      // instanceof HTMLElement does not work in jsdom node.js module
	      if (imgData instanceof HTMLElement || !imgData.data) {
	        imgToPaint = imgData;
	      } else {
	        tmpCanvas = this.cachedCanvases.getCanvas('inlineImage',
	                                                  width, height);
	        var tmpCtx = tmpCanvas.context;
	        putBinaryImageData(tmpCtx, imgData);
	        imgToPaint = tmpCanvas.canvas;
	      }

	      var paintWidth = width, paintHeight = height;
	      var tmpCanvasId = 'prescale1';
	      // Vertial or horizontal scaling shall not be more than 2 to not loose the
	      // pixels during drawImage operation, painting on the temporary canvas(es)
	      // that are twice smaller in size
	      while ((widthScale > 2 && paintWidth > 1) ||
	             (heightScale > 2 && paintHeight > 1)) {
	        var newWidth = paintWidth, newHeight = paintHeight;
	        if (widthScale > 2 && paintWidth > 1) {
	          newWidth = Math.ceil(paintWidth / 2);
	          widthScale /= paintWidth / newWidth;
	        }
	        if (heightScale > 2 && paintHeight > 1) {
	          newHeight = Math.ceil(paintHeight / 2);
	          heightScale /= paintHeight / newHeight;
	        }
	        tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId,
	                                                  newWidth, newHeight);
	        tmpCtx = tmpCanvas.context;
	        tmpCtx.clearRect(0, 0, newWidth, newHeight);
	        tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight,
	                                     0, 0, newWidth, newHeight);
	        imgToPaint = tmpCanvas.canvas;
	        paintWidth = newWidth;
	        paintHeight = newHeight;
	        tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
	      }
	      ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight,
	                                0, -height, width, height);

	      if (this.imageLayer) {
	        var position = this.getCanvasPosition(0, -height);
	        this.imageLayer.appendImage({
	          imgData: imgData,
	          left: position[0],
	          top: position[1],
	          width: width / currentTransform[0],
	          height: height / currentTransform[3]
	        });
	      }
	      this.restore();
	    },

	    paintInlineImageXObjectGroup:
	      function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
	      var ctx = this.ctx;
	      var w = imgData.width;
	      var h = imgData.height;

	      var tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
	      var tmpCtx = tmpCanvas.context;
	      putBinaryImageData(tmpCtx, imgData);

	      for (var i = 0, ii = map.length; i < ii; i++) {
	        var entry = map[i];
	        ctx.save();
	        ctx.transform.apply(ctx, entry.transform);
	        ctx.scale(1, -1);
	        ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h,
	                      0, -1, 1, 1);
	        if (this.imageLayer) {
	          var position = this.getCanvasPosition(entry.x, entry.y);
	          this.imageLayer.appendImage({
	            imgData: imgData,
	            left: position[0],
	            top: position[1],
	            width: w,
	            height: h
	          });
	        }
	        ctx.restore();
	      }
	    },

	    paintSolidColorImageMask:
	      function CanvasGraphics_paintSolidColorImageMask() {
	        this.ctx.fillRect(0, 0, 1, 1);
	    },

	    paintXObject: function CanvasGraphics_paintXObject() {
	      warn('Unsupported \'paintXObject\' command.');
	    },

	    // Marked content

	    markPoint: function CanvasGraphics_markPoint(tag) {
	      // TODO Marked content.
	    },
	    markPointProps: function CanvasGraphics_markPointProps(tag, properties) {
	      // TODO Marked content.
	    },
	    beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {
	      // TODO Marked content.
	    },
	    beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(
	                                        tag, properties) {
	      // TODO Marked content.
	    },
	    endMarkedContent: function CanvasGraphics_endMarkedContent() {
	      // TODO Marked content.
	    },

	    // Compatibility

	    beginCompat: function CanvasGraphics_beginCompat() {
	      // TODO ignore undefined operators (should we do that anyway?)
	    },
	    endCompat: function CanvasGraphics_endCompat() {
	      // TODO stop ignoring undefined operators
	    },

	    // Helper functions

	    consumePath: function CanvasGraphics_consumePath() {
	      var ctx = this.ctx;
	      if (this.pendingClip) {
	        if (this.pendingClip === EO_CLIP) {
	          if (ctx.mozFillRule !== undefined) {
	            ctx.mozFillRule = 'evenodd';
	            ctx.clip();
	            ctx.mozFillRule = 'nonzero';
	          } else {
	            ctx.clip('evenodd');
	          }
	        } else {
	          ctx.clip();
	        }
	        this.pendingClip = null;
	      }
	      ctx.beginPath();
	    },
	    getSinglePixelWidth: function CanvasGraphics_getSinglePixelWidth(scale) {
	      if (this.cachedGetSinglePixelWidth === null) {
	        // NOTE: The `save` and `restore` commands used below is a workaround
	        // that is necessary in order to prevent `mozCurrentTransformInverse`
	        // from intermittently returning incorrect values in Firefox, see:
	        // https://github.com/mozilla/pdf.js/issues/7188.
	        this.ctx.save();
	        var inverse = this.ctx.mozCurrentTransformInverse;
	        this.ctx.restore();
	        // max of the current horizontal and vertical scale
	        this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(
	          (inverse[0] * inverse[0] + inverse[1] * inverse[1]),
	          (inverse[2] * inverse[2] + inverse[3] * inverse[3])));
	      }
	      return this.cachedGetSinglePixelWidth;
	    },
	    getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
	      var transform = this.ctx.mozCurrentTransform;
	      return [
	        transform[0] * x + transform[2] * y + transform[4],
	        transform[1] * x + transform[3] * y + transform[5]
	      ];
	    }
	  };

	  for (var op in OPS) {
	    CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
	  }

	  return CanvasGraphics;
	})();

	exports.CanvasGraphics = CanvasGraphics;
	exports.createScratchCanvas = createScratchCanvas;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayAPI = {}), root.pdfjsSharedUtil,
	      root.pdfjsDisplayFontLoader, root.pdfjsDisplayCanvas,
	      root.pdfjsDisplayMetadata, root.pdfjsDisplayDOMUtils);
	  }
	}(this, function (exports, sharedUtil, displayFontLoader, displayCanvas,
	                  displayMetadata, displayDOMUtils, amdRequire) {

	var InvalidPDFException = sharedUtil.InvalidPDFException;
	var MessageHandler = sharedUtil.MessageHandler;
	var MissingPDFException = sharedUtil.MissingPDFException;
	var PageViewport = sharedUtil.PageViewport;
	var PasswordResponses = sharedUtil.PasswordResponses;
	var PasswordException = sharedUtil.PasswordException;
	var StatTimer = sharedUtil.StatTimer;
	var UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
	var UnknownErrorException = sharedUtil.UnknownErrorException;
	var Util = sharedUtil.Util;
	var createPromiseCapability = sharedUtil.createPromiseCapability;
	var error = sharedUtil.error;
	var deprecated = sharedUtil.deprecated;
	var getVerbosityLevel = sharedUtil.getVerbosityLevel;
	var info = sharedUtil.info;
	var isInt = sharedUtil.isInt;
	var isArray = sharedUtil.isArray;
	var isArrayBuffer = sharedUtil.isArrayBuffer;
	var isSameOrigin = sharedUtil.isSameOrigin;
	var loadJpegStream = sharedUtil.loadJpegStream;
	var stringToBytes = sharedUtil.stringToBytes;
	var globalScope = sharedUtil.globalScope;
	var warn = sharedUtil.warn;
	var FontFaceObject = displayFontLoader.FontFaceObject;
	var FontLoader = displayFontLoader.FontLoader;
	var CanvasGraphics = displayCanvas.CanvasGraphics;
	var createScratchCanvas = displayCanvas.createScratchCanvas;
	var Metadata = displayMetadata.Metadata;
	var getDefaultSetting = displayDOMUtils.getDefaultSetting;

	var DEFAULT_RANGE_CHUNK_SIZE = 65536; // 2^16 = 65536

	var isWorkerDisabled = false;
	var workerSrc;
	var isPostMessageTransfersDisabled = false;


	var useRequireEnsure = false;
	if (typeof window === 'undefined') {
	  // node.js - disable worker and set require.ensure.
	  isWorkerDisabled = true;
	  if (false) {
	    require.ensure = require('node-ensure');
	  }
	  useRequireEnsure = true;
	}
	if (true) {
	  useRequireEnsure = true;
	}
	if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
	  workerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
	}
	var dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
	var fakeWorkerFilesLoader = useRequireEnsure ? (function (callback) {
	  __webpack_require__.e/* nsure */(1, function () {
	    var worker = __webpack_require__(10);
	    callback(worker.WorkerMessageHandler);
	  });
	}) : dynamicLoaderSupported ? (function (callback) {
	  requirejs(['pdfjs-dist/build/pdf.worker'], function (worker) {
	    callback(worker.WorkerMessageHandler);
	  });
	}) : null;


	/**
	 * Document initialization / loading parameters object.
	 *
	 * @typedef {Object} DocumentInitParameters
	 * @property {string}     url   - The URL of the PDF.
	 * @property {TypedArray|Array|string} data - Binary PDF data. Use typed arrays
	 *   (Uint8Array) to improve the memory usage. If PDF data is BASE64-encoded,
	 *   use atob() to convert it to a binary string first.
	 * @property {Object}     httpHeaders - Basic authentication headers.
	 * @property {boolean}    withCredentials - Indicates whether or not cross-site
	 *   Access-Control requests should be made using credentials such as cookies
	 *   or authorization headers. The default is false.
	 * @property {string}     password - For decrypting password-protected PDFs.
	 * @property {TypedArray} initialData - A typed array with the first portion or
	 *   all of the pdf data. Used by the extension since some data is already
	 *   loaded before the switch to range requests.
	 * @property {number}     length - The PDF file length. It's used for progress
	 *   reports and range requests operations.
	 * @property {PDFDataRangeTransport} range
	 * @property {number}     rangeChunkSize - Optional parameter to specify
	 *   maximum number of bytes fetched per range request. The default value is
	 *   2^16 = 65536.
	 * @property {PDFWorker}  worker - The worker that will be used for the loading
	 *   and parsing of the PDF data.
	 */

	/**
	 * @typedef {Object} PDFDocumentStats
	 * @property {Array} streamTypes - Used stream types in the document (an item
	 *   is set to true if specific stream ID was used in the document).
	 * @property {Array} fontTypes - Used font type in the document (an item is set
	 *   to true if specific font ID was used in the document).
	 */

	/**
	 * This is the main entry point for loading a PDF and interacting with it.
	 * NOTE: If a URL is used to fetch the PDF data a standard XMLHttpRequest(XHR)
	 * is used, which means it must follow the same origin rules that any XHR does
	 * e.g. No cross domain requests without CORS.
	 *
	 * @param {string|TypedArray|DocumentInitParameters|PDFDataRangeTransport} src
	 * Can be a url to where a PDF is located, a typed array (Uint8Array)
	 * already populated with data or parameter object.
	 *
	 * @param {PDFDataRangeTransport} pdfDataRangeTransport (deprecated) It is used
	 * if you want to manually serve range requests for data in the PDF.
	 *
	 * @param {function} passwordCallback (deprecated) It is used to request a
	 * password if wrong or no password was provided. The callback receives two
	 * parameters: function that needs to be called with new password and reason
	 * (see {PasswordResponses}).
	 *
	 * @param {function} progressCallback (deprecated) It is used to be able to
	 * monitor the loading progress of the PDF file (necessary to implement e.g.
	 * a loading bar). The callback receives an {Object} with the properties:
	 * {number} loaded and {number} total.
	 *
	 * @return {PDFDocumentLoadingTask}
	 */
	function getDocument(src, pdfDataRangeTransport,
	                     passwordCallback, progressCallback) {
	  var task = new PDFDocumentLoadingTask();

	  // Support of the obsolete arguments (for compatibility with API v1.0)
	  if (arguments.length > 1) {
	    deprecated('getDocument is called with pdfDataRangeTransport, ' +
	               'passwordCallback or progressCallback argument');
	  }
	  if (pdfDataRangeTransport) {
	    if (!(pdfDataRangeTransport instanceof PDFDataRangeTransport)) {
	      // Not a PDFDataRangeTransport instance, trying to add missing properties.
	      pdfDataRangeTransport = Object.create(pdfDataRangeTransport);
	      pdfDataRangeTransport.length = src.length;
	      pdfDataRangeTransport.initialData = src.initialData;
	      if (!pdfDataRangeTransport.abort) {
	        pdfDataRangeTransport.abort = function () {};
	      }
	    }
	    src = Object.create(src);
	    src.range = pdfDataRangeTransport;
	  }
	  task.onPassword = passwordCallback || null;
	  task.onProgress = progressCallback || null;

	  var source;
	  if (typeof src === 'string') {
	    source = { url: src };
	  } else if (isArrayBuffer(src)) {
	    source = { data: src };
	  } else if (src instanceof PDFDataRangeTransport) {
	    source = { range: src };
	  } else {
	    if (typeof src !== 'object') {
	      error('Invalid parameter in getDocument, need either Uint8Array, ' +
	        'string or a parameter object');
	    }
	    if (!src.url && !src.data && !src.range) {
	      error('Invalid parameter object: need either .data, .range or .url');
	    }

	    source = src;
	  }

	  var params = {};
	  var rangeTransport = null;
	  var worker = null;
	  for (var key in source) {
	    if (key === 'url' && typeof window !== 'undefined') {
	      // The full path is required in the 'url' field.
	      params[key] = new URL(source[key], window.location).href;
	      continue;
	    } else if (key === 'range') {
	      rangeTransport = source[key];
	      continue;
	    } else if (key === 'worker') {
	      worker = source[key];
	      continue;
	    } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
	      // Converting string or array-like data to Uint8Array.
	      var pdfBytes = source[key];
	      if (typeof pdfBytes === 'string') {
	        params[key] = stringToBytes(pdfBytes);
	      } else if (typeof pdfBytes === 'object' && pdfBytes !== null &&
	                 !isNaN(pdfBytes.length)) {
	        params[key] = new Uint8Array(pdfBytes);
	      } else if (isArrayBuffer(pdfBytes)) {
	        params[key] = new Uint8Array(pdfBytes);
	      } else {
	        error('Invalid PDF binary data: either typed array, string or ' +
	              'array-like object is expected in the data property.');
	      }
	      continue;
	    }
	    params[key] = source[key];
	  }

	  params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;

	  if (!worker) {
	    // Worker was not provided -- creating and owning our own.
	    worker = new PDFWorker();
	    task._worker = worker;
	  }
	  var docId = task.docId;
	  worker.promise.then(function () {
	    if (task.destroyed) {
	      throw new Error('Loading aborted');
	    }
	    return _fetchDocument(worker, params, rangeTransport, docId).then(
	        function (workerId) {
	      if (task.destroyed) {
	        throw new Error('Loading aborted');
	      }
	      var messageHandler = new MessageHandler(docId, workerId, worker.port);
	      var transport = new WorkerTransport(messageHandler, task, rangeTransport);
	      task._transport = transport;
	      messageHandler.send('Ready', null);
	    });
	  }).catch(task._capability.reject);

	  return task;
	}

	/**
	 * Starts fetching of specified PDF document/data.
	 * @param {PDFWorker} worker
	 * @param {Object} source
	 * @param {PDFDataRangeTransport} pdfDataRangeTransport
	 * @param {string} docId Unique document id, used as MessageHandler id.
	 * @returns {Promise} The promise, which is resolved when worker id of
	 *                    MessageHandler is known.
	 * @private
	 */
	function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
	  if (worker.destroyed) {
	    return Promise.reject(new Error('Worker was destroyed'));
	  }

	  source.disableAutoFetch = getDefaultSetting('disableAutoFetch');
	  source.disableStream = getDefaultSetting('disableStream');
	  source.chunkedViewerLoading = !!pdfDataRangeTransport;
	  if (pdfDataRangeTransport) {
	    source.length = pdfDataRangeTransport.length;
	    source.initialData = pdfDataRangeTransport.initialData;
	  }
	  return worker.messageHandler.sendWithPromise('GetDocRequest', {
	    docId: docId,
	    source: source,
	    disableRange: getDefaultSetting('disableRange'),
	    maxImageSize: getDefaultSetting('maxImageSize'),
	    cMapUrl: getDefaultSetting('cMapUrl'),
	    cMapPacked: getDefaultSetting('cMapPacked'),
	    disableFontFace: getDefaultSetting('disableFontFace'),
	    disableCreateObjectURL: getDefaultSetting('disableCreateObjectURL'),
	    postMessageTransfers: getDefaultSetting('postMessageTransfers') &&
	                          !isPostMessageTransfersDisabled,
	  }).then(function (workerId) {
	    if (worker.destroyed) {
	      throw new Error('Worker was destroyed');
	    }
	    return workerId;
	  });
	}

	/**
	 * PDF document loading operation.
	 * @class
	 * @alias PDFDocumentLoadingTask
	 */
	var PDFDocumentLoadingTask = (function PDFDocumentLoadingTaskClosure() {
	  var nextDocumentId = 0;

	  /** @constructs PDFDocumentLoadingTask */
	  function PDFDocumentLoadingTask() {
	    this._capability = createPromiseCapability();
	    this._transport = null;
	    this._worker = null;

	    /**
	     * Unique document loading task id -- used in MessageHandlers.
	     * @type {string}
	     */
	    this.docId = 'd' + (nextDocumentId++);

	    /**
	     * Shows if loading task is destroyed.
	     * @type {boolean}
	     */
	    this.destroyed = false;

	    /**
	     * Callback to request a password if wrong or no password was provided.
	     * The callback receives two parameters: function that needs to be called
	     * with new password and reason (see {PasswordResponses}).
	     */
	    this.onPassword = null;

	    /**
	     * Callback to be able to monitor the loading progress of the PDF file
	     * (necessary to implement e.g. a loading bar). The callback receives
	     * an {Object} with the properties: {number} loaded and {number} total.
	     */
	    this.onProgress = null;

	    /**
	     * Callback to when unsupported feature is used. The callback receives
	     * an {UNSUPPORTED_FEATURES} argument.
	     */
	    this.onUnsupportedFeature = null;
	  }

	  PDFDocumentLoadingTask.prototype =
	      /** @lends PDFDocumentLoadingTask.prototype */ {
	    /**
	     * @return {Promise}
	     */
	    get promise() {
	      return this._capability.promise;
	    },

	    /**
	     * Aborts all network requests and destroys worker.
	     * @return {Promise} A promise that is resolved after destruction activity
	     *                   is completed.
	     */
	    destroy: function () {
	      this.destroyed = true;

	      var transportDestroyed = !this._transport ? Promise.resolve() :
	        this._transport.destroy();
	      return transportDestroyed.then(function () {
	        this._transport = null;
	        if (this._worker) {
	          this._worker.destroy();
	          this._worker = null;
	        }
	      }.bind(this));
	    },

	    /**
	     * Registers callbacks to indicate the document loading completion.
	     *
	     * @param {function} onFulfilled The callback for the loading completion.
	     * @param {function} onRejected The callback for the loading failure.
	     * @return {Promise} A promise that is resolved after the onFulfilled or
	     *                   onRejected callback.
	     */
	    then: function PDFDocumentLoadingTask_then(onFulfilled, onRejected) {
	      return this.promise.then.apply(this.promise, arguments);
	    }
	  };

	  return PDFDocumentLoadingTask;
	})();

	/**
	 * Abstract class to support range requests file loading.
	 * @class
	 * @alias PDFDataRangeTransport
	 * @param {number} length
	 * @param {Uint8Array} initialData
	 */
	var PDFDataRangeTransport = (function pdfDataRangeTransportClosure() {
	  function PDFDataRangeTransport(length, initialData) {
	    this.length = length;
	    this.initialData = initialData;

	    this._rangeListeners = [];
	    this._progressListeners = [];
	    this._progressiveReadListeners = [];
	    this._readyCapability = createPromiseCapability();
	  }
	  PDFDataRangeTransport.prototype =
	      /** @lends PDFDataRangeTransport.prototype */ {
	    addRangeListener:
	        function PDFDataRangeTransport_addRangeListener(listener) {
	      this._rangeListeners.push(listener);
	    },

	    addProgressListener:
	        function PDFDataRangeTransport_addProgressListener(listener) {
	      this._progressListeners.push(listener);
	    },

	    addProgressiveReadListener:
	        function PDFDataRangeTransport_addProgressiveReadListener(listener) {
	      this._progressiveReadListeners.push(listener);
	    },

	    onDataRange: function PDFDataRangeTransport_onDataRange(begin, chunk) {
	      var listeners = this._rangeListeners;
	      for (var i = 0, n = listeners.length; i < n; ++i) {
	        listeners[i](begin, chunk);
	      }
	    },

	    onDataProgress: function PDFDataRangeTransport_onDataProgress(loaded) {
	      this._readyCapability.promise.then(function () {
	        var listeners = this._progressListeners;
	        for (var i = 0, n = listeners.length; i < n; ++i) {
	          listeners[i](loaded);
	        }
	      }.bind(this));
	    },

	    onDataProgressiveRead:
	        function PDFDataRangeTransport_onDataProgress(chunk) {
	      this._readyCapability.promise.then(function () {
	        var listeners = this._progressiveReadListeners;
	        for (var i = 0, n = listeners.length; i < n; ++i) {
	          listeners[i](chunk);
	        }
	      }.bind(this));
	    },

	    transportReady: function PDFDataRangeTransport_transportReady() {
	      this._readyCapability.resolve();
	    },

	    requestDataRange:
	        function PDFDataRangeTransport_requestDataRange(begin, end) {
	      throw new Error('Abstract method PDFDataRangeTransport.requestDataRange');
	    },

	    abort: function PDFDataRangeTransport_abort() {
	    }
	  };
	  return PDFDataRangeTransport;
	})();

	/**
	 * Proxy to a PDFDocument in the worker thread. Also, contains commonly used
	 * properties that can be read synchronously.
	 * @class
	 * @alias PDFDocumentProxy
	 */
	var PDFDocumentProxy = (function PDFDocumentProxyClosure() {
	  function PDFDocumentProxy(pdfInfo, transport, loadingTask) {
	    this.pdfInfo = pdfInfo;
	    this.transport = transport;
	    this.loadingTask = loadingTask;
	  }
	  PDFDocumentProxy.prototype = /** @lends PDFDocumentProxy.prototype */ {
	    /**
	     * @return {number} Total number of pages the PDF contains.
	     */
	    get numPages() {
	      return this.pdfInfo.numPages;
	    },
	    /**
	     * @return {string} A unique ID to identify a PDF. Not guaranteed to be
	     * unique.
	     */
	    get fingerprint() {
	      return this.pdfInfo.fingerprint;
	    },
	    /**
	     * @param {number} pageNumber The page number to get. The first page is 1.
	     * @return {Promise} A promise that is resolved with a {@link PDFPageProxy}
	     * object.
	     */
	    getPage: function PDFDocumentProxy_getPage(pageNumber) {
	      return this.transport.getPage(pageNumber);
	    },
	    /**
	     * @param {{num: number, gen: number}} ref The page reference. Must have
	     *   the 'num' and 'gen' properties.
	     * @return {Promise} A promise that is resolved with the page index that is
	     * associated with the reference.
	     */
	    getPageIndex: function PDFDocumentProxy_getPageIndex(ref) {
	      return this.transport.getPageIndex(ref);
	    },
	    /**
	     * @return {Promise} A promise that is resolved with a lookup table for
	     * mapping named destinations to reference numbers.
	     *
	     * This can be slow for large documents: use getDestination instead
	     */
	    getDestinations: function PDFDocumentProxy_getDestinations() {
	      return this.transport.getDestinations();
	    },
	    /**
	     * @param {string} id The named destination to get.
	     * @return {Promise} A promise that is resolved with all information
	     * of the given named destination.
	     */
	    getDestination: function PDFDocumentProxy_getDestination(id) {
	      return this.transport.getDestination(id);
	    },
	    /**
	     * @return {Promise} A promise that is resolved with:
	     *   an Array containing the pageLabels that correspond to the pageIndexes,
	     *   or `null` when no pageLabels are present in the PDF file.
	     */
	    getPageLabels: function PDFDocumentProxy_getPageLabels() {
	      return this.transport.getPageLabels();
	    },
	    /**
	     * @return {Promise} A promise that is resolved with a lookup table for
	     * mapping named attachments to their content.
	     */
	    getAttachments: function PDFDocumentProxy_getAttachments() {
	      return this.transport.getAttachments();
	    },
	    /**
	     * @return {Promise} A promise that is resolved with an array of all the
	     * JavaScript strings in the name tree.
	     */
	    getJavaScript: function PDFDocumentProxy_getJavaScript() {
	      return this.transport.getJavaScript();
	    },
	    /**
	     * @return {Promise} A promise that is resolved with an {Array} that is a
	     * tree outline (if it has one) of the PDF. The tree is in the format of:
	     * [
	     *  {
	     *   title: string,
	     *   bold: boolean,
	     *   italic: boolean,
	     *   color: rgb Uint8Array,
	     *   dest: dest obj,
	     *   url: string,
	     *   items: array of more items like this
	     *  },
	     *  ...
	     * ].
	     */
	    getOutline: function PDFDocumentProxy_getOutline() {
	      return this.transport.getOutline();
	    },
	    /**
	     * @return {Promise} A promise that is resolved with an {Object} that has
	     * info and metadata properties.  Info is an {Object} filled with anything
	     * available in the information dictionary and similarly metadata is a
	     * {Metadata} object with information from the metadata section of the PDF.
	     */
	    getMetadata: function PDFDocumentProxy_getMetadata() {
	      return this.transport.getMetadata();
	    },
	    /**
	     * @return {Promise} A promise that is resolved with a TypedArray that has
	     * the raw data from the PDF.
	     */
	    getData: function PDFDocumentProxy_getData() {
	      return this.transport.getData();
	    },
	    /**
	     * @return {Promise} A promise that is resolved when the document's data
	     * is loaded. It is resolved with an {Object} that contains the length
	     * property that indicates size of the PDF data in bytes.
	     */
	    getDownloadInfo: function PDFDocumentProxy_getDownloadInfo() {
	      return this.transport.downloadInfoCapability.promise;
	    },
	    /**
	     * @return {Promise} A promise this is resolved with current stats about
	     * document structures (see {@link PDFDocumentStats}).
	     */
	    getStats: function PDFDocumentProxy_getStats() {
	      return this.transport.getStats();
	    },
	    /**
	     * Cleans up resources allocated by the document, e.g. created @font-face.
	     */
	    cleanup: function PDFDocumentProxy_cleanup() {
	      this.transport.startCleanup();
	    },
	    /**
	     * Destroys current document instance and terminates worker.
	     */
	    destroy: function PDFDocumentProxy_destroy() {
	      return this.loadingTask.destroy();
	    }
	  };
	  return PDFDocumentProxy;
	})();

	/**
	 * Page getTextContent parameters.
	 *
	 * @typedef {Object} getTextContentParameters
	 * @param {boolean} normalizeWhitespace - replaces all occurrences of
	 *   whitespace with standard spaces (0x20). The default value is `false`.
	 * @param {boolean} disableCombineTextItems - do not attempt to combine
	 *   same line {@link TextItem}'s. The default value is `false`.
	 */

	/**
	 * Page text content.
	 *
	 * @typedef {Object} TextContent
	 * @property {array} items - array of {@link TextItem}
	 * @property {Object} styles - {@link TextStyles} objects, indexed by font
	 *                    name.
	 */

	/**
	 * Page text content part.
	 *
	 * @typedef {Object} TextItem
	 * @property {string} str - text content.
	 * @property {string} dir - text direction: 'ttb', 'ltr' or 'rtl'.
	 * @property {array} transform - transformation matrix.
	 * @property {number} width - width in device space.
	 * @property {number} height - height in device space.
	 * @property {string} fontName - font name used by pdf.js for converted font.
	 */

	/**
	 * Text style.
	 *
	 * @typedef {Object} TextStyle
	 * @property {number} ascent - font ascent.
	 * @property {number} descent - font descent.
	 * @property {boolean} vertical - text is in vertical mode.
	 * @property {string} fontFamily - possible font family
	 */

	/**
	 * Page annotation parameters.
	 *
	 * @typedef {Object} GetAnnotationsParameters
	 * @param {string} intent - Determines the annotations that will be fetched,
	 *                 can be either 'display' (viewable annotations) or 'print'
	 *                 (printable annotations).
	 *                 If the parameter is omitted, all annotations are fetched.
	 */

	/**
	 * Page render parameters.
	 *
	 * @typedef {Object} RenderParameters
	 * @property {Object} canvasContext - A 2D context of a DOM Canvas object.
	 * @property {PageViewport} viewport - Rendering viewport obtained by
	 *                                calling of PDFPage.getViewport method.
	 * @property {string} intent - Rendering intent, can be 'display' or 'print'
	 *                    (default value is 'display').
	 * @property {boolean} renderInteractiveForms - (optional) Whether or not
	 *                     interactive form elements are rendered in the display
	 *                     layer. If so, we do not render them on canvas as well.
	 * @property {Array}  transform - (optional) Additional transform, applied
	 *                    just before viewport transform.
	 * @property {Object} imageLayer - (optional) An object that has beginLayout,
	 *                    endLayout and appendImage functions.
	 * @property {function} continueCallback - (deprecated) A function that will be
	 *                      called each time the rendering is paused.  To continue
	 *                      rendering call the function that is the first argument
	 *                      to the callback.
	 */

	/**
	 * PDF page operator list.
	 *
	 * @typedef {Object} PDFOperatorList
	 * @property {Array} fnArray - Array containing the operator functions.
	 * @property {Array} argsArray - Array containing the arguments of the
	 *                               functions.
	 */

	/**
	 * Proxy to a PDFPage in the worker thread.
	 * @class
	 * @alias PDFPageProxy
	 */
	var PDFPageProxy = (function PDFPageProxyClosure() {
	  function PDFPageProxy(pageIndex, pageInfo, transport) {
	    this.pageIndex = pageIndex;
	    this.pageInfo = pageInfo;
	    this.transport = transport;
	    this.stats = new StatTimer();
	    this.stats.enabled = getDefaultSetting('enableStats');
	    this.commonObjs = transport.commonObjs;
	    this.objs = new PDFObjects();
	    this.cleanupAfterRender = false;
	    this.pendingCleanup = false;
	    this.intentStates = Object.create(null);
	    this.destroyed = false;
	  }
	  PDFPageProxy.prototype = /** @lends PDFPageProxy.prototype */ {
	    /**
	     * @return {number} Page number of the page. First page is 1.
	     */
	    get pageNumber() {
	      return this.pageIndex + 1;
	    },
	    /**
	     * @return {number} The number of degrees the page is rotated clockwise.
	     */
	    get rotate() {
	      return this.pageInfo.rotate;
	    },
	    /**
	     * @return {Object} The reference that points to this page. It has 'num' and
	     * 'gen' properties.
	     */
	    get ref() {
	      return this.pageInfo.ref;
	    },
	    /**
	     * @return {Array} An array of the visible portion of the PDF page in the
	     * user space units - [x1, y1, x2, y2].
	     */
	    get view() {
	      return this.pageInfo.view;
	    },
	    /**
	     * @param {number} scale The desired scale of the viewport.
	     * @param {number} rotate Degrees to rotate the viewport. If omitted this
	     * defaults to the page rotation.
	     * @return {PageViewport} Contains 'width' and 'height' properties
	     * along with transforms required for rendering.
	     */
	    getViewport: function PDFPageProxy_getViewport(scale, rotate) {
	      if (arguments.length < 2) {
	        rotate = this.rotate;
	      }
	      return new PageViewport(this.view, scale, rotate, 0, 0);
	    },
	    /**
	     * @param {GetAnnotationsParameters} params - Annotation parameters.
	     * @return {Promise} A promise that is resolved with an {Array} of the
	     * annotation objects.
	     */
	    getAnnotations: function PDFPageProxy_getAnnotations(params) {
	      var intent = (params && params.intent) || null;

	      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
	        this.annotationsPromise = this.transport.getAnnotations(this.pageIndex,
	                                                                intent);
	        this.annotationsIntent = intent;
	      }
	      return this.annotationsPromise;
	    },
	    /**
	     * Begins the process of rendering a page to the desired context.
	     * @param {RenderParameters} params Page render parameters.
	     * @return {RenderTask} An object that contains the promise, which
	     *                      is resolved when the page finishes rendering.
	     */
	    render: function PDFPageProxy_render(params) {
	      var stats = this.stats;
	      stats.time('Overall');

	      // If there was a pending destroy cancel it so no cleanup happens during
	      // this call to render.
	      this.pendingCleanup = false;

	      var renderingIntent = (params.intent === 'print' ? 'print' : 'display');
	      var renderInteractiveForms = (params.renderInteractiveForms === true ?
	                                    true : /* Default */ false);

	      if (!this.intentStates[renderingIntent]) {
	        this.intentStates[renderingIntent] = Object.create(null);
	      }
	      var intentState = this.intentStates[renderingIntent];

	      // If there's no displayReadyCapability yet, then the operatorList
	      // was never requested before. Make the request and create the promise.
	      if (!intentState.displayReadyCapability) {
	        intentState.receivingOperatorList = true;
	        intentState.displayReadyCapability = createPromiseCapability();
	        intentState.operatorList = {
	          fnArray: [],
	          argsArray: [],
	          lastChunk: false
	        };

	        this.stats.time('Page Request');
	        this.transport.messageHandler.send('RenderPageRequest', {
	          pageIndex: this.pageNumber - 1,
	          intent: renderingIntent,
	          renderInteractiveForms: renderInteractiveForms,
	        });
	      }

	      var internalRenderTask = new InternalRenderTask(complete, params,
	                                                      this.objs,
	                                                      this.commonObjs,
	                                                      intentState.operatorList,
	                                                      this.pageNumber);
	      internalRenderTask.useRequestAnimationFrame = renderingIntent !== 'print';
	      if (!intentState.renderTasks) {
	        intentState.renderTasks = [];
	      }
	      intentState.renderTasks.push(internalRenderTask);
	      var renderTask = internalRenderTask.task;

	      // Obsolete parameter support
	      if (params.continueCallback) {
	        deprecated('render is used with continueCallback parameter');
	        renderTask.onContinue = params.continueCallback;
	      }

	      var self = this;
	      intentState.displayReadyCapability.promise.then(
	        function pageDisplayReadyPromise(transparency) {
	          if (self.pendingCleanup) {
	            complete();
	            return;
	          }
	          stats.time('Rendering');
	          internalRenderTask.initializeGraphics(transparency);
	          internalRenderTask.operatorListChanged();
	        },
	        function pageDisplayReadPromiseError(reason) {
	          complete(reason);
	        }
	      );

	      function complete(error) {
	        var i = intentState.renderTasks.indexOf(internalRenderTask);
	        if (i >= 0) {
	          intentState.renderTasks.splice(i, 1);
	        }

	        if (self.cleanupAfterRender) {
	          self.pendingCleanup = true;
	        }
	        self._tryCleanup();

	        if (error) {
	          internalRenderTask.capability.reject(error);
	        } else {
	          internalRenderTask.capability.resolve();
	        }
	        stats.timeEnd('Rendering');
	        stats.timeEnd('Overall');
	      }

	      return renderTask;
	    },

	    /**
	     * @return {Promise} A promise resolved with an {@link PDFOperatorList}
	     * object that represents page's operator list.
	     */
	    getOperatorList: function PDFPageProxy_getOperatorList() {
	      function operatorListChanged() {
	        if (intentState.operatorList.lastChunk) {
	          intentState.opListReadCapability.resolve(intentState.operatorList);

	          var i = intentState.renderTasks.indexOf(opListTask);
	          if (i >= 0) {
	            intentState.renderTasks.splice(i, 1);
	          }
	        }
	      }

	      var renderingIntent = 'oplist';
	      if (!this.intentStates[renderingIntent]) {
	        this.intentStates[renderingIntent] = Object.create(null);
	      }
	      var intentState = this.intentStates[renderingIntent];
	      var opListTask;

	      if (!intentState.opListReadCapability) {
	        opListTask = {};
	        opListTask.operatorListChanged = operatorListChanged;
	        intentState.receivingOperatorList = true;
	        intentState.opListReadCapability = createPromiseCapability();
	        intentState.renderTasks = [];
	        intentState.renderTasks.push(opListTask);
	        intentState.operatorList = {
	          fnArray: [],
	          argsArray: [],
	          lastChunk: false
	        };

	        this.transport.messageHandler.send('RenderPageRequest', {
	          pageIndex: this.pageIndex,
	          intent: renderingIntent
	        });
	      }
	      return intentState.opListReadCapability.promise;
	    },

	    /**
	     * @param {getTextContentParameters} params - getTextContent parameters.
	     * @return {Promise} That is resolved a {@link TextContent}
	     * object that represent the page text content.
	     */
	    getTextContent: function PDFPageProxy_getTextContent(params) {
	      return this.transport.messageHandler.sendWithPromise('GetTextContent', {
	        pageIndex: this.pageNumber - 1,
	        normalizeWhitespace: (params && params.normalizeWhitespace === true ?
	                              true : /* Default */ false),
	        combineTextItems: (params && params.disableCombineTextItems === true ?
	                           false : /* Default */ true),
	      });
	    },

	    /**
	     * Destroys page object.
	     */
	    _destroy: function PDFPageProxy_destroy() {
	      this.destroyed = true;
	      this.transport.pageCache[this.pageIndex] = null;

	      var waitOn = [];
	      Object.keys(this.intentStates).forEach(function(intent) {
	        if (intent === 'oplist') {
	          // Avoid errors below, since the renderTasks are just stubs.
	          return;
	        }
	        var intentState = this.intentStates[intent];
	        intentState.renderTasks.forEach(function(renderTask) {
	          var renderCompleted = renderTask.capability.promise.
	            catch(function () {}); // ignoring failures
	          waitOn.push(renderCompleted);
	          renderTask.cancel();
	        });
	      }, this);
	      this.objs.clear();
	      this.annotationsPromise = null;
	      this.pendingCleanup = false;
	      return Promise.all(waitOn);
	    },

	    /**
	     * Cleans up resources allocated by the page. (deprecated)
	     */
	    destroy: function() {
	      deprecated('page destroy method, use cleanup() instead');
	      this.cleanup();
	    },

	    /**
	     * Cleans up resources allocated by the page.
	     */
	    cleanup: function PDFPageProxy_cleanup() {
	      this.pendingCleanup = true;
	      this._tryCleanup();
	    },
	    /**
	     * For internal use only. Attempts to clean up if rendering is in a state
	     * where that's possible.
	     * @ignore
	     */
	    _tryCleanup: function PDFPageProxy_tryCleanup() {
	      if (!this.pendingCleanup ||
	          Object.keys(this.intentStates).some(function(intent) {
	            var intentState = this.intentStates[intent];
	            return (intentState.renderTasks.length !== 0 ||
	                    intentState.receivingOperatorList);
	          }, this)) {
	        return;
	      }

	      Object.keys(this.intentStates).forEach(function(intent) {
	        delete this.intentStates[intent];
	      }, this);
	      this.objs.clear();
	      this.annotationsPromise = null;
	      this.pendingCleanup = false;
	    },
	    /**
	     * For internal use only.
	     * @ignore
	     */
	    _startRenderPage: function PDFPageProxy_startRenderPage(transparency,
	                                                            intent) {
	      var intentState = this.intentStates[intent];
	      // TODO Refactor RenderPageRequest to separate rendering
	      // and operator list logic
	      if (intentState.displayReadyCapability) {
	        intentState.displayReadyCapability.resolve(transparency);
	      }
	    },
	    /**
	     * For internal use only.
	     * @ignore
	     */
	    _renderPageChunk: function PDFPageProxy_renderPageChunk(operatorListChunk,
	                                                            intent) {
	      var intentState = this.intentStates[intent];
	      var i, ii;
	      // Add the new chunk to the current operator list.
	      for (i = 0, ii = operatorListChunk.length; i < ii; i++) {
	        intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
	        intentState.operatorList.argsArray.push(
	          operatorListChunk.argsArray[i]);
	      }
	      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;

	      // Notify all the rendering tasks there are more operators to be consumed.
	      for (i = 0; i < intentState.renderTasks.length; i++) {
	        intentState.renderTasks[i].operatorListChanged();
	      }

	      if (operatorListChunk.lastChunk) {
	        intentState.receivingOperatorList = false;
	        this._tryCleanup();
	      }
	    }
	  };
	  return PDFPageProxy;
	})();

	/**
	 * PDF.js web worker abstraction, it controls instantiation of PDF documents and
	 * WorkerTransport for them.  If creation of a web worker is not possible,
	 * a "fake" worker will be used instead.
	 * @class
	 */
	var PDFWorker = (function PDFWorkerClosure() {
	  var nextFakeWorkerId = 0;

	  function getWorkerSrc() {
	    if (typeof workerSrc !== 'undefined') {
	      return workerSrc;
	    }
	    if (getDefaultSetting('workerSrc')) {
	      return getDefaultSetting('workerSrc');
	    }
	    if (pdfjsFilePath) {
	      return pdfjsFilePath.replace(/\.js$/i, '.worker.js');
	    }
	    error('No PDFJS.workerSrc specified');
	  }

	  var fakeWorkerFilesLoadedCapability;

	  // Loads worker code into main thread.
	  function setupFakeWorkerGlobal() {
	    var WorkerMessageHandler;
	    if (!fakeWorkerFilesLoadedCapability) {
	      fakeWorkerFilesLoadedCapability = createPromiseCapability();
	      // In the developer build load worker_loader which in turn loads all the
	      // other files and resolves the promise. In production only the
	      // pdf.worker.js file is needed.
	      var loader = fakeWorkerFilesLoader || function (callback) {
	        Util.loadScript(getWorkerSrc(), function () {
	          callback(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler);
	        });
	      };
	      loader(fakeWorkerFilesLoadedCapability.resolve);
	    }
	    return fakeWorkerFilesLoadedCapability.promise;
	  }

	  function FakeWorkerPort(defer) {
	    this._listeners = [];
	    this._defer = defer;
	    this._deferred = Promise.resolve(undefined);
	  }
	  FakeWorkerPort.prototype = {
	    postMessage: function (obj, transfers) {
	      function cloneValue(value) {
	        // Trying to perform a structured clone close to the spec, including
	        // transfers.
	        if (typeof value !== 'object' || value === null) {
	          return value;
	        }
	        if (cloned.has(value)) { // already cloned the object
	          return cloned.get(value);
	        }
	        var result;
	        var buffer;
	        if ((buffer = value.buffer) && isArrayBuffer(buffer)) {
	          // We found object with ArrayBuffer (typed array).
	          var transferable = transfers && transfers.indexOf(buffer) >= 0;
	          if (value === buffer) {
	            // Special case when we are faking typed arrays in compatibility.js.
	            result = value;
	          } else if (transferable) {
	            result = new value.constructor(buffer, value.byteOffset,
	                                           value.byteLength);
	          } else {
	            result = new value.constructor(value);
	          }
	          cloned.set(value, result);
	          return result;
	        }
	        result = isArray(value) ? [] : {};
	        cloned.set(value, result); // adding to cache now for cyclic references
	        // Cloning all value and object properties, however ignoring properties
	        // defined via getter.
	        for (var i in value) {
	          var desc, p = value;
	          while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
	            p = Object.getPrototypeOf(p);
	          }
	          if (typeof desc.value === 'undefined' ||
	              typeof desc.value === 'function') {
	            continue;
	          }
	          result[i] = cloneValue(desc.value);
	        }
	        return result;
	      }

	      if (!this._defer) {
	        this._listeners.forEach(function (listener) {
	          listener.call(this, {data: obj});
	        }, this);
	        return;
	      }

	      var cloned = new WeakMap();
	      var e = {data: cloneValue(obj)};
	      this._deferred.then(function () {
	        this._listeners.forEach(function (listener) {
	          listener.call(this, e);
	        }, this);
	      }.bind(this));
	    },
	    addEventListener: function (name, listener) {
	      this._listeners.push(listener);
	    },
	    removeEventListener: function (name, listener) {
	      var i = this._listeners.indexOf(listener);
	      this._listeners.splice(i, 1);
	    },
	    terminate: function () {
	      this._listeners = [];
	    }
	  };

	  function createCDNWrapper(url) {
	    // We will rely on blob URL's property to specify origin.
	    // We want this function to fail in case if createObjectURL or Blob do not
	    // exist or fail for some reason -- our Worker creation will fail anyway.
	    var wrapper = 'importScripts(\'' + url + '\');';
	    return URL.createObjectURL(new Blob([wrapper]));
	  }

	  function PDFWorker(name) {
	    this.name = name;
	    this.destroyed = false;

	    this._readyCapability = createPromiseCapability();
	    this._port = null;
	    this._webWorker = null;
	    this._messageHandler = null;
	    this._initialize();
	  }

	  PDFWorker.prototype =  /** @lends PDFWorker.prototype */ {
	    get promise() {
	      return this._readyCapability.promise;
	    },

	    get port() {
	      return this._port;
	    },

	    get messageHandler() {
	      return this._messageHandler;
	    },

	    _initialize: function PDFWorker_initialize() {
	      // If worker support isn't disabled explicit and the browser has worker
	      // support, create a new web worker and test if it/the browser fulfills
	      // all requirements to run parts of pdf.js in a web worker.
	      // Right now, the requirement is, that an Uint8Array is still an
	      // Uint8Array as it arrives on the worker. (Chrome added this with v.15.)
	      if (!isWorkerDisabled && !getDefaultSetting('disableWorker') &&
	          typeof Worker !== 'undefined') {
	        var workerSrc = getWorkerSrc();

	        try {
	          // Wraps workerSrc path into blob URL, if the former does not belong
	          // to the same origin.
	          if (!isSameOrigin(window.location.href, workerSrc)) {
	            workerSrc = createCDNWrapper(
	              new URL(workerSrc, window.location).href);
	          }
	          // Some versions of FF can't create a worker on localhost, see:
	          // https://bugzilla.mozilla.org/show_bug.cgi?id=683280
	          var worker = new Worker(workerSrc);
	          var messageHandler = new MessageHandler('main', 'worker', worker);
	          var terminateEarly = function() {
	            worker.removeEventListener('error', onWorkerError);
	            messageHandler.destroy();
	            worker.terminate();
	            if (this.destroyed) {
	              this._readyCapability.reject(new Error('Worker was destroyed'));
	            } else {
	              // Fall back to fake worker if the termination is caused by an
	              // error (e.g. NetworkError / SecurityError).
	              this._setupFakeWorker();
	            }
	          }.bind(this);

	          var onWorkerError = function(event) {
	            if (!this._webWorker) {
	              // Worker failed to initialize due to an error. Clean up and fall
	              // back to the fake worker.
	              terminateEarly();
	            }
	          }.bind(this);
	          worker.addEventListener('error', onWorkerError);

	          messageHandler.on('test', function PDFWorker_test(data) {
	            worker.removeEventListener('error', onWorkerError);
	            if (this.destroyed) {
	              terminateEarly();
	              return; // worker was destroyed
	            }
	            var supportTypedArray = data && data.supportTypedArray;
	            if (supportTypedArray) {
	              this._messageHandler = messageHandler;
	              this._port = worker;
	              this._webWorker = worker;
	              if (!data.supportTransfers) {
	                isPostMessageTransfersDisabled = true;
	              }
	              this._readyCapability.resolve();
	              // Send global setting, e.g. verbosity level.
	              messageHandler.send('configure', {
	                verbosity: getVerbosityLevel()
	              });
	            } else {
	              this._setupFakeWorker();
	              messageHandler.destroy();
	              worker.terminate();
	            }
	          }.bind(this));

	          messageHandler.on('console_log', function (data) {
	            console.log.apply(console, data);
	          });
	          messageHandler.on('console_error', function (data) {
	            console.error.apply(console, data);
	          });

	          messageHandler.on('ready', function (data) {
	            worker.removeEventListener('error', onWorkerError);
	            if (this.destroyed) {
	              terminateEarly();
	              return; // worker was destroyed
	            }
	            try {
	              sendTest();
	            } catch (e)  {
	              // We need fallback to a faked worker.
	              this._setupFakeWorker();
	            }
	          }.bind(this));

	          var sendTest = function () {
	            var postMessageTransfers =
	              getDefaultSetting('postMessageTransfers') &&
	              !isPostMessageTransfersDisabled;
	            var testObj = new Uint8Array([postMessageTransfers ? 255 : 0]);
	            // Some versions of Opera throw a DATA_CLONE_ERR on serializing the
	            // typed array. Also, checking if we can use transfers.
	            try {
	              messageHandler.send('test', testObj, [testObj.buffer]);
	            } catch (ex) {
	              info('Cannot use postMessage transfers');
	              testObj[0] = 0;
	              messageHandler.send('test', testObj);
	            }
	          };

	          // It might take time for worker to initialize (especially when AMD
	          // loader is used). We will try to send test immediately, and then
	          // when 'ready' message will arrive. The worker shall process only
	          // first received 'test'.
	          sendTest();
	          return;
	        } catch (e) {
	          info('The worker has been disabled.');
	        }
	      }
	      // Either workers are disabled, not supported or have thrown an exception.
	      // Thus, we fallback to a faked worker.
	      this._setupFakeWorker();
	    },

	    _setupFakeWorker: function PDFWorker_setupFakeWorker() {
	      if (!isWorkerDisabled && !getDefaultSetting('disableWorker')) {
	        warn('Setting up fake worker.');
	        isWorkerDisabled = true;
	      }

	      setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
	        if (this.destroyed) {
	          this._readyCapability.reject(new Error('Worker was destroyed'));
	          return;
	        }

	        // We cannot turn on proper fake port simulation (this includes
	        // structured cloning) when typed arrays are not supported. Relying
	        // on a chance that messages will be sent in proper order.
	        var isTypedArraysPresent = Uint8Array !== Float32Array;
	        var port = new FakeWorkerPort(isTypedArraysPresent);
	        this._port = port;

	        // All fake workers use the same port, making id unique.
	        var id = 'fake' + (nextFakeWorkerId++);

	        // If the main thread is our worker, setup the handling for the
	        // messages -- the main thread sends to it self.
	        var workerHandler = new MessageHandler(id + '_worker', id, port);
	        WorkerMessageHandler.setup(workerHandler, port);

	        var messageHandler = new MessageHandler(id, id + '_worker', port);
	        this._messageHandler = messageHandler;
	        this._readyCapability.resolve();
	      }.bind(this));
	    },

	    /**
	     * Destroys the worker instance.
	     */
	    destroy: function PDFWorker_destroy() {
	      this.destroyed = true;
	      if (this._webWorker) {
	        // We need to terminate only web worker created resource.
	        this._webWorker.terminate();
	        this._webWorker = null;
	      }
	      this._port = null;
	      if (this._messageHandler) {
	        this._messageHandler.destroy();
	        this._messageHandler = null;
	      }
	    }
	  };

	  return PDFWorker;
	})();

	/**
	 * For internal use only.
	 * @ignore
	 */
	var WorkerTransport = (function WorkerTransportClosure() {
	  function WorkerTransport(messageHandler, loadingTask, pdfDataRangeTransport) {
	    this.messageHandler = messageHandler;
	    this.loadingTask = loadingTask;
	    this.pdfDataRangeTransport = pdfDataRangeTransport;
	    this.commonObjs = new PDFObjects();
	    this.fontLoader = new FontLoader(loadingTask.docId);

	    this.destroyed = false;
	    this.destroyCapability = null;

	    this.pageCache = [];
	    this.pagePromises = [];
	    this.downloadInfoCapability = createPromiseCapability();

	    this.setupMessageHandler();
	  }
	  WorkerTransport.prototype = {
	    destroy: function WorkerTransport_destroy() {
	      if (this.destroyCapability) {
	        return this.destroyCapability.promise;
	      }

	      this.destroyed = true;
	      this.destroyCapability = createPromiseCapability();

	      var waitOn = [];
	      // We need to wait for all renderings to be completed, e.g.
	      // timeout/rAF can take a long time.
	      this.pageCache.forEach(function (page) {
	        if (page) {
	          waitOn.push(page._destroy());
	        }
	      });
	      this.pageCache = [];
	      this.pagePromises = [];
	      var self = this;
	      // We also need to wait for the worker to finish its long running tasks.
	      var terminated = this.messageHandler.sendWithPromise('Terminate', null);
	      waitOn.push(terminated);
	      Promise.all(waitOn).then(function () {
	        self.fontLoader.clear();
	        if (self.pdfDataRangeTransport) {
	          self.pdfDataRangeTransport.abort();
	          self.pdfDataRangeTransport = null;
	        }
	        if (self.messageHandler) {
	          self.messageHandler.destroy();
	          self.messageHandler = null;
	        }
	        self.destroyCapability.resolve();
	      }, this.destroyCapability.reject);
	      return this.destroyCapability.promise;
	    },

	    setupMessageHandler:
	      function WorkerTransport_setupMessageHandler() {
	      var messageHandler = this.messageHandler;

	      function updatePassword(password) {
	        messageHandler.send('UpdatePassword', password);
	      }

	      var pdfDataRangeTransport = this.pdfDataRangeTransport;
	      if (pdfDataRangeTransport) {
	        pdfDataRangeTransport.addRangeListener(function(begin, chunk) {
	          messageHandler.send('OnDataRange', {
	            begin: begin,
	            chunk: chunk
	          });
	        });

	        pdfDataRangeTransport.addProgressListener(function(loaded) {
	          messageHandler.send('OnDataProgress', {
	            loaded: loaded
	          });
	        });

	        pdfDataRangeTransport.addProgressiveReadListener(function(chunk) {
	          messageHandler.send('OnDataRange', {
	            chunk: chunk
	          });
	        });

	        messageHandler.on('RequestDataRange',
	          function transportDataRange(data) {
	            pdfDataRangeTransport.requestDataRange(data.begin, data.end);
	          }, this);
	      }

	      messageHandler.on('GetDoc', function transportDoc(data) {
	        var pdfInfo = data.pdfInfo;
	        this.numPages = data.pdfInfo.numPages;
	        var loadingTask = this.loadingTask;
	        var pdfDocument = new PDFDocumentProxy(pdfInfo, this, loadingTask);
	        this.pdfDocument = pdfDocument;
	        loadingTask._capability.resolve(pdfDocument);
	      }, this);

	      messageHandler.on('NeedPassword',
	                        function transportNeedPassword(exception) {
	        var loadingTask = this.loadingTask;
	        if (loadingTask.onPassword) {
	          return loadingTask.onPassword(updatePassword,
	                                        PasswordResponses.NEED_PASSWORD);
	        }
	        loadingTask._capability.reject(
	          new PasswordException(exception.message, exception.code));
	      }, this);

	      messageHandler.on('IncorrectPassword',
	                        function transportIncorrectPassword(exception) {
	        var loadingTask = this.loadingTask;
	        if (loadingTask.onPassword) {
	          return loadingTask.onPassword(updatePassword,
	                                        PasswordResponses.INCORRECT_PASSWORD);
	        }
	        loadingTask._capability.reject(
	          new PasswordException(exception.message, exception.code));
	      }, this);

	      messageHandler.on('InvalidPDF', function transportInvalidPDF(exception) {
	        this.loadingTask._capability.reject(
	          new InvalidPDFException(exception.message));
	      }, this);

	      messageHandler.on('MissingPDF', function transportMissingPDF(exception) {
	        this.loadingTask._capability.reject(
	          new MissingPDFException(exception.message));
	      }, this);

	      messageHandler.on('UnexpectedResponse',
	                        function transportUnexpectedResponse(exception) {
	        this.loadingTask._capability.reject(
	          new UnexpectedResponseException(exception.message, exception.status));
	      }, this);

	      messageHandler.on('UnknownError',
	                        function transportUnknownError(exception) {
	        this.loadingTask._capability.reject(
	          new UnknownErrorException(exception.message, exception.details));
	      }, this);

	      messageHandler.on('DataLoaded', function transportPage(data) {
	        this.downloadInfoCapability.resolve(data);
	      }, this);

	      messageHandler.on('PDFManagerReady', function transportPage(data) {
	        if (this.pdfDataRangeTransport) {
	          this.pdfDataRangeTransport.transportReady();
	        }
	      }, this);

	      messageHandler.on('StartRenderPage', function transportRender(data) {
	        if (this.destroyed) {
	          return; // Ignore any pending requests if the worker was terminated.
	        }
	        var page = this.pageCache[data.pageIndex];

	        page.stats.timeEnd('Page Request');
	        page._startRenderPage(data.transparency, data.intent);
	      }, this);

	      messageHandler.on('RenderPageChunk', function transportRender(data) {
	        if (this.destroyed) {
	          return; // Ignore any pending requests if the worker was terminated.
	        }
	        var page = this.pageCache[data.pageIndex];

	        page._renderPageChunk(data.operatorList, data.intent);
	      }, this);

	      messageHandler.on('commonobj', function transportObj(data) {
	        if (this.destroyed) {
	          return; // Ignore any pending requests if the worker was terminated.
	        }

	        var id = data[0];
	        var type = data[1];
	        if (this.commonObjs.hasData(id)) {
	          return;
	        }

	        switch (type) {
	          case 'Font':
	            var exportedData = data[2];

	            if ('error' in exportedData) {
	              var exportedError = exportedData.error;
	              warn('Error during font loading: ' + exportedError);
	              this.commonObjs.resolve(id, exportedError);
	              break;
	            }
	            var fontRegistry = null;
	            if (getDefaultSetting('pdfBug') && globalScope.FontInspector &&
	                globalScope['FontInspector'].enabled) {
	              fontRegistry = {
	                registerFont: function (font, url) {
	                  globalScope['FontInspector'].fontAdded(font, url);
	                }
	              };
	            }
	            var font = new FontFaceObject(exportedData, {
	              isEvalSuported: getDefaultSetting('isEvalSupported'),
	              disableFontFace: getDefaultSetting('disableFontFace'),
	              fontRegistry: fontRegistry
	            });

	            this.fontLoader.bind(
	              [font],
	              function fontReady(fontObjs) {
	                this.commonObjs.resolve(id, font);
	              }.bind(this)
	            );
	            break;
	          case 'FontPath':
	            this.commonObjs.resolve(id, data[2]);
	            break;
	          default:
	            error('Got unknown common object type ' + type);
	        }
	      }, this);

	      messageHandler.on('obj', function transportObj(data) {
	        if (this.destroyed) {
	          return; // Ignore any pending requests if the worker was terminated.
	        }

	        var id = data[0];
	        var pageIndex = data[1];
	        var type = data[2];
	        var pageProxy = this.pageCache[pageIndex];
	        var imageData;
	        if (pageProxy.objs.hasData(id)) {
	          return;
	        }

	        switch (type) {
	          case 'JpegStream':
	            imageData = data[3];
	            loadJpegStream(id, imageData, pageProxy.objs);
	            break;
	          case 'Image':
	            imageData = data[3];
	            pageProxy.objs.resolve(id, imageData);

	            // heuristics that will allow not to store large data
	            var MAX_IMAGE_SIZE_TO_STORE = 8000000;
	            if (imageData && 'data' in imageData &&
	                imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
	              pageProxy.cleanupAfterRender = true;
	            }
	            break;
	          default:
	            error('Got unknown object type ' + type);
	        }
	      }, this);

	      messageHandler.on('DocProgress', function transportDocProgress(data) {
	        if (this.destroyed) {
	          return; // Ignore any pending requests if the worker was terminated.
	        }

	        var loadingTask = this.loadingTask;
	        if (loadingTask.onProgress) {
	          loadingTask.onProgress({
	            loaded: data.loaded,
	            total: data.total
	          });
	        }
	      }, this);

	      messageHandler.on('PageError', function transportError(data) {
	        if (this.destroyed) {
	          return; // Ignore any pending requests if the worker was terminated.
	        }

	        var page = this.pageCache[data.pageNum - 1];
	        var intentState = page.intentStates[data.intent];

	        if (intentState.displayReadyCapability) {
	          intentState.displayReadyCapability.reject(data.error);
	        } else {
	          error(data.error);
	        }

	        if (intentState.operatorList) {
	          // Mark operator list as complete.
	          intentState.operatorList.lastChunk = true;
	          for (var i = 0; i < intentState.renderTasks.length; i++) {
	            intentState.renderTasks[i].operatorListChanged();
	          }
	        }
	      }, this);

	      messageHandler.on('UnsupportedFeature',
	          function transportUnsupportedFeature(data) {
	        if (this.destroyed) {
	          return; // Ignore any pending requests if the worker was terminated.
	        }
	        var featureId = data.featureId;
	        var loadingTask = this.loadingTask;
	        if (loadingTask.onUnsupportedFeature) {
	          loadingTask.onUnsupportedFeature(featureId);
	        }
	        _UnsupportedManager.notify(featureId);
	      }, this);

	      messageHandler.on('JpegDecode', function(data) {
	        if (this.destroyed) {
	          return Promise.reject(new Error('Worker was destroyed'));
	        }

	        var imageUrl = data[0];
	        var components = data[1];
	        if (components !== 3 && components !== 1) {
	          return Promise.reject(
	            new Error('Only 3 components or 1 component can be returned'));
	        }

	        return new Promise(function (resolve, reject) {
	          var img = new Image();
	          img.onload = function () {
	            var width = img.width;
	            var height = img.height;
	            var size = width * height;
	            var rgbaLength = size * 4;
	            var buf = new Uint8Array(size * components);
	            var tmpCanvas = createScratchCanvas(width, height);
	            var tmpCtx = tmpCanvas.getContext('2d');
	            tmpCtx.drawImage(img, 0, 0);
	            var data = tmpCtx.getImageData(0, 0, width, height).data;
	            var i, j;

	            if (components === 3) {
	              for (i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
	                buf[j] = data[i];
	                buf[j + 1] = data[i + 1];
	                buf[j + 2] = data[i + 2];
	              }
	            } else if (components === 1) {
	              for (i = 0, j = 0; i < rgbaLength; i += 4, j++) {
	                buf[j] = data[i];
	              }
	            }
	            resolve({ data: buf, width: width, height: height});
	          };
	          img.onerror = function () {
	            reject(new Error('JpegDecode failed to load image'));
	          };
	          img.src = imageUrl;
	        });
	      }, this);
	    },

	    getData: function WorkerTransport_getData() {
	      return this.messageHandler.sendWithPromise('GetData', null);
	    },

	    getPage: function WorkerTransport_getPage(pageNumber, capability) {
	      if (!isInt(pageNumber) || pageNumber <= 0 || pageNumber > this.numPages) {
	        return Promise.reject(new Error('Invalid page request'));
	      }

	      var pageIndex = pageNumber - 1;
	      if (pageIndex in this.pagePromises) {
	        return this.pagePromises[pageIndex];
	      }
	      var promise = this.messageHandler.sendWithPromise('GetPage', {
	        pageIndex: pageIndex
	      }).then(function (pageInfo) {
	        if (this.destroyed) {
	          throw new Error('Transport destroyed');
	        }
	        var page = new PDFPageProxy(pageIndex, pageInfo, this);
	        this.pageCache[pageIndex] = page;
	        return page;
	      }.bind(this));
	      this.pagePromises[pageIndex] = promise;
	      return promise;
	    },

	    getPageIndex: function WorkerTransport_getPageIndexByRef(ref) {
	      return this.messageHandler.sendWithPromise('GetPageIndex', {
	        ref: ref,
	      }).catch(function (reason) {
	        return Promise.reject(new Error(reason));
	      });
	    },

	    getAnnotations: function WorkerTransport_getAnnotations(pageIndex, intent) {
	      return this.messageHandler.sendWithPromise('GetAnnotations', {
	        pageIndex: pageIndex,
	        intent: intent,
	      });
	    },

	    getDestinations: function WorkerTransport_getDestinations() {
	      return this.messageHandler.sendWithPromise('GetDestinations', null);
	    },

	    getDestination: function WorkerTransport_getDestination(id) {
	      return this.messageHandler.sendWithPromise('GetDestination', { id: id });
	    },

	    getPageLabels: function WorkerTransport_getPageLabels() {
	      return this.messageHandler.sendWithPromise('GetPageLabels', null);
	    },

	    getAttachments: function WorkerTransport_getAttachments() {
	      return this.messageHandler.sendWithPromise('GetAttachments', null);
	    },

	    getJavaScript: function WorkerTransport_getJavaScript() {
	      return this.messageHandler.sendWithPromise('GetJavaScript', null);
	    },

	    getOutline: function WorkerTransport_getOutline() {
	      return this.messageHandler.sendWithPromise('GetOutline', null);
	    },

	    getMetadata: function WorkerTransport_getMetadata() {
	      return this.messageHandler.sendWithPromise('GetMetadata', null).
	        then(function transportMetadata(results) {
	        return {
	          info: results[0],
	          metadata: (results[1] ? new Metadata(results[1]) : null)
	        };
	      });
	    },

	    getStats: function WorkerTransport_getStats() {
	      return this.messageHandler.sendWithPromise('GetStats', null);
	    },

	    startCleanup: function WorkerTransport_startCleanup() {
	      this.messageHandler.sendWithPromise('Cleanup', null).
	        then(function endCleanup() {
	        for (var i = 0, ii = this.pageCache.length; i < ii; i++) {
	          var page = this.pageCache[i];
	          if (page) {
	            page.cleanup();
	          }
	        }
	        this.commonObjs.clear();
	        this.fontLoader.clear();
	      }.bind(this));
	    }
	  };
	  return WorkerTransport;

	})();

	/**
	 * A PDF document and page is built of many objects. E.g. there are objects
	 * for fonts, images, rendering code and such. These objects might get processed
	 * inside of a worker. The `PDFObjects` implements some basic functions to
	 * manage these objects.
	 * @ignore
	 */
	var PDFObjects = (function PDFObjectsClosure() {
	  function PDFObjects() {
	    this.objs = Object.create(null);
	  }

	  PDFObjects.prototype = {
	    /**
	     * Internal function.
	     * Ensures there is an object defined for `objId`.
	     */
	    ensureObj: function PDFObjects_ensureObj(objId) {
	      if (this.objs[objId]) {
	        return this.objs[objId];
	      }

	      var obj = {
	        capability: createPromiseCapability(),
	        data: null,
	        resolved: false
	      };
	      this.objs[objId] = obj;

	      return obj;
	    },

	    /**
	     * If called *without* callback, this returns the data of `objId` but the
	     * object needs to be resolved. If it isn't, this function throws.
	     *
	     * If called *with* a callback, the callback is called with the data of the
	     * object once the object is resolved. That means, if you call this
	     * function and the object is already resolved, the callback gets called
	     * right away.
	     */
	    get: function PDFObjects_get(objId, callback) {
	      // If there is a callback, then the get can be async and the object is
	      // not required to be resolved right now
	      if (callback) {
	        this.ensureObj(objId).capability.promise.then(callback);
	        return null;
	      }

	      // If there isn't a callback, the user expects to get the resolved data
	      // directly.
	      var obj = this.objs[objId];

	      // If there isn't an object yet or the object isn't resolved, then the
	      // data isn't ready yet!
	      if (!obj || !obj.resolved) {
	        error('Requesting object that isn\'t resolved yet ' + objId);
	      }

	      return obj.data;
	    },

	    /**
	     * Resolves the object `objId` with optional `data`.
	     */
	    resolve: function PDFObjects_resolve(objId, data) {
	      var obj = this.ensureObj(objId);

	      obj.resolved = true;
	      obj.data = data;
	      obj.capability.resolve(data);
	    },

	    isResolved: function PDFObjects_isResolved(objId) {
	      var objs = this.objs;

	      if (!objs[objId]) {
	        return false;
	      } else {
	        return objs[objId].resolved;
	      }
	    },

	    hasData: function PDFObjects_hasData(objId) {
	      return this.isResolved(objId);
	    },

	    /**
	     * Returns the data of `objId` if object exists, null otherwise.
	     */
	    getData: function PDFObjects_getData(objId) {
	      var objs = this.objs;
	      if (!objs[objId] || !objs[objId].resolved) {
	        return null;
	      } else {
	        return objs[objId].data;
	      }
	    },

	    clear: function PDFObjects_clear() {
	      this.objs = Object.create(null);
	    }
	  };
	  return PDFObjects;
	})();

	/**
	 * Allows controlling of the rendering tasks.
	 * @class
	 * @alias RenderTask
	 */
	var RenderTask = (function RenderTaskClosure() {
	  function RenderTask(internalRenderTask) {
	    this._internalRenderTask = internalRenderTask;

	    /**
	     * Callback for incremental rendering -- a function that will be called
	     * each time the rendering is paused.  To continue rendering call the
	     * function that is the first argument to the callback.
	     * @type {function}
	     */
	    this.onContinue = null;
	  }

	  RenderTask.prototype = /** @lends RenderTask.prototype */ {
	    /**
	     * Promise for rendering task completion.
	     * @return {Promise}
	     */
	    get promise() {
	      return this._internalRenderTask.capability.promise;
	    },

	    /**
	     * Cancels the rendering task. If the task is currently rendering it will
	     * not be cancelled until graphics pauses with a timeout. The promise that
	     * this object extends will resolved when cancelled.
	     */
	    cancel: function RenderTask_cancel() {
	      this._internalRenderTask.cancel();
	    },

	    /**
	     * Registers callbacks to indicate the rendering task completion.
	     *
	     * @param {function} onFulfilled The callback for the rendering completion.
	     * @param {function} onRejected The callback for the rendering failure.
	     * @return {Promise} A promise that is resolved after the onFulfilled or
	     *                   onRejected callback.
	     */
	    then: function RenderTask_then(onFulfilled, onRejected) {
	      return this.promise.then.apply(this.promise, arguments);
	    }
	  };

	  return RenderTask;
	})();

	/**
	 * For internal use only.
	 * @ignore
	 */
	var InternalRenderTask = (function InternalRenderTaskClosure() {

	  function InternalRenderTask(callback, params, objs, commonObjs, operatorList,
	                              pageNumber) {
	    this.callback = callback;
	    this.params = params;
	    this.objs = objs;
	    this.commonObjs = commonObjs;
	    this.operatorListIdx = null;
	    this.operatorList = operatorList;
	    this.pageNumber = pageNumber;
	    this.running = false;
	    this.graphicsReadyCallback = null;
	    this.graphicsReady = false;
	    this.useRequestAnimationFrame = false;
	    this.cancelled = false;
	    this.capability = createPromiseCapability();
	    this.task = new RenderTask(this);
	    // caching this-bound methods
	    this._continueBound = this._continue.bind(this);
	    this._scheduleNextBound = this._scheduleNext.bind(this);
	    this._nextBound = this._next.bind(this);
	  }

	  InternalRenderTask.prototype = {

	    initializeGraphics:
	        function InternalRenderTask_initializeGraphics(transparency) {

	      if (this.cancelled) {
	        return;
	      }
	      if (getDefaultSetting('pdfBug') && globalScope.StepperManager &&
	          globalScope.StepperManager.enabled) {
	        this.stepper = globalScope.StepperManager.create(this.pageNumber - 1);
	        this.stepper.init(this.operatorList);
	        this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
	      }

	      var params = this.params;
	      this.gfx = new CanvasGraphics(params.canvasContext, this.commonObjs,
	                                    this.objs, params.imageLayer);

	      this.gfx.beginDrawing(params.transform, params.viewport, transparency);
	      this.operatorListIdx = 0;
	      this.graphicsReady = true;
	      if (this.graphicsReadyCallback) {
	        this.graphicsReadyCallback();
	      }
	    },

	    cancel: function InternalRenderTask_cancel() {
	      this.running = false;
	      this.cancelled = true;
	      this.callback('cancelled');
	    },

	    operatorListChanged: function InternalRenderTask_operatorListChanged() {
	      if (!this.graphicsReady) {
	        if (!this.graphicsReadyCallback) {
	          this.graphicsReadyCallback = this._continueBound;
	        }
	        return;
	      }

	      if (this.stepper) {
	        this.stepper.updateOperatorList(this.operatorList);
	      }

	      if (this.running) {
	        return;
	      }
	      this._continue();
	    },

	    _continue: function InternalRenderTask__continue() {
	      this.running = true;
	      if (this.cancelled) {
	        return;
	      }
	      if (this.task.onContinue) {
	        this.task.onContinue.call(this.task, this._scheduleNextBound);
	      } else {
	        this._scheduleNext();
	      }
	    },

	    _scheduleNext: function InternalRenderTask__scheduleNext() {
	      if (this.useRequestAnimationFrame && typeof window !== 'undefined') {
	        window.requestAnimationFrame(this._nextBound);
	      } else {
	        Promise.resolve(undefined).then(this._nextBound);
	      }
	    },

	    _next: function InternalRenderTask__next() {
	      if (this.cancelled) {
	        return;
	      }
	      this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList,
	                                        this.operatorListIdx,
	                                        this._continueBound,
	                                        this.stepper);
	      if (this.operatorListIdx === this.operatorList.argsArray.length) {
	        this.running = false;
	        if (this.operatorList.lastChunk) {
	          this.gfx.endDrawing();
	          this.callback();
	        }
	      }
	    }

	  };

	  return InternalRenderTask;
	})();

	/**
	 * (Deprecated) Global observer of unsupported feature usages. Use
	 * onUnsupportedFeature callback of the {PDFDocumentLoadingTask} instance.
	 */
	var _UnsupportedManager = (function UnsupportedManagerClosure() {
	  var listeners = [];
	  return {
	    listen: function (cb) {
	      deprecated('Global UnsupportedManager.listen is used: ' +
	                 ' use PDFDocumentLoadingTask.onUnsupportedFeature instead');
	      listeners.push(cb);
	    },
	    notify: function (featureId) {
	      for (var i = 0, ii = listeners.length; i < ii; i++) {
	        listeners[i](featureId);
	      }
	    }
	  };
	})();

	if (typeof pdfjsVersion !== 'undefined') {
	  exports.version = pdfjsVersion;
	}
	if (typeof pdfjsBuild !== 'undefined') {
	  exports.build = pdfjsBuild;
	}

	exports.getDocument = getDocument;
	exports.PDFDataRangeTransport = PDFDataRangeTransport;
	exports.PDFWorker = PDFWorker;
	exports.PDFDocumentProxy = PDFDocumentProxy;
	exports.PDFPageProxy = PDFPageProxy;
	exports._UnsupportedManager = _UnsupportedManager;
	}));


	(function (root, factory) {
	  {
	    factory((root.pdfjsDisplayGlobal = {}), root.pdfjsSharedUtil,
	      root.pdfjsDisplayDOMUtils, root.pdfjsDisplayAPI,
	      root.pdfjsDisplayAnnotationLayer, root.pdfjsDisplayTextLayer,
	      root.pdfjsDisplayMetadata, root.pdfjsDisplaySVG);
	  }
	}(this, function (exports, sharedUtil, displayDOMUtils, displayAPI,
	                  displayAnnotationLayer, displayTextLayer, displayMetadata,
	                  displaySVG) {

	  var globalScope = sharedUtil.globalScope;
	  var deprecated = sharedUtil.deprecated;
	  var warn = sharedUtil.warn;
	  var LinkTarget = displayDOMUtils.LinkTarget;

	  var isWorker = (typeof window === 'undefined');

	  // The global PDFJS object is now deprecated and will not be supported in
	  // the future. The members below are maintained for backward  compatibility
	  // and shall not be extended or modified. If the global.js is included as
	  // a module, we will create a global PDFJS object instance or use existing.
	  if (!globalScope.PDFJS) {
	    globalScope.PDFJS = {};
	  }
	  var PDFJS = globalScope.PDFJS;

	  if (typeof pdfjsVersion !== 'undefined') {
	    PDFJS.version = pdfjsVersion;
	  }
	  if (typeof pdfjsBuild !== 'undefined') {
	    PDFJS.build = pdfjsBuild;
	  }

	  PDFJS.pdfBug = false;

	  if (PDFJS.verbosity !== undefined) {
	    sharedUtil.setVerbosityLevel(PDFJS.verbosity);
	  }
	  delete PDFJS.verbosity;
	  Object.defineProperty(PDFJS, 'verbosity', {
	    get: function () { return sharedUtil.getVerbosityLevel(); },
	    set: function (level) { sharedUtil.setVerbosityLevel(level); },
	    enumerable: true,
	    configurable: true
	  });

	  PDFJS.VERBOSITY_LEVELS = sharedUtil.VERBOSITY_LEVELS;
	  PDFJS.OPS = sharedUtil.OPS;
	  PDFJS.UNSUPPORTED_FEATURES = sharedUtil.UNSUPPORTED_FEATURES;
	  PDFJS.isValidUrl = sharedUtil.isValidUrl;
	  PDFJS.shadow = sharedUtil.shadow;
	  PDFJS.createBlob = sharedUtil.createBlob;
	  PDFJS.createObjectURL = function PDFJS_createObjectURL(data, contentType) {
	    return sharedUtil.createObjectURL(data, contentType,
	                                      PDFJS.disableCreateObjectURL);
	  };
	  Object.defineProperty(PDFJS, 'isLittleEndian', {
	    configurable: true,
	    get: function PDFJS_isLittleEndian() {
	      var value = sharedUtil.isLittleEndian();
	      return sharedUtil.shadow(PDFJS, 'isLittleEndian', value);
	    }
	  });
	  PDFJS.removeNullCharacters = sharedUtil.removeNullCharacters;
	  PDFJS.PasswordResponses = sharedUtil.PasswordResponses;
	  PDFJS.PasswordException = sharedUtil.PasswordException;
	  PDFJS.UnknownErrorException = sharedUtil.UnknownErrorException;
	  PDFJS.InvalidPDFException = sharedUtil.InvalidPDFException;
	  PDFJS.MissingPDFException = sharedUtil.MissingPDFException;
	  PDFJS.UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
	  PDFJS.Util = sharedUtil.Util;
	  PDFJS.PageViewport = sharedUtil.PageViewport;
	  PDFJS.createPromiseCapability = sharedUtil.createPromiseCapability;

	  /**
	   * The maximum allowed image size in total pixels e.g. width * height. Images
	   * above this value will not be drawn. Use -1 for no limit.
	   * @var {number}
	   */
	  PDFJS.maxImageSize = (PDFJS.maxImageSize === undefined ?
	                        -1 : PDFJS.maxImageSize);

	  /**
	   * The url of where the predefined Adobe CMaps are located. Include trailing
	   * slash.
	   * @var {string}
	   */
	  PDFJS.cMapUrl = (PDFJS.cMapUrl === undefined ? null : PDFJS.cMapUrl);

	  /**
	   * Specifies if CMaps are binary packed.
	   * @var {boolean}
	   */
	  PDFJS.cMapPacked = PDFJS.cMapPacked === undefined ? false : PDFJS.cMapPacked;

	  /**
	   * By default fonts are converted to OpenType fonts and loaded via font face
	   * rules. If disabled, the font will be rendered using a built in font
	   * renderer that constructs the glyphs with primitive path commands.
	   * @var {boolean}
	   */
	  PDFJS.disableFontFace = (PDFJS.disableFontFace === undefined ?
	                           false : PDFJS.disableFontFace);

	  /**
	   * Path for image resources, mainly for annotation icons. Include trailing
	   * slash.
	   * @var {string}
	   */
	  PDFJS.imageResourcesPath = (PDFJS.imageResourcesPath === undefined ?
	                              '' : PDFJS.imageResourcesPath);

	  /**
	   * Disable the web worker and run all code on the main thread. This will
	   * happen automatically if the browser doesn't support workers or sending
	   * typed arrays to workers.
	   * @var {boolean}
	   */
	  PDFJS.disableWorker = (PDFJS.disableWorker === undefined ?
	                         false : PDFJS.disableWorker);

	  /**
	   * Path and filename of the worker file. Required when the worker is enabled
	   * in development mode. If unspecified in the production build, the worker
	   * will be loaded based on the location of the pdf.js file. It is recommended
	   * that the workerSrc is set in a custom application to prevent issues caused
	   * by third-party frameworks and libraries.
	   * @var {string}
	   */
	  PDFJS.workerSrc = (PDFJS.workerSrc === undefined ? null : PDFJS.workerSrc);

	  /**
	   * Disable range request loading of PDF files. When enabled and if the server
	   * supports partial content requests then the PDF will be fetched in chunks.
	   * Enabled (false) by default.
	   * @var {boolean}
	   */
	  PDFJS.disableRange = (PDFJS.disableRange === undefined ?
	                        false : PDFJS.disableRange);

	  /**
	   * Disable streaming of PDF file data. By default PDF.js attempts to load PDF
	   * in chunks. This default behavior can be disabled.
	   * @var {boolean}
	   */
	  PDFJS.disableStream = (PDFJS.disableStream === undefined ?
	                         false : PDFJS.disableStream);

	  /**
	   * Disable pre-fetching of PDF file data. When range requests are enabled
	   * PDF.js will automatically keep fetching more data even if it isn't needed
	   * to display the current page. This default behavior can be disabled.
	   *
	   * NOTE: It is also necessary to disable streaming, see above,
	   *       in order for disabling of pre-fetching to work correctly.
	   * @var {boolean}
	   */
	  PDFJS.disableAutoFetch = (PDFJS.disableAutoFetch === undefined ?
	                            false : PDFJS.disableAutoFetch);

	  /**
	   * Enables special hooks for debugging PDF.js.
	   * @var {boolean}
	   */
	  PDFJS.pdfBug = (PDFJS.pdfBug === undefined ? false : PDFJS.pdfBug);

	  /**
	   * Enables transfer usage in postMessage for ArrayBuffers.
	   * @var {boolean}
	   */
	  PDFJS.postMessageTransfers = (PDFJS.postMessageTransfers === undefined ?
	                                true : PDFJS.postMessageTransfers);

	  /**
	   * Disables URL.createObjectURL usage.
	   * @var {boolean}
	   */
	  PDFJS.disableCreateObjectURL = (PDFJS.disableCreateObjectURL === undefined ?
	                                  false : PDFJS.disableCreateObjectURL);

	  /**
	   * Disables WebGL usage.
	   * @var {boolean}
	   */
	  PDFJS.disableWebGL = (PDFJS.disableWebGL === undefined ?
	                        true : PDFJS.disableWebGL);

	  /**
	   * Specifies the |target| attribute for external links.
	   * The constants from PDFJS.LinkTarget should be used:
	   *  - NONE [default]
	   *  - SELF
	   *  - BLANK
	   *  - PARENT
	   *  - TOP
	   * @var {number}
	   */
	  PDFJS.externalLinkTarget = (PDFJS.externalLinkTarget === undefined ?
	                              LinkTarget.NONE : PDFJS.externalLinkTarget);

	  /**
	   * Specifies the |rel| attribute for external links. Defaults to stripping
	   * the referrer.
	   * @var {string}
	   */
	  PDFJS.externalLinkRel = (PDFJS.externalLinkRel === undefined ?
	                           'noreferrer' : PDFJS.externalLinkRel);

	  /**
	    * Determines if we can eval strings as JS. Primarily used to improve
	    * performance for font rendering.
	    * @var {boolean}
	    */
	  PDFJS.isEvalSupported = (PDFJS.isEvalSupported === undefined ?
	                           true : PDFJS.isEvalSupported);

	  var savedOpenExternalLinksInNewWindow = PDFJS.openExternalLinksInNewWindow;
	  delete PDFJS.openExternalLinksInNewWindow;
	  Object.defineProperty(PDFJS, 'openExternalLinksInNewWindow', {
	    get: function () {
	      return PDFJS.externalLinkTarget === LinkTarget.BLANK;
	    },
	    set: function (value) {
	      if (value) {
	        deprecated('PDFJS.openExternalLinksInNewWindow, please use ' +
	          '"PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.');
	      }
	      if (PDFJS.externalLinkTarget !== LinkTarget.NONE) {
	        warn('PDFJS.externalLinkTarget is already initialized');
	        return;
	      }
	      PDFJS.externalLinkTarget = value ? LinkTarget.BLANK : LinkTarget.NONE;
	    },
	    enumerable: true,
	    configurable: true
	  });
	  if (savedOpenExternalLinksInNewWindow) {
	    /**
	     * (Deprecated) Opens external links in a new window if enabled.
	     * The default behavior opens external links in the PDF.js window.
	     *
	     * NOTE: This property has been deprecated, please use
	     *       `PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK` instead.
	     * @var {boolean}
	     */
	    PDFJS.openExternalLinksInNewWindow = savedOpenExternalLinksInNewWindow;
	  }

	  PDFJS.getDocument = displayAPI.getDocument;
	  PDFJS.PDFDataRangeTransport = displayAPI.PDFDataRangeTransport;
	  PDFJS.PDFWorker = displayAPI.PDFWorker;

	  Object.defineProperty(PDFJS, 'hasCanvasTypedArrays', {
	    configurable: true,
	    get: function PDFJS_hasCanvasTypedArrays() {
	      var value = displayDOMUtils.hasCanvasTypedArrays();
	      return sharedUtil.shadow(PDFJS, 'hasCanvasTypedArrays', value);
	    }
	  });
	  PDFJS.CustomStyle = displayDOMUtils.CustomStyle;
	  PDFJS.LinkTarget = LinkTarget;
	  PDFJS.addLinkAttributes = displayDOMUtils.addLinkAttributes;
	  PDFJS.getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
	  PDFJS.isExternalLinkTargetSet = displayDOMUtils.isExternalLinkTargetSet;

	  PDFJS.AnnotationLayer = displayAnnotationLayer.AnnotationLayer;

	  PDFJS.renderTextLayer = displayTextLayer.renderTextLayer;

	  PDFJS.Metadata = displayMetadata.Metadata;

	  PDFJS.SVGGraphics = displaySVG.SVGGraphics;

	  PDFJS.UnsupportedManager = displayAPI._UnsupportedManager;

	  exports.globalScope = globalScope;
	  exports.isWorker = isWorker;
	  exports.PDFJS = globalScope.PDFJS;
	}));
	  }).call(pdfjsLibs);

	  exports.PDFJS = pdfjsLibs.pdfjsDisplayGlobal.PDFJS;
	  exports.build = pdfjsLibs.pdfjsDisplayAPI.build;
	  exports.version = pdfjsLibs.pdfjsDisplayAPI.version;
	  exports.getDocument = pdfjsLibs.pdfjsDisplayAPI.getDocument;
	  exports.PDFDataRangeTransport =
	    pdfjsLibs.pdfjsDisplayAPI.PDFDataRangeTransport;
	  exports.PDFWorker = pdfjsLibs.pdfjsDisplayAPI.PDFWorker;
	  exports.renderTextLayer = pdfjsLibs.pdfjsDisplayTextLayer.renderTextLayer;
	  exports.AnnotationLayer =
	    pdfjsLibs.pdfjsDisplayAnnotationLayer.AnnotationLayer;
	  exports.CustomStyle = pdfjsLibs.pdfjsDisplayDOMUtils.CustomStyle;
	  exports.PasswordResponses = pdfjsLibs.pdfjsSharedUtil.PasswordResponses;
	  exports.InvalidPDFException = pdfjsLibs.pdfjsSharedUtil.InvalidPDFException;
	  exports.MissingPDFException = pdfjsLibs.pdfjsSharedUtil.MissingPDFException;
	  exports.SVGGraphics = pdfjsLibs.pdfjsDisplaySVG.SVGGraphics;
	  exports.UnexpectedResponseException =
	    pdfjsLibs.pdfjsSharedUtil.UnexpectedResponseException;
	  exports.OPS = pdfjsLibs.pdfjsSharedUtil.OPS;
	  exports.UNSUPPORTED_FEATURES = pdfjsLibs.pdfjsSharedUtil.UNSUPPORTED_FEATURES;
	  exports.isValidUrl = pdfjsLibs.pdfjsSharedUtil.isValidUrl;
	  exports.createObjectURL = pdfjsLibs.pdfjsSharedUtil.createObjectURL;
	  exports.removeNullCharacters = pdfjsLibs.pdfjsSharedUtil.removeNullCharacters;
	  exports.shadow = pdfjsLibs.pdfjsSharedUtil.shadow;
	  exports.createBlob = pdfjsLibs.pdfjsSharedUtil.createBlob;
	  exports.getFilenameFromUrl =
	    pdfjsLibs.pdfjsDisplayDOMUtils.getFilenameFromUrl;
	  exports.addLinkAttributes = pdfjsLibs.pdfjsDisplayDOMUtils.addLinkAttributes;
	}));


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * ProgressBar Component 
	 * 
	 * takes a percent prop for displaying progress
	 * 
	 */
	var ProgressBar = function (_React$Component) {
	    _inherits(ProgressBar, _React$Component);

	    /**
	     * constructor
	     * @param {object} props
	     */
	    function ProgressBar(props) {
	        _classCallCheck(this, ProgressBar);

	        var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

	        _this.displayName = 'ProgressBar';
	        return _this;
	    }

	    /**
	     * render
	     * @return {ReactElement} markup
	     */


	    _createClass(ProgressBar, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { id: 'loadingBar',
	                    ref: function ref(c) {
	                        return _this2._loadingBar = c;
	                    },
	                    style: {
	                        display: this.props.percent === 100 ? 'none' : 'block'
	                    }
	                },
	                _react2.default.createElement('div', { className: 'progress', style: {
	                        width: this.props.percent + '%'
	                    } }),
	                _react2.default.createElement('div', { className: 'glimmer' })
	            );
	        }
	    }]);

	    return ProgressBar;
	}(_react2.default.Component);
	/**
	 * ProgressBar Component Proptypes
	 */


	ProgressBar.defaultProps = {
	    percent: '0'
	};
	ProgressBar.propTypes = {
	    percent: _react2.default.PropTypes.number.isRequired
	};
	exports.default = ProgressBar;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, "*{padding:0;margin:0}html{height:100%;width:100%;overflow:hidden;font-size:10px}header{background-color:#f4f4f4}header h1{border-bottom:1px solid #d8d8d8;color:#858585;font-size:23px;font-style:italic;font-weight:400;overflow:hidden;padding:10px;text-align:center;text-overflow:ellipsis;white-space:nowrap}body{background:url(" + __webpack_require__(16) + ");color:#fff;font-family:sans-serif;font-size:10px;padding-bottom:5rem}body,section{height:100%;width:100%;overflow:hidden}section{top:0;font-size:2rem}footer,section{position:absolute;left:0}footer{background-image:url(" + __webpack_require__(17) + ");height:4rem;bottom:0;right:0;z-index:1;box-shadow:0 -.2rem .5rem rgba(50,50,50,.75)}.toolbarButton{display:block;padding:0;margin:0;border-width:0;background-position:50%;background-repeat:no-repeat;background-color:transparent}.toolbarButton.pageUp{left:0;background-image:url(" + __webpack_require__(18) + ")}.toolbarButton.pageDown,.toolbarButton.pageUp{position:absolute;width:18%;height:100%;background-size:2rem}.toolbarButton.pageDown{left:18%;background-image:url(" + __webpack_require__(19) + ")}#pageNumber{-moz-appearance:textfield;position:absolute;width:28%;height:100%;left:36%;text-align:center;border:0;background-color:transparent;font-size:1.2rem;color:#fff;background-image:url(" + __webpack_require__(20) + "),url(" + __webpack_require__(21) + ");background-repeat:no-repeat;background-position:0,100%;background-size:.2rem,.2rem}.toolbarButton.zoomOut{left:46%;background-image:url(" + __webpack_require__(22) + ")}.toolbarButton.zoomIn,.toolbarButton.zoomOut{position:absolute;width:18%;height:100%;background-size:2.4rem}.toolbarButton.zoomIn{left:64%;background-image:url(" + __webpack_require__(23) + ")}.toolbarButton.close{position:absolute;width:18%;height:100%;left:82%;background-image:url(" + __webpack_require__(23) + ");background-size:2.4rem;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.toolbarButton[disabled]{opacity:.3}.hidden{display:none}[hidden]{display:none!important}#viewerContainer{position:absolute;overflow:auto;width:100%;top:5rem;bottom:4rem;left:0;right:0}canvas{margin:auto;display:block}.pdfViewer .page .loadingIcon{width:2.9rem;height:2.9rem;background:url(" + __webpack_require__(24) + ") no-repeat 0 0/38rem;border:medium none;animation:1s steps(10) 0s normal none infinite moveDefault;display:block;position:absolute;top:calc((100% - 2.9rem) / 2);left:calc((100% - 2.9rem) / 2)}@keyframes moveDefault{0%{background-position:0 top}to{background-position:-39rem top}}#loadingBar{position:relative;height:.6rem;background-color:#333;border-bottom:1px solid #333}#loadingBar .progress{position:absolute;left:0;width:0;height:100%;background-color:#ddd;overflow:hidden;transition:width .2s}@keyframes progressIndeterminate{0%{left:0}50%{left:100%}to{left:100%}}#loadingBar .progress.indeterminate{background-color:#999;transition:none}#loadingBar .indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:5rem;background-image:linear-gradient(90deg,#999 0,#fff 50%,#999);background-size:100% 100%;background-repeat:no-repeat;animation:progressIndeterminate 2s linear infinite}#errorWrapper{background:none repeat scroll 0 0 #f55;color:#fff;left:0;position:absolute;right:0;top:3.2rem;z-index:1000;padding:.3rem;font-size:.8em}#errorMessageLeft{float:left}#errorMessageRight{float:right}#errorMoreInfo{background-color:#fff;color:#000;padding:.3rem;margin:.3rem;width:98%}.textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}.textLayer>div{color:transparent;position:absolute;white-space:pre;cursor:text;-webkit-transform-origin:0 0;transform-origin:0 0}.textLayer .highlight{margin:-1px;padding:1px;background-color:#b400aa;border-radius:4px}.textLayer .highlight.begin{border-radius:4px 0 0 4px}.textLayer .highlight.end{border-radius:0 4px 4px 0}.textLayer .highlight.middle{border-radius:0}.textLayer .highlight.selected{background-color:#006400}.textLayer ::selection{background:#00f}.textLayer ::-moz-selection{background:#00f}.textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none}.textLayer .endOfContent.active{top:0}.annotationLayer section{position:absolute}.annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%;background:url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\") 0 0 repeat}.annotationLayer .linkAnnotation>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer}.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .textWidgetAnnotation input,.annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;padding:0 3px;vertical-align:top;width:100%}.annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .textWidgetAnnotation input[disabled],.annotationLayer .textWidgetAnnotation textarea[disabled]{background:none;border:1px solid transparent;cursor:not-allowed}.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .textWidgetAnnotation input:hover,.annotationLayer .textWidgetAnnotation textarea:hover{border:1px solid #000}.annotationLayer .choiceWidgetAnnotation select:focus,.annotationLayer .textWidgetAnnotation input:focus,.annotationLayer .textWidgetAnnotation textarea:focus{background:none;border:1px solid transparent}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}.annotationLayer .popupWrapper{position:absolute;width:20em}.annotationLayer .popup{position:absolute;z-index:200;max-width:20em;background-color:#ff9;box-shadow:0 2px 5px #333;border-radius:2px;padding:.6em;margin-left:5px;cursor:pointer;word-wrap:break-word}.annotationLayer .popup h1{font-size:1em;border-bottom:1px solid #000;padding-bottom:.2em}.annotationLayer .popup p{padding-top:.2em}.annotationLayer .fileAttachmentAnnotation,.annotationLayer .highlightAnnotation,.annotationLayer .squigglyAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .underlineAnnotation{cursor:pointer}.pdfViewer .canvasWrapper{overflow:hidden}.pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid transparent;background-clip:content-box;border-image:url(" + __webpack_require__(25) + ") 9 9 repeat;background-color:#fff}.pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}.pdfViewer.singlePageView{display:inline-block}.pdfViewer.singlePageView .page{margin:0;border:none}.pdfViewer .page canvas{margin:0;display:block}.pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(" + __webpack_require__(26) + ") 50% no-repeat}.pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}.pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100%;border:0}.pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important;border:0}.pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAFVBMVEXy8u/y8u7w8O3v7+zx8e3z8/Dv7+vwhprCAAAB1klEQVR4ASTKAQYAQRTD0P5p3/2vvNgQiATmee4awtuY5V41RsSgUxKgT+eY3UhJ3f8OueA58OLnFpE5ndtOnzhRaVpit3M5ij279rV5vHL07m0ipL+YGu7uLUH+zPaVLAcYAERhCAan+r37H3mxIEMfI2u4rph31yEXYXgXKRp7F46uj+Q0Pfj7PVLNCR1zuHa7ecEGgpbU76N+PEPFY67+q+7A/NOD/Q6J5gpNMRGtah3gOFJ4oA+MUBw4CdBhbmjpFMI5S6ECBEe4PnryIJdCp+PZPcw5t+nMuBAPFPKKvtgCD0csC5A5UAuYSYM4fbxQUlxwFMw4qhAUGxCmajrGwQTngjieOvHmgSyPYmtFXrrMOVVP8KBMYJ24l5OSwHMR8ZCaguM5kuHUBTg9Wu4yafW2AAzAU4/co4xUKoczisWNPbBQSDkznpzjzlBJcAK0ZOiA4NCCHLe+F1uJeKOrhoSubu6AXky3XQh67kZuozsDEek6ZA5rR8a1bDWAjLl48gRSHrmDQV/bA94juHiG1y4XVQAI7HQwcC62o70nCgPqdkdzAArunOU5FEJiik6eExeQmro1VkDkkvU4GjyWpyvmbjijhwOOugVEiVK93sG2vmw+JhIJ1CwBVfsAAAAASUVORK5CYII="

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAoBAMAAAB9bj4aAAAAKlBMVEUNDQ0HBwcLCwsEBAQBAQEJCQkKCgoMDAwCAgIDAwMGBgYFBQUICAgAAACir0z5AAARwklEQVR4AQ3Ghcve5sLA4d8t8Txwr66Q6juF1B2yrmYfpKv3bJC6HkjdIXU9kHZag9TstAfSvav3QHq2zgfP3P+Xbxd2SRqn/DjdCj7W37+YWmmEHMS63O0BeLbPJylJnhxKGgFklffO/Mi2qlYjUF/fPGhYjFnM1g+OnfLlpo+EgSy88zudal4VDHw19bdgAzoWIYrcSWMsLy5lyyvo8laWYNdZf/dpMM1oPg4JMn6ziJpvULUjeYm/1Kg4AV9giTO0Gyw7uVYXlmo3ewHDTMc9tvIw84I9fIG6dqhn7/4OkuwXwQouNBE63nSXZHAa8VKgq8Zy7YRVqNlrYUutmZtVy3CE3fbZ+fIP66M6Tc4h5jlOede1iDF9EzZnjBOi+/3hWBbUQEtmeL/3K+8CTF9MxCP3cSPAgaRYnRW9cbmMdZsctnwexowV1/30PTxuvfh/syZ/m+6OGILA0248lICKSAkNtYfcvbuoPzsckqdlzIroQx2reS0iCxxWUYbwEUKTw3zLpwLwEOpgV8PidBTW5BpXiEQQK1LyPSgBX1delzr1G6Cq/IvSo9mtzEA1PKjXPchPUqeXwRV9vTLMcCiE/jz7YIPcdQ78VyNHpYco/ZTKzjK7xDtoD1Z21jQ9spKiCnEAkaOos9pHFyKJr5kYVpK9jp583NrZERFSgTOERIChbsNvuiQRKBORn4kjB5uogU8968skucUhe8QbVngxc4gtAaDbukWYkQirC6jccfEKmdCiNzagiYKH3v5W+1yvRiVoIntOHfkVSSYvuorvdq7IPucG4+9n4AEQSteq036hBUyb1rULnnRnmV+73fdit6oEOXMTly0v3bLxBVkaDgLrPTyykmjeZ61S78UsLytUx59eIqNYNnFLvVnIGs5Jciy7FM+aLZEgyAKa6a+psPwKT7OCoInjCDg+gsA/T4toatFhJQP89wG8SyALQhpsM7OK1C/lAaJYwZpV7f3uBcI3Jw2g6cnhzZFXJMStIs5y4WBwgWO//j0mtAtnqEvThi08yCh3ahKGhv2hayathgBOQ1r0vSRy0G4MBg3sHP8CNNjvAzlRjUVhDqfEDxJ7parB8qygJJLQ/uYMlfcO9HbaU6rbnlOPY96tL7n9z5ARNiApNwwleCOpGlG16IqCranXImxrflw2JikEVZXPAapXSkGuDbINFhGXeJVFWH8WP3uhW4vQxhXhYhcEODkgHRO5YAVQVjMhSthQc/TmgHjH9k/sTvBwS7Isx6ZEA03cPWZxEnEME9xWDbrQuAtEUeT1lhw8MwtsLmf4UUZpP8AN48LS6kQKA2bz84IA0yojCAkJh71r0hYKuvslCSOxK7CBwoJm7z34FzSucvwXPE7HmZXcyIISsgJecQV84iDIyrvtTxenHVh0Ak97DsrlvrLhRV7NafHglcmCSv/B59NWweLHa9cPYROu8kn9miBYbi3DD3CNJg42S7Sec9hqfL08aHxTuFAXry1VNDaX9jySz4ehwxS4hnXDs3rga7+AG2HwtG95GxoyoGKfK99/kDOt41b1o7AczYVzQyuJFwhthwvrlJATuo8F2kA42RQ44asj7ugSXJe2e2ekabcR8MmNiM/qe0X+lU9tXUg5ftucpblDoU5j73I9CGtZ+BqIsKCVOuWWrtTk2EkafY9hXqITa5FpyNJky5ocu8rLZbvBo7LVrfB9Eg4+A5zSTULGO71LWjEJiZ39PdDNux6wAtycgMit2Byl52NIqtEiAN47npjrJLaXlCFYwowAFrnHdIfsWZfGSQFcs5/+SMOltdsVQHoXqXjH8CGUKRSgCiaAd8lt7KyMZNzk+/9zgygwlMX1PyGOHrGN3cyrS2TAdASp996QjrCiyUJGdebPARTJ+opOQeg/aKXm+SlcwZuS6lSeZbXi32DKP6MI2YMYFnid+bARrH/DgjO8lPsvu8dixKsjzthoJPCEAUMgzBB1nVlQuYbE+s+n4vqA4D7wBYI4nSSaA1z6ltTxU+Qdx7joNljY2ZCywOEpb9lR2QeAOIG/WjGHvy4K+hTtdQnLEDk/hdN5nvc/g1hxfnOmN58jKrRuO1Hh31xLCWQRl/fG7mdFtJSqV+oGfDGTQ9fno/7UTf6+h8hzSk5qCxkcL6P8Wly0axVriX0aBSv0NYLXAk9FObVEb5XBCbQwDXyE2lWYUDmrHj2LqCeji4kWe5rFZMqU8Vd1iXQSCY9oSkHLpyY/Jh7PI64tO0lYqsxUu1NnP/5otfd4JMtoJ+ysZUpba8/4QUQTsN+jjvkmY1x7MUAapZdwNVrgjlMSrrVgLQsf+6UnSVSQeD6xYwNckdXnQLdBJwDpEpGfivDLKg/XDgvGjP6zLvXjRvClJGv4nMeddG6mN+CHDWF7kn2jrBuIR4uUwqjcJ6c7TnCnS7vP+/+rYF1EM2wipGzHZhv1msGEuNQUYxIq47QAhTpIvjxTZIzCGt03C+wt5zTTjfyeaX0919Q0D7G6VedTuP0k/S9tVMd6fONgRrIAqMUTLmfGXSoD283EXHLycaQrljOjzB1s+BziEm8G4FRQSnkBppNRS2SbSyZqpToJGMOrZA8p5sY9nBDM1jQmUqlNyrsSogQ9PMvK9J8rPw3BspH4idVWvu2s7XUnuQAfwrvJG2So5i2Th3omIZ7EWKK2kdzFsq0b32Lz7iLVRDnbhxTpBjyTQWy5ceVJKCoCf6rHqCO2dfL1Nu4NIvsD3EPf1oOAD3wAape2jKWmdNXP1UUNCWQZUMbbbNfLTR+KQRmI91tWHSkP6jyemSBtmJgf9ZXl0sxm7HlCDLPC/KqLz9vU1OIF837sxWvkMzvvMqvCA9JBLQOrlv16IIT2mSqMRnQWPCxQNKH3NhGfU30o/NrLDf9eq2GhHZSCZtcA+xbkuCvAWvtlauE27Qhgo6YE9WZWrvdpR0kdF9ViQRj3lkz/pbM5B0YndR8DdkfqvAMf6q/Kd8o91p53a2pO64H/ozW6DP18GUXYVpIkIlOWMxhYbX1Tt0pozSF93vZ9MlvJBKpDJZPpg4SDkBpjEHxsSqK2pHqG59hcHZ9Nj6PQ3dULyL6TSx6mFUq+HQJObQNFLnUdoSsYgNGvGArLCermG567wyAcbPfJ0qpolgBtURQjOeqz1CnTt+B63qVdNRC3Qm/PIrat4j6G4Z98ejoOcV00r2N5kJCbpPnC8um7PbRH1HgJhKTRp3hGUsMld+i+6BMnJ2gcsfGNZtxzXbT+VRS8Q+52pgHg5WJJnpv94BFhecjJriSD6nscKd+kqSY52wFIQmxwJj4j5LkzwBtwyVcRbhwR/zOdpXBIujrxt/zi8Wsj4qqyRc/Rw8sVGgi8RcnpgFkoA/mzGvzbWs/0OYLH+omy/Gme9Yrj+johynICSEmS+Hszi+v3mi4MREOdua66jr6R1nYKDlyGZ4Es0MS0pmMDzLGVKZ6aysm3Kr/CBf3VpP8AhdLJrmgJdfq1yWsZJqSpXYPd8ougMNC2LhsK0veBjS9HBE0OH73jmRmt/ZC+HFguORl8mzUTaN02vER1Ts31FUpgUZcngoh7YmWjfC+qyE0uw+agKcgXdKCI6PmPpM45FJl0GY0wlhv711XJ/Mg40CKDmSMM4qlT+vg1admrqKi9HfH0HJmEaRDfhsIV9kqehmsCvo6PKdS8rlNxFwrP+6or+RtKCoiYDNJKHfktCm07vxuXiI8ZJ3nInqXD3NqBLBcJNG4oE60w2Xwex/lUjLvmAmR1LoGUL3t9M8BAKEj+8Y2GJKVYNqgYNpmyDLL3ga3KErQxmk3fKWQ4nE3tD6IwyfRC6p1jyz0plP+hBoLWkV1BguZKRbkMM8gG4cj3cCmxONngIZKVuVzeFKn7AR8voq2x48z1aOZLjmj4Gruk9GSFIdko4FjfUZxLkRd7kzt4wlrxdeMTpj5tf2t5I76as27mxezENuVRAi5WsUpgXW5l1aEMbAxMhPSr3SbQMj9mXSnyjdCgRFm9XrFVf7KPHi6jmiSBEurmGgmU+5l2P3lAWOt3L7BBsPa8xh1YQseIUreDB1V5E6ExLxboBVJX9p1hkxnFM00EltojE0uWnBq80LFkVAQWYhkubRgE+ze/19R2tbVyhNtek2epNGshvuIOiFhBD8tqwG0UZ1FX7SgVJiNwJ2ERcDwp/rkljoxMFfgdTQGy9AORR3c85FvxwyJ6IoTsQ1oxPlIcNBP4F3x1iv3Oii/TpMiY/0JvcqQcuKhD0u4ZC78BxtgHCAqyPDeS13OLu4R0t6XV2If25pvD3QIep78Tvg/ZsCiszGw5PmmosdkSh98R8TylpFT1T6cCz9UxvcRYnmbRq0jqdj6rp7u9Qfg0jlQHH3O0mkLlzOKVpAC3UJvJIC5fDrlvFQqoZpMKVeePevucC/qPAKMiml7ZaSKaJkiSU2lXrDNqkb2knJXISHoL4NWUSQKpIiNlUxIi6ywaGq2hxjiljTTp/NhLcIsdw7qThFg4HZ6pidzxtABfB6dA5ikQyL34aRUUR9KFjEwpkRnOh7kENpPHQmYpBE4m5uqKiNRM4QucLkd9Gv+O20FdUPXAjdBa9VThzriIFbQ1vF1/nf9+hgGEps6Ijog5UfChcxX9PWfgggv1L6XNj44JCqSOaRdgVQSl6/A2nrteAmHLl8nDCju30UAjPow2HCFaHlDFfjAzt+DUrhriuCpGUzLSJTtUSRksjaMcWHXVx7S8K3kZCEHW0VKNOyhJjtTCt79jzcGq/Zx2C0NGBBn+Pwq2nNGosF74AqP9b8Si6icowa3RsfMbxIr7hgx0Zq3TxzaKQqbFcQt0cTLAaZPmRCLJei5htA/tkAJdEghaUdBGUMWqpq4VfiA0rn3JZwNtkpM2BG7V8pFOT0F/wZamAbCEo2v1ofyaqZTdoxhyyiOfqVnVGiqXmDjgzUqT/QyhPwqsqVjKP9flv36e+7qk4M98aQ83Is+clLUf21SYzGLoEdIhHrZj7jHo7jRR/cv6bIjgrO+lzBn/RkRCZ5e6exdrC8/4A7sCK8J/I40D7JAd3H9YA3YCzuoITbMfHIivS+j8/dAon7RvYWvNzARYCgAVSRvmFUb5powyysn46qE1G2qkYwXlT3zHsC/EnFP2JXtwhvNoGYN/Q4BdvbW9kBcQcVkvI0xtIZM4SW8CXsdKHnQ/A6XTuCJKi1ag35rbxsHN/NG0C16qgJVYi/08wGpaB7YpDzUBNtDPwQb/fWvyrcdOMZg8YspFNvMTXeBgdPI3QVh2BcvUWQUiXSRKtyX3EBf+Rcfqc/iV6mHBcx8uXPYF8I5yC1cobx0EpFYWu87nvaH8OCNwqtPlGGcY8qG6msM3vFwyty5qdYuNyeSWDXQ2YVEWT4gvY5lgx9jEj8RXdrx6a81PbpySrvaqbeWXcfIB5ikH6B78MprpODH6tQlejvRAWDNk5H1z/iMjJRCdvh3h+SAsG48sVoiwhkGmbgYkxj4cJw0wMiQgc3awciYu4VxsPdiDyEibJdgtEOcC0JTkcWookhRhhXxgRK2M4RHmPFJFhOPyDIUs/10lsefR8vV+iG7TYGB9PUqqYVowT/1Pqya19zYOgjL7rprfRC4OdMJMLRwYYtXyWy4zOrNKoxiExjXU5k637eXPvJSyFGBeWNVUfT0VQrHoRY8BxOvLZr1M8LMgQWtQojMIwxhV+8wU0S7ctll/Cw/TvxwL0aiIiWtSN0z3zcPUcZo9j5MG8up1XPuheXsFrnPSra2Wcl9AcRtgNGp2IqiTIgabdish/8nfRbe/X0tEcuCaeLMALwGv2kewvNhSCUqqYRWs+L8xpAS/kvcDdeiLBq8in1ZEc//O/zWlNanCgtQHLr0UOUWW09huEdZMR/fjcHKd8oGDvUyjCWKQpYVVNB68KIYoK1RX1zBh/7UqWGQI7s42/tWbK7LacapNEPNr266hBgoTeib4RMfF15Pt52GTSlFcmg9zBoLFcntIN6WtBtz/DiTYKQPU9zoo6mbHM9xbwVRGnBnBPUFUUTiFRbaB+2rKU3mBMCo0dx+XNKpmVD5qdnIAOFrJ/wdHHF8JXXJImAAAAABJRU5ErkJggg=="

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABO0lEQVR4AezQM2IFURiG4RPbThfbO8hOYrNP9pAuttqwmno2ENtOqmvPF/zxwQJu8Q4OngFzOByyElEL6kTxsvUyrBTdIN9HV6hIDvKxx28YdSdCFTF1VBFTR2WYy2azndO91Wq9xtn9bf7+N8rF7Ha7W9O0HrPZvExjV1dXG7qu94lQwsp+Ya7FxcVBxlgy7hdo/ObmZg1j2fv7+6089F9saWlpABvpqZ/g7e3tKsYzUex/6MvLSwmzWCxDQMy/3qwIRXLAdBSEYre3t9sJxb+2HB8fT2OcpVRVVdVMTEz0jI2NdeG+kDAe+DpO6MbGRv3IyEh/fn5+7duLfJuMQLEonDABSPsCUTiK/dgfQJs48UFeflAMXl5ebgI0Jk22gUDAcvDgQY/jx493HDp0aPL06dMTgWLi+PQAAHqaGiPrbrfzAAAAAElFTkSuQmCC"

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAA/UlEQVR4Ae3UJVTGABSG4Ys7mQqZgrtbP7hDPxQc8hKe6AF3iKvrYQ1vuLvL9+u2i1w8Ed75nvno5uZGKh41oQaUKG0vgmgQPdk6PT2dIKKgHwM3NzcXAIb9DfgPBqB8VPAFMMe5r78L7EFnzp3uUcUnwCJ061x/dnFxMUC6rkdfX1/vOBdy9DUwlGO2gB0qilJKRBQ0OzubenV1tctRDu7u7s6+hp2fnx91dnbWwIpA5CmgbhANC5gPYaGELpnm1znW1tbmxtxPWUB5b2JuUEZljIMiKmAcfB0dHx9Px+uwbfp97XFMBDlaX18fqWlat6qqvVlZWXlEFM4xc8/jDwUb5L5gfAAAAABJRU5ErkJggg=="

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAiCAYAAAB1GggSAAAAcElEQVR4AWLQNDQG1DEXKBQCARCGX6dNS3v/w0h7AI9g94wwtgs/fAy7y/xL3/dfILhdLhcL/YkvMok7sgnmaPFWYGfQq+vyH0PLX3gLD+FK8HRCKzREj2qh3CHfISM6lI6L0KJES6I7MVGikMhQNADe5iI0G4sqAgAAAABJRU5ErkJggg=="

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAiCAYAAAB1GggSAAAAbUlEQVR4AWLQNDSWArAhFyYAQ2EMhOvuI3T/8eqePAj2Fzj4OOQR4/u+eeB5XokaokbutCgkOhQQA49B8I9OaJFPVDqlTipEgi88yCNu4RJO9BK7wWqwCDN6BHcmdAvufHsCU3MBZCiIcQNkBADhkiI0YWiZ5gAAAABJRU5ErkJggg=="

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAB+0lEQVQ4y42U20vTARiGX13OalEgjLWOI1JRKeuigx0EIemgRYgYJXXZbRAdLgb11X8gFCWJXkRJEFFgkQdY0F1BSBcxsgvLQ6A1dKBz/tyeLpa26czx3n08zwffxfvJ9C/kc4JW+okCk/TzgFry0wlTOn6GMEk+codmGmnmLu9J8IX6LAKFdJDkKTsz91HMM5I8wp0h4KaHCU5lwgtSPVG655XUqIMxyrPjJhOVjM+1Lwg0kKBmedxkopbkzyaTSaxigNb/4yYTbXMDFetM4jQO23IQAiQ+nTeJdnpWxk0mQpEn8ogwwRyFW/GwNgqHS6lBvCUeyZp7cplMnEvOKCDg5F+hK062jIXkM5moAxULh7Mmk/J/P5yenIouTfi5tppMNCVnVCK+ctNkUoG82qWDS7JPZSoymQjGvqlYPOZNjkf3jrxUQDQQx58DvgXn1RX5RAGDtOQg3I8Ne/dojeSevYhD1Qr4Eea6ggooT3LJ47xgaHETMvASxoZ7tVsek0xyX/bHPzBO9TJ4Db8in8uPyrvQB62+sH2iG4fWxeeziTacH6GyavmVl1ZRFXp8767OfMehj+vUcYw6rvGa2amhztvaK28KT3sCcmlDaenbGyPdsVESQGJ6dLCv04oOaYfWZv0aJrm0XgFV6kDVcR3WflVoszzzu1P5A8Ji36AjEcmDAAAAAElFTkSuQmCC"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAACR0lEQVQ4y42Uy0vUURTHvzo+qokCY1B7DtIoKmUtqrFMEJIeWoSEUVLLtkH0WAh16w+IhKIk0UWUFNEDLPIBBtGmIKRFDNnC8hFoyczIPH7+nPm0GB1ndAI5q3P5fs6959xzjowWjWyO0M4QQSDAEPepJztVYZQqP4GPOJ+5SQunaOEWH4jxjcYMAPl0EecJ29Pj4eEpcR6SlwaQRx9+jqWLk1AjQXoXkMRRF5NUZJYbGVHF1FxnEqCJGHWpAuu29cy6o5R0qSf+u9nISOQwTHt6RMtvEQ2oKO2WjrnhyrVG4jg2W5cDkaDSCoCb2JczRqKTvqVvzgQYMTj9WE7hozUTEA0sS/265VORsDk/L2uzpuctbmHFk95dOYyMOB2Pyi3g6DzQY5HJJgdVaGREA8gjbE4aGSn774NwIBQMBSP+xA0JLxT0PdcWIyOa41GViu9cMzJSrlzaIa+8cll+i/CMauSVV3tUrgIjI1ojP+QRj3i7wir1j7+SWzRhUbyCf9iM/fqiCkUuI7QtB8Iz8qQB9yJjrl1aLeXNnsOmOqXjc6a6xj76XqYC1DDX0yq3siSHnPYLRhcnQbnaoFKVJFI1MqKUybF+7ZTTSEbKu1BsfWKK2v80dx1/pr9WHJQrOQ9adXabvxeb9qXps5EO7F+D5bUqVlbKiCrfWfj+UvQnNgNcoYFDNHCZN8yGRrtvaLdcCXnKEpBD68vK3l0d741MEANi4YmRgW5TsF8lWpNxaxjJoXVyq0r7qg/rgPaqUpvkXIidsH93GgPxLHsoywAAAABJRU5ErkJggg=="

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAAcCAYAAABiZAQkAAAKjklEQVR4Ae2dB46sMBKG6wgcoY/AEThCb06JI/QRuAEnWLU25+0jsDklNqUX/XJKbF5l71+S/WSVcGM8mJ5ZPNInjYaG/qcwZVe5sOnzf7kfQvGR7i8EOqBH6EHx17/+lS5AYTR2QI/Qg4tpAwQ6oEfoQdbGZG1Zm32W1ydIG/vACxDi34LtNvWBBqjjrQeHT/cvCBw/96dBSz7zu1e9+fweKNCs0IAaoG7dunX45ou/ETiehv9qybdf/aM3htsDBVbV9vLlSwLHv/3tb1ry+vXrFewWr818fg8UWFVb1pa1JXTw0r/N1raCo2+A+uj3J/3brHvqM0QJ1Fcfv9LfefMv/ZWHL/pP/foZgb3H4R++dP8ZgSN/ns8zDqxM0IBKoJ48eaLfvn2rHz161H/92VsCe49BDh//yX0Cx8/+/o3+5C8ea+P4V9H2/PlzAntPQ4qw23ralFIEjvx5Ps80qFW1ZW1ZWwJHL/1btLYEjr4Eiv0U+6tP/OzhlH/zagt1+PUX7jxmQ7gXZUe0g3MnMEiHD1E7I2qw5/D5fB2+3oKNqL579y43IPdm8D+4w3cSGKRBcDN3prN6r5sN+bEf3mHHv4o2/E5gkA0JD0GE3dbTZh6C98f4fFyHz1tVW9aWtUU793D/Fq1tQWdfwy+xf3IH0+ynzvm3WfdUGmP/5QcvNF9Icrz18PDZP7wlINM6vT33u2//reV5uN5Szmv/8OFDPdYD3759+4DvJiDDnvfpHOiGVtlRPWBjJtf27t07AjJcjLDbetrsuTim5Xl8PRzL2tbSlrXFO/1w/xarbSmnv2d/NJZB+egPbvn82+x7yukElwIX6YAe6UmUSOvIdI4VI1EwcslhxxUp8E90QI/0wEqGPTKdY/RKFIycXJsNF2WYGG+39NrMubbxSxQa06rasrasjZ+XCEL925W0sZ+5IgX8UQf0SAbF59+CtAGyWM9fmYmV0oQOBxk+cAjEuS+T1lG+dI6gxXkFwgueBT+CHaBQpDYTch1k2MUhDD5jtStfOkfQInQqEN7xDPcRJNVmjiun8U/aDeEdVwYcwaraZAgraHFevN3Sa1ugvWVtEaPnykyAJtcWMXquzATolH+7qN2Mbz3ItDmneKB/zL/Nbm90//59pnPyPo0JH/gLetcoeMh9YVUp0hIDqNAwCezBAFEc0p34++YgtZmwi29MD7QFx31hVSnSOQOoYGACezDA6XJIl1LbLLuhYRLYgwGdFYd0SbX5Jt1EmDiAeLul17Zge8vavnjvKc2kc+afkmr7+I/v0Uw6Z97unH+7uN1M2pydfw+0BdqvrA0Qn7BDOZL9sJ3l7XBj7ERBAxQoAZ2hBAqcYMwCjZN7llYppa2gFy9e6HkjG7820xM3QAHTO3opgQInGLOAkXl02iLE09bhfvPFwAZPoW2W3dA4eVTfIsTTtqP69G9ecENNog3QGUqgwAn3MN5u6bUlaG9Z24xR6g5lg9Zx2mqzDk4sibaZo/wdysmt47RVeh0cqPRv18puxm81QIHFtBG8fivDAW5Y+PuAD3APQRFUQD179mxs4qYFFMCkNh5tRlAB9bWnb8YmbhbTxqP0CCqgPvWrp2MTNxuw23Vqb1kb7isF0so2wY4Mfx/gwJJow/NAgbTyWeIOAH8f4Pg3ZzfCgV4eYLhn4B6C3zCLCD0HW5Il4e8DFECQtogQarAlWRI4s0W1RYSegy3JkqAT2IDdrlN7y9pwXymQfqxdcBTI0SCc1+La8DxQIP3Y88TRM0fRcPqbshthFloecOEQgSI4+q6J72MogEltMAxF4KuK4VnvxbRxLi4CXzURV0NtwG7Xqb1lbbivFAi3Ax9JtOF5oED4+fGxObuZ/No4yPtUPAscQSWuJaEAJrVxlUsEFeftPCymjauDIqg4b+dhA3a7Tu0ta+McdyCND8zxJNHGOe5AGh+YG9uc3WgjP/kn/+Sf/JN/eKbfS/waG+XEdSmAG63tCmt8dB4W03aFNT46DxuwW5r2xvoD6c6QRNuMttGdYQN2uzn+jXim3wdKvlpAETTiWhIK4EZrQ2kVRdDwLL2HxbShJI0iaLi6wcMG7JamvUEfBaJ94P9Pog33lQLRPtBuNmC3m+PfSLwYIWd1ebU7ikDx+R56QAHcaG2oqaUI1JlJnMW0oRaZIlBnJr82YLc07W1GvrcHviqpJNpm5Ml74Ksu24Ddbo5/49n/1nOQy3v2gCLY8/memeIWUAA3WhtKGCkCXitj8FTCLKYNpZ8UAa+hNHgqiDZgtzTtbUZFR+txXFwum0TbjEqY1uPwucx4A3a7Of6N63ursZ4A5T07uVtNAAVjyoMKLhcb6blKQAFsTpspfyy4JGtkNLK4ttDdgBhTNlpwKdvIKG5xbaG7AYFV7CbsEWq3yfY2o2a7Gote8H/vHHss+izMqHWvxqI+tBfXbhHaktptk/6N5GJBoHEusgM9v7kVMIlQ8ufAgN8rJ2xxexwFKJBNanNCUXfUmkzb1GQov10LBvxeOSG8O9pPpm1qEpnfSgYDfk9mN8cWO9CzPdguM+zmbW+sdyZu6qpxbLEDPduD7bLEs8D3eSZuys9ntwhti9tt0/7NhgG1OVA5Fznwa9sIA9wF9fe+dT7shgf85h/e9uLPtrLHiQhTNqlNjvYReibV5lvnw24UAR0ab9pq/K2Vo32E7Em1+dZHsRtFQIfGG8oaf2vBonZzbHHg192RHnA3qJlrN9HeotJXtV1gz7HFgZcJQFrF3djnSs9CZNqvNoOAKbtFaFvMbpv3b/wHS+GEBicsC6rlovpKKT7GaINc7tQNHzR6nN6s5kYRXFBb1iZHRiY9ojFS441bVtNmUiPaIJfodtNKGiNc3vBmEW1OWuaEZWi13KSG11Y3KSXtMGk37pCuSOGks05YnlzLzX2wZMCY3SbbG3fkVyTEbjHPwhJ226QPAeQie4s9hwV4c2/09W0cI1CL5U5b01O1I5MEtnc6AIplfW1ZmxkZtSOToHakllybWbStFkvYtmZE2Y5MHtsR7mGJ3ZE4JYM3HkdfezeL3dViCdsguy2xOxKnsngVVWkD4LNbSHtLbbf8nF5Ym9ytprY9iwRCarNrykmWDwECpTzHgh6r5uvHsr62rM1MeJW+kjaM3pJrw45fBE6ylM5MFJbs4Dw7BNUL7I5U29GpBM6sxk5pBE4iygiy2wK7I9V2VC9BJ+CzW0h7S263/Jyurw2QZWwSoQZj+yMWHFKYHkjuYlO5oYWgBhTBhbVlbW56QrCKNk4NmJGi3JmoctM6gpp1L0QNxvYbLjilYkbYcmeis3Zj3QtRj3d2D87Z7Vx7W8Nu+Tm9sLaJBfU9IYUAEwVHGVqIDQ9iuLC2rG0kPaFAcm0ynSPBROhxJK2jgMmhL0oJlC+dI8EEstdu7KgXphSd3pTdfO1tFbvl5/Ty2kJW6FMypJDwnoomtNiZGecmgSFW1pa1mfTEzlQ4rKZNpnMkvA+wSevsTGWIWaEwKQ1QMp0j4f2Tpd3YOSemAQoRx5TdZHtb1W75Ob28NsIF5+DbhKHnGWH+TErW15a14UGlC+LbIKLnqhM4OLogvo01uFLoOtvt//BZyNoAhfA/j3BgQNvf1JIAAAAASUVORK5CYII="

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII="

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "data:image/gif;base64,R0lGODlhGAAYAPQAAP///wAAAM7Ozvr6+uDg4LCwsOjo6I6OjsjIyJycnNjY2KioqMDAwPLy8nZ2doaGhri4uGhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJBwAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQJBwAAACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAkHAAAALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQJBwAAACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkECQcAAAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkECQcAAAAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkECQcAAAAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAkHAAAALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA=="

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;