


export type InventoryReceiptLineRequestInput = { "disposition": "sellable" | "quality_control" | "damaged" | "quarantined" | "lost"; "inventory_item_id": string; "inventory_reservation_id"?: string; "inventory_reservation_line_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "receiving_location_id": string; };
