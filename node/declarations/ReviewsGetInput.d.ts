import type { InputValue } from '../runtime.js';


export type ReviewsGetInput = { "review_id": InputValue<string>; "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
