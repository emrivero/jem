const { saveConfig, loadConfig, existConfig } = require('./io_file');

/**
 * @class
 */
class ConfigurationManager {

  /**
   * @constructor
   */
  constructor() {
    if (!existConfig()) {
      this.configuration_ = { tasks: [] };
      this.save();
    } else {
      this.load();
    }
  }

  /**
   * @method
   */
  get configuration() {
    return this.configuration_;
  }

  /**
   * @method
   */
  save() {
    saveConfig(JSON.stringify(this.configuration_));
  }

  /**
   * @method
   */
  load() {
    this.configuration_ = JSON.parse(loadConfig());
  }

  /**
   * @method
   * @param {string} task
   */
  addTask(task) {
    const existTask = this.configuration_.tasks.find(elm => elm === task);
    if (!existTask) {
      this.configuration_.tasks.push(task);
      this.save();
    }
  }

  /**
   * @method
   * @param {string} task
   */
  removeTask(task) {
    const { tasks } = this.configuration_;
    this.configuration_.tasks = tasks.filter(element => element !== task);
    this.save();
  }

  /**
   * @method
   * @param {string} task
   */
  editTask(task, editedTask) {
    const index = this.configuration_.tasks.indexOf(task);
    this.configuration_.tasks[index] = editedTask;
    this.save();
  }

  /**
   * @method
   */
  reset() {
    this.configuration_ = { tasks: [] };
    this.save();
  }
}

// singleton instance
const cm = new ConfigurationManager();

module.exports = cm;
