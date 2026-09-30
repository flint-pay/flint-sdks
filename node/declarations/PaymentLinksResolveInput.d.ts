import type { InputValue } from '../runtime.js';
import type { ResolvePaymentLinkRequestInput } from './ResolvePaymentLinkRequestInput.js';

export type PaymentLinksResolveInput = { "payment_link_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ResolvePaymentLinkRequestInput>; };
