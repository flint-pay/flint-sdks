[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTermsRequestInput

Subscription terms from either a subscription plan or subscription offers, selected by `type`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. minimum: `1`. maximum: `365`. |
| `line_items` | Conditional | Varies by condition |  |
| `subscription_plan_id` | Conditional | string | ID of the plan to subscribe to. The plan must be active. minLength: `1`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `type` | Required | string |  |

### SubscriptionTermsRequestInput variant 1: `type` = `"subscription_plan"`

oneOf with type: "subscription_plan": The `subscription_plan` variant of `SubscriptionTermsInput`..

- Required: `subscription_plan_id`.
- Optional: `billing_interval`, `billing_interval_count`, `line_items`.
- Constraints for `billing_interval`: Unit of the billing period to subscribe on. Send it with `billing_interval_count`, and only a pair the plan offers in `billing_interval_options`; omit both to use the plan's default pair. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.
- Constraints for `billing_interval_count`: Number of `billing_interval` units between charges. Send it with `billing_interval`.
- Constraints for `line_items`: Array of [SubscriptionPlanChangeLineItemRequestInput](../models/SubscriptionPlanChangeLineItemRequestInput.md#subscriptionplanchangelineitemrequestinput). Optional quantities for distinct lines in this plan. Omitted lines keep their plan defaults. Merchants may set any line to 1 through 9,999, regardless of its buyer quantity policy. maxItems: `50`.
- Constraints for `type`: Start the subscription from a subscription plan. Values: `"subscription_plan"`.

### SubscriptionTermsRequestInput variant 2: `type` = `"subscription_offer"`

oneOf with type: "subscription_offer": The `subscription_offer` variant of `SubscriptionTermsInput`..

- Required: `billing_interval`, `billing_interval_count`, `line_items`.
- Undeclared: `subscription_plan_id`.
- Constraints for `billing_interval`: Unit of the billing period to subscribe on. It must be a pair that every line's offer lists in `billing_interval_options`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.
- Constraints for `billing_interval_count`: Number of `billing_interval` units between charges. It must be a pair that every line's offer lists in `billing_interval_options`.
- Constraints for `line_items`: Array of [SubscriptionOfferLineItemRequestInput](../models/SubscriptionOfferLineItemRequestInput.md#subscriptionofferlineitemrequestinput). The catalog variants to subscribe to, each with the offer that covers it. At least one, with no repeated variant. minItems: `1`.
- Constraints for `type`: Start the subscription from subscription offers, one per catalog variant. Values: `"subscription_offer"`.

