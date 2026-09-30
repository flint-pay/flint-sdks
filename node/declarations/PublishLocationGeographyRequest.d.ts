
import type { LocationAddress } from './LocationAddress.js';
import type { LocationCoordinate } from './LocationCoordinate.js';

export type PublishLocationGeographyRequest = { "address": LocationAddress; "coordinate"?: LocationCoordinate; "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 0. */ "expected_geography_revision": string; "timezone": string; };
