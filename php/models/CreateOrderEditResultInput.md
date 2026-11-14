[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderEditResultInput

The completed edit, current order, and refunds created so far.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [OrderInput](../models/OrderInput.md#orderinput) | The order after the edit. A customer's purchase and its payment and fulfillment progress. |
| `order_edit` | Required | [OrderEditInput](../models/OrderEditInput.md#ordereditinput) | The committed edit, even when refund processing is pending. Nested child of an order: immutable, completed item changes with frozen values and refund amounts. Refund completion is tracked on the refunds. |
| `refunds` | Required | Array of [RefundInput](../models/RefundInput.md#refundinput) | Refunds created so far. Empty for zero-value edits or while refund processing has not created them yet; refund.created follows when a refund is created. |

