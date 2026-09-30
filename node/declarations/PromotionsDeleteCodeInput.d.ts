import type { InputValue } from '../runtime.js';


export type PromotionsDeleteCodeInput = { "promotion_id": InputValue<string>; "promotion_code_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
