import type { InputValue } from '../runtime.js';
import type { RefreshCustomerSessionRequestInput } from './RefreshCustomerSessionRequestInput.js';

export type CustomerSessionsRefreshInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<RefreshCustomerSessionRequestInput>; };
