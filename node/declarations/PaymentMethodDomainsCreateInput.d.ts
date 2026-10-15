import type { InputValue } from '../runtime.js';
import type { CreatePaymentMethodDomainRequestInput } from './CreatePaymentMethodDomainRequestInput.js';

export type PaymentMethodDomainsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreatePaymentMethodDomainRequestInput>; };
