[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SettingsResponse

A response containing `Settings` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Settings](../models/Settings.md#settings) | The settings for one scope (organization, merchant, location, or device), grouped by area such as checkout, tax, receipts, and tipping. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

