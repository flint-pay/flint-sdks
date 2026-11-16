[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefundPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string or null | ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. `order_charge_id`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order that owns this tax breakdown and its line item or charge, when present. `order_id`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributesorder_id). |
| `tax_breakdown_id` | Optional | string or null | ID of the tax breakdown (one jurisdiction's tax) this entry reverses. `tax_breakdown_id`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributestax_breakdown_id). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax reversed for this breakdown. `tax_money`: [declared alternatives](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributestax_money). |

### RefundTaxBreakdownRefundPreviousAttributes.order_charge_id

### RefundTaxBreakdownRefundPreviousAttributes.order_charge_id variant 1

anyOf variant 1: ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`..

- Value shape: string. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### RefundTaxBreakdownRefundPreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. 

### RefundTaxBreakdownRefundPreviousAttributes.order_id

### RefundTaxBreakdownRefundPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order that owns this tax breakdown and its line item or charge, when present..

- Value shape: string. ID of the order that owns this tax breakdown and its line item or charge, when present. ID of the order that owns this tax breakdown and its line item or charge, when present. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundTaxBreakdownRefundPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that owns this tax breakdown and its line item or charge, when present. 

### RefundTaxBreakdownRefundPreviousAttributes.tax_breakdown_id

### RefundTaxBreakdownRefundPreviousAttributes.tax_breakdown_id variant 1

anyOf variant 1: ID of the tax breakdown (one jurisdiction's tax) this entry reverses..

- Value shape: string. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. 

### RefundTaxBreakdownRefundPreviousAttributes.tax_breakdown_id variant 2

anyOf variant 2.

- Value shape: null. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. 

### RefundTaxBreakdownRefundPreviousAttributes.tax_money

Tax reversed for this breakdown.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundTaxBreakdownRefundPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundTaxBreakdownRefundPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tax reversed for this breakdown. 

### RefundTaxBreakdownRefundPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### RefundTaxBreakdownRefundPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

