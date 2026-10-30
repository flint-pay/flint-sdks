[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentEventResourceResponse

A response containing `FulfillmentEvent` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent) | An action recorded during an order's fulfillment. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

