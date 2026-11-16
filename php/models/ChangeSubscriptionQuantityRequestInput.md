[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ChangeSubscriptionQuantityRequestInput

The request body for: Change subscription quantity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | prorated_now charges the prorated difference now and keeps the current period and anchor; next_renewal changes quantities now without charging; period_end schedules them for the next billing boundary. Values: `"prorated_now"`, `"next_renewal"`, `"period_end"`. |
| `expected_version` | Optional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `line_items` | Required | Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequestInput.md#subscriptionquantitychangelineitemrequestinput) | Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. line_items is required. minItems: `1`. maxItems: `50`. |

