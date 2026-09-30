import type { InputValue } from '../runtime.js';
import type { UpdatePayoutDestinationRequestInput } from './UpdatePayoutDestinationRequestInput.js';

export type PayoutSettingsUpdatePayoutDestinationInput = { "payout_destination_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdatePayoutDestinationRequestInput>; };
