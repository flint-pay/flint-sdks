
import type { DeliveryPickupDetails } from './DeliveryPickupDetails.js';
import type { DeliveryPlan } from './DeliveryPlan.js';
import type { DeliverySelectionInstructionsRequest } from './DeliverySelectionInstructionsRequest.js';
import type { DeliveryShipmentDetails } from './DeliveryShipmentDetails.js';
import type { MoneyValue } from './MoneyValue.js';

export type DeliverySelectionChoiceResource = { "amount_money": MoneyValue; "delivery_choice_group_id": string; "delivery_method_id": string; "delivery_option_id": string; "delivery_plan": DeliveryPlan; "delivery_window_id"?: string; "description"?: string; "discount_money": MoneyValue; "input"?: DeliverySelectionInstructionsRequest; "local_delivery"?: DeliveryShipmentDetails; "merchant_reference"?: string; "name": string; "order_charge_id"?: string; "pickup"?: DeliveryPickupDetails; "shipment"?: DeliveryShipmentDetails; "stable_key": string; "tax_money": MoneyValue; /** IANA timezone for displaying window_start_at and window_end_at. Example: "America/New_York". */ "timezone"?: string; "total_money": MoneyValue; "type": "shipment" | "pickup" | "local_delivery" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "window_end_at"?: string; /** RFC3339 timestamp. Format: date-time. */ "window_start_at"?: string; };
