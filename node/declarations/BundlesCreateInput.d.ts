import type { InputValue } from '../runtime.js';
import type { CreateBundleRequestInput } from './CreateBundleRequestInput.js';

export type BundlesCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateBundleRequestInput>; };
