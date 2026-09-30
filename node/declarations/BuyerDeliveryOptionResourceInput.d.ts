
import type { BuyerInstructionsConfigInput } from './BuyerInstructionsConfigInput.js';
import type { DeliveryArrivalEstimateInput } from './DeliveryArrivalEstimateInput.js';
import type { DeliveryPickupDetailsInput } from './DeliveryPickupDetailsInput.js';
import type { DeliveryPlanInput } from './DeliveryPlanInput.js';
import type { DeliveryRecipientRequirementInput } from './DeliveryRecipientRequirementInput.js';
import type { DeliveryShipmentDetailsInput } from './DeliveryShipmentDetailsInput.js';
import type { DeliveryWindowResourceInput } from './DeliveryWindowResourceInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';

export type BuyerDeliveryOptionResourceInput = { "amount_money": MoneyValueInput; "arrival_estimate"?: DeliveryArrivalEstimateInput; "buyer_instructions": BuyerInstructionsConfigInput; "consumed_by_delivery_selection_id"?: string; "delivery_method_id": string; "delivery_option_id"?: string; "delivery_plan": DeliveryPlanInput; "description"?: string; /** Format: int32. */ "display_position": number; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string | globalThis.Date; "local_delivery"?: DeliveryShipmentDetailsInput; "name": string; "offered_windows"?: Array<DeliveryWindowResourceInput>; "pickup"?: DeliveryPickupDetailsInput; /** Recipient fields this option asks for. A selection can leave out required fields, but payment needs them. */ "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>; "recommended": boolean; "shipment"?: DeliveryShipmentDetailsInput; "taxable": boolean; "timezone"?: string; "type": "shipment" | "pickup" | "local_delivery"; /** RFC3339 timestamp. Format: date-time. */ "window_end_at"?: string | globalThis.Date; "window_pricing"?: "uniform" | "varies"; "window_selection": "none" | "offered"; /** RFC3339 timestamp. Format: date-time. */ "window_start_at"?: string | globalThis.Date; };
