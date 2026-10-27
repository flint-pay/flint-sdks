[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomersListResponse200

A page of `Customer` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Customer](../models/Customer.md#customer) | `data[]`: [field definitions](../models/CustomersCreateResponse200.md#customerscreateresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomersListResponse200.data[]

Field definitions: [CustomersCreateResponse200.data](../models/CustomersCreateResponse200.md#customerscreateresponse200data).

