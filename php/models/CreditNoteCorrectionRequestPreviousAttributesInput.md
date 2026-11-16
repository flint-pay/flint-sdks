[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCorrectionRequestPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. |
| `quantity` | Optional | integer or null | Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. `quantity`: [declared alternatives](../models/CreditNoteCorrectionRequestPreviousAttributesInput.md#creditnotecorrectionrequestpreviousattributesinputquantity). |
| `type` | Optional | (string or null) | quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`, `"amount"`. `type`: [declared alternatives](../models/CreditNoteCorrectionRequestPreviousAttributesInput.md#creditnotecorrectionrequestpreviousattributesinput-variant-1type), [declared alternatives](../models/CreditNoteCorrectionRequestPreviousAttributesInput.md#creditnotecorrectionrequestpreviousattributesinput-variant-2type). |

### CreditNoteCorrectionRequestPreviousAttributesInput variant 1: `type` = `"quantity"`

anyOf CreditNoteCorrectionRequestQuantityPreviousAttributes.

- Constraints for `type`: Values: `"quantity"`.

### CreditNoteCorrectionRequestPreviousAttributesInput variant 2: `type` = `"amount"`

anyOf CreditNoteCorrectionRequestAmountPreviousAttributes.

- Constraints for `type`: Values: `"amount"`.

### CreditNoteCorrectionRequestPreviousAttributesInput.quantity

### CreditNoteCorrectionRequestPreviousAttributesInput.quantity variant 1

anyOf variant 1: Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount..

- Value shape: integer. Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. Format: `int64`. 

### CreditNoteCorrectionRequestPreviousAttributesInput.quantity variant 2

anyOf variant 2.

- Value shape: null. Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. 

### CreditNoteCorrectionRequestPreviousAttributesInput variant 1.type

### CreditNoteCorrectionRequestPreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`, `"amount"`.

### CreditNoteCorrectionRequestPreviousAttributesInput variant 1.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. 

### CreditNoteCorrectionRequestPreviousAttributesInput variant 1.type variant 3

anyOf group 2 variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`.

### CreditNoteCorrectionRequestPreviousAttributesInput variant 2.type

### CreditNoteCorrectionRequestPreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`, `"amount"`.

### CreditNoteCorrectionRequestPreviousAttributesInput variant 2.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. 

### CreditNoteCorrectionRequestPreviousAttributesInput variant 2.type variant 3

anyOf group 2 variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"amount"`.

