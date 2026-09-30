
import type { OrderDeliveryDestinationAddress } from './OrderDeliveryDestinationAddress.js';
import type { OrderDeliveryDestinationRecipient } from './OrderDeliveryDestinationRecipient.js';

export type OrderDeliveryDestination = { "address": OrderDeliveryDestinationAddress; /** Delivery selection that controls this destination, when checkout collected it. */ "delivery_selection_id"?: string; /** Time payment froze this destination. Format: date-time. */ "frozen_at"?: string; "recipient"?: OrderDeliveryDestinationRecipient; "source": "delivery_selection" | "api" | "dashboard" | (string & {}); };
