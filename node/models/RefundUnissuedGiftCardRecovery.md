[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundUnissuedGiftCardRecovery

Details of a gift card purchase refunded before the card was issued, including the amounts recovered.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | The order the gift card was sold on. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `payment_intent_id` | Required | string | The payment the returned cash belongs to. Name it in the new refund. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `purchase_refund_allocation_id` | Required | string | ID of the gift card purchase refund allocation whose cash came back after it failed. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. |
| `returned_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Cash that came back and funded no gift card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_amount_money`: [field definitions](../models/RefundUnissuedGiftCardRecovery.md#refundunissuedgiftcardrecoveryreturned_amount_money). |
| `settlement_allocation_id` | Required | string | ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. Example: `"opsa_01KEZF7C00MB3NB1V0AM09SX8T"`. |
| `source_pending_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Cash on the whole settlement allocation that pending refunds hold. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `source_pending_amount_money`: [field definitions](../models/RefundUnissuedGiftCardRecovery.md#refundunissuedgiftcardrecoverysource_pending_amount_money). |
| `source_remaining_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `source_remaining_amount_money`: [field definitions](../models/RefundUnissuedGiftCardRecovery.md#refundunissuedgiftcardrecoverysource_remaining_amount_money). |

### RefundUnissuedGiftCardRecovery.returned_amount_money

Cash that came back and funded no gift card. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundUnissuedGiftCardRecovery.source_pending_amount_money

Cash on the whole settlement allocation that pending refunds hold. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### RefundUnissuedGiftCardRecovery.source_remaining_amount_money

Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

