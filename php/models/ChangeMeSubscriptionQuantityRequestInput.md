[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ChangeMeSubscriptionQuantityRequestInput

The request body for: Change subscription quantity.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | period_end schedules the new quantities for the next billing boundary; prorated_now charges the difference now for an eligible digital line. Values: `"period_end"`, `"prorated_now"`. |
| `expected_version` | Optional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `line_items` | Required | Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequestInput.md#subscriptionquantitychangelineitemrequestinput) | The frozen adjustable subscription line and its quantity, within min_quantity and max_quantity. Omitted lines keep their quantities. minItems: `1`. maxItems: `50`. |

