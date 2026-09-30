import type { InputValue } from '../runtime.js';


export type ProductsListVariantsInput = { "product_id": InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
