[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeCapPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The fixed part of the cap per payment, keyed by currency code, added to the percentage part. Omitted when no currency has one. Only USD today. `fixed_fee_currency_options`: [declared alternatives](../models/PlatformFeeCapPreviousAttributesInput.md#platformfeecappreviousattributesinputfixed_fee_currency_options). |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The maximum fee on one payment, keyed by currency code. Only USD today. `maximum_fee_currency_options`: [declared alternatives](../models/PlatformFeeCapPreviousAttributesInput.md#platformfeecappreviousattributesinputmaximum_fee_currency_options). |
| `percent` | Optional | number or null | The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. `percent`: [declared alternatives](../models/PlatformFeeCapPreviousAttributesInput.md#platformfeecappreviousattributesinputpercent). |

### PlatformFeeCapPreviousAttributesInput.fixed_fee_currency_options

### PlatformFeeCapPreviousAttributesInput.fixed_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). The fixed part of the cap per payment, keyed by currency code, added to the percentage part. Omitted when no currency has one. Only USD today. 

### PlatformFeeCapPreviousAttributesInput.fixed_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. The fixed part of the cap per payment, keyed by currency code, added to the percentage part. Omitted when no currency has one. Only USD today. 

### PlatformFeeCapPreviousAttributesInput.maximum_fee_currency_options

### PlatformFeeCapPreviousAttributesInput.maximum_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). The maximum fee on one payment, keyed by currency code. Only USD today. 

### PlatformFeeCapPreviousAttributesInput.maximum_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. The maximum fee on one payment, keyed by currency code. Only USD today. 

### PlatformFeeCapPreviousAttributesInput.percent

### PlatformFeeCapPreviousAttributesInput.percent variant 1

anyOf variant 1: The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone..

- Value shape: number. The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. 

### PlatformFeeCapPreviousAttributesInput.percent variant 2

anyOf variant 2.

- Value shape: null. The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. 

