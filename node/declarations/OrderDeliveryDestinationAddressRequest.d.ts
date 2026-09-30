


export type OrderDeliveryDestinationAddressRequest = { /** minLength: 1. maxLength: 100. pattern: \S. */ "city": string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; /** minLength: 1. maxLength: 255. pattern: \S. */ "line1": string; /** maxLength: 255. */ "line2"?: string; /** Postal code when used by the destination country's postal format. maxLength: 20. */ "postal_code"?: string; /** State, province, or region when used by the destination country's postal format. maxLength: 100. */ "state"?: string; };
