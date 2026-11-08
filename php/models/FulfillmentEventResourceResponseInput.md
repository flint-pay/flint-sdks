[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentEventResourceResponseInput

A response containing `FulfillmentEvent` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [FulfillmentEventInput](../models/FulfillmentEventInput.md#fulfillmenteventinput) | Resource, collection, or operation result returned by this request. An action recorded during an order's fulfillment. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

