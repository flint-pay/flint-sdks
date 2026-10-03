


export type OrderGiftCardSettlement = { "amount_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. */ "amount": string; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": "USD" | (string & {}); }; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "gift_card_id": string; "gift_card_redemption_id": string; "last_characters": string; "tip_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. */ "amount": string; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": "USD" | (string & {}); }; };
