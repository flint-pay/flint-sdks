
import type { DeliverySelectionRecipientRequest } from './DeliverySelectionRecipientRequest.js';
import type { SubscriptionDeliveryDestinationRequest } from './SubscriptionDeliveryDestinationRequest.js';

export type SubscriptionDeliveryRequest = { /** pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */ "delivery_method_id": string; "destination": SubscriptionDeliveryDestinationRequest; "recipient"?: DeliverySelectionRecipientRequest; "type": "shipment" | "local_delivery" | (string & {}); };
