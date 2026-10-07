import type { InputValue } from '../runtime.js';


export type MeListFulfillmentEventsInput = { "order_id": InputValue<string>; "fulfillment_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "package_id"?: InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
