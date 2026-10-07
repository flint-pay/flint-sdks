


export type OrderTaxLocation = { /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. */ "address"?: { "city": string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }; "address_source": "provided" | "fulfillment" | "customer" | "device" | "location" | "merchant" | (string & {}); "address_type"?: "postal_code" | "tax_address" | "billing_address" | "shipping_address" | "business_address" | (string & {}); "customer_id"?: string; "device_id"?: string; "fulfillment_id"?: string; "location_id"?: string; };
