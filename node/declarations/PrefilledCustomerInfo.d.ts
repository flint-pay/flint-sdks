
import type { PostalAddress } from './PostalAddress.js';

export type PrefilledCustomerInfo = { "billing_address"?: PostalAddress; "email"?: string; "phone"?: string; "shipping_address"?: PostalAddress; };
