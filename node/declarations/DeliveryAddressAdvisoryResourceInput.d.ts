
import type { DeliveryAddressRequestInput } from './DeliveryAddressRequestInput.js';

export type DeliveryAddressAdvisoryResourceInput = { "role": "destination_address" | "buyer_location"; "suggested_address"?: DeliveryAddressRequestInput; "verification_state": "needs_review" | "unverifiable"; };
