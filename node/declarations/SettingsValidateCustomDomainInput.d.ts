import type { InputValue } from '../runtime.js';


export type SettingsValidateCustomDomainInput = { "domain_type": InputValue<"checkout" | "customer_account">; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
