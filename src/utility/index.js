import moment from 'moment';

export const safeGet = (obj, ...props) => {
  let val = null;
  if (obj) {
    val = props.reduce(
      (tempObj, prop) => {
        if (tempObj !== null && tempObj !== undefined) {
          return tempObj[prop];
        }
        return null;
      },
      obj,
    );
  }
  return val;
};

export const genEventKey = event => `${event.orderId}_${event.correlationId}_${event.timestamp}_${event.routingKey}`;

export const momentFloor = date => moment(moment(date).format('YYYY-MM-DD HH')).valueOf();
export const momentCeil = date => moment(moment(date).add(1, 'hours').format('YYYY-MM-DD HH')).valueOf();

export const arrayShallowEqual = (obj1, obj2) => {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    return obj1.reduce(
      (flag, obj) => {
        if (obj2.includes(obj)) {
          return true;
        }
        return false;
      },
      false,
    );
  }
  return obj1 === obj2;
};

export const millisInDays = time => time / 1000 / 60 / 60 / 24;
export const millisInHours = time => time / 1000 / 60 / 60;
export const millisInMinutes = time => time / 1000 / 60;
export const millisInSeconds = time => time / 1000;

export const getDiff = (startTime, endTime) => moment(endTime).diff(moment(startTime));

export const calculateTimeInterval = (startTime, endTime, chunks = 20) => {
  const diff = getDiff(startTime, endTime);
  const duration = diff / chunks;
  return Array.from({ length: chunks }, (v, index) => startTime + (duration * index));
};

export function guaranteedDebounce(fn, wait) {
  let timeout = null;
  let guaranteedFn = null;
  return (...args) => {
    if (timeout === null) {
      fn(...args);
      guaranteedFn = null;
      timeout = setTimeout(() => {
        timeout = null;
        if (guaranteedFn !== null) {
          guaranteedFn();
        }
      }, wait);
    } else {
      guaranteedFn = fn.bind(null, ...args);
    }
  };
}
