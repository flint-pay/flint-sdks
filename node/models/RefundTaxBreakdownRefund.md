[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefund

The tax refunded for one tax breakdown on an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string | ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_id` | Required | string | ID of the order that owns this tax breakdown and its line item or charge, when present. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `tax_breakdown_id` | Required | string | ID of the tax breakdown (one jurisdiction's tax) this entry reverses. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax reversed for this breakdown. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefundtax_money). |

### RefundTaxBreakdownRefund.tax_money

Tax reversed for this breakdown. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

