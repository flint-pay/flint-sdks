


export type PromotionSchedule = { /** RFC3339 timestamp. Format: date-time. */ "ends_at"?: string; /** RFC3339 timestamp. Format: date-time. */ "starts_at"?: string; /** IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. */ "timezone"?: string; };
