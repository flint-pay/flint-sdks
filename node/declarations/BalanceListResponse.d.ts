
import type { Balance } from './Balance.js';
import type { MoneyMovementListMeta } from './MoneyMovementListMeta.js';

export type BalanceListResponse = { "data": Array<Balance>; "meta"?: MoneyMovementListMeta; "request_id"?: string; };
