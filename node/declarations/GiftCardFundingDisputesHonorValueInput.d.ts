import type { InputValue } from '../runtime.js';
import type { HonorGiftCardFundingLossRequestInput } from './HonorGiftCardFundingLossRequestInput.js';

export type GiftCardFundingDisputesHonorValueInput = { "X-Request-Id"?: InputValue<string>; "dispute_id": InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<HonorGiftCardFundingLossRequestInput>; };
