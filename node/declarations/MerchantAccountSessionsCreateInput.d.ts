import type { InputValue } from '../runtime.js';
import type { MerchantAccountSessionCreateRequestInput } from './MerchantAccountSessionCreateRequestInput.js';

export type MerchantAccountSessionsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; /** Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields. */ "body": InputValue<MerchantAccountSessionCreateRequestInput>; };
