[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCorrectionRequestQuantityPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. `quantity`: [declared alternatives](../models/CreditNoteCorrectionRequestPreviousAttributes.md#creditnotecorrectionrequestpreviousattributesquantity). |
| `type` | Optional | string or null | quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`. `type`: [declared alternatives](../models/CreditNoteCorrectionRequestQuantityPreviousAttributes.md#creditnotecorrectionrequestquantitypreviousattributestype). |

### CreditNoteCorrectionRequestQuantityPreviousAttributes.quantity

Declared alternatives: [CreditNoteCorrectionRequestPreviousAttributes.quantity](../models/CreditNoteCorrectionRequestPreviousAttributes.md#creditnotecorrectionrequestpreviousattributesquantity).

### CreditNoteCorrectionRequestQuantityPreviousAttributes.type

### CreditNoteCorrectionRequestQuantityPreviousAttributes.type variant 1

anyOf variant 1: quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive..

- Value shape: string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`.

### CreditNoteCorrectionRequestQuantityPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. 

