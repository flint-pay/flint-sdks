
import type { BalanceTransaction } from './BalanceTransaction.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BalanceTransactionResponse = { "data": BalanceTransaction; "meta"?: ResponseMeta; "request_id"?: string; };
