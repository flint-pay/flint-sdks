
import type { MoneyMovementListMeta } from './MoneyMovementListMeta.js';
import type { PayoutDestination } from './PayoutDestination.js';

export type PayoutDestinationListResponse = { "data": Array<PayoutDestination>; "meta"?: MoneyMovementListMeta; "next_page_token"?: string; "request_id"?: string; };
