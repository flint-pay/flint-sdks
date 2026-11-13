[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentOvercapture

Whether one capture can collect more than the authorization.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_capturable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The most one capture can collect. Equals capturable_money when status is unavailable. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `maximum_capturable_money`: [field definitions](../models/PaymentIntentOvercapture.md#paymentintentovercapturemaximum_capturable_money). |
| `status` | Required | string | Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Values: `"available"`, `"unavailable"`. |

### PaymentIntentOvercapture.maximum_capturable_money

The most one capture can collect. Equals capturable_money when status is unavailable. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

