[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCustomTextConfigInput

Request input. Response: [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig).

Custom text shown on a payment link's checkout, such as the order summary message and shipping address label.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Optional | string | Message shown near the order summary in checkout. minLength: `1`. maxLength: `2048`. |
| `shipping_address_label` | Optional | string | Label shown for the shipping address in checkout. minLength: `1`. maxLength: `255`. |

