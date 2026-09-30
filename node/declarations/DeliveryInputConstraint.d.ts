
import type { DeliveryWindowResource } from './DeliveryWindowResource.js';

export type DeliveryInputConstraint = { "allowed_values"?: Array<string>; /** RFC3339 timestamp. Format: date-time. */ "earliest_at"?: string; "format"?: string; /** RFC3339 timestamp. Format: date-time. */ "latest_at"?: string; /** Format: int32. */ "maximum_length"?: number; /** Format: int32. */ "minimum_length"?: number; "offered_windows"?: Array<DeliveryWindowResource>; "supported_countries"?: Array<string>; "type": "string" | "address_field" | "email" | "phone" | "time_window" | "coordinate" | "caller_supplied_rate" | (string & {}); };
