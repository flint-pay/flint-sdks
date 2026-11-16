[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentPlatformFeePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. |
| `partner_app_id` | Optional | string or null | The partner app that charges the fee. `partner_app_id`: [declared alternatives](../models/PaymentIntentPlatformFeePreviousAttributes.md#paymentintentplatformfeepreviousattributespartner_app_id). |
| `platform_fee_id` | Optional | string or null | The platform fee record, which the partner app's owner reads. `platform_fee_id`: [declared alternatives](../models/PaymentIntentPlatformFeePreviousAttributes.md#paymentintentplatformfeepreviousattributesplatform_fee_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee debited from the platform for returns so far, including refunds the partner app created with `refund_platform_fee: true` and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. See Platform fees. |

### PaymentIntentPlatformFeePreviousAttributes.partner_app_id

### PaymentIntentPlatformFeePreviousAttributes.partner_app_id variant 1

anyOf variant 1: The partner app that charges the fee..

- Value shape: string. The partner app that charges the fee. 

### PaymentIntentPlatformFeePreviousAttributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app that charges the fee. 

### PaymentIntentPlatformFeePreviousAttributes.platform_fee_id

### PaymentIntentPlatformFeePreviousAttributes.platform_fee_id variant 1

anyOf variant 1: The platform fee record, which the partner app's owner reads..

- Value shape: string. The platform fee record, which the partner app's owner reads. 

### PaymentIntentPlatformFeePreviousAttributes.platform_fee_id variant 2

anyOf variant 2.

- Value shape: null. The platform fee record, which the partner app's owner reads. 

