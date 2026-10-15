import type { InputValue } from '../runtime.js';
import type { CreateWebhookTestEventRequestInput } from './CreateWebhookTestEventRequestInput.js';

export type WebhookEndpointsCreateWebhookTestEventInput = { "webhook_endpoint_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateWebhookTestEventRequestInput>; };
