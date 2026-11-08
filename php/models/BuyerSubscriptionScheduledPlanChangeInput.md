[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionScheduledPlanChangeInput

Frozen target terms that apply at the next charged renewal.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | The frozen target billing interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of target billing_interval units between charges. Format: `int32`. |
| `effective_at` | Required | string or null | Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of [BuyerSubscriptionLineItemInput](../models/BuyerSubscriptionLineItemInput.md#buyersubscriptionlineiteminput) | Frozen target lines, including buyer quantity permissions and bounds. |
| `quantity` | Required | integer | The frozen target subscription quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Frozen item subtotal per target billing period, before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `requested_by` | Required | string | Who scheduled the plan change. Values: `"buyer"`, `"merchant"`. |
| `scheduled_at` | Required | string | When the plan change was scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `subscription_plan` | Required | [BuyerExpandedSubscriptionPlanSummaryInput](../models/BuyerExpandedSubscriptionPlanSummaryInput.md#buyerexpandedsubscriptionplansummaryinput) | The scheduled target plan summary, including archived plans. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items. |
| `subscription_plan_id` | Required | string | The scheduled target subscription plan. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |

