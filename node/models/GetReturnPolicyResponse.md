[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GetReturnPolicyResponse

Declared schema CreateReturnPolicyResponse: A response containing `ReturnPolicy` data.

Declared schema DeleteReturnPolicyResponse: A response containing `ReturnPolicy` data.

Declared schema GetReturnPolicyResponse: A response containing `ReturnPolicy` data.

Declared schema PublishReturnPolicyRevisionResponse: A response containing `ReturnPolicy` data.

Declared schema UpdateReturnPolicyResponse: A response containing `ReturnPolicy` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy) | Rules governing whether and how purchased items can be returned. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

