import type { InputValue } from '../runtime.js';


export type PackagesDeleteItemInput = { "package_id": InputValue<string>; "package_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
