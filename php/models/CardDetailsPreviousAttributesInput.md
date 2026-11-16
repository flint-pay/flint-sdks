[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CardDetailsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Optional | string or null | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. `brand`: [declared alternatives](../models/CardDetailsPreviousAttributesInput.md#carddetailspreviousattributesinputbrand). |
| `exp_month` | Optional | integer or null | Month the card expires, from 1 to 12. `exp_month`: [declared alternatives](../models/CardDetailsPreviousAttributesInput.md#carddetailspreviousattributesinputexp_month). |
| `exp_year` | Optional | integer or null | Four-digit year the card expires. `exp_year`: [declared alternatives](../models/CardDetailsPreviousAttributesInput.md#carddetailspreviousattributesinputexp_year). |
| `last4` | Optional | string or null | Last four digits of the card number. `last4`: [declared alternatives](../models/CardDetailsPreviousAttributesInput.md#carddetailspreviousattributesinputlast4). |
| `wallet` | Optional | string or null | The wallet the card came from. Absent for a card entered directly. Values: `"apple_pay"`, `"google_pay"`. `wallet`: [declared alternatives](../models/CardDetailsPreviousAttributesInput.md#carddetailspreviousattributesinputwallet). |

### CardDetailsPreviousAttributesInput.brand

### CardDetailsPreviousAttributesInput.brand variant 1

anyOf variant 1: The card network..

- Value shape: string. The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`.

### CardDetailsPreviousAttributesInput.brand variant 2

anyOf variant 2.

- Value shape: null. The card network. 

### CardDetailsPreviousAttributesInput.exp_month

### CardDetailsPreviousAttributesInput.exp_month variant 1

anyOf variant 1: Month the card expires, from 1 to 12..

- Value shape: integer. Month the card expires, from 1 to 12. Month the card expires, from 1 to 12. Format: `int32`. 

### CardDetailsPreviousAttributesInput.exp_month variant 2

anyOf variant 2.

- Value shape: null. Month the card expires, from 1 to 12. 

### CardDetailsPreviousAttributesInput.exp_year

### CardDetailsPreviousAttributesInput.exp_year variant 1

anyOf variant 1: Four-digit year the card expires..

- Value shape: integer. Four-digit year the card expires. Four-digit year the card expires. Format: `int32`. 

### CardDetailsPreviousAttributesInput.exp_year variant 2

anyOf variant 2.

- Value shape: null. Four-digit year the card expires. 

### CardDetailsPreviousAttributesInput.last4

### CardDetailsPreviousAttributesInput.last4 variant 1

anyOf variant 1: Last four digits of the card number..

- Value shape: string. Last four digits of the card number. 

### CardDetailsPreviousAttributesInput.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the card number. 

### CardDetailsPreviousAttributesInput.wallet

### CardDetailsPreviousAttributesInput.wallet variant 1

anyOf variant 1: The wallet the card came from. Absent for a card entered directly..

- Value shape: string. The wallet the card came from. Absent for a card entered directly. Values: `"apple_pay"`, `"google_pay"`.

### CardDetailsPreviousAttributesInput.wallet variant 2

anyOf variant 2.

- Value shape: null. The wallet the card came from. Absent for a card entered directly. 

