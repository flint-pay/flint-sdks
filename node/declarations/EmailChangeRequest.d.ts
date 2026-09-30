


export type EmailChangeRequest = { "confirmed": boolean; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "current_email_confirmation_required": boolean; "customer_id": string; "email_change_request_id": string; /** RFC3339 timestamp. Format: date-time. */ "expires_at": string; "new_email": string; };
