[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreateReturnRequest

The request body for: Create a Return for the current buyer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnLineItemRequest](../models/ReturnLineItemRequest.md#returnlineitemrequest) | minItems: `1`. maxItems: `100`. |
| `order_id` | Required | string | minLength: `1`. |

