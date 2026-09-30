


export type UpdateDeviceRequest = { "location_id"?: string; /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all metadata. An empty object makes no change. Empty strings are stored. Keys starting with flint_ are reserved and cannot be written through the public API. */ "metadata"?: Record<string, string | null> | null; "name"?: string; };
