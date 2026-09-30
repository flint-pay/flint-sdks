


export type InventoryTransferLineRequest = { "inventory_item_id": string; "physical_condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {}); /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "requested_quantity": string; };
