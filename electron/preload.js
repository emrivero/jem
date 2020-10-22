const ioFile = require('./lib/io_file');
const cm = require('./lib/config_manager');
const tr = require('./lib/task_recoder');
const tm = require('./lib/timer_manager');
const Timer = require('./lib/timer');
const { ipcRenderer } = require('electron');

console.log('preload.js loaded');

window.api = {
  ioFile,
  cm,
  tr,
  tm,
  Timer,
  ipcRenderer,
};

// contextBridge.exposeInMainWorld('api', {
//   ipcRenderer: () => ipcRenderer,
// });
