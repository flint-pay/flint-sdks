


export type CustomerDeletionRequestInput = { "customer_deletion_request_id": string; "customer_id": string; /** RFC3339 timestamp. Format: date-time. */ "requested_at": string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "resolved_at"?: string | globalThis.Date; "retention_policy": string; "status": "pending_review" | "processing" | "completed" | "rejected" | "failed"; };
