import type { InputValue } from '../runtime.js';
import type { CreateAPIKeyRequestInput } from './CreateAPIKeyRequestInput.js';

export type ApiKeysCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateAPIKeyRequestInput>; };
