import type { InputValue } from '../runtime.js';


export type WebhookEndpointsRemoveInput = { "webhook_endpoint_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
