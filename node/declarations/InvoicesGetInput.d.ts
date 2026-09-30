import type { InputValue } from '../runtime.js';


export type InvoicesGetInput = { "invoice_id": InputValue<string>; "expand"?: InputValue<Array<"customer" | "order">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
