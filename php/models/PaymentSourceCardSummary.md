[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCardSummary

Display details for a card payment source: brand, last four digits, issuing country, funding type, and payment method ID.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Optional | string | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. |
| `card_present` | Optional | [PaymentSourceCardPresentDetails](../models/PaymentSourceCardPresentDetails.md#paymentsourcecardpresentdetails) | Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. Card and wallet details recorded when a payment is presented on a reader. `card_present`: [field definitions](../models/PaymentSourceCardSummary.md#paymentsourcecardsummarycard_present). |
| `country` | Required | string or null | ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded, including older payments. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |
| `funding` | Required | string or null | How the card is funded. `null` when no recognized funding type was recorded. Values: `"credit"`, `"debit"`, `"prepaid"`, `null`. |
| `last4` | Optional | string | Last four digits of the card number. |
| `payment_method_id` | Optional | string | ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. |

### PaymentSourceCardSummary.card_present

Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. Card and wallet details recorded when a payment is presented on a reader.

Field definitions: [shared fields](PaymentSourceCardPresentDetailsInput.md#paymentsourcecardpresentdetailsinput).

