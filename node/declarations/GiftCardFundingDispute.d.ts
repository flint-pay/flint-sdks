


export type GiftCardFundingDispute = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "dispute_id": string; "requires_resolution": boolean; "resolution"?: { /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "disposition": "honor_value" | (string & {}); "gift_card_funding_disposition_id": string; "reason": string; }; "status": "open" | "won" | "lost" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "version": string; };
