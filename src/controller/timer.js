import api from './backend';

class Timer {
  constructor(setTime, seconds) {
    this.seconds = seconds != null ? seconds : 0;
    this.idInterval = null;
    this.setTime = setTime;
  }

  playPause(title) {
    if (this.idInterval !== null) {
      clearInterval(this.idInterval);
      this.idInterval = null;
    } else {
      this.idInterval = setInterval(() => {
        this.seconds += 1;
        this.setTime(this.getTime());
        api.tr.saveReport(title, this.seconds);
      }, 1000);
    }
  }

  stop(title) {
    if (this.idInterval) {
      clearInterval(this.idInterval);
      this.idInterval = null;
    }
    this.seconds = 0;
    api.tr.saveReport(title, this.seconds);
    this.setTime(this.getTime());
  }

  getHours() {
    const hours = Math.floor(this.seconds / 3600);
    return hours < 10 ? `0${hours}` : `${hours}`;
  }

  getMinutes() {
    const minutes = Math.floor(this.seconds / 60);
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  getSeconds() {
    const seconds = this.seconds % 60;
    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  getTime() {
    return `${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`;
  }

  static getHours(seconds) {
    const hours = Math.floor(seconds / 3600);
    return hours < 10 ? `0${hours}` : `${hours}`;
  }

  static getMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  static getSeconds(seconds) {
    const $seconds = seconds % 60;
    return $seconds < 10 ? `0${$seconds}` : `${$seconds}`;
  }

  static getTime(seconds) {
    return `${Timer.getHours(seconds)}:${Timer.getMinutes(seconds)}:${Timer.getSeconds(seconds)}`;
  }
}

export default Timer;
