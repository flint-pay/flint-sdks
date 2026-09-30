import type { InputValue } from '../runtime.js';


export type CustomerSessionsRevokeInput = { "customer_session_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
