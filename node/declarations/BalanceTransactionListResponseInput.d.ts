
import type { BalanceTransactionInput } from './BalanceTransactionInput.js';
import type { MoneyMovementListMetaInput } from './MoneyMovementListMetaInput.js';

export type BalanceTransactionListResponseInput = { "data": Array<BalanceTransactionInput>; "meta"?: MoneyMovementListMetaInput; "next_page_token"?: string; "request_id"?: string; };
