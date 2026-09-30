import type { InputValue } from '../runtime.js';
import type { UpdateMerchantRequestInput } from './UpdateMerchantRequestInput.js';

export type MerchantsUpdateInput = { "merchant_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateMerchantRequestInput>; };
