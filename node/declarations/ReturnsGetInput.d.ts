import type { InputValue } from '../runtime.js';


export type ReturnsGetInput = { "return_id": InputValue<string>; "expand"?: InputValue<Array<"customer" | "line_items.fulfillment" | "line_items.return_reason" | "order">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
