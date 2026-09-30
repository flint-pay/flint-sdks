import type { InputValue } from '../runtime.js';
import type { PackageTransitionRequestInput } from './PackageTransitionRequestInput.js';

export type PackagesTransitionInput = { "package_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<PackageTransitionRequestInput>; };
