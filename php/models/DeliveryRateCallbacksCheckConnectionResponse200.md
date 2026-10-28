[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbacksCheckConnectionResponse200

A response containing `DeliveryRateCallbackConnectionCheck` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryRateCallbackConnectionCheck](../models/DeliveryRateCallbackConnectionCheck.md#deliveryratecallbackconnectioncheck) | Result of checking the connection to a delivery rate callback endpoint, with its status, latency, HTTP status code, and failure category if it failed. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

