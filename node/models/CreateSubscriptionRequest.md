[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionRequest

The request body for: Create subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_schedule` | Optional | [SubscriptionBillingScheduleRequest](../models/SubscriptionBillingScheduleRequest.md#subscriptionbillingschedulerequest) | Who sets billing dates: `flint` computes each next billing date; `external` waits for you to set `next_billing_at`. Omit it to use your subscription settings' `default_billing_schedule_owner`. Who owns the billing schedule when creating a subscription: Flint or an external system. |
| `billing_start` | Required | [SubscriptionBillingStartRequest](../models/SubscriptionBillingStartRequest.md#subscriptionbillingstartrequest) | When billing begins. `immediate` starts now; `scheduled` starts at `starts_at` and charges nothing before then; `imported` continues a period the buyer already paid elsewhere, from `period_started_at`, without charging. Each type takes only its own fields. How billing begins. Send exactly one closed tagged-union branch. |
| `customer_id` | Required | string | The customer to bill. The payment method must belong to this customer. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery` | Optional | [SubscriptionDeliveryRequest](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `end_after` | Optional | [SubscriptionEndAfterRequest](../models/SubscriptionEndAfterRequest.md#subscriptionendafterrequest) or null | Automatic end condition. Omit it to inherit the plan default; send null for no automatic end. Imported subscriptions accept the same condition. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_recipient` | Optional | [SubscriptionGiftRecipientRequest](../models/SubscriptionGiftRecipientRequest.md#subscriptiongiftrecipientrequest) or null | Who receives the gift. customer_id stays the purchaser. Omit it or send null for a subscription that isn't a gift. Imported subscriptions accept it too. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `payment_method_id` | Optional | string | Saved payment method for renewals. Omit it to use the customer's default. A free trial without an upfront charge or an imported paid period may start without either; other starts require a card. An explicit method must belong to the customer, be active, and allow charges without the buyer present. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `promotions` | Optional | Array of [SubscriptionPromotionRequest](../models/SubscriptionPromotionRequest.md#subscriptionpromotionrequest) | Promotions to attach with their current terms frozen. Duplicate promotions are invalid. An offer's own promotion attaches automatically; listing it again returns already_applied. maxItems: `5`. uniqueItems: `true`. |
| `prorate_first_period` | Optional | boolean | Prorate the first paid period to the next billing anchor. Requires `billing_anchor_day`, a monthly or yearly interval, `billing_schedule.owner: flint`, and no shipping. Imported billing starts are not allowed. Trials and scheduled starts prorate from their first paid start; setup fees remain full. Default: `false`. |
| `service_location` | Optional | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Where a subscription's service is delivered: a saved customer address by ID, or a new address. `service_location`: [declared alternatives](../models/CreateSubscriptionRequest.md#createsubscriptionrequestservice_location). |
| `tax` | Optional | [SubscriptionTaxRequest](../models/SubscriptionTaxRequest.md#subscriptiontaxrequest) | The tax the subscription's renewal, setup fee and plan change orders use. Omit it to follow `tax.default_enabled` and `tax.default_calculation` from your settings. Replaced as a whole: send every field you want to keep. |
| `terms` | Required | [SubscriptionTermsRequest](../models/SubscriptionTermsRequest.md#subscriptiontermsrequest) | Subscription terms from either a subscription plan or subscription offers, selected by `type`. |

### CreateSubscriptionRequest.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

### CreateSubscriptionRequest.service_location

Where a subscription's service is delivered: a saved customer address by ID, or a new address.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | minLength: `1`. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `type` | Required | string |  |
| `address` | Conditional | [AddressRequest](../models/AddressRequest.md#addressrequest) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

### CreateSubscriptionRequest.service_location variant 1: `type` = `"customer_address"`

oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionServiceLocationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Values: `"customer_address"`.

### CreateSubscriptionRequest.service_location variant 2: `type` = `"address"`

oneOf with type: "address": The `address` variant of `SubscriptionServiceLocationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Values: `"address"`.

