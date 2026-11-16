[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ach_debit` | Optional | [PaymentSourceAchDebitSummaryPreviousAttributes](../models/PaymentSourceAchDebitSummaryPreviousAttributes.md#paymentsourceachdebitsummarypreviousattributes) or null | Bank account details. Present when type is ach_debit. |
| `card` | Optional | [PaymentSourceCardSummaryPreviousAttributes](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributes) or null | Card details. Present when type is card. `card`: [declared alternatives](../models/PaymentSourceSummaryPreviousAttributes.md#paymentsourcesummarypreviousattributescard). |
| `type` | Optional | string or null | Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`. `type`: [declared alternatives](../models/PaymentSourceSummaryPreviousAttributes.md#paymentsourcesummarypreviousattributestype). |

### PaymentSourceSummaryPreviousAttributes.card

Card details. Present when type is card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Conditional | string or null | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. `brand`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributesbrand). |
| `card_present` | Conditional | [PaymentSourceCardPresentDetailsPreviousAttributes](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributes) or null | Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. `card_present`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributescard_present). |
| `last4` | Conditional | string or null | Last four digits of the card number. `last4`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributeslast4). |
| `payment_method_id` | Conditional | string or null | ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. `payment_method_id`: [declared alternatives](../models/PaymentSourceSummaryPreviousAttributes.md#paymentsourcesummarypreviousattributescard-variant-1payment_method_id). |

### PaymentSourceSummaryPreviousAttributes.card variant 1

anyOf PaymentSourceCardSummaryPreviousAttributes.

- Optional: `brand`, `card_present`, `last4`, `payment_method_id`.

### PaymentSourceSummaryPreviousAttributes.card variant 2

anyOf variant 2.

- Undeclared: `brand`, `card_present`, `last4`, `payment_method_id`.
- Value shape: null. Card details. Present when type is card. 

### PaymentSourceSummaryPreviousAttributes.card variant 1.brand

Declared alternatives: [PaymentSourceCardSummaryPreviousAttributes.brand](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributesbrand).

### PaymentSourceSummaryPreviousAttributes.card variant 1.card_present

Declared alternatives: [PaymentSourceCardSummaryPreviousAttributes.card_present](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributescard_present).

### PaymentSourceSummaryPreviousAttributes.card variant 1.last4

Declared alternatives: [PaymentSourceCardSummaryPreviousAttributes.last4](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributeslast4).

### PaymentSourceSummaryPreviousAttributes.card variant 1.payment_method_id

### PaymentSourceSummaryPreviousAttributes.card variant 1.payment_method_id variant 1

anyOf variant 1: ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader..

- Value shape: string. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### PaymentSourceSummaryPreviousAttributes.card variant 1.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. 

### PaymentSourceSummaryPreviousAttributes.type

### PaymentSourceSummaryPreviousAttributes.type variant 1

anyOf variant 1: Funding-method family. Wallet payment options use card because their underlying funding source is a card..

- Value shape: string. Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`.

### PaymentSourceSummaryPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Funding-method family. Wallet payment options use card because their underlying funding source is a card. 

