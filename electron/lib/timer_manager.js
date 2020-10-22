const Timer = require('./timer');
const tr = require('./task_recoder');

const timers = {};

class TimerManager {

  static register(setTime, title) {
    if (!TimerManager.timers[title]) {
      TimerManager.timers[title] = new Timer(setTime, tr.record[title], title);
    }
    console.log(TimerManager.timers);
  }

  static playPause(title) {
    TimerManager.timers[title].playPause();
  }

  static stop(title) {
    TimerManager.timers[title].stop();
  }
}

TimerManager.timers = timers;

module.exports = TimerManager;
