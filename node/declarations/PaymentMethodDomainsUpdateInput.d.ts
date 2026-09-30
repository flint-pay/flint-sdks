import type { InputValue } from '../runtime.js';
import type { UpdatePaymentMethodDomainRequestInput } from './UpdatePaymentMethodDomainRequestInput.js';

export type PaymentMethodDomainsUpdateInput = { "payment_method_domain_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdatePaymentMethodDomainRequestInput>; };
