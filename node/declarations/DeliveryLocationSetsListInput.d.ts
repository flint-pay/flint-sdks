import type { InputValue } from '../runtime.js';


export type DeliveryLocationSetsListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** maxLength: 255. */ "query"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
