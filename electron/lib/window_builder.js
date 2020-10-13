const { BrowserWindow } = require('electron');
const path = require('path');
const { computedWidth, computedHeight, computedMaxWidth, computedMaxHeight } = require('./sizes');
const { minHeight, minWidth, title } = require('../app.config.json');
const { loadWindow } = require('./utils');
const buildPath = path.resolve(__dirname, '..', '..', 'build', 'index.html');


const BuilderWindow = {
  build(width, height) {
    const window = new BrowserWindow({
      width: computedWidth(width),
      height: computedHeight(height),
      maxWidth: computedMaxWidth(width),
      maxHeight: computedMaxHeight(height),
      minHeight,
      minWidth,
      title,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: false,
        preload: path.resolve(__dirname, '..', 'preload.js'),
      }
    });
    loadWindow(window, buildPath);
    return window;
  }
};

module.exports = {
  BuilderWindow,
};
