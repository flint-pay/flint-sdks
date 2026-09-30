import type { InputValue } from '../runtime.js';
import type { UpdatePackageItemRequestInput } from './UpdatePackageItemRequestInput.js';

export type PackagesUpdateItemInput = { "package_id": InputValue<string>; "package_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdatePackageItemRequestInput>; };
