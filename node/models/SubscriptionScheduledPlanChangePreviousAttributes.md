[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionScheduledPlanChangePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of target billing_interval units between charges. `billing_interval_count`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesbilling_interval_count). |
| `effective_at` | Optional | string or null | Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. `effective_at`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributeseffective_at). |
| `line_items` | Optional | Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes) or null | Frozen target lines, including buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesline_items). |
| `recurring_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Frozen item subtotal per target billing period, before discounts, shipping, and tax. `recurring_subtotal_money`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesrecurring_subtotal_money). |
| `requested_by` | Optional | string or null | Who scheduled the plan change. Values: `"buyer"`, `"merchant"`. `requested_by`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesrequested_by). |
| `scheduled_at` | Optional | string or null | When the plan change was scheduled. `scheduled_at`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributesscheduled_at). |
| `subscription_plan_id` | Optional | string or null | The scheduled target subscription plan. `subscription_plan_id`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributes.md#subscriptionscheduledplanchangepreviousattributessubscription_plan_id). |

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval variant 1

anyOf variant 1: The frozen target billing interval..

- Value shape: string. The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval variant 2

anyOf variant 2.

- Value shape: null. The frozen target billing interval. 

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval_count

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval_count variant 1

anyOf variant 1: Number of target billing_interval units between charges..

- Value shape: integer. Number of target billing_interval units between charges. Number of target billing_interval units between charges. Format: `int32`. 

### SubscriptionScheduledPlanChangePreviousAttributes.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of target billing_interval units between charges. 

### SubscriptionScheduledPlanChangePreviousAttributes.effective_at

### SubscriptionScheduledPlanChangePreviousAttributes.effective_at variant 1

anyOf variant 1: Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date..

- Value shape: string. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionScheduledPlanChangePreviousAttributes.effective_at variant 2

anyOf variant 2.

- Value shape: null. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 1

anyOf variant 1: Frozen target lines, including buyer quantity permissions and bounds..

- Value shape: Array of [SubscriptionLineItemPreviousAttributes](../models/SubscriptionLineItemPreviousAttributes.md#subscriptionlineitempreviousattributes). Frozen target lines, including buyer quantity permissions and bounds. 

### SubscriptionScheduledPlanChangePreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Frozen target lines, including buyer quantity permissions and bounds. 

### SubscriptionScheduledPlanChangePreviousAttributes.recurring_subtotal_money

Frozen item subtotal per target billing period, before discounts, shipping, and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### SubscriptionScheduledPlanChangePreviousAttributes.recurring_subtotal_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### SubscriptionScheduledPlanChangePreviousAttributes.recurring_subtotal_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Frozen item subtotal per target billing period, before discounts, shipping, and tax. 

### SubscriptionScheduledPlanChangePreviousAttributes.recurring_subtotal_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### SubscriptionScheduledPlanChangePreviousAttributes.recurring_subtotal_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### SubscriptionScheduledPlanChangePreviousAttributes.requested_by

### SubscriptionScheduledPlanChangePreviousAttributes.requested_by variant 1

anyOf variant 1: Who scheduled the plan change..

- Value shape: string. Who scheduled the plan change. Values: `"buyer"`, `"merchant"`.

### SubscriptionScheduledPlanChangePreviousAttributes.requested_by variant 2

anyOf variant 2.

- Value shape: null. Who scheduled the plan change. 

### SubscriptionScheduledPlanChangePreviousAttributes.scheduled_at

### SubscriptionScheduledPlanChangePreviousAttributes.scheduled_at variant 1

anyOf variant 1: When the plan change was scheduled..

- Value shape: string. When the plan change was scheduled. When the plan change was scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionScheduledPlanChangePreviousAttributes.scheduled_at variant 2

anyOf variant 2.

- Value shape: null. When the plan change was scheduled. 

### SubscriptionScheduledPlanChangePreviousAttributes.subscription_plan_id

### SubscriptionScheduledPlanChangePreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: The scheduled target subscription plan..

- Value shape: string. The scheduled target subscription plan. The scheduled target subscription plan. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### SubscriptionScheduledPlanChangePreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. The scheduled target subscription plan. 

