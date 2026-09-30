import type { InputValue } from '../runtime.js';


export type FulfillmentsGetInput = { "fulfillment_id": InputValue<string>; "expand"?: InputValue<Array<"order" | "packages" | "shipments">>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
