
import type { LocationAddress } from './LocationAddress.js';
import type { LocationCoordinate } from './LocationCoordinate.js';
import type { LocationInventoryRequest } from './LocationInventoryRequest.js';

export type CreateLocationRequest = { "address": LocationAddress; "coordinate"?: LocationCoordinate; "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "inventory"?: LocationInventoryRequest; "metadata"?: Record<string, string>; "name": string; "status"?: "active" | "inactive" | (string & {}); "timezone": string; };
