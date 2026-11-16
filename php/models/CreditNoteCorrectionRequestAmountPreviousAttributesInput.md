[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCorrectionRequestAmountPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. |
| `type` | Optional | string or null | quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"amount"`. `type`: [declared alternatives](../models/CreditNoteCorrectionRequestAmountPreviousAttributesInput.md#creditnotecorrectionrequestamountpreviousattributesinputtype). |

### CreditNoteCorrectionRequestAmountPreviousAttributesInput.type

### CreditNoteCorrectionRequestAmountPreviousAttributesInput.type variant 1

anyOf variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"amount"`.

### CreditNoteCorrectionRequestAmountPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. 

