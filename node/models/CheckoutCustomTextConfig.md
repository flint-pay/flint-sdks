[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutCustomTextConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Optional | string |  |
| `shipping_address_label` | Optional | string |  |

### CheckoutCustomTextConfig variant 1

anyOf variant 1: Declared schema CheckoutCustomTextConfig. Custom text shown in checkout: an order summary message and a shipping address label..

No additional constraints.

### CheckoutCustomTextConfig variant 2

anyOf variant 2: Declared schema CheckoutCustomTextWriteConfig. Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label..

- Constraints for `order_summary_message`: minLength: `1`.
- Constraints for `shipping_address_label`: minLength: `1`.

### CheckoutCustomTextConfig variant 3

anyOf variant 3: Declared schema PaymentLinkCustomTextConfig. Custom text shown on a payment link's checkout, such as the order summary message and shipping address label..

- Constraints for `order_summary_message`: minLength: `1`. maxLength: `2048`.
- Constraints for `shipping_address_label`: minLength: `1`. maxLength: `255`.

