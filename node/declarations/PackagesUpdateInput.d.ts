import type { InputValue } from '../runtime.js';
import type { UpdatePackageRequestInput } from './UpdatePackageRequestInput.js';

export type PackagesUpdateInput = { "package_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdatePackageRequestInput>; };
