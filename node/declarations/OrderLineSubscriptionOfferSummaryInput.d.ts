
import type { OrderLineSubscriptionOfferDiscountInput } from './OrderLineSubscriptionOfferDiscountInput.js';
import type { SubscriptionIntervalOptionInput } from './SubscriptionIntervalOptionInput.js';

export type OrderLineSubscriptionOfferSummaryInput = { "billing_interval_options": Array<SubscriptionIntervalOptionInput>; "discount"?: OrderLineSubscriptionOfferDiscountInput; "name": string; "subscription_offer_id": string; };
