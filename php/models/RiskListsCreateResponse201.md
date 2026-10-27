[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListsCreateResponse201

A response containing `RiskList` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskList](../models/RiskList.md#risklist) | A collection of values used in payment risk rules. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

