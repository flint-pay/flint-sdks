[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DiscountPreviewRequestInput

The request body for: Create discount preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount` | Optional | [CreateOrderDiscountInput](../models/CreateOrderDiscountInput.md#createorderdiscountinput) | A discount to apply when creating an order: either a manual discount or a reference to a promotion. |
| `order_id` | Required | string | The order to evaluate. Checkout session credentials can use only their own order. minLength: `1`. |

