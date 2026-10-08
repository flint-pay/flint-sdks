
import type { OrderLineSubscriptionOfferDiscount } from './OrderLineSubscriptionOfferDiscount.js';
import type { SubscriptionIntervalOption } from './SubscriptionIntervalOption.js';

export type OrderLineSubscriptionOfferSummary = { "billing_interval_options": Array<SubscriptionIntervalOption>; "discount"?: OrderLineSubscriptionOfferDiscount; "name": string; "subscription_offer_id": string; };
