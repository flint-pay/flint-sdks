[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupsCreateResponse201

A response containing `ModifierGroup` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ModifierGroup](../models/ModifierGroup.md#modifiergroup) | The modifier group returned by this operation. A group of choices that customize an item. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

