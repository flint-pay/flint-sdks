


export type OrderDeliveryDestinationAddress = { /** maxLength: 100. */ "city"?: string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; /** maxLength: 255. */ "line1"?: string; /** maxLength: 255. */ "line2"?: string; /** maxLength: 20. */ "postal_code"?: string; /** maxLength: 100. */ "state"?: string; };
