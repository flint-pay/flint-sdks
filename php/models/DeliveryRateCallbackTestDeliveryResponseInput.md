[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackTestDeliveryResponseInput

A response containing `DeliveryRateCallbackTestDelivery` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryRateCallbackTestDeliveryInput](../models/DeliveryRateCallbackTestDeliveryInput.md#deliveryratecallbacktestdeliveryinput) | Result of sending a test request to a delivery rate callback, with its status, latency, HTTP status code, and failure category if it failed. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

