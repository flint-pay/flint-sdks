import type { InputValue } from '../runtime.js';
import type { UpdateCustomerEmailPreferencesRequestInput } from './UpdateCustomerEmailPreferencesRequestInput.js';

export type MeUpdateEmailPreferencesInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdateCustomerEmailPreferencesRequestInput>; };
