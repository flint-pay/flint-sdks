import type { InputValue } from '../runtime.js';


export type LocationsListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "inventory_allocation_status"?: InputValue<"active" | "inactive">; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; /** maxLength: 255. */ "query"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
