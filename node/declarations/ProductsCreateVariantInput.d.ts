import type { InputValue } from '../runtime.js';
import type { CreateProductVariantRequestInput } from './CreateProductVariantRequestInput.js';

export type ProductsCreateVariantInput = { "product_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateProductVariantRequestInput>; };
