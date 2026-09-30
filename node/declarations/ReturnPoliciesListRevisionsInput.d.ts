import type { InputValue } from '../runtime.js';


export type ReturnPoliciesListRevisionsInput = { "return_policy_id": InputValue<string>; /** Format: int32. minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
