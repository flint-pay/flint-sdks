[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionUpcomingDeliveryHoldPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Optional | string or null | RFC3339 timestamp. `detected_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `fixable_by` | Optional | string or null | Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. Values: `"buyer"`, `"merchant"`. `fixable_by`: [declared alternatives](../models/SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.md#subscriptionupcomingdeliveryholdpreviousattributesinputfixable_by). |
| `reason` | Optional | string or null | Why the subscription's delivery needs attention. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. `reason`: [declared alternatives](../models/SubscriptionDeliveryHoldPreviousAttributesInput.md#subscriptiondeliveryholdpreviousattributesinputreason). |
| `renewal_at` | Optional | string or null | Time of the next renewal affected by this delivery issue. `renewal_at`: [declared alternatives](../models/SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.md#subscriptionupcomingdeliveryholdpreviousattributesinputrenewal_at). |

### SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.detected_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.fixable_by

### SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.fixable_by variant 1

anyOf variant 1: Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription..

- Value shape: string. Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. Values: `"buyer"`, `"merchant"`.

### SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.fixable_by variant 2

anyOf variant 2.

- Value shape: null. Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. 

### SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.reason

Declared alternatives: [SubscriptionDeliveryHoldPreviousAttributesInput.reason](../models/SubscriptionDeliveryHoldPreviousAttributesInput.md#subscriptiondeliveryholdpreviousattributesinputreason).

### SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.renewal_at

### SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.renewal_at variant 1

anyOf variant 1: Time of the next renewal affected by this delivery issue..

- Value shape: string. Time of the next renewal affected by this delivery issue. Time of the next renewal affected by this delivery issue. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionUpcomingDeliveryHoldPreviousAttributesInput.renewal_at variant 2

anyOf variant 2.

- Value shape: null. Time of the next renewal affected by this delivery issue. 

