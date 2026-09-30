
import type { DeliveryPickupDetailsInput } from './DeliveryPickupDetailsInput.js';
import type { DeliveryPlanInput } from './DeliveryPlanInput.js';
import type { DeliverySelectionInstructionsRequestInput } from './DeliverySelectionInstructionsRequestInput.js';
import type { DeliveryShipmentDetailsInput } from './DeliveryShipmentDetailsInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliverySelectionChoiceResourceInput = { "amount_money": MoneyValueInput; "delivery_choice_group_id": string; "delivery_method_id": string; "delivery_option_id": string; "delivery_plan": DeliveryPlanInput; "delivery_window_id"?: string; "description"?: string; "discount_money": MoneyValueInput; "input"?: DeliverySelectionInstructionsRequestInput; "local_delivery"?: DeliveryShipmentDetailsInput; "merchant_reference"?: string; "name": string; "order_charge_id"?: string; "pickup"?: DeliveryPickupDetailsInput; "shipment"?: DeliveryShipmentDetailsInput; "stable_key": string; "tax_money": MoneyValueInput; /** IANA timezone for displaying window_start_at and window_end_at. Example: "America/New_York". */ "timezone"?: string; "total_money": MoneyValueInput; "type": "shipment" | "pickup" | "local_delivery"; /** RFC3339 timestamp. Format: date-time. */ "window_end_at"?: string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "window_start_at"?: string | globalThis.Date; };
