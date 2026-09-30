import type { InputValue } from '../runtime.js';


export type ProductsListOptionsInput = { "product_id": InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
