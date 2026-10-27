[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTermsRequest

Subscription terms from either a subscription plan or subscription offers, selected by `type`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. minimum: `1`. maximum: `365`. |
| `quantity` | Conditional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `100`. Default: `1`. |
| `subscription_plan_id` | Conditional | string | minLength: `1`. |
| `type` | Required | string |  |
| `line_items` | Conditional | Array of [SubscriptionOfferLineItemRequest](../models/SubscriptionOfferLineItemRequest.md#subscriptionofferlineitemrequest) | minItems: `1`. |

### SubscriptionTermsRequest variant 1: `type` = `"subscription_plan"`

oneOf variant 1: The `subscription_plan` variant of `SubscriptionTermsInput`..

- Required: `subscription_plan_id`.
- Optional: `billing_interval`, `billing_interval_count`, `quantity`.
- Undeclared: `line_items`.
- Constraints for `type`: Values: `"subscription_plan"`.

### SubscriptionTermsRequest variant 2: `type` = `"subscription_offer"`

oneOf variant 2: The `subscription_offer` variant of `SubscriptionTermsInput`..

- Required: `billing_interval`, `billing_interval_count`, `line_items`.
- Undeclared: `quantity`, `subscription_plan_id`.
- Constraints for `type`: Values: `"subscription_offer"`.

