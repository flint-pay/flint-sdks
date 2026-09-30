import type { InputValue } from '../runtime.js';


export type BundlesListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "category_handle"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
