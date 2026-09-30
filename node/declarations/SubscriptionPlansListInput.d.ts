import type { InputValue } from '../runtime.js';


export type SubscriptionPlansListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; /** Format: date-time. Example: "2026-03-17T14:30:00Z". */ "created_after"?: InputValue<string | globalThis.Date>; /** Format: date-time. Example: "2026-03-17T14:30:00Z". */ "created_before"?: InputValue<string | globalThis.Date>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
