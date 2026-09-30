import type { InputValue } from '../runtime.js';


export type DevicesListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "location_id"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
