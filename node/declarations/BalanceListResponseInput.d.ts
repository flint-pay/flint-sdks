
import type { BalanceInput } from './BalanceInput.js';
import type { MoneyMovementListMetaInput } from './MoneyMovementListMetaInput.js';

export type BalanceListResponseInput = { "data": Array<BalanceInput>; "meta"?: MoneyMovementListMetaInput; "request_id"?: string; };
