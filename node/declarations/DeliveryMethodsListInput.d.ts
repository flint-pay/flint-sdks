import type { InputValue } from '../runtime.js';


export type DeliveryMethodsListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** maxLength: 255. */ "query"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "type"?: InputValue<"shipment" | "local_delivery" | "pickup">; "delivery_zone_id"?: InputValue<string>; "delivery_location_set_id"?: InputValue<string>; "delivery_rate_callback_id"?: InputValue<string>; "location_id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
