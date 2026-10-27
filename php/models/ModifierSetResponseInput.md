[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetResponseInput

A response containing `ModifierSet` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ModifierSetInput](../models/ModifierSetInput.md#modifiersetinput) | The modifier set returned by this operation. A reusable collection of customization groups. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

