import type { InputValue } from '../runtime.js';
import type { ConfirmEmailChangeRequestInput } from './ConfirmEmailChangeRequestInput.js';

export type MeConfirmEmailChangeRequestInput = { "email_change_request_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ConfirmEmailChangeRequestInput>; };
