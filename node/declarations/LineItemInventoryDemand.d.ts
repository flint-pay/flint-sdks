


export type LineItemInventoryDemand = { "bundle_component_id"?: string; "component_snapshot_id"?: string; "inventory_item_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity_per_line_item_unit": string; };
