[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionFeeDetailPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | This source's share of the payment's original fee_money, in the same currency. `amount_money`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money). |
| `partner_app_id` | Optional | string or null | The partner app that charged the platform fee. Present for platform_fee. `partner_app_id`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributespartner_app_id). |
| `platform_fee_id` | Optional | string or null | The platform fee charged on this payment. Present for platform_fee. `platform_fee_id`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesplatform_fee_id). |
| `type` | Optional | string or null | Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. Values: `"flint"`, `"platform_fee"`. `type`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributestype). |

### BalanceTransactionFeeDetailPreviousAttributes.amount_money

This source's share of the payment's original fee_money, in the same currency.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. This source's share of the payment's original fee_money, in the same currency. 

### BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount

### BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount variant 1

anyOf variant 1: Amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. 

### BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount variant 2

anyOf variant 2.

- Value shape: null. Amount in the currency's minor unit, such as cents for USD. 

### BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency

### BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency variant 1

anyOf variant 1: ISO 4217 currency code for this amount..

- Value shape: string. ISO 4217 currency code for this amount. ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. 

### BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 currency code for this amount. 

### BalanceTransactionFeeDetailPreviousAttributes.partner_app_id

### BalanceTransactionFeeDetailPreviousAttributes.partner_app_id variant 1

anyOf variant 1: The partner app that charged the platform fee. Present for platform_fee..

- Value shape: string. The partner app that charged the platform fee. Present for platform_fee. The partner app that charged the platform fee. Present for platform_fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### BalanceTransactionFeeDetailPreviousAttributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app that charged the platform fee. Present for platform_fee. 

### BalanceTransactionFeeDetailPreviousAttributes.platform_fee_id

### BalanceTransactionFeeDetailPreviousAttributes.platform_fee_id variant 1

anyOf variant 1: The platform fee charged on this payment. Present for platform_fee..

- Value shape: string. The platform fee charged on this payment. Present for platform_fee. The platform fee charged on this payment. Present for platform_fee. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. 

### BalanceTransactionFeeDetailPreviousAttributes.platform_fee_id variant 2

anyOf variant 2.

- Value shape: null. The platform fee charged on this payment. Present for platform_fee. 

### BalanceTransactionFeeDetailPreviousAttributes.type

### BalanceTransactionFeeDetailPreviousAttributes.type variant 1

anyOf variant 1: Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee..

- Value shape: string. Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. Values: `"flint"`, `"platform_fee"`.

### BalanceTransactionFeeDetailPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. 

