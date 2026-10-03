
import type { Refund } from './Refund.js';
import type { RefundGiftCardCode } from './RefundGiftCardCode.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreateRefundResponse = { "data": Refund; /** Replacement card codes recovered from the original command for 24 hours. Omitted after the recovery window and never returned by ordinary refund reads or events. */ "gift_card_codes"?: Array<RefundGiftCardCode>; "meta"?: ResponseMeta; "request_id"?: string; };
