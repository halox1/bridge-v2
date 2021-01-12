const locale = "en-US";

const timeZone = "UTC";

export const dateOptions: Intl.DateTimeFormatOptions = {
  timeZone,
};

export const timeOptions: Intl.DateTimeFormatOptions = {
  hour12: false,
  timeZone,
  timeZoneName: "short",
};

export const getFormattedDateTime = (timestamp: number) => {
  const dateObject = new Date(timestamp);
  const date = dateObject.toLocaleDateString(locale, dateOptions);
  const time = dateObject.toLocaleTimeString(locale, timeOptions);
  return { date, time };
};

export const millisecondsToHMS = (milliseconds: number) => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  return { hours, minutes, seconds };
};

const pad = (value: number) => {
  return String(value).padStart(2, "0");
};

export const getFormattedHMS = (milliseconds: number) => {
  const { hours, minutes, seconds } = millisecondsToHMS(milliseconds);
  return `${pad(hours)}.${pad(minutes)}.${pad(seconds)}`;
};