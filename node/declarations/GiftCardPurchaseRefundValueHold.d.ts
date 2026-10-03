


export type GiftCardPurchaseRefundValueHold = { "purchase_refund_allocation_id": string; "refund_id": string; "root_gift_card_id": string; "root_gift_card_load_id": string; "value_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. */ "amount": string; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": "USD" | (string & {}); }; };
