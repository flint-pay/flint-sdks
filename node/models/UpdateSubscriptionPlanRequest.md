[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionPlanRequest

The request body for: Update subscription plan. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Format: `int32`. |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Omission leaves the choices unchanged. Send [] to reset to the plan's default billing interval and count. Null is invalid. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. `billing_interval_options[]`: [field definitions](../models/CreateSubscriptionOfferRequest.md#createsubscriptionofferrequestbilling_interval_options). |
| `contract_term_months` | Optional | integer | A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout and records it on each new subscription (contract_start_at, contract_end_at). Flint does not stop the buyer from canceling earlier. Format: `int32`. minimum: `1`. maximum: `120`. |
| `delivery_interval` | Optional | string or null | Delivery cadence, set together with delivery_interval_count. Null when no separate delivery cadence is set; one delivery is made per billing period. Each billing option must be a whole multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per period. Existing subscriptions keep their frozen cadence. Omit both fields on PATCH to keep the cadence; send both as null to clear it. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Optional | integer or null | Positive number of delivery intervals between deliveries. Set or clear together with delivery_interval. Null when no separate delivery cadence is set; one delivery is made per billing period. Format: `int32`. minimum: `1`. |
| `description` | Optional | string or null | Omission leaves this field unchanged. Null clears it. minLength: `1`. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it at checkout and records it on each new subscription, but never charges it. To collect it, charge the buyer yourself, for example with an order on their saved payment method. Requires contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `early_termination_fee_money`: [field definitions](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestearly_termination_fee_money). |
| `end_after` | Optional | [SubscriptionEndAfterCycles](../models/SubscriptionEndAfterCycles.md#subscriptionendaftercycles) or null | Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200. Send null for no automatic end. Existing subscriptions keep their recorded condition. Null when no default automatic end is set. `end_after`: [declared alternatives](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestend_after). |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing an owned collection. Required when any of these fields is present: images, line_items, plan_change_options. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omission leaves this field unchanged. Null clears it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gifts_enabled` | Optional | boolean | Whether checkout buyers can name a gift recipient. Checkout sessions that are already open keep the setting they were created with. |
| `images` | Optional | Array of [ImageRequest](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Replaces the plan's routing source. Subscriptions and payment links that already exist keep the source they copied. It can't be cleared. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `line_items` | Optional | Array of [UpdateSubscriptionPlanLineItemRequest](../models/UpdateSubscriptionPlanLineItemRequest.md#updatesubscriptionplanlineitemrequest) | Replaces all owned plan line items atomically. Requires expected_version. Omission leaves items unchanged; an empty array or null is invalid. Include subscription_plan_line_item_id to retain an item; omit it for a new server-generated ID. Omitted members are removed. Existing subscriptions keep their snapshots. Retained catalog items with the same source keep their catalog snapshot; omitted modifiers keep their recorded choices. minItems: `1`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `name` | Optional | string | minLength: `1`. |
| `plan_change_options` | Optional | Array of [SubscriptionPlanChangeOption](../models/SubscriptionPlanChangeOption.md#subscriptionplanchangeoption) | Plans subscribers may switch to, in display order, with the billing timing for each target. Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces them and requires expected_version. Send [] to clear. Null is invalid. maxItems: `25`. `plan_change_options[]`: [field definitions](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestplan_change_options). |
| `quantity_options` | Optional | Array of integer | Omission leaves the choices unchanged. Send [] to reset to [1]. Null is invalid. maxItems: `1`. uniqueItems: `true`. Items: minimum: `1`. maximum: `1`. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `setup_fee_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `status` | Optional | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`. |
| `subscription_delivery_method_ids` | Optional | Array of string | Omission leaves the delivery methods unchanged. Send [] to remove all delivery methods. Null is invalid. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `trial_period_days` | Optional | integer | Days of free trial before the first charge, from 0 to 365; 0 means no trial. Send 0 to remove the trial. Not allowed on plans with lines that ship. Format: `int32`. minimum: `0`. maximum: `365`. |

### UpdateSubscriptionPlanRequest.billing_interval_options[]

Field definitions: [CreateSubscriptionOfferRequest.billing_interval_options[]](../models/CreateSubscriptionOfferRequest.md#createsubscriptionofferrequestbilling_interval_options).

### UpdateSubscriptionPlanRequest.early_termination_fee_money

Field definitions: [CreateSubscriptionPlanRequest.early_termination_fee_money](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestearly_termination_fee_money).

### UpdateSubscriptionPlanRequest.end_after

Declared alternatives: [CreateSubscriptionPlanRequest.end_after](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestend_after).

### UpdateSubscriptionPlanRequest.plan_change_options[]

Field definitions: [CreateSubscriptionPlanRequest.plan_change_options[]](../models/CreateSubscriptionPlanRequest.md#createsubscriptionplanrequestplan_change_options).

### UpdateSubscriptionPlanRequest.setup_fee_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

