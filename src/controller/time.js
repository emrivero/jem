const getHours = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  return hours < 10 ? `0${hours}` : `${hours}`;
};

const getMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  return minutes < 10 ? `0${minutes}` : `${minutes}`;
};

const getSeconds = (seconds) => {
  const $seconds = seconds % 60;
  return $seconds < 10 ? `0${$seconds}` : `${$seconds}`;
};

const getTime = (seconds) => {
  return `${getHours(seconds || 0)}:${getMinutes(seconds || 0)}:${getSeconds(seconds || 0)}`;
};

export const formatTime = (seconds) => {
  return getTime(seconds);
};

export default {
  formatTime,
};
