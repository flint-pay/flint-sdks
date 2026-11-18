[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceTipPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed tip amount, when the tip is set as an amount. `amount_money`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesamount_money). |
| `description` | Optional | string or null | Optional description that stays on the tip for your reporting. `description`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesdescription). |
| `name` | Optional | string or null | Optional name that stays on the tip for your reporting. `name`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesname). |
| `percent` | Optional | number or null | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. `percent`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributespercent). |

### InvoiceTipPreviousAttributes.amount_money

Fixed tip amount, when the tip is set as an amount.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceTipPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceTipPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fixed tip amount, when the tip is set as an amount. 

### InvoiceTipPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceTipPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceTipPreviousAttributes.description

### InvoiceTipPreviousAttributes.description variant 1

anyOf variant 1: Optional description that stays on the tip for your reporting..

- Value shape: string. Optional description that stays on the tip for your reporting. 

### InvoiceTipPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Optional description that stays on the tip for your reporting. 

### InvoiceTipPreviousAttributes.name

### InvoiceTipPreviousAttributes.name variant 1

anyOf variant 1: Optional name that stays on the tip for your reporting..

- Value shape: string. Optional name that stays on the tip for your reporting. 

### InvoiceTipPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Optional name that stays on the tip for your reporting. 

### InvoiceTipPreviousAttributes.percent

### InvoiceTipPreviousAttributes.percent variant 1

anyOf variant 1: Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent..

- Value shape: number. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: `0.0001`. 

### InvoiceTipPreviousAttributes.percent variant 2

anyOf variant 2.

- Value shape: null. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. 

