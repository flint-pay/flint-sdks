[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionListRegistrationsResponse200

A page of `TaxRegistration` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [TaxRegistration](../models/TaxRegistration.md#taxregistration) | `data[]`: [field definitions](../models/TaxConnectionCreateRegistrationResponse201.md#taxconnectioncreateregistrationresponse201data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TaxConnectionListRegistrationsResponse200.data[]

Field definitions: [TaxConnectionCreateRegistrationResponse201.data](../models/TaxConnectionCreateRegistrationResponse201.md#taxconnectioncreateregistrationresponse201data).

