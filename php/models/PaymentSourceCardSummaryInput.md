[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCardSummaryInput

Display details for a card payment source: brand, last four digits, and payment method ID.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Optional | string | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. |
| `card_present` | Optional | [PaymentSourceCardPresentDetailsInput](../models/PaymentSourceCardPresentDetailsInput.md#paymentsourcecardpresentdetailsinput) | Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. Card and wallet details recorded when a payment is presented on a reader. |
| `last4` | Optional | string | Last four digits of the card number. |
| `payment_method_id` | Optional | string | ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |

