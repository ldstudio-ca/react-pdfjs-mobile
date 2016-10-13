export default {
    ':root': {
        backgroundColor: 'red'
    },
    '*': {
        padding: 0,
        margin: 0
    },
    html: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        fontSize: '10px'
    },
    body: {
        background: 'url(' + require('./css/images/document_bg.png') + ')',
        color: '#fff',
        fontFamily: 'sans-serif',
        fontSize: '10px',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        paddingBottom: '5rem'
    },
    canvas: {
        margin: 'auto',
        display: 'block'
    },
    section: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        fontSize: '2rem'
    }
}
