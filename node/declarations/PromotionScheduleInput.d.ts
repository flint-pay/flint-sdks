


export type PromotionScheduleInput = { /** RFC3339 timestamp. Format: date-time. */ "ends_at"?: string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "starts_at"?: string | globalThis.Date; /** IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. */ "timezone"?: string; };
