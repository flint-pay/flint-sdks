[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RetryOrderEditRefundResultInput

The order edit after a refund retry, with the refunds that attempt created for its remaining money.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_edit` | Required | [OrderEditInput](../models/OrderEditInput.md#ordereditinput) | The edit with its current unrefunded money and supported actions. Nested child of an order with frozen item changes, balance and refund amounts. A pending edit changes the order only when its balance payment succeeds. Refund completion is tracked on the refunds. |
| `refunds` | Required | Array of [RefundInput](../models/RefundInput.md#refundinput) | Refunds created by this retry attempt. |

