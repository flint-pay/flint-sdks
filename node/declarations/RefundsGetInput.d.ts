import type { InputValue } from '../runtime.js';


export type RefundsGetInput = { "refund_id": InputValue<string>; "expand"?: InputValue<Array<"customer" | "order" | "payment_intent" | "payment_refunds.payment_intent">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
