[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CardDetailsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Optional | string or null | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. `brand`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributesbrand). |
| `exp_month` | Optional | integer or null | Month the card expires, from 1 to 12. `exp_month`: [declared alternatives](../models/CardDetailsPreviousAttributes.md#carddetailspreviousattributesexp_month). |
| `exp_year` | Optional | integer or null | Four-digit year the card expires. `exp_year`: [declared alternatives](../models/CardDetailsPreviousAttributes.md#carddetailspreviousattributesexp_year). |
| `last4` | Optional | string or null | Last four digits of the card number. `last4`: [declared alternatives](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributeslast4). |
| `wallet` | Optional | string or null | The wallet the card came from. Absent for a card entered directly. Values: `"apple_pay"`, `"google_pay"`. `wallet`: [declared alternatives](../models/CardDetailsPreviousAttributes.md#carddetailspreviousattributeswallet). |

### CardDetailsPreviousAttributes.brand

Declared alternatives: [PaymentSourceCardSummaryPreviousAttributes.brand](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributesbrand).

### CardDetailsPreviousAttributes.exp_month

### CardDetailsPreviousAttributes.exp_month variant 1

anyOf variant 1: Month the card expires, from 1 to 12..

- Value shape: integer. Month the card expires, from 1 to 12. Month the card expires, from 1 to 12. Format: `int32`. 

### CardDetailsPreviousAttributes.exp_month variant 2

anyOf variant 2.

- Value shape: null. Month the card expires, from 1 to 12. 

### CardDetailsPreviousAttributes.exp_year

### CardDetailsPreviousAttributes.exp_year variant 1

anyOf variant 1: Four-digit year the card expires..

- Value shape: integer. Four-digit year the card expires. Four-digit year the card expires. Format: `int32`. 

### CardDetailsPreviousAttributes.exp_year variant 2

anyOf variant 2.

- Value shape: null. Four-digit year the card expires. 

### CardDetailsPreviousAttributes.last4

Declared alternatives: [PaymentSourceCardSummaryPreviousAttributes.last4](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributeslast4).

### CardDetailsPreviousAttributes.wallet

### CardDetailsPreviousAttributes.wallet variant 1

anyOf variant 1: The wallet the card came from. Absent for a card entered directly..

- Value shape: string. The wallet the card came from. Absent for a card entered directly. Values: `"apple_pay"`, `"google_pay"`.

### CardDetailsPreviousAttributes.wallet variant 2

anyOf variant 2.

- Value shape: null. The wallet the card came from. Absent for a card entered directly. 

