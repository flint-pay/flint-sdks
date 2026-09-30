import type { InputValue } from '../runtime.js';
import type { UpdatePaymentLinkRequestInput } from './UpdatePaymentLinkRequestInput.js';

export type PaymentLinksUpdateInput = { "payment_link_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdatePaymentLinkRequestInput>; };
