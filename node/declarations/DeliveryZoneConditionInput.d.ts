


export type DeliveryZoneConditionInput = { "delivery_zone_id": string; /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. */ "subject"?: "destination_address" | "buyer_location"; };
