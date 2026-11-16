[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelOrderEditResultInput

The canceled edit and current order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [OrderInput](../models/OrderInput.md#orderinput) | The order after releasing the edit's holds. A customer's purchase and its payment and fulfillment progress. |
| `order_edit` | Required | [OrderEditInput](../models/OrderEditInput.md#ordereditinput) | The edit after cancellation. Nested child of an order with frozen item changes, balance and refund amounts. A pending edit changes the order only when its balance payment succeeds. Refund completion is tracked on the refunds. |

