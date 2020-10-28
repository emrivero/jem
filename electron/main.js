const { app, screen, Menu } = require('electron');
const { BuilderWindow } = require('./lib/window_builder');
const { events } = require('./lib/events');
const { mkConfigFolder } = require('./lib/io_file');
const { title } = require('./app.config.json');
const Timer = require('./lib/timer');
const { buildMenu } = require('./lib/menu');
require('dotenv').config();

/**
 * @function
 */
const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = BuilderWindow.build(width, height);
  events.register(mainWindow);
};

/**
 * @function
 */
const main = async () => {
  // Start main process when app is ready
  await app.whenReady();
  createWindow();
  mkConfigFolder();
  buildMenu();
  Timer.init();

  // Quit app when all windows are closed
  app.on('window-all-closed', () => {
    app.quit();
  });


  // Set name in the app bar
  app.setName(title);

  return;
};


main();
