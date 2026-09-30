
import type { BalanceTransaction } from './BalanceTransaction.js';
import type { MoneyMovementListMeta } from './MoneyMovementListMeta.js';

export type BalanceTransactionListResponse = { "data": Array<BalanceTransaction>; "meta"?: MoneyMovementListMeta; "next_page_token"?: string; "request_id"?: string; };
