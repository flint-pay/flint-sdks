import type { InputValue } from '../runtime.js';


export type SubscriptionOffersListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
