[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionPlanSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinputbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of `billing_interval` units between charges on the plan's default pair. `billing_interval_count`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinputbilling_interval_count). |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionPreviousAttributesInput](../models/SubscriptionIntervalOptionPreviousAttributesInput.md#subscriptionintervaloptionpreviousattributesinput) or null | Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. `billing_interval_options`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinputbilling_interval_options). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency). |
| `description` | Optional | string or null | Description of the plan. Omitted when none is set. `description`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinputdescription). |
| `line_items` | Optional | Array of [SubscriptionPlanLineItemPreviousAttributesInput](../models/SubscriptionPlanLineItemPreviousAttributesInput.md#subscriptionplanlineitempreviousattributesinput) or null | The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. `line_items`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinputline_items). |
| `name` | Optional | string or null | Name of the plan. Buyers see it at checkout and on their subscription. `name`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinputname). |
| `setup_fee_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. |
| `status` | Optional | string or null | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinputstatus). |
| `subscription_plan_id` | Optional | string or null | Unique identifier for this subscription plan, prefixed `plan_`. `subscription_plan_id`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinputsubscription_plan_id). |
| `trial_period_days` | Optional | integer or null | Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. `trial_period_days`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinputtrial_period_days). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.billing_interval

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.billing_interval variant 1

anyOf variant 1: Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none..

- Value shape: string. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.billing_interval_count

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.billing_interval_count variant 1

anyOf variant 1: Number of `billing_interval` units between charges on the plan's default pair..

- Value shape: integer. Number of `billing_interval` units between charges on the plan's default pair. Number of `billing_interval` units between charges on the plan's default pair. Format: `int32`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of `billing_interval` units between charges on the plan's default pair. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.billing_interval_options

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.billing_interval_options variant 1

anyOf variant 1: Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributesInput](../models/SubscriptionIntervalOptionPreviousAttributesInput.md#subscriptionintervaloptionpreviousattributesinput). Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEventInput.md#balancetransactionupdatedinstalledmerchantseventinputdataprevious_attributescurrency).

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.description

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.description variant 1

anyOf variant 1: Description of the plan. Omitted when none is set..

- Value shape: string. Description of the plan. Omitted when none is set. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Description of the plan. Omitted when none is set. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.line_items

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.line_items variant 1

anyOf variant 1: The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line..

- Value shape: (Array of ([SubscriptionPlanLineItemPreviousAttributesInput](../models/SubscriptionPlanLineItemPreviousAttributesInput.md#subscriptionplanlineitempreviousattributesinput) and ([SubscriptionPlanLineItemVariantPreviousAttributesInput](../models/SubscriptionPlanLineItemVariantPreviousAttributesInput.md#subscriptionplanlineitemvariantpreviousattributesinput) or [SubscriptionPlanLineItemBundlePreviousAttributesInput](../models/SubscriptionPlanLineItemBundlePreviousAttributesInput.md#subscriptionplanlineitembundlepreviousattributesinput) or [SubscriptionPlanLineItemCustomPreviousAttributesInput](../models/SubscriptionPlanLineItemCustomPreviousAttributesInput.md#subscriptionplanlineitemcustompreviousattributesinput)))). The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.name

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the plan. Buyers see it at checkout and on their subscription..

- Value shape: string. Name of the plan. Buyers see it at checkout and on their subscription. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the plan. Buyers see it at checkout and on their subscription. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.status

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}..

- Value shape: string. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.subscription_plan_id

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.subscription_plan_id variant 1

anyOf variant 1: Unique identifier for this subscription plan, prefixed `plan_`..

- Value shape: string. Unique identifier for this subscription plan, prefixed `plan_`. Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription plan, prefixed `plan_`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.trial_period_days

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.trial_period_days variant 1

anyOf variant 1: Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial..

- Value shape: integer. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Format: `int32`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.trial_period_days variant 2

anyOf variant 2.

- Value shape: null. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. 

### ExpandedSubscriptionPlanSummaryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

