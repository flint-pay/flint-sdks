import type { InputValue } from '../runtime.js';


export type FulfillmentEventsGetInput = { "fulfillment_event_id": InputValue<string>; "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
