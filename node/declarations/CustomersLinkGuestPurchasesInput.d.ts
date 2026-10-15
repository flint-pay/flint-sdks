import type { InputValue } from '../runtime.js';
import type { LinkCustomerGuestPurchasesRequestInput } from './LinkCustomerGuestPurchasesRequestInput.js';

export type CustomersLinkGuestPurchasesInput = { "customer_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<LinkCustomerGuestPurchasesRequestInput>; };
