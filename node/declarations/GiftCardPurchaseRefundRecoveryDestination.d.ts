


export type GiftCardPurchaseRefundRecoveryDestination = { "gift_card_id": string; "gift_card_load_id": string; "value_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. */ "amount": string; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": "USD" | (string & {}); }; };
