import type { InputValue } from '../runtime.js';
import type { SavePaymentMethodRequestInput } from './SavePaymentMethodRequestInput.js';

export type PaymentMethodsSaveInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<SavePaymentMethodRequestInput>; };
