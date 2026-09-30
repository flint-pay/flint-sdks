


export type OrderDraftLineItemInventoryDemandRequest = { "inventory_item_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 9999. */ "quantity_per_line_item_unit": string; };
