[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPoliciesGetRevisionResponse200

A response containing `ReturnPolicyRevision` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnPolicyRevision](../models/ReturnPolicyRevision.md#returnpolicyrevision) | A saved revision of a return policy. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

