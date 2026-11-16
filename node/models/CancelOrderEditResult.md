[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelOrderEditResult

The canceled edit and current order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | The order after releasing the edit's holds. A customer's purchase and its payment and fulfillment progress. |
| `order_edit` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | The edit after cancellation. Nested child of an order with frozen item changes, balance and refund amounts. A pending edit changes the order only when its balance payment succeeds. Refund completion is tracked on the refunds. |

