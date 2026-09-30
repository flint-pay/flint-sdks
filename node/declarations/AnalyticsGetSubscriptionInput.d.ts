import type { InputValue } from '../runtime.js';


export type AnalyticsGetSubscriptionInput = { "range": InputValue<"today" | "last_7_days" | "last_30_days" | "last_90_days">; "timezone"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
