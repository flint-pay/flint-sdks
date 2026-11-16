[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionPlanSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of `billing_interval` units between charges on the plan's default pair. `billing_interval_count`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_count). |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. `billing_interval_options`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_options). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency). |
| `description` | Optional | string or null | Description of the plan. Omitted when none is set. `description`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesdescription). |
| `line_items` | Optional | Array of [SubscriptionPlanLineItemPreviousAttributes](../models/SubscriptionPlanLineItemPreviousAttributes.md#subscriptionplanlineitempreviousattributes) or null | The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. `line_items`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items). |
| `name` | Optional | string or null | Name of the plan. Buyers see it at checkout and on their subscription. `name`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesname). |
| `setup_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. `setup_fee_money`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributessetup_fee_money). |
| `status` | Optional | string or null | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesstatus). |
| `subscription_plan_id` | Optional | string or null | Unique identifier for this subscription plan, prefixed `plan_`. `subscription_plan_id`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributessubscription_plan_id). |
| `trial_period_days` | Optional | integer or null | Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. `trial_period_days`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributestrial_period_days). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval variant 1

anyOf variant 1: Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none..

- Value shape: string. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_count

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_count variant 1

anyOf variant 1: Number of `billing_interval` units between charges on the plan's default pair..

- Value shape: integer. Number of `billing_interval` units between charges on the plan's default pair. Number of `billing_interval` units between charges on the plan's default pair. Format: `int32`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of `billing_interval` units between charges on the plan's default pair. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_options

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_options variant 1

anyOf variant 1: Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes). Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.description

### ExpandedSubscriptionPlanSummaryPreviousAttributes.description variant 1

anyOf variant 1: Description of the plan. Omitted when none is set..

- Value shape: string. Description of the plan. Omitted when none is set. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the plan. Omitted when none is set. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 1

anyOf variant 1: The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line..

- Value shape: (Array of ([SubscriptionPlanLineItemPreviousAttributes](../models/SubscriptionPlanLineItemPreviousAttributes.md#subscriptionplanlineitempreviousattributes) and ([SubscriptionPlanLineItemVariantPreviousAttributes](../models/SubscriptionPlanLineItemVariantPreviousAttributes.md#subscriptionplanlineitemvariantpreviousattributes) or [SubscriptionPlanLineItemBundlePreviousAttributes](../models/SubscriptionPlanLineItemBundlePreviousAttributes.md#subscriptionplanlineitembundlepreviousattributes) or [SubscriptionPlanLineItemCustomPreviousAttributes](../models/SubscriptionPlanLineItemCustomPreviousAttributes.md#subscriptionplanlineitemcustompreviousattributes)))). The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.name

### ExpandedSubscriptionPlanSummaryPreviousAttributes.name variant 1

anyOf variant 1: Name of the plan. Buyers see it at checkout and on their subscription..

- Value shape: string. Name of the plan. Buyers see it at checkout and on their subscription. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the plan. Buyers see it at checkout and on their subscription. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.setup_fee_money

One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.setup_fee_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.setup_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.setup_fee_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.setup_fee_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### ExpandedSubscriptionPlanSummaryPreviousAttributes.status

### ExpandedSubscriptionPlanSummaryPreviousAttributes.status variant 1

anyOf variant 1: Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}..

- Value shape: string. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`.

### ExpandedSubscriptionPlanSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.subscription_plan_id

### ExpandedSubscriptionPlanSummaryPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: Unique identifier for this subscription plan, prefixed `plan_`..

- Value shape: string. Unique identifier for this subscription plan, prefixed `plan_`. Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription plan, prefixed `plan_`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.trial_period_days

### ExpandedSubscriptionPlanSummaryPreviousAttributes.trial_period_days variant 1

anyOf variant 1: Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial..

- Value shape: integer. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Format: `int32`. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.trial_period_days variant 2

anyOf variant 2.

- Value shape: null. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. 

### ExpandedSubscriptionPlanSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

