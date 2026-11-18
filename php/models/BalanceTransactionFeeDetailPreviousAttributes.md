[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionFeeDetailPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | This source's share of the payment's original fee_money, in the same currency. |
| `partner_app_id` | Optional | string or null | The partner app that charged the platform fee. Present for platform_fee. `partner_app_id`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributespartner_app_id). |
| `platform_fee_id` | Optional | string or null | The platform fee charged on this payment. Present for platform_fee. `platform_fee_id`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesplatform_fee_id). |
| `type` | Optional | string or null | Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. Values: `"flint"`, `"platform_fee"`. `type`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributestype). |

### BalanceTransactionFeeDetailPreviousAttributes.partner_app_id

### BalanceTransactionFeeDetailPreviousAttributes.partner_app_id variant 1

anyOf variant 1: The partner app that charged the platform fee. Present for platform_fee..

- Value shape: string. The partner app that charged the platform fee. Present for platform_fee. 

### BalanceTransactionFeeDetailPreviousAttributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app that charged the platform fee. Present for platform_fee. 

### BalanceTransactionFeeDetailPreviousAttributes.platform_fee_id

### BalanceTransactionFeeDetailPreviousAttributes.platform_fee_id variant 1

anyOf variant 1: The platform fee charged on this payment. Present for platform_fee..

- Value shape: string. The platform fee charged on this payment. Present for platform_fee. 

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

