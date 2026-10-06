import type { InputValue } from '../runtime.js';


export type PromotionsListCodesInput = { "promotion_id"?: InputValue<string>; /** minLength: 1. maxLength: 100. */ "code"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "expired" | "exhausted">; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "expand"?: InputValue<Array<"promotion">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
