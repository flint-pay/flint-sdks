import type { InputValue } from '../runtime.js';
import type { ResourceVersionRequestInput } from './ResourceVersionRequestInput.js';

export type InvoicesMarkUncollectibleInput = { "invoice_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body"?: InputValue<ResourceVersionRequestInput>; };
