


export type InventoryActionRequired = { "inventory_reservation_line_ids": Array<string>; "next_actions": Array<"replenish" | "reallocate" | "cancel" | (string & {})>; "reason": "inventory_shortage" | (string & {}); };
