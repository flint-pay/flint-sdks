[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreateReturnRequestInput

The request body for: Create a Return for the current buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnLineItemRequestInput](../models/ReturnLineItemRequestInput.md#returnlineitemrequestinput) | minItems: `1`. maxItems: `100`. |
| `order_id` | Required | string | minLength: `1`. |

