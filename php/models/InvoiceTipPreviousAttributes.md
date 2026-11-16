[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceTipPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed tip amount, when the tip is set as an amount. |
| `description` | Optional | string or null | Optional description that stays on the tip for your reporting. `description`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesdescription). |
| `name` | Optional | string or null | Optional name that stays on the tip for your reporting. `name`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesname). |
| `percent` | Optional | number or null | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. `percent`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributespercent). |

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

