
import type { GiftCardLoadInput } from './GiftCardLoadInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type GiftCardLoadListResponseInput = { "data": Array<GiftCardLoadInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
