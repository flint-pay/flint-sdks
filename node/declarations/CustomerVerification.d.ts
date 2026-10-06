


export type CustomerVerification = { "channel": "email" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "customer_id": string; "customer_verification_id": string; "email": string; /** RFC3339 timestamp. Format: date-time. */ "expires_at": string; "purpose": "link_guest_purchases" | (string & {}); "status": "pending" | "confirmed" | (string & {}); };
