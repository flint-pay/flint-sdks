import type { InputValue } from '../runtime.js';
import type { VoidPackageRequestInput } from './VoidPackageRequestInput.js';

export type PackagesVoidResourceInput = { "package_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<VoidPackageRequestInput>; };
