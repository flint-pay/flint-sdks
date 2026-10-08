
import type { DeliverySelectionRecipientRequestInput } from './DeliverySelectionRecipientRequestInput.js';
import type { SubscriptionDeliveryDestinationRequestInput } from './SubscriptionDeliveryDestinationRequestInput.js';

export type SubscriptionDeliveryRequestInput = { /** pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */ "delivery_method_id": string; "destination": SubscriptionDeliveryDestinationRequestInput; "recipient"?: DeliverySelectionRecipientRequestInput; "type": "shipment" | "local_delivery"; };
