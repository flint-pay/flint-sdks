import type { InputValue } from '../runtime.js';
import type { UpdateProductVariantRequestInput } from './UpdateProductVariantRequestInput.js';

export type ProductsUpdateVariantInput = { "product_id": InputValue<string>; "variant_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdateProductVariantRequestInput>; };
