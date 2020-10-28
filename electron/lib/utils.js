const loadWindow = (mainWindow, buildPath) => {
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(`http://${process.env.HOST}:${process.env.PORT}`);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(buildPath);
  }
};

module.exports = {
  loadWindow,
};
