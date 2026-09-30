


export type CustomerDeletionRequest = { "customer_deletion_request_id": string; "customer_id": string; /** RFC3339 timestamp. Format: date-time. */ "requested_at": string; /** RFC3339 timestamp. Format: date-time. */ "resolved_at"?: string; "retention_policy": string; "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {}); };
