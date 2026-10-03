
import type { GiftCardNotification } from './GiftCardNotification.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GiftCardNotificationResponse = { "data": GiftCardNotification; "meta"?: ResponseMeta; "request_id"?: string; };
