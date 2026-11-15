[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddLineItemsRequest

The request body for: Add line items.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_order_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [CreateOrderLineItemRequest](../models/CreateOrderLineItemRequest.md#createorderlineitemrequest) | Line items to add to the order. minItems: `1`. |

