


export type UpdateLocationInventoryRequest = { "allocation_status": "active" | "inactive" | (string & {}); /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_inventory_revision"?: string; };
