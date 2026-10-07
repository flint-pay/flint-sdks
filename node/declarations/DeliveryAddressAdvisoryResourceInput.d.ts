
import type { DeliveryAddressRequestInput } from './DeliveryAddressRequestInput.js';

export type DeliveryAddressAdvisoryResourceInput = { "role": "destination_address" | "buyer_location"; /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. */ "suggested_address"?: DeliveryAddressRequestInput; "verification_state": "needs_review" | "unverifiable"; };
