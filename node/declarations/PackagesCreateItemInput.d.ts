import type { InputValue } from '../runtime.js';
import type { CreatePackageItemRequestInput } from './CreatePackageItemRequestInput.js';

export type PackagesCreateItemInput = { "package_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreatePackageItemRequestInput>; };
