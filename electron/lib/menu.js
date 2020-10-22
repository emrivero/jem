const { Menu } = require('electron');

const buildMenu = () => {
  const template = [{
    role: '',
    submenu: [
      { role: 'close' }
    ],
  }];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

module.exports = {
  buildMenu
};
