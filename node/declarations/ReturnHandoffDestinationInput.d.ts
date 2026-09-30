
import type { PostalAddressInput } from './PostalAddressInput.js';

export type ReturnHandoffDestinationInput = { "address"?: PostalAddressInput; "destination_type": "buyer_address" | "location" | "external_location"; "location_id"?: string; "name"?: string; };
