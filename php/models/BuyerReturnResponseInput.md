[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnResponseInput

A response containing `BuyerReturn` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerReturnInput](../models/BuyerReturnInput.md#buyerreturninput) | Resource, collection, or operation result returned by this request. A request to send purchased items back. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

