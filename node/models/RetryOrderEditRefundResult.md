[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RetryOrderEditRefundResult

The order edit after a refund retry, with the refunds that attempt created for its remaining money.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_edit` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | The edit with its current unrefunded money and supported actions. Nested child of an order: immutable, completed item changes with frozen values and refund amounts. Refund completion is tracked on the refunds. |
| `refunds` | Required | Array of [Refund](../models/Refund.md#refund) | Refunds created by this retry attempt. |

