[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialResponse

A response containing `PartnerAppCredential` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential) | Resource, collection, or operation result returned by this request. An immutable partner app credential, including its authentication status and usage timestamps. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

