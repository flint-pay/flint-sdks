
import type { OrderDeliveryDestinationAddressRequest } from './OrderDeliveryDestinationAddressRequest.js';

export type SubscriptionDeliveryDestinationRequest = (({ /** pattern: ^caddr_[0-9A-HJKMNP-TV-Z]{26}$. */ "customer_address_id": string; "type": ("customer_address") & ("customer_address"); }) | ({ "address": OrderDeliveryDestinationAddressRequest; "type": ("address") & ("address"); }) | (object));
