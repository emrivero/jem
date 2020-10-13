const { saveReport, existReport, loadReport } = require('./io_file');

/**
 * @class
 */
class TaskRecorder {

  /**
   * @constructor
   */
  constructor() {
    if (!existReport()) {
      this.record_ = {};
      this.createReport();
    } else {
      this.record_ = JSON.parse(loadReport());
    }
  }

  /**
   * @method
   */
  get record() {
    return this.record_;
  }

  /**
   * @method
   */
  saveReport(name, seconds) {
    this.record_[name] = seconds;
    saveReport(JSON.stringify(this.record_));
  }

  /**
   * @method
   */
  createReport() {
    saveReport(JSON.stringify(this.record_));
  }
}

// singleton instance
const tr = new TaskRecorder();

module.exports = tr;
