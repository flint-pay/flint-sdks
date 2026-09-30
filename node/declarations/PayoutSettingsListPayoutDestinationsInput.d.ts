import type { InputValue } from '../runtime.js';


export type PayoutSettingsListPayoutDestinationsInput = { /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency"?: InputValue<string>; "type"?: InputValue<"bank_account" | "debit_card">; "status"?: InputValue<"pending" | "active" | "verification_required" | "disabled" | "deleted" | "failed">; "available_payout_method"?: InputValue<"standard">; "default_for_currency"?: InputValue<boolean>; "include_deleted"?: InputValue<boolean>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
