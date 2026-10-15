
import type { Address } from './Address.js';

export type ReturnHandoffDestination = { "address"?: Address; "destination_type": "buyer_address" | "location" | "external_location" | (string & {}); "location_id"?: string; "name"?: string; };
