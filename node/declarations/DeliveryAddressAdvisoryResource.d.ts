
import type { DeliveryAddressRequest } from './DeliveryAddressRequest.js';

export type DeliveryAddressAdvisoryResource = { "role": "destination_address" | "buyer_location" | (string & {}); "suggested_address"?: DeliveryAddressRequest; "verification_state": "needs_review" | "unverifiable" | (string & {}); };
