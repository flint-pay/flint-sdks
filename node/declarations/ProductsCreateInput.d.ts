import type { InputValue } from '../runtime.js';
import type { CreateProductRequestInput } from './CreateProductRequestInput.js';

export type ProductsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateProductRequestInput>; };
