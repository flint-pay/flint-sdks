[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPlanRequest

The request body for: Create subscription plan.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs, including the plan's default pair. Line prices are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. `billing_interval_options[]`: [field definitions](../models/CreateSubscriptionOfferRequest.md#createsubscriptionofferrequestbilling_interval_options). |
| `contract_term_months` | Optional | integer | A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout and records it on each new subscription (contract_start_at, contract_end_at). Flint does not stop the buyer from canceling earlier. Format: `int32`. minimum: `1`. maximum: `120`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_interval` | Optional | string or null | Delivery cadence, set together with delivery_interval_count. Null when no separate delivery cadence is set; one delivery is made per billing period. Each billing option must be a whole multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per period. Existing subscriptions keep their frozen cadence. Omit both fields on PATCH to keep the cadence; send both as null to clear it. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Optional | integer or null | Positive number of delivery intervals between deliveries. Set or clear together with delivery_interval. Null when no separate delivery cadence is set; one delivery is made per billing period. Format: `int32`. minimum: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `early_termination_fee_money`: [field definitions](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestearly_termination_fee_money). |
| `end_after` | Optional | [SubscriptionEndAfterCycles](../models/SubscriptionEndAfterCycles.md#subscriptionendaftercycles) or null | Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set. `end_after`: [declared alternatives](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestend_after). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gifts_enabled` | Optional | boolean | Whether checkout buyers can name a gift recipient. Checkout sessions freeze it when they are created. Defaults to false. You can set gift_recipient on a subscription through the API either way. |
| `images` | Optional | Array of [ImageRequest](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Where tracked demand from this plan is routed: a fixed Location, an allocation policy, or an immutable policy revision. Required when any line item tracks inventory. New subscriptions and payment links for the plan copy it, unless the payment link sends its own. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `line_items` | Required | Array of [SubscriptionPlanLineItemRequest](../models/SubscriptionPlanLineItemRequest.md#subscriptionplanlineitemrequest) | minItems: `1`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `name` | Required | string | minLength: `1`. |
| `plan_change_options` | Optional | Array of [SubscriptionPlanChangeOption](../models/SubscriptionPlanChangeOption.md#subscriptionplanchangeoption) | Plans subscribers may switch to, in display order, with the billing timing for each target. Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces them and requires expected_version. Send [] to clear. Null is invalid. maxItems: `25`. `plan_change_options[]`: [field definitions](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestplan_change_options). |
| `quantity_options` | Optional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `setup_fee_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `status` | Optional | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `subscription_delivery_method_ids` | Optional | Array of string | Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `trial_period_days` | Optional | integer | Days of free trial before the first charge, from 0 to 365; 0 means no trial. Not allowed on plans with lines that ship. Format: `int32`. minimum: `0`. maximum: `365`. |

### CreateSubscriptionPlanRequest.billing_interval_options[]

Field definitions: [CreateSubscriptionOfferRequest.billing_interval_options[]](../models/CreateSubscriptionOfferRequest.md#createsubscriptionofferrequestbilling_interval_options).

### CreateSubscriptionPlanRequest.early_termination_fee_money

A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreateSubscriptionPlanRequest.end_after

Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Conditional | integer | Total charged billing cycles, including imported completed cycles. Format: `int32`. minimum: `1`. maximum: `1200`. |
| `type` | Conditional | string | How this automatic end is measured. Values: `"cycles"`. |

### CreateSubscriptionPlanRequest.end_after variant 1: `type` = `"cycles"`

anyOf SubscriptionEndAfterCyclesRequest: A subscription automatic end measured by the total number of charged billing cycles..

- Required: `cycle_count`, `type`.

### CreateSubscriptionPlanRequest.end_after variant 2

anyOf variant 2.

- Undeclared: `cycle_count`, `type`.
- Value shape: null. Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set. 

### CreateSubscriptionPlanRequest.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

### CreateSubscriptionPlanRequest.plan_change_options[]

A target plan subscribers may switch to and the billing timing for that change.

Field definitions: [shared fields](SubscriptionPlanChangeOption.md#subscriptionplanchangeoption).

### CreateSubscriptionPlanRequest.setup_fee_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

