
import type { PostalAddress } from './PostalAddress.js';

export type OrderTaxLocation = { "address"?: PostalAddress; "address_source": "provided" | "fulfillment" | "customer" | "device" | "location" | "merchant" | (string & {}); "address_type"?: "postal_code" | "tax_address" | "billing_address" | "shipping_address" | "business_address" | (string & {}); "customer_id"?: string; "device_id"?: string; "fulfillment_id"?: string; "location_id"?: string; };
