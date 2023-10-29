export interface TimesheetsPayload {
  entries: [
    {
      projectId: number;
      activityId: number;
      dates: {
        [date: string]: {
          duration: string;
        };
      };
    }
  ];
  deletedEntries: [];
}
