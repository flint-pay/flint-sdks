


export type OrderTaxJurisdictionRequestInput = { /** minLength: 1. maxLength: 128. pattern: ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$. */ "code": string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": "US"; "level": "state" | "county" | "city" | "district"; /** minLength: 1. maxLength: 200. pattern: ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$. */ "name": string; /** minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */ "state": string; };
