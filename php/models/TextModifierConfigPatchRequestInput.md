[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TextModifierConfigPatchRequestInput

Send only text fields to change. Omitted fields keep their stored values. null clears min_length or max_length. An empty object is invalid. The merged configuration is validated.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_length` | Optional | integer or null | Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Omit it to keep the current limit; send null to clear it. Format: `int32`. minimum: `1`. maximum: `500`. |
| `min_length` | Optional | integer or null | Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Omit it to keep the current minimum; send null to clear it. Format: `int32`. minimum: `0`. |
| `multiline` | Optional | boolean | Whether the buyer's text can include line breaks. |
| `required` | Optional | boolean | Whether buyers must enter text for this group. A modifier set's required override takes precedence. |

