import type { InputValue } from '../runtime.js';


export type PaymentMethodsGetInput = { "payment_method_id": InputValue<string>; "expand"?: InputValue<Array<"customer">>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
