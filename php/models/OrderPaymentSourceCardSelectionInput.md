[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentSourceCardSelectionInput

Card options for the payment source selected on an order payment intent, including which digital wallets to offer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `digital_wallets` | Optional | Array of string | Digital wallets to offer with card: apple_pay, google_pay, or both. Omit it or send an empty list to offer card alone. Items: minLength: `1`. |

