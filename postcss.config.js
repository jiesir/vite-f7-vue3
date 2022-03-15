module.exports = {
    plugins: {
        // px2vw
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 8,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            include: /\/src\//
        }
    }
}