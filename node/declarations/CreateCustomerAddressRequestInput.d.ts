
import type { PostalAddressInput } from './PostalAddressInput.js';

export type CreateCustomerAddressRequestInput = { "address": PostalAddressInput; "is_default_billing"?: boolean; "is_default_shipping"?: boolean; "label"?: string; "phone"?: string; "recipient_name": string; };
