


/** The inventory capability on a Location. Present only when the caller holds commerce.inventory.read. */ export type LocationInventoryInput = { "allocation_status": "active" | "inactive"; /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 0. */ "inventory_revision": string; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string | globalThis.Date; };
