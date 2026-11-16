[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceTipPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Fixed tip amount, when the tip is set as an amount. |
| `description` | Optional | string or null | Optional description that stays on the tip for your reporting. `description`: [declared alternatives](../models/InvoiceTipPreviousAttributesInput.md#invoicetippreviousattributesinputdescription). |
| `name` | Optional | string or null | Optional name that stays on the tip for your reporting. `name`: [declared alternatives](../models/InvoiceTipPreviousAttributesInput.md#invoicetippreviousattributesinputname). |
| `percent` | Optional | number or null | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. `percent`: [declared alternatives](../models/InvoiceTipPreviousAttributesInput.md#invoicetippreviousattributesinputpercent). |

### InvoiceTipPreviousAttributesInput.description

### InvoiceTipPreviousAttributesInput.description variant 1

anyOf variant 1: Optional description that stays on the tip for your reporting..

- Value shape: string. Optional description that stays on the tip for your reporting. 

### InvoiceTipPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Optional description that stays on the tip for your reporting. 

### InvoiceTipPreviousAttributesInput.name

### InvoiceTipPreviousAttributesInput.name variant 1

anyOf variant 1: Optional name that stays on the tip for your reporting..

- Value shape: string. Optional name that stays on the tip for your reporting. 

### InvoiceTipPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Optional name that stays on the tip for your reporting. 

### InvoiceTipPreviousAttributesInput.percent

### InvoiceTipPreviousAttributesInput.percent variant 1

anyOf variant 1: Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent..

- Value shape: number. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: `0.0001`. 

### InvoiceTipPreviousAttributesInput.percent variant 2

anyOf variant 2.

- Value shape: null. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. 

