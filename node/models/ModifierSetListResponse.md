[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetListResponse

A page of `ModifierSet` objects.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ModifierSet](../models/ModifierSet.md#modifierset) | Modifier sets matching the request filters for this page. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string | Pass this token as page_token to read the next page with the same filters. Absent when there are no more results. |
| `request_id` | Optional | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

