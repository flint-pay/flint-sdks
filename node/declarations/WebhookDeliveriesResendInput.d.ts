import type { InputValue } from '../runtime.js';
import type { ResendWebhookDeliveryRequestInput } from './ResendWebhookDeliveryRequestInput.js';

export type WebhookDeliveriesResendInput = { "webhook_delivery_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<ResendWebhookDeliveryRequestInput>; };
