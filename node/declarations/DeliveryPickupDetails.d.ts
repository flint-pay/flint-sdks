
import type { DeliveryLocationSummaryResource } from './DeliveryLocationSummaryResource.js';

export type DeliveryPickupDetails = { "location"?: DeliveryLocationSummaryResource; "pickup_mode": "in_store" | "curbside" | "locker" | "other" | (string & {}); };
