[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentPlatformFee

The platform fee a partner app charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees, and merchant_net_money subtracts it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/PaymentIntentPlatformFee.md#paymentintentplatformfeeamount_money). |
| `partner_app_id` | Required | string | The partner app that charges the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `platform_fee_id` | Required | string | The platform fee record, which the partner app's owner reads. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee returned to the merchant so far: by refunds the partner app created with `refund_platform_fee: true`, each returned once its payment refund succeeds, and by Flint's returns of the whole application fee. 0 when nothing was returned. See Platform fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/PaymentIntentPlatformFee.md#paymentintentplatformfeerefunded_money). |

### PaymentIntentPlatformFee.amount_money

The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### PaymentIntentPlatformFee.refunded_money

The fee returned to the merchant so far: by refunds the partner app created with `refund_platform_fee: true`, each returned once its payment refund succeeds, and by Flint's returns of the whole application fee. 0 when nothing was returned. See Platform fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

