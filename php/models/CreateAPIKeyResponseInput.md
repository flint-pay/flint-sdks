[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateAPIKeyResponseInput

A response containing `APIKeyWithSecret` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [APIKeyWithSecretInput](../models/APIKeyWithSecretInput.md#apikeywithsecretinput) | Resource, collection, or operation result returned by this request. An API key including its `secret_key`, returned by the calls that create or issue a key. A credential used to authenticate API requests. A credential used to authenticate API requests. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

