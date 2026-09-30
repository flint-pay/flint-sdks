


export type DeliveryInventoryAssignmentRequest = { "demand_key": string; "inventory_item_id": string; "location_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; };
