import type { InputValue } from '../runtime.js';


export type CustomersGetInput = { "customer_id": InputValue<string>; "expand"?: InputValue<Array<"default_payment_method" | "receivables">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
