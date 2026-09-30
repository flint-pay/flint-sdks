import type { InputValue } from '../runtime.js';


export type ReturnResolutionsGetInput = { "return_resolution_id": InputValue<string>; "expand"?: InputValue<Array<"payment_intents" | "refunds" | "replacement_order">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
