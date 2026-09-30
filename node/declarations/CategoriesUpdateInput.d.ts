import type { InputValue } from '../runtime.js';
import type { UpdateCategoryRequestInput } from './UpdateCategoryRequestInput.js';

export type CategoriesUpdateInput = { "category_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateCategoryRequestInput>; };
