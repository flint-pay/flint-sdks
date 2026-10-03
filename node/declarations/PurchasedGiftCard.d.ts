


export type PurchasedGiftCard = { "gift_card_id": string; "last_characters": string; "original_gift_card_id"?: string; "restoration_reason"?: "manual_recollection" | "processor_recollection" | (string & {}); /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "unit_ordinal": string; };
