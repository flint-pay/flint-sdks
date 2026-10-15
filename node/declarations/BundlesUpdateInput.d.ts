import type { InputValue } from '../runtime.js';
import type { UpdateBundleRequestInput } from './UpdateBundleRequestInput.js';

export type BundlesUpdateInput = { "bundle_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdateBundleRequestInput>; };
