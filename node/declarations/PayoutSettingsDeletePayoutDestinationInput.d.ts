import type { InputValue } from '../runtime.js';
import type { CancelPayoutRequestInput } from './CancelPayoutRequestInput.js';

export type PayoutSettingsDeletePayoutDestinationInput = { "payout_destination_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CancelPayoutRequestInput>; };
