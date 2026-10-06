import type { InputValue } from '../runtime.js';
import type { ConfirmCustomerVerificationRequestInput } from './ConfirmCustomerVerificationRequestInput.js';

export type CustomerVerificationsConfirmInput = { "customer_verification_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ConfirmCustomerVerificationRequestInput>; };
