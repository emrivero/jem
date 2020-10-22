const tr = require('./task_recoder');
const { ipcMain } = require('electron');

class Timer {
  static init() {
    ipcMain.on('save:time', (e, title, seconds) => Timer.saveReport(title, seconds));
  }

  static saveReport(title, seconds) {
    tr.saveReport(title, seconds);
  }
}

module.exports = Timer;
