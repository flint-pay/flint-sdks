[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApiKeysCreateResponse201

A response containing `APIKeyWithSecret` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [APIKeyWithSecret](../models/APIKeyWithSecret.md#apikeywithsecret) | An API key including its `secret_key`, returned by the calls that create or issue a key. A credential used to authenticate API requests. A credential used to authenticate API requests. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

