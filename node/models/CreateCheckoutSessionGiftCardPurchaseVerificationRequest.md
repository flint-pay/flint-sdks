[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionGiftCardPurchaseVerificationRequest

The buyer confirms their email before funding a gift card purchase. Flint emails a code without saving a payment method.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Optional | string | Default: `"email"`. Values: `"email"`. |
| `email` | Required | string | Email the buyer typed, with no surrounding spaces. Customers are matched by email without regard to case. Format: `email`. minLength: `1`. maxLength: `255`. |
| `purpose` | Required | string | Values: `"gift_card_purchase"`. |

