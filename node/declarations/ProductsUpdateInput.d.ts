import type { InputValue } from '../runtime.js';
import type { UpdateProductRequestInput } from './UpdateProductRequestInput.js';

export type ProductsUpdateInput = { "product_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateProductRequestInput>; };
