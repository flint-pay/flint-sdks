[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnsCreateInspectionResponse201

A response containing `ReturnInspection` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnInspection](../models/ReturnInspection.md#returninspection) | An assessment of the condition of returned items. `data`: [field definitions](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_inspections). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReturnsCreateInspectionResponse201.data

Field definitions: [ReturnsCancelResponse200.data.return_inspections[]](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_inspections).

