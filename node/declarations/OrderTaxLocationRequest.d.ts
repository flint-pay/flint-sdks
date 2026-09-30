
import type { OrderTaxLocationFullAddressRequest } from './OrderTaxLocationFullAddressRequest.js';
import type { OrderTaxLocationPostalAddressRequest } from './OrderTaxLocationPostalAddressRequest.js';

export type OrderTaxLocationRequest = (({ "address": OrderTaxLocationPostalAddressRequest; "address_source"?: "provided" | (string & {}); "address_type": "postal_code" | (string & {}); }) | ({ "address": OrderTaxLocationFullAddressRequest; "address_source"?: "provided" | (string & {}); "address_type": "tax_address" | "billing_address" | "shipping_address" | (string & {}); }) | ({ "address": OrderTaxLocationPostalAddressRequest; "address_source"?: "provided" | (string & {}); }) | ({ "address": OrderTaxLocationFullAddressRequest; "address_source"?: "provided" | (string & {}); }) | (object));
