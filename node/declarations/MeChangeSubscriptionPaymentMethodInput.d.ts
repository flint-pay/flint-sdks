import type { InputValue } from '../runtime.js';
import type { ChangeSubscriptionPaymentMethodRequestInput } from './ChangeSubscriptionPaymentMethodRequestInput.js';

export type MeChangeSubscriptionPaymentMethodInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ChangeSubscriptionPaymentMethodRequestInput>; };
