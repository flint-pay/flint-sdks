import type { InputValue } from '../runtime.js';


export type RiskListsListInput = { "include_archived"?: InputValue<boolean>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
