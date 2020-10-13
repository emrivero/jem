const { shell } = require('electron');

module.exports = {
  events: {
    register(window) {
      window.webContents.on('new-window', (e, url) => {
        e.preventDefault();
        shell.openExternal(url);
      });
    },
  },
};
