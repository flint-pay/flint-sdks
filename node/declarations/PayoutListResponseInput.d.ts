
import type { MoneyMovementListMetaInput } from './MoneyMovementListMetaInput.js';
import type { PayoutInput } from './PayoutInput.js';

export type PayoutListResponseInput = { "data": Array<PayoutInput>; "meta"?: MoneyMovementListMetaInput; "next_page_token"?: string; "request_id"?: string; };
