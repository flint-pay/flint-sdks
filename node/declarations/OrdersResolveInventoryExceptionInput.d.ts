import type { InputValue } from '../runtime.js';
import type { ResendWebhookDeliveryRequestInput } from './ResendWebhookDeliveryRequestInput.js';

export type OrdersResolveInventoryExceptionInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<ResendWebhookDeliveryRequestInput>; };
