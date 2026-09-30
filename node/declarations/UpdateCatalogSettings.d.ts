


export type UpdateCatalogSettings = { /** Active delivery profile assigned to new physical catalog items. */ "default_delivery_profile_id": string; /** Catalog settings version returned by GET /v1/settings. Use 0 only when catalog settings do not exist yet. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 0. */ "expected_version"?: string; };
