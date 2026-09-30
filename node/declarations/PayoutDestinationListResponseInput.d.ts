
import type { MoneyMovementListMetaInput } from './MoneyMovementListMetaInput.js';
import type { PayoutDestinationInput } from './PayoutDestinationInput.js';

export type PayoutDestinationListResponseInput = { "data": Array<PayoutDestinationInput>; "meta"?: MoneyMovementListMetaInput; "next_page_token"?: string; "request_id"?: string; };
