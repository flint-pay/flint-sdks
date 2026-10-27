[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeFlintWalletCard

An independent card saved with Flint that the current buyer can set up at this store. Store copies have their own consent and lifecycle.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Required | string | Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. |
| `exp_month` | Required | integer | Format: `int32`. |
| `exp_year` | Required | integer | Format: `int32`. |
| `id` | Required | string | Opaque handle for this card at this store. Handles differ across stores and cannot be used at another store. |
| `last4` | Required | string |  |
| `store_payment_method_id` | Required | string or null | The store's independent card copy, or null when this store does not hold a copy. A pending copy still needs confirmation before use. |

