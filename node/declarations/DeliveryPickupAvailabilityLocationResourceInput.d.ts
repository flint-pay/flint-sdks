
import type { DeliveryPickupAvailabilityCandidateOutcomeInput } from './DeliveryPickupAvailabilityCandidateOutcomeInput.js';
import type { DeliveryPickupAvailabilityLocationSummaryInput } from './DeliveryPickupAvailabilityLocationSummaryInput.js';
import type { DeliveryPickupAvailabilityMethodResourceInput } from './DeliveryPickupAvailabilityMethodResourceInput.js';
import type { DeliveryQuoteLineItemResourceInput } from './DeliveryQuoteLineItemResourceInput.js';

export type DeliveryPickupAvailabilityLocationResourceInput = { "applicable_quantities": Array<DeliveryQuoteLineItemResourceInput>; "candidate_outcome": DeliveryPickupAvailabilityCandidateOutcomeInput; "compatible_methods": Array<DeliveryPickupAvailabilityMethodResourceInput>; /** Straight-line distance in meters from the buyer location. A buyer location with only a postal code is measured from the postal code's center. Omitted when Flint cannot place the buyer location or the store. */ "distance_meters"?: number; "location": DeliveryPickupAvailabilityLocationSummaryInput; };
