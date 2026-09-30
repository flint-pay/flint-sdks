import type { InputValue } from '../runtime.js';


export type ProductsGetVariantInput = { "product_id": InputValue<string>; "variant_id": InputValue<string>; "expand"?: InputValue<Array<"modifier_set">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
