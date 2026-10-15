import type { InputValue } from '../runtime.js';
import type { UpdateMerchantRequestInput } from './UpdateMerchantRequestInput.js';

export type MerchantsUpdateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdateMerchantRequestInput>; };
