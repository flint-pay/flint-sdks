import type { InputValue } from '../runtime.js';


export type DeveloperListSandboxesInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived" | "all">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
