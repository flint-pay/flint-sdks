[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceSummary

A summary of the payment source used for a payment, by funding-method family, with card or bank account display details.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ach_debit` | Optional | [PaymentSourceAchDebitSummary](../models/PaymentSourceAchDebitSummary.md#paymentsourceachdebitsummary) | Bank account details. Present when type is ach_debit. Display details for a bank account payment source: account type, bank name, and last four digits. |
| `card` | Optional | [PaymentSourceCardSummary](../models/PaymentSourceCardSummary.md#paymentsourcecardsummary) | Card details. Present when type is card. Display details for a card payment source: brand, last four digits, and payment method ID. `card`: [field definitions](../models/PaymentSourceSummary.md#paymentsourcesummarycard). |
| `type` | Required | string | Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`. |

### PaymentSourceSummary.card

Card details. Present when type is card. Display details for a card payment source: brand, last four digits, and payment method ID.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Optional | string | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. |
| `card_present` | Optional | [PaymentSourceCardPresentDetails](../models/PaymentSourceCardPresentDetails.md#paymentsourcecardpresentdetails) | Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. Card and wallet details recorded when a payment is presented on a reader. `card_present`: [field definitions](../models/PaymentSourceCardSummary.md#paymentsourcecardsummarycard_present). |
| `last4` | Optional | string | Last four digits of the card number. |
| `payment_method_id` | Optional | string | ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |

### PaymentSourceSummary.card.card_present

Field definitions: [PaymentSourceCardSummary.card_present](../models/PaymentSourceCardSummary.md#paymentsourcecardsummarycard_present).

