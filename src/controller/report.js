import moment from 'moment';
import api from './backend';

moment.updateLocale('es', { week: { dow: 1 } });

const getDatesFromWeek = (week, year) => {
  const dates = moment.weekdays(true).slice(0, 6)
    .map((day) => moment(`${year}`).day(day).week(week));
  dates.push(dates[5].clone().add(1, 'day'));
  return dates.map((d) => d.format('YYYYMMDD'));
};

const formatSeconds = (seconds) => moment.utc(moment.duration(seconds, 'seconds').asMilliseconds()).format('HH:mm');

export const getReportingWeek = (week, year) => {
  const datesFromWeek = getDatesFromWeek(week, year);
  const reports = datesFromWeek.map((d) => JSON.parse(api.ioFile.loadReportFromDate(d))).filter(r => r != null);
  const tasks = [];
  const tasksReport = [];
  reports.forEach((report) => {
    if (report) {
      Object.keys(report).forEach((key) => {
        if (!tasks.includes(key)) {
          tasks.push(key);
        }
      });
    }
  });
  tasks.forEach((task) => {
    const time = reports
      .reduce((prev, current) => current[task] != null ? prev + current[task] : prev, 0);
    tasksReport.push({ name: task, time: formatSeconds(time) });
  });

  return tasksReport;
};
