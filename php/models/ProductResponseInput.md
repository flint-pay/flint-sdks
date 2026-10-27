[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductResponseInput

A response containing `Product` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ProductInput](../models/ProductInput.md#productinput) | The requested product data. An item offered in the merchant's catalog. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

