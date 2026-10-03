
import type { GiftCardNotificationInput } from './GiftCardNotificationInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type GiftCardNotificationListResponseInput = { "data": Array<GiftCardNotificationInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
