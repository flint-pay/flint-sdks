


export type ReturnWindow = { /** Use an exact numeric string, not a floating-point number. Format: int64. */ "duration_seconds": string; "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed" | (string & {}); };
