
import type { OrderDeliveryDestinationAddressInput } from './OrderDeliveryDestinationAddressInput.js';
import type { OrderDeliveryDestinationRecipientInput } from './OrderDeliveryDestinationRecipientInput.js';

export type OrderDeliveryDestinationInput = { "address": OrderDeliveryDestinationAddressInput; /** Delivery selection that controls this destination, when checkout collected it. */ "delivery_selection_id"?: string; /** Time payment froze this destination. Format: date-time. */ "frozen_at"?: string | globalThis.Date; "recipient"?: OrderDeliveryDestinationRecipientInput; "source": "delivery_selection" | "api" | "dashboard"; };
