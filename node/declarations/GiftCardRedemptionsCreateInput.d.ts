import type { InputValue } from '../runtime.js';
import type { CreateGiftCardRedemptionRequestInput } from './CreateGiftCardRedemptionRequestInput.js';

export type GiftCardRedemptionsCreateInput = { "X-Request-Id"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateGiftCardRedemptionRequestInput>; };
