[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionRequestInput

The request body for: Create subscription.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_schedule` | Optional | [SubscriptionBillingScheduleRequestInput](../models/SubscriptionBillingScheduleRequestInput.md#subscriptionbillingschedulerequestinput) | Who owns the billing schedule when creating a subscription: Flint or an external system. |
| `billing_start` | Required | [SubscriptionBillingStartRequestInput](../models/SubscriptionBillingStartRequestInput.md#subscriptionbillingstartrequestinput) | How billing begins. Send exactly one closed tagged-union branch. |
| `customer_id` | Required | string | minLength: `1`. |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequestInput.md#subscriptiondeliveryrequestinput) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `service_location` | Optional | [SubscriptionServiceLocationRequestInput](../models/SubscriptionServiceLocationRequestInput.md#subscriptionservicelocationrequestinput) | Where a subscription's service is delivered: a saved customer address by ID, or a new address. |
| `terms` | Required | [SubscriptionTermsRequestInput](../models/SubscriptionTermsRequestInput.md#subscriptiontermsrequestinput) | Subscription terms from either a subscription plan or subscription offers, selected by `type`. |

