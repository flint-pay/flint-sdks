
import type { PostalAddress } from './PostalAddress.js';

export type ReturnHandoffDestination = { "address"?: PostalAddress; "destination_type": "buyer_address" | "location" | "external_location" | (string & {}); "location_id"?: string; "name"?: string; };
