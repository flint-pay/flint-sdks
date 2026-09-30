import type { InputValue } from '../runtime.js';


export type ModifierGroupsListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "modifier_group_type"?: InputValue<"list" | "text">; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
