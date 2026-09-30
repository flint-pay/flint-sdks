
import type { LocationAddressInput } from './LocationAddressInput.js';
import type { LocationCoordinateInput } from './LocationCoordinateInput.js';
import type { LocationInventoryRequestInput } from './LocationInventoryRequestInput.js';

export type CreateLocationRequestInput = { "address": LocationAddressInput; "coordinate"?: LocationCoordinateInput; "coordinate_source"?: "merchant_supplied" | "geocoded" | null; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "inventory"?: LocationInventoryRequestInput; "metadata"?: Record<string, string>; "name": string; "status"?: "active" | "inactive"; "timezone": string; };
