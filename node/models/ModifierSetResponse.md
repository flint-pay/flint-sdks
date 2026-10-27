[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetResponse

A response containing `ModifierSet` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ModifierSet](../models/ModifierSet.md#modifierset) | The modifier set returned by this operation. A reusable collection of customization groups. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

