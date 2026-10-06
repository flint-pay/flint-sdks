


export type GiftCardPurchaseRefundValueHold = { "purchase_refund_allocation_id": string; "refund_id": string; "root_gift_card_id": string; "root_gift_card_load_id": string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "value_money": { /** Amount in the currency's minor unit, such as cents for USD. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "amount": string; /** ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; }; };
