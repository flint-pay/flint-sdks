[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCardSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Optional | string or null | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. `brand`: [declared alternatives](../models/CardDetailsPreviousAttributes.md#carddetailspreviousattributesbrand). |
| `card_present` | Optional | [PaymentSourceCardPresentDetailsPreviousAttributes](../models/PaymentSourceCardPresentDetailsPreviousAttributes.md#paymentsourcecardpresentdetailspreviousattributes) or null | Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. |
| `last4` | Optional | string or null | Last four digits of the card number. `last4`: [declared alternatives](../models/CardDetailsPreviousAttributes.md#carddetailspreviousattributeslast4). |
| `payment_method_id` | Optional | string or null | ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. `payment_method_id`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributespayment_method_id). |

### PaymentSourceCardSummaryPreviousAttributes.brand

Declared alternatives: [CardDetailsPreviousAttributes.brand](../models/CardDetailsPreviousAttributes.md#carddetailspreviousattributesbrand).

### PaymentSourceCardSummaryPreviousAttributes.last4

Declared alternatives: [CardDetailsPreviousAttributes.last4](../models/CardDetailsPreviousAttributes.md#carddetailspreviousattributeslast4).

### PaymentSourceCardSummaryPreviousAttributes.payment_method_id

### PaymentSourceCardSummaryPreviousAttributes.payment_method_id variant 1

anyOf variant 1: ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader..

- Value shape: string. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### PaymentSourceCardSummaryPreviousAttributes.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. 

