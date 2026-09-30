
import type { DeliveryDistance } from './DeliveryDistance.js';
import type { DeliveryRadiusOrigin } from './DeliveryRadiusOrigin.js';

export type DeliveryRadiusCondition = { "maximum_distance": DeliveryDistance; "measurement"?: "straight_line" | (string & {}); "origin": DeliveryRadiusOrigin; /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. */ "subject"?: "destination_address" | "buyer_location" | (string & {}); };
