[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CardDetails

Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Required | string | Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. |
| `exp_month` | Required | integer | Format: `int32`. |
| `exp_year` | Required | integer | Format: `int32`. |
| `last4` | Required | string |  |
| `wallet` | Optional | string | The wallet the card came from. Absent for a card entered directly. |

