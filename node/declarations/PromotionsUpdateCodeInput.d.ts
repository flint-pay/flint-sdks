import type { InputValue } from '../runtime.js';
import type { UpdatePromotionCodeRequestInput } from './UpdatePromotionCodeRequestInput.js';

export type PromotionsUpdateCodeInput = { "promotion_id": InputValue<string>; "promotion_code_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdatePromotionCodeRequestInput>; };
