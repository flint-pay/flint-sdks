import type { InputValue } from '../runtime.js';


export type MeListPackagesInput = { "shipment_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
