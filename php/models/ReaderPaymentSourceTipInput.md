[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderPaymentSourceTipInput

Tip collection settings for a payment presented on a smart reader.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Required | boolean | Show the smart reader's tip screen before the card. Not accepted on Tap to Pay readers, on an order with a requested tip, or on a payment that already carries a tip. Default: `false`. |

