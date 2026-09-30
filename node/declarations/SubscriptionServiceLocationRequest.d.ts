
import type { PostalAddress } from './PostalAddress.js';

export type SubscriptionServiceLocationRequest = (({ "customer_address_id": string; "source": "customer_address"; }) | ({ "address": PostalAddress; "source": "address"; }) | (object));
