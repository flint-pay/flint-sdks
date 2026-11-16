[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentOvercapturePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_capturable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The most one capture can collect. Equals capturable_money when status is unavailable. |
| `status` | Optional | string or null | Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Values: `"available"`, `"unavailable"`. `status`: [declared alternatives](../models/PaymentIntentOvercapturePreviousAttributes.md#paymentintentovercapturepreviousattributesstatus). |

### PaymentIntentOvercapturePreviousAttributes.status

### PaymentIntentOvercapturePreviousAttributes.status variant 1

anyOf variant 1: Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable..

- Value shape: string. Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Values: `"available"`, `"unavailable"`.

### PaymentIntentOvercapturePreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. 

