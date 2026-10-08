
import type { SubscriptionCounts } from './SubscriptionCounts.js';

export type SubscriptionDeliveryMethodImpact = { "delivery_method_id": string; "mode": "delivery_method_update" | (string & {}); "no_longer_eligible_counts": SubscriptionCounts; "subscription_counts": SubscriptionCounts; };
