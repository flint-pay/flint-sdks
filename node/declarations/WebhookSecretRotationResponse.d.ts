
import type { ResponseMeta } from './ResponseMeta.js';
import type { WebhookSecret } from './WebhookSecret.js';

export type WebhookSecretRotationResponse = { "data": WebhookSecret; "meta"?: ResponseMeta; "request_id"?: string; };
