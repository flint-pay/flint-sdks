


export type WebhookStreamGap = { "reason": "cursor_unavailable" | "payload_expired" | "backpressure" | (string & {}); "requested_cursor"?: string; "resume_cursor"?: string; };
