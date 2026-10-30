[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSavedPaymentDetailsSettingsRequestInput

Request input. Response: [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig).

Saved payment details settings for hosted checkout. On update, an omitted field keeps its value.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean | Whether hosted checkout shows buyers an unchecked option to save the card they type. A card is saved only when the buyer checks it and the payment succeeds, with usage on_session: Flint charges it only in checkouts the buyer completes, never for subscriptions, automatic invoices, or other charges without the buyer. Checkout never shows the option when customer accounts are merchant hosted, or for invoice, subscription, and return checkouts. |

