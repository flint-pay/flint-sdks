import type { InputValue } from '../runtime.js';
import type { UpdateAPIKeyRequestInput } from './UpdateAPIKeyRequestInput.js';

export type ApiKeysUpdateInput = { "api_key_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateAPIKeyRequestInput>; };
