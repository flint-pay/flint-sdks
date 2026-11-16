[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentOvercapturePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_capturable_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The most one capture can collect. Equals capturable_money when status is unavailable. |
| `status` | Optional | string or null | Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Values: `"available"`, `"unavailable"`. `status`: [declared alternatives](../models/PaymentIntentOvercapturePreviousAttributesInput.md#paymentintentovercapturepreviousattributesinputstatus). |

### PaymentIntentOvercapturePreviousAttributesInput.status

### PaymentIntentOvercapturePreviousAttributesInput.status variant 1

anyOf variant 1: Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable..

- Value shape: string. Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Values: `"available"`, `"unavailable"`.

### PaymentIntentOvercapturePreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. 

