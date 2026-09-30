import type { InputValue } from '../runtime.js';


export type OrganizationsRevokeMembershipInput = { "organization_id": InputValue<string>; "user_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
