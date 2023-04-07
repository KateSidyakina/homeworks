class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, func) {
    if (!time || !func) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    for (let alarm of this.alarmCollection) {
      if (alarm.time === time) {
        console.warn('Уже присутствует звонок на это же время');
      }
    }

    this.alarmCollection.push({
      callback: func,
      time, 
      canCall: true
    })
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((alarm) => {
      return alarm.time !== time;
    });
  }

  getCurrentFormattedTime() {
    let currentTime = new Date();
    return [currentTime.getHours(), currentTime.getMinutes()].map(x => {
      return x < 10 ? "0" + x : x;
    }).join(':');
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      })
    }, 1000)
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => {
      item.canCall = true;
    })
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}