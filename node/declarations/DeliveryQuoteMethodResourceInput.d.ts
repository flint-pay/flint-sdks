


export type DeliveryQuoteMethodResourceInput = { "delivery_method_id": string; "delivery_method_revision_id": string; "description"?: string; /** Format: int32. */ "display_position": number; "name": string; /** Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: int32. */ "recommendation_priority"?: number; "type": "shipment" | "pickup" | "local_delivery"; };
