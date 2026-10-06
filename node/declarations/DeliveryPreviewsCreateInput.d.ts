import type { InputValue } from '../runtime.js';
import type { CreateDeliveryPreviewRequestInput } from './CreateDeliveryPreviewRequestInput.js';

export type DeliveryPreviewsCreateInput = { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateDeliveryPreviewRequestInput>; };
