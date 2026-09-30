
import type { LocationAddressInput } from './LocationAddressInput.js';
import type { LocationCoordinateInput } from './LocationCoordinateInput.js';

export type PublishLocationGeographyRequestInput = { "address": LocationAddressInput; "coordinate"?: LocationCoordinateInput; "coordinate_source"?: "merchant_supplied" | "geocoded" | null; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 0. */ "expected_geography_revision": string; "timezone": string; };
