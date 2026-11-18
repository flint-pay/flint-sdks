[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionFeeDetail

One fee source on a payment's balance transaction, with its original charged amount and the platform fee and partner app identifiers when applicable.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | This source's share of the payment's original fee_money, in the same currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BalanceTransactionFeeDetail.md#balancetransactionfeedetailamount_money). |
| `partner_app_id` | Optional | string | The partner app that charged the platform fee. Present for platform_fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `platform_fee_id` | Optional | string | The platform fee charged on this payment. Present for platform_fee. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. |
| `type` | Required | string | Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. Values: `"flint"`, `"platform_fee"`. |

### BalanceTransactionFeeDetail.amount_money

This source's share of the payment's original fee_money, in the same currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

