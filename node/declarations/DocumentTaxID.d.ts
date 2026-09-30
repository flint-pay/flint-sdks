


export type DocumentTaxID = { /** Two-letter ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; /** Server-generated identity of an existing entry. Omit when adding an entry. pattern: ^dti_[0-9A-HJKMNP-TV-Z]{26}$. */ "document_tax_id"?: string; /** Provider-independent identifier type, for example vat, gst, or ein. This is an open vocabulary. minLength: 1. maxLength: 64. pattern: ^[a-z][a-z0-9_]*$. */ "identifier_type": string; /** minLength: 1. maxLength: 64. */ "region"?: string; /** Full identifier printed on documents. Not verified by Flint. minLength: 1. maxLength: 255. */ "value": string; };
