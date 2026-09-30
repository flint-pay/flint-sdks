


export type CreateDeviceResult = { "already_existed"?: boolean; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "device_id": string; "hardware_fingerprint"?: string; "location_id"?: string; "merchant_id"?: string; "metadata"?: Record<string, string>; "name": string; "status": "active" | "deleted" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
