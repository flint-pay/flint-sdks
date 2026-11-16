[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentPlatformFeePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. `amount_money`: [declared alternatives](../models/PaymentIntentPlatformFeePreviousAttributes.md#paymentintentplatformfeepreviousattributesamount_money). |
| `partner_app_id` | Optional | string or null | The partner app that charges the fee. `partner_app_id`: [declared alternatives](../models/PaymentIntentPlatformFeePreviousAttributes.md#paymentintentplatformfeepreviousattributespartner_app_id). |
| `platform_fee_id` | Optional | string or null | The platform fee record, which the partner app's owner reads. `platform_fee_id`: [declared alternatives](../models/PaymentIntentPlatformFeePreviousAttributes.md#paymentintentplatformfeepreviousattributesplatform_fee_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee debited from the platform for returns so far, including refunds the partner app created with `refund_platform_fee: true` and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. See Platform fees. `refunded_money`: [declared alternatives](../models/PaymentIntentPlatformFeePreviousAttributes.md#paymentintentplatformfeepreviousattributesrefunded_money). |

### PaymentIntentPlatformFeePreviousAttributes.amount_money

The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentIntentPlatformFeePreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentIntentPlatformFeePreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. 

### PaymentIntentPlatformFeePreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PaymentIntentPlatformFeePreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PaymentIntentPlatformFeePreviousAttributes.partner_app_id

### PaymentIntentPlatformFeePreviousAttributes.partner_app_id variant 1

anyOf variant 1: The partner app that charges the fee..

- Value shape: string. The partner app that charges the fee. The partner app that charges the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PaymentIntentPlatformFeePreviousAttributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app that charges the fee. 

### PaymentIntentPlatformFeePreviousAttributes.platform_fee_id

### PaymentIntentPlatformFeePreviousAttributes.platform_fee_id variant 1

anyOf variant 1: The platform fee record, which the partner app's owner reads..

- Value shape: string. The platform fee record, which the partner app's owner reads. The platform fee record, which the partner app's owner reads. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. 

### PaymentIntentPlatformFeePreviousAttributes.platform_fee_id variant 2

anyOf variant 2.

- Value shape: null. The platform fee record, which the partner app's owner reads. 

### PaymentIntentPlatformFeePreviousAttributes.refunded_money

The fee debited from the platform for returns so far, including refunds the partner app created with `refund_platform_fee: true` and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. See Platform fees.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentIntentPlatformFeePreviousAttributes.refunded_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentIntentPlatformFeePreviousAttributes.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fee debited from the platform for returns so far, including refunds the partner app created with `refund_platform_fee: true` and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. See Platform fees. 

### PaymentIntentPlatformFeePreviousAttributes.refunded_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PaymentIntentPlatformFeePreviousAttributes.refunded_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

