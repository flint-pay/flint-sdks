import type { InputValue } from '../runtime.js';
import type { PauseSubscriptionRequestInput } from './PauseSubscriptionRequestInput.js';

export type MePauseSubscriptionInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<PauseSubscriptionRequestInput>; };
