


export type InventoryRoutingDemand = { "allowed_location_ids"?: Array<string>; "bundle_component_id"?: string; "demand_key": string; "forced_location_id"?: string; "inventory_item_id": string; "order_line_item_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "splitting_behavior": "single_location" | "split_when_required" | (string & {}); };
