


export type ExpandedPayoutDestinationSummary = { "available_payout_methods": Array<"standard" | (string & {})>; "bank_name"?: string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country"?: string; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "default_for_currency": boolean; "last4"?: string; "payout_destination_id": string; "status": "pending" | "active" | "verification_required" | "disabled" | "deleted" | "failed" | (string & {}); "type": "bank_account" | "debit_card" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
