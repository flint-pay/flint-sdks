[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentLineItemRequestInput

Request input. Response: [OrderEditRemovalRequest](../models/OrderEditRemovalRequest.md#ordereditremovalrequest).

An order line item and quantity to include when creating a fulfillment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | Order line whose quantity is allocated. minLength: `1`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

