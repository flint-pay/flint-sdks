[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeviceResponse

A response containing `Device` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Device](../models/Device.md#device) | A device registered to the merchant account by hardware fingerprint, optionally assigned to a location. Registering a device doesn't change how payments are accepted. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

