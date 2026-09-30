import type { InputValue } from '../runtime.js';
import type { UpdateWebhookEndpointRequestInput } from './UpdateWebhookEndpointRequestInput.js';

export type WebhookEndpointsUpdateInput = { "webhook_endpoint_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateWebhookEndpointRequestInput>; };
