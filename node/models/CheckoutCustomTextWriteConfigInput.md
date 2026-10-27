[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutCustomTextWriteConfigInput

Request input. Response: [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig).

Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Optional | string | minLength: `1`. |
| `shipping_address_label` | Optional | string | minLength: `1`. |

