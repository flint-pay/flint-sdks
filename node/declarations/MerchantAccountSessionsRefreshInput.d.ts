import type { InputValue } from '../runtime.js';
import type { MerchantAccountSessionRefreshRequestInput } from './MerchantAccountSessionRefreshRequestInput.js';

export type MerchantAccountSessionsRefreshInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; /** Refreshes a merchant account session from its signed launch token. No create fields are accepted. */ "body": InputValue<MerchantAccountSessionRefreshRequestInput>; };
