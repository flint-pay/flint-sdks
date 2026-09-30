import type { InputValue } from '../runtime.js';
import type { UpdateOrganizationRequestInput } from './UpdateOrganizationRequestInput.js';

export type OrganizationsUpdateInput = { "organization_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateOrganizationRequestInput>; };
