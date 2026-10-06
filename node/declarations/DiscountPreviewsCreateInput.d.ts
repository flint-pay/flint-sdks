import type { InputValue } from '../runtime.js';
import type { DiscountPreviewRequestInput } from './DiscountPreviewRequestInput.js';

export type DiscountPreviewsCreateInput = { "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<DiscountPreviewRequestInput>; };
