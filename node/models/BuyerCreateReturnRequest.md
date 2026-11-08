[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreateReturnRequest

The request body for: Create a Return for the current buyer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnLineItemRequest](../models/ReturnLineItemRequest.md#returnlineitemrequest) | The lines to check or return, each naming an order line item. minItems: `1`. maxItems: `100`. |
| `order_id` | Required | string | ID of the Order to return items from. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |

