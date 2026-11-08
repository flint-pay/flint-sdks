[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CardDetails

Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Required | string | The card network. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. |
| `exp_month` | Required | integer | Month the card expires, from 1 to 12. Format: `int32`. |
| `exp_year` | Required | integer | Four-digit year the card expires. Format: `int32`. |
| `last4` | Required | string | Last four digits of the card number. |
| `wallet` | Optional | string | The wallet the card came from. Absent for a card entered directly. Values: `"apple_pay"`, `"google_pay"`. |

