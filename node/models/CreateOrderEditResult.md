[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderEditResult

The completed edit, current order, and refunds created so far.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | The order after the edit. A customer's purchase and its payment and fulfillment progress. |
| `order_edit` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | The committed edit, even when refund processing is pending. Nested child of an order: an immutable, completed removal with frozen refund amounts. Refund completion is tracked on the refunds. |
| `refunds` | Required | Array of [Refund](../models/Refund.md#refund) | Refunds created so far. Empty for zero-value edits or while refund processing has not created them yet; refund.created follows when a refund is created. |

