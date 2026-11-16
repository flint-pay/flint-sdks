[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundUnissuedGiftCardRecoveryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string or null | The order the gift card was sold on. `order_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributesInput.md#refundunissuedgiftcardrecoverypreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. `order_line_item_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributesInput.md#refundunissuedgiftcardrecoverypreviousattributesinputorder_line_item_id). |
| `payment_intent_id` | Optional | string or null | The payment the returned cash belongs to. Name it in the new refund. `payment_intent_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributesInput.md#refundunissuedgiftcardrecoverypreviousattributesinputpayment_intent_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the gift card purchase refund allocation whose cash came back after it failed. `purchase_refund_allocation_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributesInput.md#refundunissuedgiftcardrecoverypreviousattributesinputpurchase_refund_allocation_id). |
| `returned_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Cash that came back and funded no gift card. |
| `settlement_allocation_id` | Optional | string or null | ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. `settlement_allocation_id`: [declared alternatives](../models/RefundUnissuedGiftCardRecoveryPreviousAttributesInput.md#refundunissuedgiftcardrecoverypreviousattributesinputsettlement_allocation_id). |
| `source_pending_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Cash on the whole settlement allocation that pending refunds hold. |
| `source_remaining_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. |

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.order_id

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.order_id variant 1

anyOf variant 1: The order the gift card was sold on..

- Value shape: string. The order the gift card was sold on. The order the gift card was sold on. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. The order the gift card was sold on. 

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.order_line_item_id

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund..

- Value shape: string. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. 

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.payment_intent_id

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.payment_intent_id variant 1

anyOf variant 1: The payment the returned cash belongs to. Name it in the new refund..

- Value shape: string. The payment the returned cash belongs to. Name it in the new refund. The payment the returned cash belongs to. Name it in the new refund. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment the returned cash belongs to. Name it in the new refund. 

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.purchase_refund_allocation_id

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the gift card purchase refund allocation whose cash came back after it failed..

- Value shape: string. ID of the gift card purchase refund allocation whose cash came back after it failed. ID of the gift card purchase refund allocation whose cash came back after it failed. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card purchase refund allocation whose cash came back after it failed. 

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.settlement_allocation_id

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.settlement_allocation_id variant 1

anyOf variant 1: ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive..

- Value shape: string. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. Example: `"opsa_01KEZF7C00MB3NB1V0AM09SX8T"`. 

### RefundUnissuedGiftCardRecoveryPreviousAttributesInput.settlement_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. 

