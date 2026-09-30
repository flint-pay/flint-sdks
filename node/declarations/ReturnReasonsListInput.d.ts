import type { InputValue } from '../runtime.js';


export type ReturnReasonsListInput = { /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; /** Format: int32. minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "source"?: InputValue<"flint" | "merchant">; "status"?: InputValue<Array<"active" | "archived">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
