


export type CatalogSettings = { /** Active delivery profile assigned to new physical catalog items. */ "default_delivery_profile_id": string; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; /** Version used to fence catalog setting changes. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "version": string; };
