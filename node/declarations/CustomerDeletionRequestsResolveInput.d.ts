import type { InputValue } from '../runtime.js';
import type { ResolveCustomerDeletionRequestInput } from './ResolveCustomerDeletionRequestInput.js';

export type CustomerDeletionRequestsResolveInput = { "customer_deletion_request_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ResolveCustomerDeletionRequestInput>; };
