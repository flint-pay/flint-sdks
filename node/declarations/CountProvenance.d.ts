


export type CountProvenance = { "external_actor_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string; "source_system": (({ "external_source_id"?: string; "type": "manual" | "pos" | "wms" | "erp" | "flint" | "other" | (string & {}); }) | (null)); };
