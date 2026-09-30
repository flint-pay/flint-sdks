import type { InputValue } from '../runtime.js';


export type ApiKeysRevokeInput = { "api_key_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
