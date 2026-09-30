
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookDelivery } from './WebhookDelivery.js';

export type WebhookDeliveryResponse = { "data": WebhookDelivery; "meta"?: ResponseMeta; "request_id"?: string; };
