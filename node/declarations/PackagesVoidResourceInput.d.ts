import type { InputValue } from '../runtime.js';
import type { VoidPackageRequestInput } from './VoidPackageRequestInput.js';

export type PackagesVoidResourceInput = { "package_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body"?: InputValue<VoidPackageRequestInput>; };
