
import type { DeliveryPickupAvailabilityCandidateOutcome } from './DeliveryPickupAvailabilityCandidateOutcome.js';
import type { DeliveryPickupAvailabilityLocationSummary } from './DeliveryPickupAvailabilityLocationSummary.js';
import type { DeliveryPickupAvailabilityMethodResource } from './DeliveryPickupAvailabilityMethodResource.js';
import type { DeliveryQuoteLineItemResource } from './DeliveryQuoteLineItemResource.js';

export type DeliveryPickupAvailabilityLocationResource = { "applicable_quantities": Array<DeliveryQuoteLineItemResource>; "candidate_outcome": DeliveryPickupAvailabilityCandidateOutcome; "compatible_methods": Array<DeliveryPickupAvailabilityMethodResource>; /** Straight-line distance in meters from the buyer location. A buyer location with only a postal code is measured from the postal code's center. Omitted when Flint cannot place the buyer location or the store. */ "distance_meters"?: number; "location": DeliveryPickupAvailabilityLocationSummary; };
