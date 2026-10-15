
import type { Address } from './Address.js';

export type SubscriptionDeliveryDestination = { /** Resolved delivery address used by future shipments. */ "address": Address; /** Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. */ "customer_address_id"?: string; };
