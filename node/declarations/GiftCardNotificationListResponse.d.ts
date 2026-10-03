
import type { GiftCardNotification } from './GiftCardNotification.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GiftCardNotificationListResponse = { "data": Array<GiftCardNotification>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
