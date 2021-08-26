const f = require('fuse-box');


const fuse = f.fusebox({
    entry: './src/main.ts',
    target: 'browser',
    devServer: true,
    webIndex: {
        template: './src/index.html'
    },

});


fuse.runDev();
// fuse.runProd();
