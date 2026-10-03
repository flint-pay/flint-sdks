import type { InputValue } from '../runtime.js';
import type { LookupGiftCardRequestInput } from './LookupGiftCardRequestInput.js';

export type GiftCardsLookupInput = { "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<LookupGiftCardRequestInput>; };
