


export type TaxJurisdictionInput = { /** Stable opaque Flint jurisdiction key used for equality and report grouping. */ "code": string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; "level": "state" | "county" | "city" | "district"; "name": string; "state": string; };
