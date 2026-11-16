[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundUnissuedGiftCardRecoveryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string or null | The order the gift card was sold on. `order_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. `order_line_item_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributesorder_line_item_id). |
| `payment_intent_id` | Optional | string or null | The payment the returned cash belongs to. Name it in the new refund. `payment_intent_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributespayment_intent_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the gift card purchase refund allocation whose cash came back after it failed. `purchase_refund_allocation_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributespurchase_refund_allocation_id). |
| `returned_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Cash that came back and funded no gift card. |
| `settlement_allocation_id` | Optional | string or null | ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. `settlement_allocation_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributessettlement_allocation_id). |
| `source_pending_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Cash on the whole settlement allocation that pending refunds hold. |
| `source_remaining_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. |

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_id variant 1

anyOf variant 1: The order the gift card was sold on..

- Value shape: string. The order the gift card was sold on. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order the gift card was sold on. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_line_item_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund..

- Value shape: string. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.payment_intent_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: The payment the returned cash belongs to. Name it in the new refund..

- Value shape: string. The payment the returned cash belongs to. Name it in the new refund. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment the returned cash belongs to. Name it in the new refund. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.purchase_refund_allocation_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the gift card purchase refund allocation whose cash came back after it failed..

- Value shape: string. ID of the gift card purchase refund allocation whose cash came back after it failed. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card purchase refund allocation whose cash came back after it failed. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.settlement_allocation_id

### RefundUnissuedGiftCardRecoveryPreviousAttributes.settlement_allocation_id variant 1

anyOf variant 1: ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive..

- Value shape: string. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. 

### RefundUnissuedGiftCardRecoveryPreviousAttributes.settlement_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. 

