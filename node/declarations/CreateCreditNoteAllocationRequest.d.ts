


export type CreateCreditNoteAllocationRequest = { /** Credit to apply, no more than the credit note's unallocated_money or the invoice's outstanding balance. */ "amount_money": { /** Amount in the currency's minor unit, such as cents for USD. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "amount": string; /** ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; }; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; };
