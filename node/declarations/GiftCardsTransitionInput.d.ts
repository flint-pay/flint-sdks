import type { InputValue } from '../runtime.js';
import type { TransitionGiftCardRequestInput } from './TransitionGiftCardRequestInput.js';

export type GiftCardsTransitionInput = { "X-Request-Id"?: InputValue<string>; "gift_card_id": InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<TransitionGiftCardRequestInput>; };
