
import type { Address } from './Address.js';

export type SubscriptionServiceLocationRequest = (({ "customer_address_id": string; "source": "customer_address"; }) | ({ "address": Address; "source": "address"; }) | (object));
