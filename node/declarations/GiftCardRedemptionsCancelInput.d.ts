import type { InputValue } from '../runtime.js';
import type { ConfirmReturnResolutionRequestInput } from './ConfirmReturnResolutionRequestInput.js';

export type GiftCardRedemptionsCancelInput = { "X-Request-Id"?: InputValue<string>; "gift_card_redemption_id": InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ConfirmReturnResolutionRequestInput>; };
