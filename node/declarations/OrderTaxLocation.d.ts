
import type { PostalAddress } from './PostalAddress.js';

export type OrderTaxLocation = { /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. */ "address"?: PostalAddress; "address_source": "provided" | "fulfillment" | "customer" | "device" | "location" | "merchant" | (string & {}); "address_type"?: "postal_code" | "tax_address" | "billing_address" | "shipping_address" | "business_address" | (string & {}); "customer_id"?: string; "device_id"?: string; "fulfillment_id"?: string; "location_id"?: string; };
