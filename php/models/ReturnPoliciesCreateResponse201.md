[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPoliciesCreateResponse201

A response containing `ReturnPolicy` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy) | Rules governing whether and how purchased items can be returned. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

