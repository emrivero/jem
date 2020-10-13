const { app, screen, Menu } = require('electron');
const { BuilderWindow } = require('./lib/window_builder');
const { events } = require('./lib/events');
const { registerShortcuts } = require('./lib/shortcuts');
const { mkConfigFolder } = require('./lib/io_file');
const { title } = require('./app.config.json');
require('dotenv').config();

/**
 * @function
 */
const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = BuilderWindow.build(width, height);
  mainWindow.webContents.openDevTools();
  events.register(mainWindow);
};

/**
 * @function
 */
const main = async () => {
  // Start main process when app is ready
  await app.whenReady();
  createWindow();
  Menu.setApplicationMenu(null);
  registerShortcuts();
  mkConfigFolder();

  // Quit app when all windows are closed
  app.on('window-all-closed', () => {
    app.quit();
  });

  // Set name in the app bar
  app.setName(title);

  return;
};


main();
