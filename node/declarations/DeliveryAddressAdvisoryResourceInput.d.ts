


export type DeliveryAddressAdvisoryResourceInput = { "role": "destination_address" | "buyer_location"; /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. */ "suggested_address"?: { "city"?: string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country"?: string; "line1"?: string; "line2"?: string; "postal_code"?: string; /** State, province, or region. State conditions read it as a subdivision of the address's country: send its code with or without the country prefix, such as NY or US-NY. In the US and Canada, the English name, such as New York, also matches. */ "state"?: string; }; "verification_state": "needs_review" | "unverifiable"; };
