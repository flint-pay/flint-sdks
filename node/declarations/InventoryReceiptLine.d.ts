


export type InventoryReceiptLine = { "disposition": "sellable" | "quality_control" | "damaged" | "quarantined" | "lost" | (string & {}); "inventory_item_id": string; "inventory_movement_id"?: string; "inventory_receipt_line_id": string; "inventory_reservation_id"?: string; "inventory_reservation_line_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "receiving_location_id": string; "return_disposition_id"?: string; "return_line_item_id"?: string; };
