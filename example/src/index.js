import React from 'react';
import ReactDOM from 'react-dom';
import App from 'react-pdfjs-mobile';

let root =  document.getElementById('root');
ReactDOM.render(<App 
    url="http://www.ducatiusa.com/cms-web/upl/img/Redline_Magazine_2015/Redline_Magazine_2_ENG.pdf" 
    onClose={ () => { 
        ReactDOM.unmountComponentAtNode(root);
    } } />, root);


