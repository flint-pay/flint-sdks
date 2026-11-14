[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SignedWebhookEndpointDeliveryResponseInput

A response containing `SignedWebhookEndpointDelivery` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SignedWebhookEndpointDeliveryInput](../models/SignedWebhookEndpointDeliveryInput.md#signedwebhookendpointdeliveryinput) | Resource, collection, or operation result returned by this request. A transient signed delivery for the caller's sandbox endpoint. Forward body bytes and headers unchanged; this is not a persisted delivery or HTTP dispatch. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

