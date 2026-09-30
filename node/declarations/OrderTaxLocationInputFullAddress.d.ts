
import type { OrderTaxLocationFullAddressRequest } from './OrderTaxLocationFullAddressRequest.js';

export type OrderTaxLocationInputFullAddress = { "address": OrderTaxLocationFullAddressRequest; "address_source"?: "provided" | (string & {}); "address_type": "tax_address" | "billing_address" | "shipping_address" | (string & {}); };
