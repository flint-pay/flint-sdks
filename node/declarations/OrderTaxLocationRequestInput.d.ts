
import type { OrderTaxLocationFullAddressRequestInput } from './OrderTaxLocationFullAddressRequestInput.js';
import type { OrderTaxLocationPostalAddressRequestInput } from './OrderTaxLocationPostalAddressRequestInput.js';

export type OrderTaxLocationRequestInput = (({ "address": OrderTaxLocationPostalAddressRequestInput; "address_source"?: "provided"; "address_type": "postal_code"; }) | ({ "address": OrderTaxLocationFullAddressRequestInput; "address_source"?: "provided"; "address_type": "tax_address" | "billing_address" | "shipping_address"; }) | ({ "address": OrderTaxLocationPostalAddressRequestInput; "address_source"?: "provided"; }) | ({ "address": OrderTaxLocationFullAddressRequestInput; "address_source"?: "provided"; }));
