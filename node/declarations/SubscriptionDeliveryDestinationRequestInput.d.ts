
import type { OrderDeliveryDestinationAddressRequestInput } from './OrderDeliveryDestinationAddressRequestInput.js';

export type SubscriptionDeliveryDestinationRequestInput = (({ /** pattern: ^caddr_[0-9A-HJKMNP-TV-Z]{26}$. */ "customer_address_id": string; "type": ("customer_address") & ("customer_address"); }) | ({ "address": OrderDeliveryDestinationAddressRequestInput; "type": ("address") & ("address"); }));
