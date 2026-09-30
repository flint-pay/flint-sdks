


export type CountProvenanceInput = { "external_actor_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string | globalThis.Date; "source_system": (({ "external_source_id"?: string; "type": "manual" | "pos" | "wms" | "erp" | "flint" | "other"; }) | (null)); };
