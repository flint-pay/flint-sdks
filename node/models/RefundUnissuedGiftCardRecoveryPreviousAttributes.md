[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundUnissuedGiftCardRecoveryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string or null | The order the gift card was sold on. `order_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. `order_line_item_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributesorder_line_item_id). |
| `payment_intent_id` | Optional | string or null | The payment the returned cash belongs to. Name it in the new refund. `payment_intent_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributespayment_intent_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the gift card purchase refund allocation whose cash came back after it failed. `purchase_refund_allocation_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributespurchase_refund_allocation_id). |
| `returned_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Cash that came back and funded no gift card. `returned_amount_money`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributesreturned_amount_money). |
| `settlement_allocation_id` | Optional | string or null | ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. `settlement_allocation_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributessettlement_allocation_id). |
| `source_pending_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Cash on the whole settlement allocation that pending refunds hold. `source_pending_amount_money`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributessource_pending_amount_money). |
| `source_remaining_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. `source_remaining_amount_money`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributessource_remaining_amount_money). |

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_id variant 1

anyOf variant 1: The order the gift card was sold on..

- Value shape: string. The order the gift card was sold on. The order the gift card was sold on. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order the gift card was sold on. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_line_item_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund..

- Value shape: string. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.payment_intent_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: The payment the returned cash belongs to. Name it in the new refund..

- Value shape: string. The payment the returned cash belongs to. Name it in the new refund. The payment the returned cash belongs to. Name it in the new refund. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment the returned cash belongs to. Name it in the new refund. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.purchase_refund_allocation_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the gift card purchase refund allocation whose cash came back after it failed..

- Value shape: string. ID of the gift card purchase refund allocation whose cash came back after it failed. ID of the gift card purchase refund allocation whose cash came back after it failed. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card purchase refund allocation whose cash came back after it failed. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.returned_amount_money

Cash that came back and funded no gift card.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundUnissuedGiftCardRecoveryPreviousAttributes.returned_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundUnissuedGiftCardRecoveryPreviousAttributes.returned_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Cash that came back and funded no gift card. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.returned_amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### RefundUnissuedGiftCardRecoveryPreviousAttributes.returned_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### RefundUnissuedGiftCardRecoveryPreviousAttributes.settlement_allocation_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.settlement_allocation_id variant 1

anyOf variant 1: ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive..

- Value shape: string. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. Example: `"opsa_01KEZF7C00MB3NB1V0AM09SX8T"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.settlement_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_pending_amount_money

Cash on the whole settlement allocation that pending refunds hold.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_pending_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_pending_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Cash on the whole settlement allocation that pending refunds hold. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_pending_amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_pending_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_remaining_amount_money

Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_remaining_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_remaining_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_remaining_amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### RefundUnissuedGiftCardRecoveryPreviousAttributes.source_remaining_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

