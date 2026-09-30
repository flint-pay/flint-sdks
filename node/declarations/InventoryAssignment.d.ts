


export type InventoryAssignment = { "demand_key": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "geography_revision": string; "inventory_item_id": string; "location_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; };
