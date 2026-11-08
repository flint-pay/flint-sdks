[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionRequestInput

The request body for: Create subscription.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_schedule` | Optional | [SubscriptionBillingScheduleRequestInput](../models/SubscriptionBillingScheduleRequestInput.md#subscriptionbillingschedulerequestinput) | Who sets billing dates: `flint` computes each next billing date; `external` waits for you to set `next_billing_at`. Omit it to use your subscription settings' `default_billing_schedule_owner`. Who owns the billing schedule when creating a subscription: Flint or an external system. |
| `billing_start` | Required | [SubscriptionBillingStartRequestInput](../models/SubscriptionBillingStartRequestInput.md#subscriptionbillingstartrequestinput) | When billing begins. `immediate` starts now; `scheduled` starts at `starts_at` and charges nothing before then; `imported` continues a period the buyer already paid elsewhere, from `period_started_at`, without charging. Each type takes only its own fields. How billing begins. Send exactly one closed tagged-union branch. |
| `customer_id` | Required | string | The customer to bill. The payment method must belong to this customer. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequestInput.md#subscriptiondeliveryrequestinput) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `end_after` | Optional | [SubscriptionEndAfterRequestInput](../models/SubscriptionEndAfterRequestInput.md#subscriptionendafterrequestinput) or null | Automatic end condition. Omit it to inherit the plan default; send null for no automatic end. Imported subscriptions accept the same condition. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `payment_method_id` | Optional | string | Saved payment method for renewals. Omit it to use the customer's default. A free trial without an upfront charge or an imported paid period may start without either; other starts require a card. An explicit method must belong to the customer, be active, and allow charges without the buyer present. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `promotions` | Optional | Array of [SubscriptionPromotionRequestInput](../models/SubscriptionPromotionRequestInput.md#subscriptionpromotionrequestinput) | Promotions to attach with their current terms frozen. Duplicate promotions are invalid. An offer's own promotion attaches automatically; listing it again returns already_applied. maxItems: `5`. uniqueItems: `true`. |
| `prorate_first_period` | Optional | boolean | Prorate the first paid period to the next billing anchor. Requires `billing_anchor_day`, a monthly or yearly interval, `billing_schedule.owner: flint`, and no shipping. Imported billing starts are not allowed. Trials and scheduled starts prorate from their first paid start; setup fees remain full. Default: `false`. |
| `service_location` | Optional | [SubscriptionServiceLocationRequestInput](../models/SubscriptionServiceLocationRequestInput.md#subscriptionservicelocationrequestinput) | Where a subscription's service is delivered: a saved customer address by ID, or a new address. |
| `terms` | Required | [SubscriptionTermsRequestInput](../models/SubscriptionTermsRequestInput.md#subscriptiontermsrequestinput) | Subscription terms from either a subscription plan or subscription offers, selected by `type`. |

