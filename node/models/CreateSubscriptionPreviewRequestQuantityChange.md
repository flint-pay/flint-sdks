[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestQuantityChange

The `quantity_change` variant of `CreateSubscriptionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | Charge the prorated difference now while keeping the period and anchor. Values: `"prorated_now"`. |
| `expected_version` | Optional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `line_items` | Conditional | Array of [SubscriptionQuantityChangeLineItemRequest](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest) | Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: `1`. maxItems: `50`. |
| `mode` | Required | string | The kind of subscription pricing estimate to create. Values: `"quantity_change"`. |
| `quantity` | Conditional | integer | The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items. minimum: `1`. maximum: `1`. |
| `subscription_id` | Required | string | The subscription whose quantities will change. minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

### CreateSubscriptionPreviewRequestQuantityChange variant 1: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

anyOf variant 1.

- Required: `quantity`.
- Optional: `line_items`.

### CreateSubscriptionPreviewRequestQuantityChange variant 2: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

anyOf variant 2.

- Required: `line_items`.
- Optional: `quantity`.

