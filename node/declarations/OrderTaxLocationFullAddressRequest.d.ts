


export type OrderTaxLocationFullAddressRequest = { /** minLength: 1. pattern: \S. */ "city": string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": "US" | (string & {}); /** minLength: 1. pattern: \S. */ "line1": string; "line2"?: string; /** minLength: 1. pattern: \S. */ "postal_code": string; /** minLength: 1. pattern: \S. */ "state": string; };
