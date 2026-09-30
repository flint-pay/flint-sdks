


export type DeliveryStateCondition = { /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. */ "subject"?: "destination_address" | "buyer_location" | (string & {}); /** ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. */ "values": Array<string>; };
