[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LocationsListResponse200

A page of `Location` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Location](../models/Location.md#location) | `data[]`: [field definitions](../models/LocationsCreateResponse201.md#locationscreateresponse201data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### LocationsListResponse200.data[]

Field definitions: [LocationsCreateResponse201.data](../models/LocationsCreateResponse201.md#locationscreateresponse201data).

