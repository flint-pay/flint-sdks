import type { InputValue } from '../runtime.js';
import type { CancelPayoutRequestInput } from './CancelPayoutRequestInput.js';

export type PayoutsCancelInput = { "payout_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CancelPayoutRequestInput>; };
