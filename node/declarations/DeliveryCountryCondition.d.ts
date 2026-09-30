


export type DeliveryCountryCondition = { /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. */ "subject"?: "destination_address" | "buyer_location" | (string & {}); "values": Array<string>; };
