
import type { BuyerInstructionsConfig } from './BuyerInstructionsConfig.js';
import type { DeliveryArrivalEstimate } from './DeliveryArrivalEstimate.js';
import type { DeliveryPickupDetails } from './DeliveryPickupDetails.js';
import type { DeliveryPlan } from './DeliveryPlan.js';
import type { DeliveryRecipientRequirement } from './DeliveryRecipientRequirement.js';
import type { DeliveryShipmentDetails } from './DeliveryShipmentDetails.js';
import type { DeliveryWindowResource } from './DeliveryWindowResource.js';
import type { MoneyValue } from './MoneyValue.js';

export type BuyerDeliveryOptionResource = { "amount_money": MoneyValue; "arrival_estimate"?: DeliveryArrivalEstimate; "buyer_instructions": BuyerInstructionsConfig; "consumed_by_delivery_selection_id"?: string; "delivery_method_id": string; "delivery_option_id"?: string; "delivery_plan": DeliveryPlan; "description"?: string; /** Format: int32. */ "display_position": number; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string; "local_delivery"?: DeliveryShipmentDetails; "name": string; "offered_windows"?: Array<DeliveryWindowResource>; "pickup"?: DeliveryPickupDetails; /** Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. */ "recipient_requirements"?: Array<DeliveryRecipientRequirement>; "recommended": boolean; "shipment"?: DeliveryShipmentDetails; "taxable": boolean; "timezone"?: string; "type": "shipment" | "pickup" | "local_delivery" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "window_end_at"?: string; "window_pricing"?: "uniform" | "varies" | (string & {}); "window_selection": "none" | "offered" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "window_start_at"?: string; };
