[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutCustomTextWriteConfigInput

Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Optional | string | minLength: `1`. |
| `shipping_address_label` | Optional | string | minLength: `1`. |

