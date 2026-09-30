


export type DeliveryPostalCodeValue = { /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; "type"?: "exact" | "prefix" | (string & {}); "value": string; };
