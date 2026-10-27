[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DiscountPreviewRequest

The request body for: Create discount preview.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount` | Optional | [CreateOrderDiscount](../models/CreateOrderDiscount.md#createorderdiscount) | A discount to apply when creating an order: either a manual discount or a reference to a promotion. |
| `order_id` | Required | string | The order to evaluate. Checkout session credentials can use only their own order. minLength: `1`. |

