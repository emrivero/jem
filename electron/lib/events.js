const { shell, dialog } = require('electron');

module.exports = {
  events: {
    register(window) {
      window.webContents.on('new-window', (e, url) => {
        e.preventDefault();
        shell.openExternal(url);
      });

      window.on('close', (e) => {
        e.preventDefault();
        const response = dialog.showMessageBoxSync(window, {
          buttons: ['Si', 'No'],
          message: '¿De verdad quiere cerrar la aplicación?',
          type: 'question',
          title: 'Salir de la aplicación',
        });
        if (response === 0) {
          window.destroy();
        }
      });
    },
  },
};
