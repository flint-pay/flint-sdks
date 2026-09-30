import type { InputValue } from '../runtime.js';
import type { CreatePaymentMethodDomainRequestInput } from './CreatePaymentMethodDomainRequestInput.js';

export type PaymentMethodDomainsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreatePaymentMethodDomainRequestInput>; };
