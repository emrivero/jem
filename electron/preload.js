const ioFile = require('./lib/io_file');
const cm = require('./lib/config_manager');
const tr = require('./lib/task_recoder');

console.log('preload.js loaded');

window.api = {
  ioFile,
  cm,
  tr,
};

// contextBridge.exposeInMainWorld('api', {
//   ipcRenderer: () => ipcRenderer,
// });
