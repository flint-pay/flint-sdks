
import type { OrderDeliveryDestinationAddressRequestInput } from './OrderDeliveryDestinationAddressRequestInput.js';
import type { OrderDeliveryDestinationRecipientRequestInput } from './OrderDeliveryDestinationRecipientRequestInput.js';

export type OrderDeliveryDestinationRequestInput = { "address": OrderDeliveryDestinationAddressRequestInput; "recipient"?: OrderDeliveryDestinationRecipientRequestInput; };
