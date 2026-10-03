import type { InputValue } from '../runtime.js';


export type MeListGiftCardTransactionsInput = { "X-Request-Id"?: InputValue<string>; "gift_card_id": InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
