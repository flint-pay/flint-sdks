import type { InputValue } from '../runtime.js';


export type FraudWarningsGetInput = { "fraud_warning_id": InputValue<string>; "expand"?: InputValue<Array<"dispute" | "payment_intent">>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
