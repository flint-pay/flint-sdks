
import type { RefundInput } from './RefundInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CreateRefundResponseInput = { "data": RefundInput; /** Replacement card codes recovered from the original command for 24 hours. Omitted after the recovery window and never returned by ordinary refund reads or events. */ "gift_card_codes"?: never; "meta"?: ResponseMetaInput; "request_id"?: string; };
