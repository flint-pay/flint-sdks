
import type { SubscriptionCountsInput } from './SubscriptionCountsInput.js';

export type SubscriptionDeliveryMethodImpactInput = { "delivery_method_id": string; "mode": "delivery_method_update"; "no_longer_eligible_counts": SubscriptionCountsInput; "subscription_counts": SubscriptionCountsInput; };
