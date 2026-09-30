import type { InputValue } from '../runtime.js';
import type { CreatePaymentLinkRequestInput } from './CreatePaymentLinkRequestInput.js';

export type PaymentLinksCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreatePaymentLinkRequestInput>; };
