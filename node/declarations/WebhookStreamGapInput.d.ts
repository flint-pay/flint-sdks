


export type WebhookStreamGapInput = { "reason": "cursor_unavailable" | "payload_expired" | "backpressure"; "requested_cursor"?: string; "resume_cursor"?: string; };
