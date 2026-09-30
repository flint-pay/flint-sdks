
import type { PostalAddress } from './PostalAddress.js';

export type CustomerAddress = { "address": PostalAddress; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "customer_address_id": string; "customer_id": string; "is_default_billing": boolean; "is_default_shipping": boolean; "label"?: string; "phone"?: string; "recipient_name": string; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; };
