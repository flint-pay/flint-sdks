import type { InputValue } from '../runtime.js';
import type { CreateOrganizationRequestInput } from './CreateOrganizationRequestInput.js';

export type OrganizationsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateOrganizationRequestInput>; };
