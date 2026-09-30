
import type { OrderDeliveryDestinationAddressRequest } from './OrderDeliveryDestinationAddressRequest.js';
import type { OrderDeliveryDestinationRecipientRequest } from './OrderDeliveryDestinationRecipientRequest.js';

export type OrderDeliveryDestinationRequest = { "address": OrderDeliveryDestinationAddressRequest; "recipient"?: OrderDeliveryDestinationRecipientRequest; };
