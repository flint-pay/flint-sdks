[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupResponse

A response containing `ModifierGroup` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ModifierGroup](../models/ModifierGroup.md#modifiergroup) | The modifier group returned by this operation. A group of choices that customize an item. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

