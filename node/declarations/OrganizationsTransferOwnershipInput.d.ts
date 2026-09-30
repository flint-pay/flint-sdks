import type { InputValue } from '../runtime.js';
import type { TransferOrganizationOwnershipRequestInput } from './TransferOrganizationOwnershipRequestInput.js';

export type OrganizationsTransferOwnershipInput = { "organization_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<TransferOrganizationOwnershipRequestInput>; };
