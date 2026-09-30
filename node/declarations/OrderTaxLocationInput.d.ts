
import type { PostalAddressInput } from './PostalAddressInput.js';

export type OrderTaxLocationInput = { "address"?: PostalAddressInput; "address_source": "provided" | "fulfillment" | "customer" | "device" | "location" | "merchant"; "address_type"?: "postal_code" | "tax_address" | "billing_address" | "shipping_address" | "business_address"; "customer_id"?: string; "device_id"?: string; "fulfillment_id"?: string; "location_id"?: string; };
