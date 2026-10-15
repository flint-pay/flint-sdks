


export type DeliveryAddressRequest = { "city"?: string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country"?: string; "line1"?: string; "line2"?: string; "postal_code"?: string; /** State, province, or region. State conditions read it as a subdivision of the address's country: send its code with or without the country prefix, such as NY or US-NY. In the US and Canada, the English name, such as New York, also matches. US addresses also accept the USPS military codes AA, AE, and AP. If the address country is listed by a state condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). */ "state"?: string; };
