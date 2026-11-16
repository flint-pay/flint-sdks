[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RetryOrderEditRefundResult

The order edit after a refund retry, with the refunds that attempt created for its remaining money.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_edit` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | The edit with its current unrefunded money and supported actions. Nested child of an order with frozen item changes, balance and refund amounts. A pending edit changes the order only when its balance payment succeeds. Refund completion is tracked on the refunds. |
| `refunds` | Required | Array of [Refund](../models/Refund.md#refund) | Refunds created by this retry attempt. |

