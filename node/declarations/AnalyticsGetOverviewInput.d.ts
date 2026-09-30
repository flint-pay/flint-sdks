import type { InputValue } from '../runtime.js';


export type AnalyticsGetOverviewInput = { "range": InputValue<"today" | "last_7_days" | "last_30_days" | "last_90_days">; "timezone"?: InputValue<string>; "include_previous_period"?: InputValue<boolean>; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
