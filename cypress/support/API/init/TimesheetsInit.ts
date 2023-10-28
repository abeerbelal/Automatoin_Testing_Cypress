import { TimesheetsPayload } from "../payload/TimesheetsPayload";
export default class TimesheetsInit {
  static TimeSheetBoady(): TimesheetsPayload {
    let timesheetsPayload: TimesheetsPayload = {
      entries: [
        {
          projectId: 2,
          activityId: 22,
          dates: { "2023-10-23": { duration: "9:00" } },
        },
      ],
      deletedEntries: [],
    };
    return timesheetsPayload;
  }
}
