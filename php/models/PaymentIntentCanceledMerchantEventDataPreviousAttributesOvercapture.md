[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentCanceledMerchantEventDataPreviousAttributesOvercapture

Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_capturable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The most one capture can collect. Equals capturable_money when status is unavailable. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Values: `"available"`, `"unavailable"`. |

