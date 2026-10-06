


export type CustomerVerificationInput = { "channel": "email"; /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; "customer_id": string; "customer_verification_id": string; "email": string; /** RFC3339 timestamp. Format: date-time. */ "expires_at": string | globalThis.Date; "purpose": "link_guest_purchases"; "status": "pending" | "confirmed"; };
