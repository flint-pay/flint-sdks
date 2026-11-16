[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryHoldPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Optional | string or null | When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. `ends_at`: [declared alternatives](../models/SubscriptionDeliveryHoldPreviousAttributesInput.md#subscriptiondeliveryholdpreviousattributesinputends_at). |
| `fixable_by` | Optional | string or null | Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Values: `"buyer"`, `"merchant"`. `fixable_by`: [declared alternatives](../models/SubscriptionDeliveryHoldPreviousAttributesInput.md#subscriptiondeliveryholdpreviousattributesinputfixable_by). |
| `reason` | Optional | string or null | Why the subscription's delivery needs attention. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. `reason`: [declared alternatives](../models/SubscriptionDeliveryHoldPreviousAttributesInput.md#subscriptiondeliveryholdpreviousattributesinputreason). |
| `started_at` | Optional | string or null | When Flint held the renewal. `started_at`: [declared alternatives](../models/SubscriptionDeliveryHoldPreviousAttributesInput.md#subscriptiondeliveryholdpreviousattributesinputstarted_at). |

### SubscriptionDeliveryHoldPreviousAttributesInput.ends_at

### SubscriptionDeliveryHoldPreviousAttributesInput.ends_at variant 1

anyOf variant 1: When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`..

- Value shape: string. When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionDeliveryHoldPreviousAttributesInput.ends_at variant 2

anyOf variant 2.

- Value shape: null. When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. 

### SubscriptionDeliveryHoldPreviousAttributesInput.fixable_by

### SubscriptionDeliveryHoldPreviousAttributesInput.fixable_by variant 1

anyOf variant 1: Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false..

- Value shape: string. Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Values: `"buyer"`, `"merchant"`.

### SubscriptionDeliveryHoldPreviousAttributesInput.fixable_by variant 2

anyOf variant 2.

- Value shape: null. Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. 

### SubscriptionDeliveryHoldPreviousAttributesInput.reason

### SubscriptionDeliveryHoldPreviousAttributesInput.reason variant 1

anyOf variant 1: Why the subscription's delivery needs attention..

- Value shape: string. Why the subscription's delivery needs attention. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`.

### SubscriptionDeliveryHoldPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why the subscription's delivery needs attention. 

### SubscriptionDeliveryHoldPreviousAttributesInput.started_at

### SubscriptionDeliveryHoldPreviousAttributesInput.started_at variant 1

anyOf variant 1: When Flint held the renewal..

- Value shape: string. When Flint held the renewal. When Flint held the renewal. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionDeliveryHoldPreviousAttributesInput.started_at variant 2

anyOf variant 2.

- Value shape: null. When Flint held the renewal. 

