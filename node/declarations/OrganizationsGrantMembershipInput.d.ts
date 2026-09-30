import type { InputValue } from '../runtime.js';
import type { GrantOrganizationMembershipRequestInput } from './GrantOrganizationMembershipRequestInput.js';

export type OrganizationsGrantMembershipInput = { "organization_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<GrantOrganizationMembershipRequestInput>; };
