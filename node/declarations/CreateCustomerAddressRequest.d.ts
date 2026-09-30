
import type { PostalAddress } from './PostalAddress.js';

export type CreateCustomerAddressRequest = { "address": PostalAddress; "is_default_billing"?: boolean; "is_default_shipping"?: boolean; "label"?: string; "phone"?: string; "recipient_name": string; };
