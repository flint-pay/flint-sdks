import type { InputValue } from '../runtime.js';
import type { CreateCategoryRequestInput } from './CreateCategoryRequestInput.js';

export type CategoriesCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateCategoryRequestInput>; };
