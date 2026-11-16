[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderEditResult

The pending or completed edit, current order, and refunds created so far.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | The order after the edit. A customer's purchase and its payment and fulfillment progress. |
| `order_edit` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | The pending or completed edit, even when payment or refund processing is pending. Nested child of an order with frozen item changes, balance and refund amounts. A pending edit changes the order only when its balance payment succeeds. Refund completion is tracked on the refunds. |
| `refunds` | Required | Array of [Refund](../models/Refund.md#refund) | Refunds created so far. Empty for zero-value edits or while refund processing has not created them yet; refund.created follows when a refund is created. |

