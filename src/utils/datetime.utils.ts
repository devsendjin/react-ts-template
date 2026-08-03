import dayjs, { type ConfigType } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/en";

export const appDateLocale = "en" as const;

dayjs.extend(customParseFormat);

const Millisecond = 1;
const Second = 1000 * Millisecond;
const Minute = 60 * Second;
const Hour = 60 * Minute;
const Day = 24 * Hour;
const Week = 7 * Day;

export const Time = {
  Millisecond,
  Second,
  Minute,
  Hour,
  Day,
  Week,
} as const;

export const DateFormats = {
  ISO_DATE: "YYYY-MM-DD",
  ISO_DATETIME: "YYYY-MM-DD HH:mm:ss",
  DISPLAY_DATE: "DD.MM.YYYY",
} as const;

export const formatDateTime = (date: NonNullable<ConfigType>, format: string = DateFormats.ISO_DATETIME) => {
  return dayjs(date).format(format);
};

export { dayjs };
export type { ConfigType, Dayjs } from "dayjs";
