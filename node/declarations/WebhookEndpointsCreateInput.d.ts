import type { InputValue } from '../runtime.js';
import type { CreateWebhookEndpointRequestInput } from './CreateWebhookEndpointRequestInput.js';

export type WebhookEndpointsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateWebhookEndpointRequestInput>; };
