import type { InputValue } from '../runtime.js';
import type { CreateProductRequestInput } from './CreateProductRequestInput.js';

export type ProductsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateProductRequestInput>; };
