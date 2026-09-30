
import type { PostalAddressInput } from './PostalAddressInput.js';

export type SubscriptionServiceLocationRequestInput = (({ "customer_address_id": string; "source": "customer_address"; }) | ({ "address": PostalAddressInput; "source": "address"; }));
