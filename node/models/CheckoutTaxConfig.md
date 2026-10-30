[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean |  |

### CheckoutTaxConfig variant 1

anyOf variant 1: Declared schema CheckoutSavedPaymentDetailsSettings. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value..

- Constraints for `enabled`: Whether hosted checkout shows buyers an unchecked option to save the card they type. A card is saved only when the buyer checks it and the payment succeeds, with usage on_session: Flint charges it only in checkouts the buyer completes, never for subscriptions, automatic invoices, or other charges without the buyer. Checkout never shows the option when customer accounts are merchant hosted, or for invoice, subscription, and return checkouts.

### CheckoutTaxConfig variant 2

anyOf variant 2: Declared schema CheckoutSavedPaymentDetailsSettingsRequest. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value..

- Constraints for `enabled`: Whether hosted checkout shows buyers an unchecked option to save the card they type. A card is saved only when the buyer checks it and the payment succeeds, with usage on_session: Flint charges it only in checkouts the buyer completes, never for subscriptions, automatic invoices, or other charges without the buyer. Checkout never shows the option when customer accounts are merchant hosted, or for invoice, subscription, and return checkouts.

### CheckoutTaxConfig variant 3

anyOf variant 3: Declared schema CheckoutTaxConfig. Whether tax is collected for a checkout session or payment link..

No additional constraints.

### CheckoutTaxConfig variant 4

anyOf variant 4: Declared schema CheckoutTaxConfigRequest. Whether tax is collected for a checkout session or payment link..

No additional constraints.

