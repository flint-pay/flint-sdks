[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionScheduledPlanChangePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributesInput.md#subscriptionscheduledplanchangepreviousattributesinputbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of target billing_interval units between charges. `billing_interval_count`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributesInput.md#subscriptionscheduledplanchangepreviousattributesinputbilling_interval_count). |
| `effective_at` | Optional | string or null or null | Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. `effective_at`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributesInput.md#subscriptionscheduledplanchangepreviousattributesinputeffective_at). |
| `line_items` | Optional | Array of [SubscriptionLineItemPreviousAttributesInput](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinput) or null | Frozen target lines, including buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributesInput.md#subscriptionscheduledplanchangepreviousattributesinputline_items). |
| `recurring_subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Frozen item subtotal per target billing period, before discounts, shipping, and tax. |
| `requested_by` | Optional | string or null | Who scheduled the plan change. Values: `"buyer"`, `"merchant"`. `requested_by`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributesInput.md#subscriptionscheduledplanchangepreviousattributesinputrequested_by). |
| `scheduled_at` | Optional | string or null | When the plan change was scheduled. `scheduled_at`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributesInput.md#subscriptionscheduledplanchangepreviousattributesinputscheduled_at). |
| `subscription_plan_id` | Optional | string or null | The scheduled target subscription plan. `subscription_plan_id`: [declared alternatives](../models/SubscriptionScheduledPlanChangePreviousAttributesInput.md#subscriptionscheduledplanchangepreviousattributesinputsubscription_plan_id). |

### SubscriptionScheduledPlanChangePreviousAttributesInput.billing_interval

### SubscriptionScheduledPlanChangePreviousAttributesInput.billing_interval variant 1

anyOf variant 1: The frozen target billing interval..

- Value shape: string. The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### SubscriptionScheduledPlanChangePreviousAttributesInput.billing_interval variant 2

anyOf variant 2.

- Value shape: null. The frozen target billing interval. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.billing_interval_count

### SubscriptionScheduledPlanChangePreviousAttributesInput.billing_interval_count variant 1

anyOf variant 1: Number of target billing_interval units between charges..

- Value shape: integer. Number of target billing_interval units between charges. Number of target billing_interval units between charges. Format: `int32`. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of target billing_interval units between charges. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.effective_at

### SubscriptionScheduledPlanChangePreviousAttributesInput.effective_at variant 1

anyOf variant 1: Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date..

- Value shape: (string or null). Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.effective_at variant 2

anyOf variant 2.

- Value shape: null. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.line_items

### SubscriptionScheduledPlanChangePreviousAttributesInput.line_items variant 1

anyOf variant 1: Frozen target lines, including buyer quantity permissions and bounds..

- Value shape: Array of [SubscriptionLineItemPreviousAttributesInput](../models/SubscriptionLineItemPreviousAttributesInput.md#subscriptionlineitempreviousattributesinput). Frozen target lines, including buyer quantity permissions and bounds. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.line_items variant 2

anyOf variant 2.

- Value shape: null. Frozen target lines, including buyer quantity permissions and bounds. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.requested_by

### SubscriptionScheduledPlanChangePreviousAttributesInput.requested_by variant 1

anyOf variant 1: Who scheduled the plan change..

- Value shape: string. Who scheduled the plan change. Values: `"buyer"`, `"merchant"`.

### SubscriptionScheduledPlanChangePreviousAttributesInput.requested_by variant 2

anyOf variant 2.

- Value shape: null. Who scheduled the plan change. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.scheduled_at

### SubscriptionScheduledPlanChangePreviousAttributesInput.scheduled_at variant 1

anyOf variant 1: When the plan change was scheduled..

- Value shape: string. When the plan change was scheduled. When the plan change was scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.scheduled_at variant 2

anyOf variant 2.

- Value shape: null. When the plan change was scheduled. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.subscription_plan_id

### SubscriptionScheduledPlanChangePreviousAttributesInput.subscription_plan_id variant 1

anyOf variant 1: The scheduled target subscription plan..

- Value shape: string. The scheduled target subscription plan. The scheduled target subscription plan. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### SubscriptionScheduledPlanChangePreviousAttributesInput.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. The scheduled target subscription plan. 

