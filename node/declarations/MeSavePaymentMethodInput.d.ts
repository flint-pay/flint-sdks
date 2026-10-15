import type { InputValue } from '../runtime.js';
import type { SaveMePaymentMethodRequestInput } from './SaveMePaymentMethodRequestInput.js';

export type MeSavePaymentMethodInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<SaveMePaymentMethodRequestInput>; };
