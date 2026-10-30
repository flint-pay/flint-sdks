[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainResponse

A response containing `CustomDomain` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomDomain](../models/CustomDomain.md#customdomain) | A merchant hostname for hosted checkout or customer account pages. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

