import React from 'react';
import { getReportingWeek } from '../../controller/report';
import CardReport from './CardReport';

const Report = ({ week, year }) => {
  const reports = week && year ? getReportingWeek(week, year) : [];

  return (
    <>
      {
        reports.map(({ name, time }) => (
          <CardReport
            key={name}
            title={name}
            time={time}
          />
        ))
      }
    </>
  );
};

export default Report;
