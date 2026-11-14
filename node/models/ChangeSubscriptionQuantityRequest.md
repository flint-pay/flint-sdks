[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ChangeSubscriptionQuantityRequest

The request body for: Change subscription quantity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | prorated_now charges the prorated difference now and keeps the current period and anchor; next_renewal changes quantities now without charging; period_end schedules them for the next billing boundary. Values: `"prorated_now"`, `"next_renewal"`, `"period_end"`. |
| `expected_version` | Optional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `line_items` | Conditional | Array of [SubscriptionQuantityChangeLineItemRequest](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest) | Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: `1`. maxItems: `50`. |
| `quantity` | Conditional | integer | The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items. minimum: `1`. maximum: `1`. |

### ChangeSubscriptionQuantityRequest variant 1

anyOf variant 1.

- Required: `quantity`.
- Optional: `line_items`.

### ChangeSubscriptionQuantityRequest variant 2

anyOf variant 2.

- Required: `line_items`.
- Optional: `quantity`.

