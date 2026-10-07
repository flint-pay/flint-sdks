
import type { DeliveryAddressRequest } from './DeliveryAddressRequest.js';

export type DeliveryAddressAdvisoryResource = { "role": "destination_address" | "buyer_location" | (string & {}); /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. */ "suggested_address"?: DeliveryAddressRequest; "verification_state": "needs_review" | "unverifiable" | (string & {}); };
