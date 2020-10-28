const fs = require('fs');
const os = require('os');
const path = require('path');

/**
 * @constant
 * @type {string}
 */
const CONFIG_FOLDER_PATH = path.resolve(os.homedir(), '.jem');

/**
 * @function
 * @return {boolean}
 */
const mkConfigFolder = () => {
  if (!fs.existsSync(CONFIG_FOLDER_PATH)) {
    return fs.mkdirSync(CONFIG_FOLDER_PATH);
  }
};

/**
 * @param {string} content
 * @function
 * @return {bool}
 */
const saveReport = (content) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const pathReport = path.resolve(CONFIG_FOLDER_PATH, `report_${year}${month}${day}`);

  return fs.writeFileSync(pathReport, content);
};

/**
 * @param {string} content
 * @function
 * @return {string}
 */
const loadReportFromDate = (date) => {
  const pathReport = path.resolve(CONFIG_FOLDER_PATH, `report_${date}`);
  let content = null;
  if (fs.existsSync(pathReport)) {
    content = fs.readFileSync(pathReport, 'utf-8');
  }
  return content;
};

/**
 * @param {string} content
 * @function
 * @return {string}
 */
const loadReport = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const pathReport = path.resolve(CONFIG_FOLDER_PATH, `report_${year}${month}${day}`);

  return fs.readFileSync(pathReport, 'utf-8');
};

/**
 * @param {string} content
 * @function
 * @return
 */
const existReport = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const pathReport = path.resolve(CONFIG_FOLDER_PATH, `report_${year}${month}${day}`);

  return fs.existsSync(pathReport);
};

/**
 * @param {string} content
 * @function
 * @return
 */
const saveConfig = (content) => {
  const pathConfig = path.resolve(CONFIG_FOLDER_PATH, 'config');

  return fs.writeFileSync(pathConfig, content);
};

/**
 * @param {string} content
 * @function
 * @return
 */
const loadConfig = (content) => {
  const pathConfig = path.resolve(CONFIG_FOLDER_PATH, 'config');

  return fs.readFileSync(pathConfig, content, 'utf8');
};

/**
 * @function
 * @return {boolean}
 */
const existConfig = () => {
  const pathConfig = path.resolve(CONFIG_FOLDER_PATH, 'config');

  return fs.existsSync(pathConfig);
};

module.exports = {
  mkConfigFolder,
  saveReport,
  saveConfig,
  loadConfig,
  existConfig,
  existReport,
  loadReport,
  loadReportFromDate,
};
