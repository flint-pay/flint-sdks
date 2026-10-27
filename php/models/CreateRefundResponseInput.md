[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResponseInput

A response containing `CreateRefundResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreateRefundResultInput](../models/CreateRefundResultInput.md#createrefundresultinput) | The refund created by a create refund call, with all the fields of a refund. Money returned against a collected payment. Money returned against a collected payment. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

