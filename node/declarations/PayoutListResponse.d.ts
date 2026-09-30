
import type { MoneyMovementListMeta } from './MoneyMovementListMeta.js';
import type { Payout } from './Payout.js';

export type PayoutListResponse = { "data": Array<Payout>; "meta"?: MoneyMovementListMeta; "next_page_token"?: string; "request_id"?: string; };
